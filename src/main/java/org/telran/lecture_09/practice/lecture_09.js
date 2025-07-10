/**
 * Узел двусвязного списка.
 */
class LinkedListNode {
    /**
     * Создаёт новый узел.
     * @param {*} data - Значение, которое хранится в узле.
     */
    constructor(data) {
        // Сохраните данные
        this.value = data;
        this.next = null;
        this.prev = null;
        // Указатель на следующий узел

        // Указатель на предыдущий узел
    }
}

/**
 * Двусвязный список.
 */
class DoubleLinkedList {
    /**
     * Создаёт пустой список.
     */
    constructor() {
        // Установите голову списка в null
        this.head = null;
        this.tail = null;
        this.size = 0;
        // Установите хвост списка в null

        // Изначально размер списка = 0
    }

    /**
     * Добавляет элемент в конец списка.
     * @param {*} data - Добавляемое значение.
     * @returns {DoubleLinkedList} - Ссылка на сам список для цепочек вызовов.
     */
    append(data) {
        // Создайте новый узел
        const node = new LinkedListNode(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
        return this;
        // Если список пустой:
        //   Установите голову и хвост на этот узел
        // Иначе:
        //   Привяжите новый узел к текущему хвосту
        //   Обновите ссылку tail
        // Увеличьте размер
        // Верните this
    }

    /**
     * Добавляет элемент в начало списка.
     * @param {*} data - Добавляемое значение.
     * @returns {DoubleLinkedList} - Ссылка на сам список для цепочек вызовов.
     */
    prepend(data) {
        const node = new LinkedListNode(data);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++;
        return this;
    }

    /**
     * Удаляет элемент с конца списка.
     * @returns {*} - Данные удалённого узла или null, если список пуст.
     */
    removeTail() {
        if (this.isEmpty()) {
            return null;
        }
        const removedData = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedData.prev;
            this.tail.next = null;
            removedData.prev = null;
        }

        this.size--;
        return removedData.value;
    }

    /**
     * Удаляет элемент с начала списка.
     * @returns {*} - Данные удалённого узла или null, если список пуст.
     */
    removeHead() {
        // Если список пуст, верните null
        if (this.isEmpty()) {
            return null;
        }
        // Сохраните данные удаляемого узла
        const removedData = this.head;
         if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedData.next;
            this.head.prev = null;
            removedData.next = null;
        }

        this.size--;
        return removedData.value;
    }

    /**
     * Проверяет, пуст ли список.
     * @returns {boolean} - true, если пуст, иначе false.
     */
    isEmpty() {
        // Верните true, если размер равен 0
        // return this.size === 0;
        return !this.head; 
    }

    /**
     * Выполняет callback для каждого элемента списка.
     * @param {(data: *) => void} callback - Функция, применяемая к каждому элементу.
     */
    forEach(callback, firstHead) {
        // Начните с головы
        let node = firstHead ? this.head : this.tail;
        // Пока есть узел:
        while (node) {
            callback(node.value);
            node = firstHead ? node.next : node.prev;
        }
    }
}

const doubleLinkedList = new DoubleLinkedList();

doubleLinkedList.append(1).append(2).append(3).append(4);

const arrayNumbers = [];
doubleLinkedList.forEach(data => arrayNumbers.push(data), true);
console.log(arrayNumbers);

/**
 * Класс, представляющий один шаг мастера регистрации.
 */
class Step {
    /**
     * Создаёт шаг.
     * @param {string} title - Заголовок шага.
     * @param {(data: Object) => boolean} validator - Функция проверки данных шага.
     */
    constructor(title, validator) {
        // Сохраните заголовок шага
        this.title = title;
        this.validator = validator;
        this.payload = {};
    }
}

/**
 * Класс мастера регистрации.
 * Поддерживает добавление шагов, перемещение между ними, сохранение и валидацию данных.
 */
class RegistrationWizard {
    /**
     * Создаёт мастер регистрации.
     * @param {{ title: string, validator: (data: Object) => boolean }[]} [steps] - Начальные шаги.
     */
    constructor(steps = []) {
        this.steps = new DoubleLinkedList();
        this.currentStep = this.steps.head;
    }

    /**
     * Добавить новый шаг в мастер регистрации.
     * @param {string} title - Заголовок шага.
     * @param {(data: Object) => boolean} validator - Функция проверки данных.
     */
    addStep(title, validator) {
        const step = new Step(title, validator);

        // stack.push(data)
        // queue.enqueue(data)
        // doubleLinedList.append(data)
        this.steps.append(step);
        if (!this.currentStep) {
            this.currentStep = this.steps.head;
        }
    }

    /**
     * Получить текущий активный шаг.
     * @returns {Step | null} Текущий шаг или null, если шагов нет.
     */
    get current() {
        /*if(this.currentStep) {
            return this.currentStep.value;
        } else {
            return null;
        }
        */
        return this.currentStep?.value ?? null;
        // Верните значение текущего узла, если он существует
    }

    /**
     * Заполнить данные для текущего шага.
     * @param {Object} data - Объект с данными шага.
     */
    fill(data) {
        if (!this.current) {
            return ;
        }
        //this,current  = step
        this.current.payload = data;
    }

    /**
     * Проверить корректность данных текущего шага.
     * @returns {boolean} true, если данные корректны; иначе false.
     */
    validate() {
        if (!this.current) {
            return false;
        }
        const step = this.current;
        const isValid = step.validator(step.payload);
        return isValid;
    }

    /**
     * Перейти к следующему шагу.
     */
    next() {
        if (!this.validate()) {
            console.log("На текущем шаге есть невалидные данные, исправьте их пожалуйста");
            return;
        }
        if (this.currentStep?.next) {
            this.currentStep = this.currentStep.next;
        } else {
            console.log("Это последний шаг");
        }
    }

    /**
     * Вернуться к предыдущему шагу.
     */
    prev() {
        // Если есть предыдущий узел, переходите к нему и выведите сообщение

        //   console.log(`Возвратились к шагу "${this.current.title}"`);
        // иначе console.log('Это первый шаг.');
    }

    /**
     * Сбросить мастер регистрации в начальное состояние.
     * Все данные шагов очищаются.
     */
    reset() {
        // Для каждого шага очистите payload
        // this.steps.forEach(step => step.payload = {});

        // Установите текущий узел на первый шаг
        // this.currentNode = this.steps.head;

        // Выведите сообщение о сбросе
        // console.log('Визард сброшен.');
    }
}


const wiz = new RegistrationWizard();

/*{
    name: "user1Name",
    email: "useremeil@mail.com",
    pasword: "1234456"
}
    */

wiz.addStep("Имя пользователя", d => d.name?.length >= 3);
wiz.addStep("Email", d => /@/.test(d.email));
wiz.addStep("Пароль", d => d.password?.length >= 6);

// step 1
console.log("before fill = ", wiz.current);
wiz.fill({ name: 'Вася' });
console.log("after fill = ", wiz.current);
wiz.next();

// step2
wiz.fill({ email: 'vasya@mail.com' });
console.log("after next = ", wiz.current);
wiz.next();

wiz.fill({ password: '12345' });
console.log("after next 2 = ", wiz.current);
wiz.next();
console.log("last step = ", wiz.current);
/**
 * ======= Пример использования =======
 * Создайте экземпляр RegistrationWizard
 * const wiz = new RegistrationWizard([
 *   { title: 'Имя пользователя', validator: d => d.name?.length >= 3 },
 *   { title: 'Email',            validator: d => /@/.test(d.email) },
 *   { title: 'Пароль',           validator: d => d.password?.length >= 6 }
 * ]);
 * 
 * Заполните данные и переходите по шагам:
 * wiz.fill({ name: 'Вася' });
 * wiz.next();
 * wiz.fill({ email: 'vasya@mail.ru' });
 * wiz.next();
 * wiz.fill({ password: '123456' });
 * wiz.next();
 * wiz.reset();
 */

