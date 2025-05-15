package org.telran.lecture_04_d_and_c.practice.MinMaxFinder;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MinMaxFinderTest {

    @Test
    @DisplayName("Находит min и max в обычном массиве")
    void testFindMinMax_NormalArray() {
        int[] arr = {3, 5, 1, 8, 9, 2, 6, 7, 4};
        MinMax result = MinMaxFinder.findMinMax(arr);
        assertEquals(1, result.min);
        assertEquals(9, result.max);
    }

    @Test
    @DisplayName("Находит min и max в массиве с отрицательными и положительными числами")
    void testFindMinMax_NegativeAndPositiveNumbers() {
        int[] arr = {-10, 5, 100, -5, 0, 20, 30};
        MinMax result = MinMaxFinder.findMinMax(arr);
        assertEquals(-10, result.min);
        assertEquals(100, result.max);
    }

    @Test
    @DisplayName("Работает с массивом из одного элемента")
    void testFindMinMax_OneElementArray() {
        int[] arr = {42};
        MinMax result = MinMaxFinder.findMinMax(arr);
        assertEquals(42, result.min);
        assertEquals(42, result.max);
    }

    @Test
    @DisplayName("Корректно работает с массивом из двух элементов в правильном порядке")
    void testFindMinMax_TwoElementsInOrder() {
        int[] arr = {1, 2};
        MinMax result = MinMaxFinder.findMinMax(arr);
        assertEquals(1, result.min);
        assertEquals(2, result.max);
    }

    @Test
    @DisplayName("Корректно работает с массивом из двух элементов в обратном порядке")
    void testFindMinMax_TwoElementsReversed() {
        int[] arr = {99, 12};
        MinMax result = MinMaxFinder.findMinMax(arr);
        assertEquals(12, result.min);
        assertEquals(99, result.max);
    }

    @Test
    @DisplayName("Обрабатывает массив с одинаковыми значениями")
    void testFindMinMax_Duplicates() {
        int[] arr = {5, 5, 5, 5, 5};
        MinMax result = MinMaxFinder.findMinMax(arr);
        assertEquals(5, result.min);
        assertEquals(5, result.max);
    }

    @Test
    @DisplayName("Выбрасывает исключение для пустого массива")
    void testFindMinMax_EmptyArray_ThrowsException() {
        int[] arr = {};
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            MinMaxFinder.findMinMax(arr);
        });
        assertEquals("Массив должен содержать хотя бы один элемент", exception.getMessage());
    }

    @Test
    @DisplayName("Выбрасывает исключение для null-массива")
    void testFindMinMax_NullArray_ThrowsException() {
        int[] arr = null;
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            MinMaxFinder.findMinMax(arr);
        });
        assertEquals("Массив должен содержать хотя бы один элемент", exception.getMessage());
    }
}
