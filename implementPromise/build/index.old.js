"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// https://github.com/vividbytes/implementing-promises
var State;

(function (State) {
  State[State["pending"] = 1] = "pending";
  State[State["resolved"] = 2] = "resolved";
  State[State["rejected"] = 3] = "rejected";
})(State || (State = {}));

const noop = () => undefined;

let index = 0;

class MyPromise {
  constructor(exclutor, name = index++) {
    this._state = State.pending;
    this._resolveArr = [];
    this._rejectArr = [];
    this._data;
    this._reason;
    this._name = name;

    try {
      exclutor(this._resolve.bind(this), this._reject.bind(this));
    } catch (err) {
      this._reject(err);
    }

    return this;
  }

  //for test
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

      let functionResult;

      try {
        functionResult = item.handler(this._data);
      } catch (error) {
        item.promise._reject(error);

        continue;
      }

      if (functionResult !== null && functionResult instanceof MyPromise) {
        functionResult.then(val => {
          item.promise._resolve(val);
        }).catch(reason => {
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

      let functionResult;

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
        functionResult.then(val => {
          item.promise._resolve(val);
        }).catch(reason => {
          item.promise._reject(reason);
        });
      } else {
        //激活下一个 promise
        item.promise._resolve(functionResult);
      }
    }
  };
  _resolve = val => {
    if (this._state === State.pending) {
      this._state = State.resolved;
      this._data = val;

      this._runResolveHandler();
    }
  };
  _reject = reason => {
    if (this._state === State.pending) {
      this._state = State.rejected;
      this._reason = reason;

      this._runRejectHandler(); // 触发下一个 promise 的 reject


      while (this._resolveArr.length > 0) {
        const item = this._resolveArr.shift();

        item.promise._reject(this._reason);
      }
    }
  };
  then = (resolver, rejector = noop) => {
    // 返回一个新的pormise
    const newPromise = new MyPromise(() => {});

    this._resolveArr.push({
      handler: resolver,
      promise: newPromise
    });

    this._rejectArr.push({
      handler: rejector,
      promise: newPromise
    });

    if (this._state === State.resolved) {
      this._runResolveHandler();
    }

    if (this._state === State.rejected) {
      newPromise._reject(this._reason);
    }

    return newPromise;
  };
  catch = rejector => {
    // 返回一个新的pormise
    const newPromise = new MyPromise(() => {});

    this._rejectArr.push({
      handler: rejector,
      promise: newPromise
    });

    if (this._state === State.rejected) {
      this._runRejectHandler();
    }

    return newPromise;
  };
}

exports.default = MyPromise;