const personIsSeller = name => name[name.length - 1] === 'm';

const breadthSearch = (graph, name) => {
  let searchQueue = graph[name];
  const searched = [];

  while (searchQueue.length) {
    const person = searchQueue.shift();
    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      }
      searchQueue = searchQueue.concat(graph[person]);

      searched.push(person);
    }
  }
  return false;
};

/* recursion */
const isSeller = name => name[name.length - 1] === 'm';

const breadthSearchR = (graph, name) => {
  const iter = (waited, visited) => {
    if (waited.length === 0) {
      return false;
    }

    const [head, ...rest] = waited;
    if (visited.has(head)) { // visited.find(item => item === head)
      return iter(rest, visited);
    }
    if (isSeller(head)) {
      console.log(`${head} is a mango seller!`);
      return true;
    }

    visited.add(head); // visited.push(head);
    const personFriends = graph[head];
    return iter([...rest, ...personFriends], visited);
  };

  return iter(graph[name], new Set()); // []
};

export { breadthSearch, breadthSearchR };
