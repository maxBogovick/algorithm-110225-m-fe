import { findMaxSubarraySum } from './maximum_subarray_sum.js';
import { logTestCase, logTestCaseWithException } from '../../../../../utils/common_util.js';

// findMaxSubarraySum
function testFindMaxSubarraySum() {
  console.log("📊 Тестирование findMaxSubarraySum:");

  // Тест для массива с положительными и отрицательными числами
  logTestCase(
    "Массив [-2, 1, -3, 4, -1, 2, 1, -5, 4], максимальная сумма 6",
    findMaxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4], 0, 8),
    6
  );

  // Тест для массива с отрицательными числами
  logTestCase(
    "Массив [-5, -3, -1, -2, -9], максимальная сумма -1",
    findMaxSubarraySum([-5, -3, -1, -2, -9], 0, 4),
    -1
  );

  // Тест для массива с одним элементом
  logTestCase(
    "Массив [5], максимальная сумма 5",
    findMaxSubarraySum([5], 0, 0),
    5
  );

  // Тест для пустого массива
  logTestCaseWithException(
    "Пустой массив",
    () => findMaxSubarraySum([], 0, -1),
    "Array is empty"
  );

  // Тест для массива с одинаковыми элементами
  logTestCase(
    "Массив [2, 2, 2, 2], максимальная сумма 8",
    findMaxSubarraySum([2, 2, 2, 2], 0, 3),
    8
  );

  console.log();
}

// Запуск тестов
testFindMaxSubarraySum();
