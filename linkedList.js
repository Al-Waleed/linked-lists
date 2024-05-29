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
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    return pointer;
  };

  return {
    head,
    tail,
  };
}

const list = linkedList();
