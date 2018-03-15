function Router(opts) {

  // 兼容 有 new 和 没有new 的情况
  if (!(this instanceof Router)) {
    return new Router(opts);
  }

  this.opts = opts || {};
  this.methods = this.opts.methods || [
    'HEAD',
    'OPTIONS',
    'GET',
    'PUT',
    'PATCH',
    'POST',
    'DELETE'
  ];

  

  this.params = {};
  this.stack = [];
};

new Router()