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
      if (pointer.next === null) {//!!i think this if isn't necessary ill get back to it later
        pointer.next = node(value);
      }
    }
  };

  return {
    head,
    tail,
    append,
  };
}

const list = linkedList();
