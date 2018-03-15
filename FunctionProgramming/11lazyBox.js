const LazyBox=g=>({
  map:f=>LazyBox(()=>f(g())),
  fold:f=>f(g()),
  inspect:()=>`LazyBox(${g})`
})

const nextCharForNumberString=fun=>
LazyBox(fun)
  .map(s=>s.trim())
  .map(r=>new Number(r))
  .map(i=>i+1)
  .map(i=>String.fromCharCode(i))
  .fold(c=>c.toLowerCase())

const result=nextCharForNumberString(()=>'  64 ')
console.log(result)