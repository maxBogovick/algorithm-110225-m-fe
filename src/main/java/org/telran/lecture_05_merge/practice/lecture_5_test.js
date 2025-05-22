import {
  splitArray,
  recursiveSplit,
  merge,
  mergeSort,
  mergeSort2
} from './lecture_5.js';
import { logTestCase, logTestCaseWithException } from '../../../../utils/common_util.js';

function testSplitArray() {
  console.log("🧩 Тестирование splitArray:");

  logTestCase("Массив [1, 2, 3, 4] -> [[1, 2], [3, 4]]", splitArray([1, 2, 3, 4]), [[1, 2], [3, 4]]);
  logTestCase("Массив [1, 2, 3] -> [[1], [2, 3]]", splitArray([1, 2, 3]), [[1], [2, 3]]);
  logTestCase("Массив [1] -> [[], [1]]", splitArray([1]), [[], [1]]);
  logTestCase("Массив [] -> [[], []]", splitArray([]), [[], []]);

  console.log();
}

function testRecursiveSplit() {
  console.log("🔁 Тестирование recursiveSplit:");

  logTestCase("Массив [1] -> [1]", recursiveSplit([1]), [1]);
  logTestCase("Массив [1, 2] -> [[1], [2]]", recursiveSplit([1, 2]), [[1], [2]]);
  logTestCase("Массив [1, 2, 3, 4] -> [[[1], [2]], [[3], [4]]]", recursiveSplit([1, 2, 3, 4]), [[[1], [2]], [[3], [4]]]);
  logTestCase("Массив [1, 2, 3] -> [[1], [[2], [3]]]", recursiveSplit([1, 2, 3]), [[1], [[2], [3]]]);

  console.log();
}

function testMerge() {
  console.log("🔗 Тестирование merge:");

  logTestCase("[1, 3], [2, 4] -> [1, 2, 3, 4]", merge([1, 3], [2, 4]), [1, 2, 3, 4]);
  logTestCase("[], [1, 2] -> [1, 2]", merge([], [1, 2]), [1, 2]);
  logTestCase("[5, 6], [] -> [5, 6]", merge([5, 6], []), [5, 6]);
  logTestCase("[1, 2], [3, 4, 5] -> [1, 2, 3, 4, 5]", merge([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5]);

  console.log();
}

function testMergeSort() {
  console.log("📊 Тестирование mergeSort:");

  logTestCase("[4, 2, 5, 1, 3] -> [1, 2, 3, 4, 5]", mergeSort([4, 2, 5, 1, 3]), [1, 2, 3, 4, 5]);
  logTestCase("[1] -> [1]", mergeSort([1]), [1]);
  logTestCase("[] -> []", mergeSort([]), []);
  logTestCase("[5, 4, 3, 2, 1] -> [1, 2, 3, 4, 5]", mergeSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);

  console.log();
}

function testMergeSort2() {
  console.log("📊 Тестирование mergeSort2:");

  logTestCase("[4, 2, 5, 1, 3] -> [1, 2, 3, 4, 5]", mergeSort2([4, 2, 5, 1, 3]), [1, 2, 3, 4, 5]);
  logTestCase("[1] -> [1]", mergeSort2([1]), [1]);
  logTestCase("[] -> []", mergeSort2([]), []);
  logTestCase("[9, 7, 5, 3, 1] -> [1, 3, 5, 7, 9]", mergeSort2([9, 7, 5, 3, 1]), [1, 3, 5, 7, 9]);

  console.log();
}

// Запуск всех тестов
testSplitArray();
testRecursiveSplit();
testMerge();
testMergeSort();
testMergeSort2();
