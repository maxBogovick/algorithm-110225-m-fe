package org.telran.lecture_04_d_and_c.practice.SumOfDigits;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Тесты для метода sumOfDigitsRecursive()")
class SumOfDigitsTest {

    @Test
    @DisplayName("Сумма цифр положительного числа 12345 должна быть 15")
    void testPositiveNumber() {
        assertEquals(15, SumOfDigits.sumOfDigitsRecursive(12345));
    }

    @Test
    @DisplayName("Сумма цифр нуля должна быть 0")
    void testZero() {
        assertEquals(0, SumOfDigits.sumOfDigitsRecursive(0));
    }

    @Test
    @DisplayName("Сумма цифр однозначного числа 7 должна быть 7")
    void testSingleDigit() {
        assertEquals(7, SumOfDigits.sumOfDigitsRecursive(7));
    }

    @Test
    @DisplayName("Сумма цифр отрицательного числа -123 должна быть 6")
    void testNegativeNumber() {
        assertEquals(6, SumOfDigits.sumOfDigitsRecursive(-123));
    }

    @Test
    @DisplayName("Сумма цифр большого числа 999999999 должна быть 81")
    void testLargeNumber() {
        assertEquals(81, SumOfDigits.sumOfDigitsRecursive(999_999_999));
    }

    @Test
    @DisplayName("Сумма цифр отрицательного однозначного числа -9 должна быть 9")
    void testNegativeSingleDigit() {
        assertEquals(9, SumOfDigits.sumOfDigitsRecursive(-9));
    }
}
