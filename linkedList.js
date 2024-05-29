import node from "./node";

export default function linkedList() {
  let list = {
    head: null,
  };

  const head = () => {
    return list.head;
  };

  return {
    head,
  };
}

const list = linkedList();
