export function logTestCase(description, actual, expected) {
  // Преобразуем массивы в строки для сравнения
  const actualString = JSON.stringify(actual);
  const expectedString = JSON.stringify(expected);

  const passed = actualString === expectedString;
  console.log(`${description} => ${passed ? '✅ Пройден' : `❌ Не пройден (Ожидалось: ${expectedString}, Получено: ${actualString})`}`);
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