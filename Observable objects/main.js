const App = new Seer({
  title: 'Game of Thrones',
  firstName: 'Jon',
  lastName: 'Snow',
  age: 25
})

// To subscribe and react to changes made to the reactive App object:
App.observe('firstName', () => console.log(App.data.firstName))
App.observe('lastName', () => console.log(App.data.lastName))

// To trigger the above callbacks simply change the values like this:
App.data.firstName = 'Sansa'
App.data.lastName = 'Stark'

// First we need to get the node that we want to keep updating.
const h1Node = document.querySelector('h1')

function syncNode (node, obj, property) {
  // Initialize the h1’s textContent value with the observed object’s property value
  node.textContent = obj[property]

  // Start observing the property using our Seer instance App.observe method.
  App.observe(property, value => node.textContent = obj[property] || '')
}

syncNode(h1Node, App.data, 'title')

setInterval(function(){
  App.data.title = 'Sansa'+new Date().getTime()
},3000);