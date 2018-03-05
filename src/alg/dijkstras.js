/* helpers */
const getTables = (graph) => {
  const graphKeys = Object.keys(graph);
  const startName = graphKeys[0];

  const costs = graphKeys.reduce((acc, item) =>
    (acc[item] || item === `${startName}` ? acc :
      { ...acc, [item]: Infinity }), { ...graph[startName] });

  const parents = Object.keys(costs).reduce((acc, item) => {
    const newItem = costs[item] === Infinity ? null : `${startName}`;
    return { ...acc, [item]: newItem };
  }, {});

  return { costs, parents };
};

const findLowestCostNode = (itCosts, processed) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  Object.keys(itCosts).forEach((node) => {
    const cost = itCosts[node];
    if (cost < lowestCost && (!processed.includes(node))) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  });

  return lowestCostNode;
};

/* cycle */
const dijkstras = (graph) => {
  const { costs, parents } = getTables(graph);

  // const costs = {
  //   a: 6,
  //   b: 2,
  //   fin: Infinity,
  // };

  // const parents = {
  //   a: 'start',
  //   b: 'start',
  //   fin: null,
  // };
  let processed = [];

  const findLowestCostNode2 = (itCosts) => {
    let lowestCost = Infinity;
    let lowestCostNode = null;
    const keys = Object.keys(itCosts);

    for (let i = 0; i < keys.length; i += 1) {
      const cost = itCosts[keys[i]];
      if (cost < lowestCost && (!processed.includes(keys[i]))) {
        lowestCost = cost;
        lowestCostNode = keys[i];
      }
    }
    return lowestCostNode;
  };

  let node = findLowestCostNode2(costs);

  while (node !== null) {
    const cost = costs[node];
    const neighbors = graph[node];

    Object.keys(neighbors).forEach((n) => { // eslint-disable-line
      const newCost = cost + neighbors[n];
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    });

    processed = processed.concat(node);
    node = findLowestCostNode2(costs);
  }

  return { costs, parents };
};

/* recursion */
const dijkstrasR = (graph) => {
  const { costs, parents } = getTables(graph);
  const initialNode = findLowestCostNode(costs, []);

  const iter = (node, processed) => {
    if (node === null) {
      return;
    }
    const cost = costs[node];
    const neighbors = graph[node];

    Object.keys(neighbors).forEach((n) => {
      const newCost = cost + neighbors[n];
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    });

    const newProcessed = processed.concat(node);
    const newNode = findLowestCostNode(costs, newProcessed);
    iter(newNode, newProcessed);
  };

  iter(initialNode, []);
  return { costs, parents };
};

export { dijkstras, dijkstrasR };
