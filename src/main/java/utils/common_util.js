export function logTestCase(description, actual, expected) {
  const passed = actual === expected;
  console.log(`${description} => ${passed ? '✅ Пройден' : `❌ Не пройден (Ожидалось: ${expected}, Получено: ${actual})`}`);
}

export function logTestCaseWithException(description, func, expectedExceptionMessage) {
  try {
    func();
    console.log(`❌ Не пройден (Ожидалось исключение: ${expectedExceptionMessage}, но исключение не было выброшено)`);
  } catch (e) {
    if (e.message === expectedExceptionMessage) {
      console.log(`✅ Пройден: ${description}`);
    } else {
      console.log(`❌ Не пройден (Ожидалось: ${expectedExceptionMessage}, Получено: ${e.message})`);
    }
  }
}