// https://github.com/vividbytes/implementing-promises

enum State {
  pending = 1,
  resolved = 2,
  rejected = 3
}
const noop = () => undefined;
type Props = {
  _state: any;
  _resolveArr: any;
};

let index = 0;
export default class MyPromise<Props> {
  constructor(exclutor) {
    this._state = State.pending;
    this._resolveArr = [];
    this._rejectArr = [];
    this._data;
    this._reason;

    try {
      exclutor(this._resolve.bind(this), this._reject.bind(this));
    } catch (err) {
      this._reject(err);
    }

    return this;
  }
  _state: any;
  _resolveArr;
  _rejectArr;
  _data;
  _reason;

  static resolve = val => {
    if (val instanceof MyPromise) {
      return val;
    }
    return new MyPromise(res => {
      res(val);
    });
  };

  _runResolveHandler = () => {
    while (this._resolveArr.length > 0) {
      const item = this._resolveArr.shift();
      let functionResult: any;
      try {
        functionResult = item.handler(this._data);
      } catch (error) {
        item.promise._reject(error);
        continue;
      }

      if (functionResult !== null && functionResult instanceof MyPromise) {
        functionResult
          .then((val: any) => {
            item.promise._resolve(val);
          })
          .catch((reason: any) => {
            item.promise._reject(reason);
          });
      } else {
        item.promise._resolve(functionResult);
      }
    }
  };

  _runRejectHandler = () => {
    while (this._rejectArr.length > 0) {
      const item = this._rejectArr.shift();
      let functionResult: any;

      if (item.handler === noop) {
        continue;
      }

      try {
        functionResult = item.handler(this._reason);
      } catch (error) {
        item.promise._reject(error);
        continue;
      }

      if (functionResult !== null && functionResult instanceof MyPromise) {
        functionResult
          .then((val: any) => {
            item.promise._resolve(val);
          })
          .catch((reason: any) => {
            item.promise._reject(reason);
          });
      } else {
        //激活下一个 promise
        item.promise._resolve(functionResult);
      }
    }
  };

  _resolve = (val: any) => {
    if (this._state === State.pending) {
      this._state = State.resolved;
      this._data = val;
      this._runResolveHandler();
    }
  };

  _reject = (reason: any) => {
    if (this._state === State.pending) {
      this._state = State.rejected;
      this._reason = reason;
      this._runRejectHandler();

      // 触发下一个 promise 的 reject
      while (this._resolveArr.length > 0) {
        const item = this._resolveArr.shift();
        item.promise._reject(this._reason);
      }
    }
  };

  then = (resolver: any, rejector: any = noop) => {
    // 返回一个新的pormise
    const newPromise = new MyPromise(() => {});

    this._resolveArr.push({ handler: resolver, promise: newPromise });
    this._rejectArr.push({ handler: rejector, promise: newPromise });

    if (this._state === State.resolved) {
      this._runResolveHandler();
    }

    if (this._state === State.rejected) {
      newPromise._reject(this._reason);
    }

    return newPromise;
  };

  catch = (rejector: any) => {
    // 返回一个新的pormise
    const newPromise = new MyPromise(() => {});

    this._rejectArr.push({ handler: rejector, promise: newPromise });

    if (this._state === State.rejected) {
      this._runRejectHandler();
    }

    return newPromise;
  };
}
