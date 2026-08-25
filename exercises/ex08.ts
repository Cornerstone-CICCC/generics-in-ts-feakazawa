// Create a generic dictionary class named `Dictionary`
// that allows associating keys of type `K` with values of
// type `V`.
// Implement methods for adding, retrieving, and deleting
// key-value pairs.
// Demonstrate the usage of this class with different key and
// value types.

class Dictionary<K, V> {
  items = new Map<K, V>();

  addPair(key: K, value: V): void {
    this.items.set(key, value);
  }

  getPair() {
    const keysArray = Array.from(this.items.keys());

    for (let item of keysArray) {
      console.log(`key: ${item}, value: ${this.items.get(item)}`);
    }
  }

  deletePair(key: K) {
    this.items.delete(key);
  }
}

//pair: [name: string, role: string]
const dict1 = new Dictionary();
dict1.addPair("Fernanda", "student");
dict1.addPair("Miu", "student");
dict1.addPair("Anna", "teacher");
dict1.deletePair("Miu");
// dict1.getPair();

//pair: [vegetable: string, isFruit: boolean]
const dict2 = new Dictionary();
dict2.addPair("apple", true);
dict2.addPair("orange", true);
dict2.addPair("melon", true);
dict2.addPair("lettuce", false);
dict2.addPair("carrot", false);
dict2.deletePair("lettuce");
dict2.deletePair("carrot");
// dict2.getPair();

//pair: [product: string, price: number]
const dict3 = new Dictionary();
dict3.addPair("tv", 3500);
dict3.addPair("iphone17", 700);
dict3.deletePair("iphone17");
dict3.addPair("laptop", 1550);
// dict3.getPair();

//pair: [age: number, isEven: boolean]
const dict4 = new Dictionary();
dict4.addPair(23, false);
dict4.deletePair(23);
dict4.addPair(18, true);
dict4.addPair(55, false);
dict4.getPair();
