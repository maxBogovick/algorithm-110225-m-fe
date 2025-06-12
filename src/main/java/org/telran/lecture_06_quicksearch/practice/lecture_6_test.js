import {
  swap,
  hoarePartition,
  quickSelect,
  quickSortHoare,
  finderTopNArticles
} from './lecture_6.js';
import { logTestCase, logTestCaseWithException } from '../../../../utils/common_util.js';

function testSwap() {
  console.log(" Тестирование swap:");

  const arr1 = [1, 2, 3];
  swap(arr1, 0, 2);
  logTestCase("swap([1, 2, 3], 0, 2) -> [3, 2, 1]", arr1, [3, 2, 1]);

  const arr2 = ["a", "b", "c"];
  swap(arr2, 1, 1);
  logTestCase("swap(['a', 'b', 'c'], 1, 1) -> ['a', 'b', 'c']", arr2, ["a", "b", "c"]);

  console.log();
}

function testHoarePartition() {
  console.log("Тестирование hoarePartition:");

  const arr1 = [4, 2, 7, 1, 3];
  const pivotIndex = hoarePartition(arr1, 0, arr1.length - 1, (a, b) => a - b);
  logTestCase("Разделение массива [4, 2, 7, 1, 3] -> возвращает индекс", typeof pivotIndex, "number");
  logTestCase("Проверка инварианта: все слева от pivotIndex ≤ pivot", arr1.slice(0, pivotIndex + 1).every(x => x <= arr1[pivotIndex]), true);

  console.log();
}

function testQuickSelect() {
  console.log("Тестирование quickSelect:");

  const arr1 = [10, 50, 30, 20, 40];
  const k3 = quickSelect([...arr1], 2, 0, arr1.length - 1, (a, b) => a - b);
  logTestCase("Медиана массива [10, 50, 30, 20, 40] -> 30", k3, 30);

  const arr2 = [5];
  logTestCase("Один элемент [5] -> 5", quickSelect(arr2, 0, 0, 0, (a, b) => a - b), 5);

  const arr3 = [7, 3, 1, 9, 5];
  const k0 = quickSelect([...arr3], 0, 0, arr3.length - 1, (a, b) => a - b);
  logTestCase("Минимум массива [7, 3, 1, 9, 5] -> 1", k0, 1);

  console.log();
}

function testQuickSortHoare() {
  console.log("Тестирование quickSortHoare:");

  const compare = (a, b) => a - b;

  const arr1 = [3, 1, 4, 1, 5, 9, 2];
  const expected1 = [...arr1].sort(compare);
  const test1 = [...arr1];
  quickSortHoare(test1, 0, test1.length - 1);
  logTestCase("Сортировка [3, 1, 4, 1, 5, 9, 2]", test1, expected1);

  const arr2 = [];
  const expected2 = [];
  quickSortHoare(arr2, 0, arr2.length - 1);
  logTestCase("Сортировка пустого массива []", arr2, expected2);

  const arr3 = [42];
  const expected3 = [42];
  quickSortHoare(arr3, 0, arr3.length - 1);
  logTestCase("Сортировка массива из одного элемента [42]", arr3, expected3);

  const arr4 = [9, 8, 7, 6, 5];
  const expected4 = [...arr4].sort(compare);
  quickSortHoare(arr4, 0, arr4.length - 1);
  logTestCase("Сортировка убывающего массива [9, 8, 7, 6, 5]", arr4, expected4);

  const arr5 = [1, 2, 3, 4, 5];
  const expected5 = [1, 2, 3, 4, 5];
  quickSortHoare(arr5, 0, arr5.length - 1);
  logTestCase("Сортировка уже отсортированного массива", arr5, expected5);

  console.log();
}

function testFinderTopNArticles() {
  console.log("Тестирование finderTopNArticles:");

  const articles = [
    { title: "A", views: 100 },
    { title: "B", views: 500 },
    { title: "C", views: 300 },
    { title: "D", views: 900 },
    { title: "E", views: 700 },
    { title: "F", views: 200 },
  ];

  const resultTop3 = finderTopNArticles(articles, 3).map(a => a.title);
  logTestCase("Топ-3 статьи по просмотрам", resultTop3, ["C", "E", "D"]);

  const shortList = [
    { title: "X", views: 10 },
    { title: "Y", views: 20 },
  ];
  const resultAll = finderTopNArticles(shortList, 5).map(a => a.title);
  logTestCase("Если статей меньше, чем topN", resultAll, ["Y", "X"]);

  console.log();
}

// Запуск всех тестов
testSwap();
testHoarePartition();
testQuickSelect();
testFinderTopNArticles();
testQuickSortHoare();
