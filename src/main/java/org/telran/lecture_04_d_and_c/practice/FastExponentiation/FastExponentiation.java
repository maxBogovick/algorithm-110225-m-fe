package org.telran.lecture_04_d_and_c.practice.FastExponentiation;

/**
 * Реализация алгоритма быстрого возведения в степень (бинарного возведения в степень).
 * <p>
 * Алгоритм быстрого возведения в степень является эффективным методом вычисления целочисленных
 * степеней числа, использующим принцип "разделяй и властвуй". Вместо выполнения n умножений,
 * как в наивном подходе, этот алгоритм требует всего O(log n) операций умножения,
 * что значительно ускоряет процесс вычисления для больших показателей степени.
 * <p>
 * Основная идея алгоритма базируется на следующих математических закономерностях:
 * 1. Если показатель четный: base^exponent = (base^(exponent/2))^2
 * 2. Если показатель нечетный: base^exponent = base * (base^(exponent/2))^2
 * <p>
 * Например, чтобы вычислить 2^10:
 * - 2^10 = (2^5)^2
 * - 2^5 = 2 * (2^2)^2
 * - 2^2 = (2^1)^2
 * - 2^1 = 2 * (2^0)^2
 * - 2^0 = 1
 * <p>
 * Таким образом, вместо 10 умножений, нам потребуется всего 4 операции умножения.
 * <p>
 * Временная сложность: O(log n), где n - показатель степени
 * Пространственная сложность: O(log n) из-за глубины рекурсии
 */
public class FastExponentiation {

    /**
     * Рекурсивный метод для быстрого возведения в степень.
     * <p>
     * Метод использует принцип "разделяй и властвуй", сводя задачу вычисления большой
     * степени к задаче вычисления меньшей степени, что позволяет значительно сократить
     * количество операций умножения.
     *
     * @param base     основание степени (число, которое возводится в степень)
     * @param exponent показатель степени (неотрицательное целое число)
     * @return значение base^exponent
     * @throws ArithmeticException если результат превышает диапазон типа long
     */
    public static double fastExponentiation(int base, int exponent) {
        // Базовый случай: любое число в степени 0 равно 1

        //  Обработка отрицательных степеней

        // Рекурсивный случай: вычисляем half = base^(exponent/2)
        // Здесь exponent/2 выполняет целочисленное деление, округляя вниз
        // Рекурсивный шаг для положительных степеней
        // Разделение и Властвование (неявное)

        // Объединение
        // Примеры:
        // - для 2^5 мы вычисляем (2^2)^2 = 16, а затем 16 * 2 = 32
        // - для 3^7 мы вычисляем (3^3)^2 = 729, а затем 729 * 3 = 2187


        // Возвращаем окончательный результат
        throw new UnsupportedOperationException("Method fastExponentiation is not implemented yet");
    }

    /**
     * Главный метод для демонстрации работы алгоритма быстрого возведения в степень.
     *
     * @param args аргументы командной строки (не используются)
     */
    public static void main(String[] args) {
        // Пример базового использования
        int base = 2;       // Основание степени
        int exponent = 10;  // Показатель степени

        // Вызываем рекурсивную версию
        double result = fastExponentiation(base, exponent);
        System.out.println(base + " в степени " + exponent + " равно " + result);

        // Проверяем с помощью Math.pow
        double mathPowResult = Math.pow(base, exponent);
        System.out.println("Результат Math.pow: " + (long) mathPowResult);

        // Примеры с разными основаниями и показателями
        System.out.println("\n--- Дополнительные примеры ---");
        int[][] examples = {
                {2, -1},    // 2^0 = 1
                {2, 0},    // 2^0 = 1
                {2, 1},    // 2^1 = 2
                {3, 4},    // 3^4 = 81
                {5, 3},    // 5^3 = 125
                {10, 9}    // 10^9 = 1_000_000_000
        };

        for (int[] example : examples) {
            int b = example[0];
            int e = example[1];
            double res = fastExponentiation(b, e);
            System.out.println(b + "^" + e + " = " + res);
        }
    }
}
