// semigroup: a thing can concat and return the same time
const Sum=x=>({
  x,
  concat:({x:y})=>Sum(x+y),
  inspact:()=>`Sum(${x})`
})

Sum.empty=()=>Sum(0)

const All=x=>({
  x,
  concat:({x:y})=>All(x&&y),
  inspact:()=>`All(${x})`
})

All.empty=()=>All(true)

const First=x=>({x,
concat:()=>First(x),
inspact:()=>`First(${x})`
})

First.empty  //nop, not exist

//monoids a thing concat x,the result is the thing. x is monoids  like 0 for Plus; true for All