/**
 * Класс, представляющий структуру данных стек, реализованную на основе массива.
 * Элементы добавляются и удаляются с вершины стека (LIFO - Last In, First Out).
 */
class ArrayStack {
    /**
     * Создает экземпляр ArrayStack.
     * Инициализирует пустой массив для хранения элементов стека.
     */
    constructor() {
        this.items = [];
    }

    /**
     * Добавляет элемент на вершину стека.
     * @param {*} element - Элемент, который нужно добавить в стек.
     */
    push(element) {
        this.items.push(element);
    }

    /**
     * Удаляет и возвращает верхний элемент стека.
     * @returns {*} Удаленный элемент или null, если стек пуст.
     */
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    /**
     * Возвращает верхний элемент стека без его удаления.
     * @returns {*} Верхний элемент стека или null, если стек пуст.
     */
    peek() {
        if (this.items.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    /**
     * Проверяет, пуст ли стек.
     * @returns {boolean} True, если стек пуст, иначе false.
     */
    isEmpty() {
        // TODO: Вернуть true, если длина массива равна 0, иначе false
        return this.items.length === 0;
    }

    /**
     * Возвращает текущий размер стека.
     * @returns {number} Количество элементов в стеке.
     */
    size() {
        return this.items.length;
    }

    /**
     * Очищает стек, удаляя все элементы.
     */
    clear() {
        this.items = [];
    }

    /**
     * Выполняет указанную функцию для каждого элемента стека, начиная с вершины.
     * @param {function} callback - Функция, которая будет вызвана для каждого элемента. Принимает элемент и индекс (от вершины).
     */
    forEach(callbackFn) {
        for (let i = this.items.length -1; i >=0; i--) {
            callbackFn(this.items[i], i);
        }
    }
}



/**
 * Класс, представляющий текстовый редактор с поддержкой операций вставки текста, отмены (undo) и повтора (redo).
 * Использует два стека для хранения состояний для операций отмены и повтора.
 */
class TextEditor {
    /**
     * Создает экземпляр TextEditor.
     * Инициализирует пустое содержимое и стеки для операций undo и redo.
     */
    constructor() {
        this.content = "";
        this.undoStack = new ArrayStack();
        this.redoStack = new ArrayStack();
    }

    /**
     * Выполняет команду, сохраняя текущее состояние в стеке undo.
     * @param {function} command - Функция, представляющая команду для выполнения (например, вставка текста).
     */
    executeCommand(command) {
        this.undoStack.push({
            content: this.content
        });
        this.redoStack.clear();
        command();
    }

    /**
     * Вставляет текст в конец текущего содержимого.
     * @param {string} text - Текст для вставки.
     */
    insertText(text) {
        this.executeCommand(() => {
            this.content = this.content + text;
        });
    }

    /**
     * Отменяет последнюю операцию, восстанавливая предыдущее состояние.
     * @returns {boolean} True, если отмена успешна, иначе false (если стек undo пуст).
     */
    undo() {
        if (this.undoStack.isEmpty()) {
            return false;
        }
        this.redoStack.push({
            content: this.content
        })
        const previousState = this.undoStack.pop();
        this.content = previousState.content;
        return true;
    }

    /**
     * Повторяет последнюю отмененную операцию, восстанавливая следующее состояние.
     * @returns {boolean} True, если повтор успешен, иначе false (если стек redo пуст).
     */
    redo() {
        if (this.redoStack.isEmpty()) {
            return false;
        }
        this.undoStack.push({
            content: this.content
        });
        const redoState = this.redoStack.pop();
        this.content = redoState.content;
        return true;
    }

    /**
     * Возвращает текущее содержимое редактора.
     * @returns {string} Текущее содержимое редактора.
     */
    getContent() {
        return this.content;
    }
}

const textEditor = new TextEditor();

textEditor.insertText("Hello");
textEditor.insertText(" world");
textEditor.insertText("!!!");

console.log(textEditor.getContent());

textEditor.undo();

console.log("text after undo = " + textEditor.getContent());

textEditor.redo();

console.log("text after redo = " + textEditor.getContent());