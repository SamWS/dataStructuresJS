
function LinkedList() {
  this.head = null
  this.tail = null
}

function Node(value, nextNode, prevNode) {
  this.value = value
  this.nextNode = nextNode
  this.prevNode = prevNode
}

LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value, this.head, null)
  if (!this.head) {
    this.tail = newNode
  } else {
    this.head.prevNode = newNode
  }
  this.head = newNode
}

LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value, null, this.tail)
  if (!this.tail) {
    this.head = newNode
  } else {
    this.tail.nextNode = newNode
  }
  this.tail = newNode
}

LinkedList.prototype.removeHead = function() {
  if (!this.head) { return null }
  let val = this.head.value
  this.head = this.head.nextNode
  if (this.head) {
    this.head.prevNode = null
  } else {
    this.tail = null
  }
  return val
}

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null
  let val = this.tail.value
  this.tail = this.tail.prevNode
  if (this.tail) {
    this.tail.nextNode = null
  } else {
    this.head = null
  }
  return val
}

LinkedList.prototype.search = function(searchVal) {
  let currentNode = this.head
  while (currentNode) {
    if (currentNode.value === searchVal) return currentNode
    currentNode = currentNode.nextNode
  }
  return null
}

LinkedList.prototype.indexOf = function() {

}

let myLL = new LinkedList()
myLL.addToTail(10)
myLL.addToTail(20)
myLL.addToTail(30)

myLL.addToHead(100)
myLL.addToHead(500)
// console.log(myLL.head.nextNode)
// console.log(myLL.tail.prevNode)
// let ll = new LinkedList()
// ll.addToHead(100)
// ll.addToHead(200)
// ll.addToHead(300)

// console.log(ll)
