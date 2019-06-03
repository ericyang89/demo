// https://developers.google.com/web/fundamentals/primers/promises
// 蓝线表示执行的 promise 路径，红路表示拒绝的 promise 路径。
// https://developers.google.com/web/fundamentals/primers/imgs/promise-flow.svg
asyncThing1()
  .then(function() {
    return asyncThing2();
  })
  .then(function() {
    return asyncThing3();
  })
  .catch(function(err) {
    return asyncRecovery1();
  })
  .then(
    function() {
      return asyncThing4();
    },
    function(err) {
      return asyncRecovery2();
    }
  )
  .catch(function(err) {
    console.log("Don't worry about it");
  })
  .then(function() {
    console.log("All done!");
  });
