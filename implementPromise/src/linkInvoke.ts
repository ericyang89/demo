class Test1{

  then(){
    console.log(6666);
    return this;
  }
}

var a= new Test1();
a.then().then().then()

class Test2{
  then(){
    console.log(77777);
    return new Test2();
  }
}

var b= new Test2();
b.then().then().then()