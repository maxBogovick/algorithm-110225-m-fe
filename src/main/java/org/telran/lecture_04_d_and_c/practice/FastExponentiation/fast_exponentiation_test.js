import { fastExponentiation } from './fast_exponentiation.js';
import { logTestCase, logTestCaseWithException } from '../../../../../utils/common_util.js';

// fastExponentiation
function testFastExponentiation() {
  console.log("⚡ Тестирование fastExponentiation:");

  // Тест для положительной степени
  logTestCase("2^10", fastExponentiation(2, 10), 1024);

  // Тест для нулевой степени
  logTestCase("5^0", fastExponentiation(5, 0), 1);

  // Тест для отрицательной степени
  logTestCase("2^-3", fastExponentiation(2, -3), 0.125);

  // Тест для нечетной степени
  logTestCase("3^3", fastExponentiation(3, 3), 27);

  // Тест для четной степени
  logTestCase("4^4", fastExponentiation(4, 4), 256);

  // Тест для степени равной 1
  logTestCase("7^1", fastExponentiation(7, 1), 7);

  // Тест для отрицательного основания и четной степени
  logTestCase("(-2)^4", fastExponentiation(-2, 4), 16);

  // Тест для отрицательного основания и нечетной степени
  logTestCase("(-3)^3", fastExponentiation(-3, 3), -27);

  console.log();
}

// Запуск тестов
testFastExponentiation();
