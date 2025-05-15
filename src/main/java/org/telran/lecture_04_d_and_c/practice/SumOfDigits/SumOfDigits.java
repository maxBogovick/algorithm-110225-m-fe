package org.telran.lecture_04_d_and_c.practice.SumOfDigits;

/**
 * Класс SumOfDigits демонстрирует алгоритм нахождения суммы цифр числа с использованием рекурсии.
 */
public class SumOfDigits {

    /**
     * Метод для нахождения суммы цифр числа с использованием рекурсии.
     *
     * @param n Число, для которого нужно найти сумму цифр.
     * @return Сумма цифр числа.
     */
    public static int sumOfDigitsRecursive(int n) {
        // Базовый случай: если число равно 0, возвращаем 0


        // Извлекаем последнюю цифру числа

        // Отбрасываем последнюю цифру числа
        // Рекурсивно вызываем функцию с оставшимся числом и добавляем извлеченную цифру к результату
        throw new UnsupportedOperationException("Method sumOfDigitsRecursive is not implemented yet");
    }

    /**
     * Главный метод для демонстрации работы алгоритма.
     *
     * @param args Аргументы командной строки (не используются).
     */
    public static void main(String[] args) {
        int number = 12345;  // Число, для которого нужно найти сумму цифр
        int result = sumOfDigitsRecursive(number);
        System.out.println("Сумма цифр числа " + number + " равна " + result);
    }
}
