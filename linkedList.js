import node from "./node";

export default function linkedList() {
  let list = {
    head: null,
  };

  const head = () => {
    return list.head;
  };

  const tail = () => {
    let pointer = head();
    // to keep pointing to the next pointer until its the last node
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    return pointer;
  };

  const append = (value) => {
    let pointer = head();
    // to add the node to the head in case the list is empty
    if (pointer === null) {
      list.head = node(value);
    } else {
      // to keep pointing the next item until its the last item
      while (pointer.next !== null) {
        pointer = pointer.next;
      }
      if (pointer.next === null) {
        //!!i think this if isn't necessary ill get back to it later
        pointer.next = node(value);
      }
    }
  };

  const prepend = (value) => {
    list.head = node(value, list.head);
  };

  const size = () => {
    let pointer = list.head;
    let total = 0;
    // in case the pointer(head) is empty return 0
    if (pointer === null) {
      return total;
    } else {
      // add 1 to the total before the while loop because in the loop it stops adding to the total before reaching the last value
      total += 1;
      while (pointer.next !== null) {
        console.log;
        pointer = pointer.next;
        total += 1;
      }
      return total;
    }
  };

  const at = (index) => {
    let pointer = head();
    let counter = 0;
    // to return the first item on the list in case index = 0
    if (counter === index) {
      return pointer;
      // to check if the entered number is larger than the list's length
    } else if (index > size()) {
      return "the list is not that long";
    } else {
      // keep going to the next pointer and adding 1 to the counter until it matches the index number
      while (counter < index) {
        pointer = pointer.next;
        counter += 1;
      }
      return pointer;
    }
  };

  const pop = () => {
    let pointer = head();
    // to check if the list is empty or not
    if (pointer === null) {
      return "The list is already empty";
      // to check if the list only has 1 item
    } else if (pointer.next === null) {
      list.head = null;
      // keep pointing to the next pointer until we reach the one before the last so we can delete the next item which is the last
    } else {
      while (pointer.next.next !== null) {
        pointer = pointer.next;
      }
      if (pointer.next.next === null) {
        // at this point pointer refers to the node second to last -- and pointer.next refers to the last item
        pointer.next = null;
      }
    }
  };

  return {
    head,
    tail,
    append,
    prepend,
    size,
    at,
    pop
  };
}

const list = linkedList();
