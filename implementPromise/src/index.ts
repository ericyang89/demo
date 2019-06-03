const noop=()=>{}
export default class MyPromise{
  constructor(exclutor){
    this._resolveArray=[];
    exclutor(this._resolve.bind(this),this._reject)
  }
  _resolve(val){
    while(this._resolveArray.length>0){
      const item=this._resolveArray.shift();
      item(val);
    }
  }
  _reject(){}
  _resolveArray:any[];
  then(onFullfilled:any,onRejected=noop){
    this._resolveArray.push(onFullfilled)
  }
  catch(onRejected:any){

  }
}
