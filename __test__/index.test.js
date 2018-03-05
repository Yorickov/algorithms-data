import bubbleSort from '../src/alg/bubble-sort';
import insertSort from '../src/alg/insert-sort';
import { binarySearch, binarySearchR } from '../src/alg/binary-search';
import { selectSort, selectSortR, selectSortL } from '../src/alg/select-sort';
import { quickSort, quickSortR } from '../src/alg/quick-sort';
import mergeSort from '../src/alg/merge-sort';
import { breadthSearch, breadthSearchR } from '../src/alg/breadth-search';
import { dijkstras, dijkstrasR } from '../src/alg/dijkstras';
import { greedy, greedyR } from '../src/alg/greedy';

const arrSearch = [2, 4, 6, 8, 10, 12];
const arrToSort = [14, 9, 2, 5, 4, 6, 8, 3, 7, 10, 1, 8, 1];
const arrSorted = [1, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 14];

const graph = {
  you: ['alice', 'bob', 'claire'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  claire: ['thom', 'jonny'],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

const graphD = {
  start: { a: 6, b: 2 },
  a: { fin: 1 },
  b: { a: 3, fin: 5 },
  fin: {},
};

const graphD2 = {
  start: { a: 5, b: 2 },
  a: { c: 4, d: 2 },
  b: { a: 8, d: 7 },
  c: { b: 1, fin: 3 },
  d: { fin: 1 },
  fin: {},
};

const graphD3 = {
  start: { a: 10 },
  a: { c: 20 },
  b: { a: 1 },
  c: { b: 1, fin: 30 },
  fin: {},
};

const statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations = {
  kone: new Set(['id', 'nv', 'ut']),
  ktwo: new Set(['wa', 'id', 'mt']),
  kthree: new Set(['or', 'nv', 'ca']),
  kfour: new Set(['nv', 'ut']),
  kfive: new Set(['ca', 'az']),
};

const dyn1 = 'fish';
const dyn2 = 'dish';

it('bubble sort', () => {
  expect(bubbleSort(arrToSort)).toEqual(arrSorted);
});

it('insertion sort', () => {
  expect(insertSort(arrToSort)).toEqual(arrSorted);
});

it('selection sort', () => {
  expect(selectSort(arrToSort)).toEqual(arrSorted);
  expect(selectSortR(arrToSort)).toEqual(arrSorted);
  expect(selectSortL(arrToSort)).toEqual(arrSorted);
});

it('binary search', () => {
  expect(binarySearch(arrSearch, 2)).toBe(0);
  expect(binarySearch(arrSearch, 12)).toBe(5);
  expect(binarySearch(arrSearch, 8)).toBe(3);
  expect(binarySearch(arrSearch, -1)).toBe(null);
  expect(binarySearchR(arrSearch, 2)).toBe(0);
  expect(binarySearchR(arrSearch, 12)).toBe(5);
  expect(binarySearchR(arrSearch, 8)).toBe(3);
  expect(binarySearchR(arrSearch, -1)).toBe(null);
});

it('quick sort', () => {
  expect(quickSort(arrToSort)).toEqual(arrSorted);
  expect(quickSortR(arrToSort)).toEqual(arrSorted);
});

it('merge sort', () => {
  expect(mergeSort(arrToSort)).toEqual(arrSorted);
});

it('breadth search', () => {
  expect(breadthSearch(graph, 'you')).toBeTruthy();
  expect(breadthSearchR(graph, 'you')).toBeTruthy();
});

it('dijkstras algoritm', () => {
  expect(dijkstras(graphD)).toEqual({
    costs: { a: 5, b: 2, fin: 6 },
    parents: { a: 'b', b: 'start', fin: 'a' },
  });
  expect(dijkstras(graphD)).toEqual({
    costs: { a: 5, b: 2, fin: 6 },
    parents: { a: 'b', b: 'start', fin: 'a' },
  });
  expect(dijkstrasR(graphD2)).toEqual({
    costs: { a: 5, b: 2, c: 9, d: 7, fin: 8 }, // eslint-disable-line
    parents: { a: 'start', b: 'start', c: 'a', d: 'a', fin: 'd' }, // eslint-disable-line
  });
  expect(dijkstrasR(graphD3)).toEqual({
    costs: { a: 10, b: 31, c: 30, fin: 60 }, // eslint-disable-line
    parents: { a: 'start', b: 'c', c: 'a', fin: 'c' }, // eslint-disable-line
  });
});

it('greedy algoritm', () => {
  expect(greedy(statesNeeded, stations)).toEqual(new Set(['kone', 'ktwo', 'kthree', 'kfive']));
  expect(greedyR(statesNeeded, stations)).toEqual(new Set(['kone', 'ktwo', 'kthree', 'kfive']));
});

