package org.telran.lecture_04_d_and_c.practice.FastExponentiation;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FastExponentiationTest {

    @Test
    @DisplayName("0^0 → математически спорно, но возвращает 1 (принятое поведение)")
    void testZeroToZero() {
        assertEquals(1, FastExponentiation.fastExponentiation(0, 0), 1e-9);
    }

    @Test
    @DisplayName("Любое число в степени 0 → 1")
    void testPowerZero() {
        assertEquals(1, FastExponentiation.fastExponentiation(2, 0), 1e-9);
        assertEquals(1, FastExponentiation.fastExponentiation(-5, 0), 1e-9);
    }

    @Test
    @DisplayName("0 в любой положительной степени → 0")
    void testZeroPowerPositive() {
        assertEquals(0, FastExponentiation.fastExponentiation(0, 5), 1e-9);
    }

    @Test
    @DisplayName("Положительная степень (целое основание)")
    void testPositiveExponent() {
        assertEquals(8, FastExponentiation.fastExponentiation(2, 3), 1e-9);
        assertEquals(81, FastExponentiation.fastExponentiation(3, 4), 1e-9);
        assertEquals(1_000_000_000, FastExponentiation.fastExponentiation(10, 9), 1e-9);
    }

    @Test
    @DisplayName("Отрицательная степень")
    void testNegativeExponent() {
        assertEquals(0.5, FastExponentiation.fastExponentiation(2, -1), 1e-9);
        assertEquals(0.25, FastExponentiation.fastExponentiation(2, -2), 1e-9);
        assertEquals(1.0 / 81.0, FastExponentiation.fastExponentiation(3, -4), 1e-9);
    }

    @Test
    @DisplayName("Нечетный показатель степени")
    void testOddExponent() {
        assertEquals(125, FastExponentiation.fastExponentiation(5, 3), 1e-9);
        assertEquals(-27, FastExponentiation.fastExponentiation(-3, 3), 1e-9);
    }

    @Test
    @DisplayName("Четный показатель степени")
    void testEvenExponent() {
        assertEquals(16, FastExponentiation.fastExponentiation(2, 4), 1e-9);
        assertEquals(81, FastExponentiation.fastExponentiation(-3, 4), 1e-9);
    }

    @Test
    @DisplayName("Большие степени: корректность и производительность")
    void testLargeExponent() {
        assertEquals(Math.pow(2, 20), FastExponentiation.fastExponentiation(2, 20), 1e-3);
        assertEquals(Math.pow(3, 15), FastExponentiation.fastExponentiation(3, 15), 1e-3);
    }

    @Test
    @DisplayName("Результаты должны быть близки к Math.pow")
    void testCompareWithMathPow() {
        for (int base = -5; base <= 5; base++) {
            for (int exp = -5; exp <= 5; exp++) {
                if (base == 0 && exp < 0) continue; // избегаем деления на 0
                double expected = Math.pow(base, exp);
                double actual = FastExponentiation.fastExponentiation(base, exp);
                int finalBase = base;
                int finalExp = exp;
                assertEquals(expected, actual, 1e-6,
                        () -> finalBase + "^" + finalExp + " → expected: " + expected + ", actual: " + actual);
            }
        }
    }
}
