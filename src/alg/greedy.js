const greedy = (statesNeeded, stations) => {
  const finalStations = new Set();

  while (statesNeeded.size) {
    let bestStation = null;
    let statesCovered = new Set();

    const keys = Object.keys(stations);
    for (let i = 0; i < keys.length; i += 1) {
      const states = stations[keys[i]];
      const covered = new Set([...statesNeeded].filter(x => states.has(x)));
      if (covered.size > statesCovered.size) {
        bestStation = keys[i];
        statesCovered = covered;
      }
    }

    statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x))); // eslint-disable-line
    finalStations.add(bestStation);
  }

  return finalStations;
};

// Recursion
const greedyR = (statesNeeded, stations) => {
  const finalStationsInit = new Set();
  const statesNeededInit = new Set([...statesNeeded]);

  const iter = (statesNeededLoc, finalStations) => {
    if (statesNeededLoc.size <= 0) {
      return finalStations;
    }
    let bestStation = null;
    let statesCovered = new Set();

    Object.keys(stations).forEach((station) => {
      const states = stations[station];
      const covered = new Set([...statesNeededLoc].filter(x => states.has(x)));
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    });

    const newStatesNeededLoc = new Set([...statesNeededLoc].filter(x => !statesCovered.has(x)));
    finalStations.add(bestStation);
    return iter(newStatesNeededLoc, finalStations);
  };

  return iter(statesNeededInit, finalStationsInit);
};

export { greedy, greedyR };
