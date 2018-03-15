// const Either= Right || Left

const Right=x=>({
  map:f=>Right(f(x)),
  fold:(f,g)=>g(x),
  inspect:()=>`Right(${x})`
})
const Left=x=>({
  map:f=>Left(x),
  fold:(f,g)=>f(x),
  inspect:()=>`Left(${x})`
})

const fromNullable=x=>x!=null?Right(x):Left(null)

const findColor=name=>fromNullable({red:"#ff4444",blue:'#3b5998',yellow:'#fff68f'}[name])

const result1=findColor('blues').map(x=>x.slice(1)).fold(()=>'error',x=>x.toUpperCase())
const result2=findColor('blue').map(x=>x.slice(1)).fold(()=>'error',x=>x.toUpperCase())
console.log(result1)
console.log(result2)