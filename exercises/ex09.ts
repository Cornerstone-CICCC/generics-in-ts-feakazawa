// Define a generic class named `Stack` that implements a
// stack data structure for elements of type `T`.
// Implement methods for pushing and popping elements
// from the stack.
// Create test cases using various types for elements pushed
// and popped from the stack.

class Stack<T> {
  items: T[] = [];

  pushItem(item: T) {
    this.items.push(item);
  }

  popItem() {
    this.items.pop();
  }

  getItem() {
    console.log(this.items);
  }
}

//add strings
const stack1 = new Stack();
stack1.pushItem("apple");
stack1.pushItem("orange");
stack1.pushItem("potato");
stack1.popItem();
// stack1.getItem();

//add numbers
const stack2 = new Stack();
stack2.pushItem(67);
stack2.pushItem(12);
stack2.pushItem(33);
stack2.popItem();
stack2.pushItem(99);
// stack2.getItem();

//add boolean
const stack3 = new Stack();
stack3.pushItem(true);
stack3.pushItem(false);
stack3.popItem();
stack3.pushItem(false);
// stack3.getItem();

//add array
const stack4 = new Stack();
stack4.pushItem([1, 2, 3]);
stack4.pushItem([4, 5, 6]);
stack4.popItem();
stack4.pushItem([7, 8, 9]);
stack4.pushItem([2, 4, 6]);
// stack4.getItem();

//add object
const stack5 = new Stack();
stack5.pushItem({ name: "Silvia" });
stack5.pushItem({ name: "Jordana" });
stack5.popItem();
stack5.pushItem({ name: "Selma" });
stack5.getItem();
