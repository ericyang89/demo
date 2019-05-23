import { catchClause } from "@babel/types";

enum Status {
  pending = "pending",
  rejected = "rejected",
  resolved = "resolved"
}
const noop = () => {};
let index = 0;

export default class MyPromise {
  constructor(exclutor) {
    this.value;
    this.reason;
    this.status = Status.pending;
    this._resolveArray = [];
    this._rejectArray = [];
    this._name = index++;

    try {
      exclutor(this._reslove.bind(this), this._reject.bind(this));
    } catch (err) {
      this._reject(err);
    }
  }
  public value: any;
  public reason: any;
  public status: Status;
  private _resolveArray: any[];
  private _rejectArray: any[];
  private _name: number;

  _runResolveArray() {
    while (this._resolveArray.length > 0) {
      const item = this._resolveArray.shift();

      if (noop === item.handle) {
        continue;
      }

      let result;
      try {
        result = item.handle(this.value);
      } catch (err) {
        item.promise._reject(err);
      }

      if (result && result instanceof MyPromise) {
        result
          .then(val => {
            item.promise._reslove(val);
          })
          .catch(err => {
            item.promise._reject(err);
          });
        continue;
      }

      if (result !== undefined) {
        this.value = result;
      }

      item.promise._reslove(this.value);
    }
  }

  _runRejectArray() {
    while (this._rejectArray.length > 0) {
      const item = this._rejectArray.shift();
      if (noop === item.handle) {
        continue;
      }
      let result;
      try {
        result = item.handle(this.reason);
      } catch (err) {
        item.promise._reject(err);
      }

      if (result && result instanceof MyPromise) {
        result
          .then(val => {
            item.promise._reslove(val);
          })
          .catch(err => {
            item.promise._reject(err);
          });
        continue;
      }

      if (result !== undefined) {
        this.reason = result;
      }
      item.promise._reslove(this.reason);
    }
  }

  _reslove(val) {
    // console.log(this._name,'resolve',this.status)
    if (this.status === Status.pending) {
      this.status = Status.resolved;
      this.value = val;
      this._runResolveArray();
    }
  }
  _reject(reason) {
    // console.log(this._name,'reject',this.status)
    if (this.status === Status.pending) {
      this.status = Status.rejected;
      this.reason = reason;
      this._runRejectArray();

      while (this._resolveArray.length > 0) {
        const item = this._resolveArray.shift();
        item.promise._reject(this.reason);
      }
    }
  }

  then(resHandle: any, rejHandle: any = noop) {
    const newPromise = new MyPromise(() => {});

    this._resolveArray.push({
      handle: resHandle,
      promise: newPromise
    });
    this._rejectArray.push({
      handle: rejHandle,
      promise: newPromise
    });

    if (this.status === Status.resolved) {
      this._runResolveArray();
    }

    if (this.status === Status.rejected) {
      newPromise._reject(this.reason);
    }

    return newPromise;
  }

  catch(rejHandle) {
    const newPromise = new MyPromise(() => {});

    this._rejectArray.push({
      handle: rejHandle,
      promise: newPromise
    });

    if (this.status === Status.rejected) {
      this._runRejectArray();
    }

    return newPromise;
  }
}
