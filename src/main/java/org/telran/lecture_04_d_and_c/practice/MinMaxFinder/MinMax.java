package org.telran.lecture_04_d_and_c.practice.MinMaxFinder;

// Класс для хранения пары минимум-максимум
public class MinMax {
    int min;
    int max;

    public MinMax(int min, int max) {
        this.min = min;
        this.max = max;
    }

    @Override
    public String toString() {
        return "MinMax{min=" + min + ", max=" + max + "}";
    }
}