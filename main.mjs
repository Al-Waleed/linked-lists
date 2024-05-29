import linkedList from "./linkedList.mjs"; 

const firstList = linkedList();
const secondList = linkedList();

firstList.append("Item1");
firstList.append("Item2");
firstList.append("Item3");
firstList.append("Item4");
firstList.append("Item5");
firstList.prepend("Item0")
console.log(firstList.find("Item0"));
console.log(firstList.find("Item5"));
console.log(firstList.tail())
console.log(firstList.at(2))
console.log(firstList.contains("Item1"));
console.log(firstList.contains("Item"));
console.log(firstList.insertAt("Inserted", 0));
console.log(firstList.insertAt("Inserted", 6));
console.log(firstList.removeAt(0));
console.log(firstList.removeAt(5));
console.log(firstList.pop());
console.log(firstList.pop());
console.log(firstList.pop());
console.log(firstList.pop());
console.log(firstList.pop());
console.log(firstList.toString());

console.log("-------------------------------")

secondList.append("secondItem1");
secondList.append("secondItem2");
secondList.append("secondItem3");
secondList.append("secondItem4");
secondList.append("secondItem5");
console.log(secondList.toString());