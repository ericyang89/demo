import MyPromise from "./index";

// 1
test("executor function is called immediately", function() {
  var string;

  new MyPromise(function() {
    string = "foo";
  });

  expect(string).toBe("foo");

},500);

// 2
it("resolution handler is called when promise is resolved", function(done) {
  var testString = "foo";

  var promise = new MyPromise(function(resolve) {
    setTimeout(function() {
      resolve(testString);
    }, 20);
  });

  promise.then(function(string) {
    expect(string).toBe(testString);
    done();
  });
},500);

// // 3
// it("promise supports many resolution handlers", function(done) {
//   var testString = "foo";

//   var promise = new MyPromise(function(resolve) {
//     setTimeout(function() {
//       resolve(testString);
//     }, 20);
//   });

//   promise.then(function(string) {
//     expect(string).toBe(testString);
//   });

//   promise.then(function(string) {
//     expect(string).toBe(testString);
//     done();
//   });
// },500);

// // 4
// it("resolution handlers can be chained", function(done) {
//   var testString = "foo";

//   var promise = new MyPromise(function(resolve) {
//     setTimeout(function() {
//       resolve();
//     }, 20);
//   });

//   promise
//     .then(function() {
//       return new MyPromise(function(resolve) {
//         setTimeout(function() {
//           resolve(testString);
//         }, 20);
//       });
//     })
//     .then(function(string) {
//       expect(string).toBe(testString);
//       done();
//     });
// },500);

// // 5
// it("chaining works with non-promise return values", function(done) {
//   var testString = "foo";

//   var promise = new MyPromise(function(resolve) {
//     setTimeout(function() {
//       resolve();
//     }, 20);
//   });

//   promise
//     .then(function() {
//       return testString;
//     })
//     .then(function(string) {
//       expect(string).toBe(testString);
//       done();
//     });
// },500);

// // 6
// it("resolution handlers can be attached when promise is resolved", function(done) {
//   var testString = "foo";

//   var promise = new MyPromise(function(resolve) {
//     setTimeout(function() {
//       resolve(testString);
//     }, 20);
//   });

//   setTimeout(function() {
//     promise.then(function(value) {
//       expect(value).toBe(testString);
//       done();
//     });
//   }, 200);

//   // promise.then(function() {
//   //   setTimeout(function() {
//   //     promise.then(function(value) {
//   //       expect(value).toBe(testString);
//   //       done();
//   //     });
//   //   }, 200);
//   // });

// },500);

// // 7
// it("calling resolve second time has no effect", function(done) {
//   var testString = "foo";
//   var testString2 = "bar";

//   var promise = new MyPromise(function(resolve) {
//     setTimeout(function() {
//       resolve(testString);
//       resolve(testString2);
//     }, 20);
//   });

//   promise.then(function(value) {
//     expect(value).toBe(testString);

//     setTimeout(function() {
//       promise.then(function(value) {
//         expect(value).toBe(testString);
//         done();
//       });
//     }, 20);
//   });
// },500);

// // 8
// it("rejection handler is called when promise is rejected", function(done) {
//   var testError = new Error("Something went wrong");

//   var promise = new MyPromise(function(resolve, reject) {
//     setTimeout(function() {
//       reject(testError);
//     }, 20);
//   });

//   promise.catch(function(value) {
//     expect(value).toBe(testError);
//     done();
//   });
// },500);

// // 9
// it("rejections are passed downstream", function(done) {
//   var testError = 'eeeee'
//   // new Error("Something went wrong");

//   var promise = new MyPromise(function(resolve, reject) {
//     setTimeout(function() {
//       reject(testError);
//     }, 20);
//   });

//   const p2=  promise
//     .then(function() {
//       return new MyPromise(function(resolve) {
//         setTimeout(function() {
//           resolve(testError);
//         }, 20);
//       });
//     });

//     p2.catch(function(value) {
//       expect(value).toBe(testError);
//       done();
//     });
// },500);

// // 10
// it("rejecting promises returned from resolution handlers are caught properly", function(done) {
//   var testError = new Error("Something went wrong");

//   var promise = new MyPromise(function(resolve) {
//     setTimeout(function() {
//       resolve();
//     }, 20);
//   });

//   promise
//     .then(function() {
//       return new MyPromise(function(resolve, reject) {
//         setTimeout(function() {
//           reject(testError);
//         }, 20);
//       });
//     })
//     .catch(function(value) {
//       expect(value).toBe(testError);
//       done();
//     });
// },500);

// // 11
// test("rejection handlers catch synchronous errors in resolution handlers", function(done) {
//   var testError = new Error("Something went wrong");

//   var promise = new MyPromise(function(resolve) {
//     setTimeout(function() {
//       resolve();
//     }, 20);
//   });

//   promise
//     .then(function() {
//       throw testError;
//     })
//     .catch(function(value) {
//       expect(value).toBe(testError);
//       done();
//     });
// },500);

// it("rejection handlers catch synchronous errors in the executor function", function(done) {
//   var testError = new Error("Something went wrong");

//   var promise = new MyPromise(function() {
//     throw testError;
//   });

//   promise
//     .then(function() {
//       return new MyPromise(function(resolve) {
//         setTimeout(function() {
//           resolve(testError);
//         }, 20);
//       });
//     })
//     .catch(function(value) {
//       expect(value).toBe(testError);
//       done();
//     });
// },500);

// test("rejection handlers catch synchronous erros", function(done) {
//   var testError = new Error("Something went wrong");

//   var promise = new MyPromise(function(resolve) {
//     setTimeout(function() {
//       resolve();
//     }, 20);
//   });

//   promise
//     .then(function() {
//       throw new Error("some Error");
//     })
//     .catch(function() {
//       throw testError;
//     })
//     .catch(function(value) {
//       expect(value).toBe(testError);
//       done();
//     });
// },500);

// it('chaining works after "catch"', function(done) {
//   var testString = "foo";

//   var promise = new MyPromise(function(resolve) {
//     setTimeout(function() {
//       resolve();
//     }, 20);
//   });

//   promise
//     .then(function() {
//       throw new Error("some Error");
//     })
//     .catch(function() {
//       return new MyPromise(function(resolve) {
//         setTimeout(function() {
//           resolve(testString);
//         }, 20);
//       });
//     })
//     .then(function(value) {
//       expect(value).toBe(testString);
//       done();
//     });
// },500);

// it("rejecting promises returned from rejection handlers are caught properly", function(done) {
//   var testError = new Error("Something went wrong");

//   var promise = new MyPromise(function(resolve) {
//     setTimeout(function() {
//       resolve();
//     }, 20);
//   });

//   promise
//     .then(function() {
//       throw new Error("some Error");
//     })
//     .catch(function() {
//       return new MyPromise(function(resolve, reject) {
//         setTimeout(function() {
//           reject(testError);
//         }, 20);
//       });
//     })
//     .catch(function(value) {
//       expect(value).toBe(testError);
//       done();
//     });
// },500);

// it("second argument in then is treated as a rejection handler", function(done) {
//   var testError = new Error("Something went wrong");

//   var promise = new MyPromise(function(resolve, reject) {
//     setTimeout(function() {
//       reject(testError);
//     }, 20);
//   });

//   promise.then(
//     function() {},
//     function(error) {
//       expect(error).toBe(testError);
//       done();
//       return undefined;
//     }
//   );
// },500);

// it("second argument in then is attached to the promise then is called on", function(done) {
//   var testError = new Error("Something went wrong");
//   var didRun = false;

//   var promise = new MyPromise(function(resolve) {
//     setTimeout(function() {
//       resolve();
//     }, 20);
//   });

//   promise
//     .then(
//       function() {
//         return new MyPromise(function(resolve, reject) {
//           setTimeout(function() {
//             reject(testError);
//           }, 20);
//         });
//       },
//       function() {
//         didRun = true;
//       }
//     )
//     .catch(function(error) {
//       expect(error).toBe(testError);
//       expect(didRun).toBe(false);
//       done();
//     });
// },500);
