package org.telran.lecture_04_d_and_c.practice.BinarySearch;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BinSearchTest {

    @Test
    @DisplayName("Поиск элемента в середине массива")
    void testMiddleElement() {
        int[] array = {1, 3, 5, 7, 9};
        assertEquals(2, BinSearch.binarySearch(array, 5));
    }

    @Test
    @DisplayName("Поиск первого элемента массива")
    void testFirstElement() {
        int[] array = {2, 4, 6, 8, 10};
        assertEquals(0, BinSearch.binarySearch(array, 2));
    }

    @Test
    @DisplayName("Поиск последнего элемента массива")
    void testLastElement() {
        int[] array = {2, 4, 6, 8, 10};
        assertEquals(4, BinSearch.binarySearch(array, 10));
    }

    @Test
    @DisplayName("Поиск отсутствующего элемента (меньше минимального)")
    void testAbsentLowerThanMin() {
        int[] array = {3, 5, 7, 9, 11};
        assertEquals(-1, BinSearch.binarySearch(array, 1));
    }

    @Test
    @DisplayName("Поиск отсутствующего элемента (больше максимального)")
    void testAbsentGreaterThanMax() {
        int[] array = {3, 5, 7, 9, 11};
        assertEquals(-1, BinSearch.binarySearch(array, 13));
    }

    @Test
    @DisplayName("Поиск отсутствующего элемента между существующими")
    void testAbsentInMiddle() {
        int[] array = {1, 3, 5, 7, 9};
        assertEquals(-1, BinSearch.binarySearch(array, 4));
    }

    @Test
    @DisplayName("Пустой массив")
    void testEmptyArray() {
        int[] array = {};
        assertEquals(-1, BinSearch.binarySearch(array, 3));
    }

    @Test
    @DisplayName("Один элемент в массиве (элемент найден)")
    void testSingleElementFound() {
        int[] array = {10};
        assertEquals(0, BinSearch.binarySearch(array, 10));
    }

    @Test
    @DisplayName("Один элемент в массиве (элемент не найден)")
    void testSingleElementNotFound() {
        int[] array = {10};
        assertEquals(-1, BinSearch.binarySearch(array, 5));
    }

    @Test
    @DisplayName("Массив с дубликатами, поиск дубликата")
    void testArrayWithDuplicates() {
        int[] array = {1, 2, 2, 2, 3, 4};
        int result = BinSearch.binarySearch(array, 2);
        // индекс может быть 1, 2 или 3 — любой из них допустим
        assertTrue(result == 1 || result == 2 || result == 3);
    }

    @Test
    @DisplayName("Массив из одного отрицательного элемента")
    void testNegativeSingleElement() {
        int[] array = {-7};
        assertEquals(0, BinSearch.binarySearch(array, -7));
    }

    @Test
    @DisplayName("Массив с отрицательными числами")
    void testNegativeNumbers() {
        int[] array = {-10, -5, -2, 0, 3, 6};
        assertEquals(1, BinSearch.binarySearch(array, -5));
        assertEquals(5, BinSearch.binarySearch(array, 6));
        assertEquals(-1, BinSearch.binarySearch(array, 4));
    }

    @Test
    @DisplayName("Нулевой массив (null)")
    void testNullArray() {
        assertEquals(-1, BinSearch.binarySearch(null, 10));
    }
}
