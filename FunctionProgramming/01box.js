const Box=x=>({
  map:f=>Box(f(x)),
  fold:f=>f(x),
  inspect:()=>`Box(${x})`
})

const nextCharForNumberString=str=>
  Box(str)
  .map(s=>s.trim())
  .map(r=>new Number(r))
  .map(i=>i+1)
  .map(i=>String.fromCharCode(i))
  .fold(c=>c.toLowerCase())

const result=nextCharForNumberString('  64 ')