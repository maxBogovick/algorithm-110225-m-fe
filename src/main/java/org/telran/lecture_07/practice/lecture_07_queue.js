/**
 * Класс, представляющий структуру данных очередь, реализованную на основе массива.
 * Элементы добавляются в конец (enqueue) и удаляются из начала (dequeue).
 */
class ArrayQueue {
    /**
     * Создает экземпляр ArrayQueue.
     * Инициализирует пустой массив для хранения элементов очереди.
     */
    constructor() {
        this.items = [];
        // TODO: Инициализировать пустой массив для хранения элементов очереди
    }

    /**
     * Добавляет элемент в конец очереди.
     * @param {*} element - Элемент, который нужно добавить в очередь.
     */
    enqueue(element) {
        this.items.push(element);
    }



    /**
     * Удаляет и возвращает элемент из начала очереди.
     * @returns {*} Удаленный элемент из очереди или null, если очередь пуста.
     */
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const data = this.items.shift();
        return data;
    }

    /**
     * Возвращает первый элемент очереди без его удаления.
     * @returns {*} Первый элемент очереди или null, если очередь пуста.
     */
    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    /**
     * Возвращает последний элемент очереди без его удаления.
     * @returns {*} Последний элемент очереди или null, если очередь пуста.
     */
    rear() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    /**
     * Проверяет, пуста ли очередь.
     * @returns {boolean} True, если очередь пуста, иначе false.
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Возвращает количество элементов в очереди.
     * @returns {number} Количество элементов в очереди.
     */
    size() {
        return this.items.length;
    }

    /**
     * Очищает очередь, удаляя все элементы.
     */
    clear() {
        this.items = [];
    }

    /**
     * Выполняет указанную функцию для каждого элемента очереди.
     * @param {function} callback - Функция, которая будет вызвана для каждого элемента. Принимает элемент, индекс и массив.
     */
    forEach(callback) {
        for (let i = 0; i < this.items.length; i++) {
            callback(i, this.items[i]);
        }
    }
}

/*const queue = new ArrayQueue();
queue.enqueue("one");
queue.enqueue("two");
queue.enqueue("three");
queue.enqueue("and");
queue.forEach((data, index) => console.log(`Value = ${data} and index = ${index}`));

console.log("first in queue = " + queue.rear());
queue.forEach((data, index) => console.log(`Value = ${data} and index = ${index}`));
*/


/**
 * Класс, представляющий узел односвязного списка.
 */
class Node {
    /**
     * Создает узел с указанными данными.
     * @param {*} data - Данные, которые будет содержать узел.
     */
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}
/*
const node1 = new Node(1);
const node2 = new Node(" world");
node1.next = node2;
node2.next = new Node({id: 1, name: "firstName"});
console.log(node1);

function printNodes(node) {
    while (node) {
        console.log(node.data);
        node = node.next;
    }
}*/

//printNodes(node2);


/**
 * Класс, представляющий структуру данных очередь, реализованную на основе односвязного списка.
 * Элементы добавляются в конец (enqueue) и удаляются из начала (dequeue).
 */
class LinkedListQueue {
    /**
     * Создает экземпляр LinkedListQueue.
    
     */
    constructor() {

        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Добавляет элемент в конец очереди.
     * @param {*} data - Элемент, который нужно добавить в очередь.
     * @returns {boolean} True, если элемент успешно добавлен, иначе false (если очередь переполнена).
     */
    enqueue(data) {
        const node = new Node(data);

        if (this.tail) {
            this.tail.next = node;
        } else {
            this.head = node;
        }

        this.tail = node;
        this.size++;
        return true;
    }

    /**
     * Удаляет и возвращает элемент из начала очереди.
     * @returns {*} Удаленный элемент или null, если очередь пуста.
     */
    dequeue() {

        if (this.isEmpty()) {
            return null;
        }

        const removedData = this.head.value;
        this.head = this.head.next;
        this.size--;

        if (this.size === 0) {
            this.tail = null;
        }

        return removedData;
    }

    /**
     * Проверяет, пуста ли очередь.
     * @returns {boolean} True, если очередь пуста, иначе false.
     */
    isEmpty() {
        //return this.head === null;
        return this.size === 0;
    }

    /**
     * Возвращает текущий размер очереди.
     * @returns {number} Количество элементов в очереди.
     */
    getSize() {
        return this.size;
    }

    /**
     * Очищает очередь, удаляя все элементы.
     */
    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Выполняет указанную функцию для каждого элемента очереди.
     * @param {function} callback - Функция, которая будет вызвана для каждого элемента. Принимает данные элемента и индекс.
     */
    forEach(callback) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            callback(currentNode.value, index);
            currentNode = currentNode.next;
            index++;
        }
    }
}
/*
const queue = new LinkedListQueue();
queue.enqueue("one");
queue.enqueue("two");
queue.enqueue("three");
queue.enqueue("and");
queue.forEach((data, index) => console.log(`Value = ${data} and index = ${index}`));

console.log("Get and delete = ", queue.dequeue());
queue.forEach((data, index) => console.log(`Value = ${data} and index = ${index}`));
*/

/**
 * Класс RateLimitedQueue - очередь с ограничением скорости выполнения запросов
 * 
 * Эта структура данных позволяет контролировать частоту выполнения HTTP-запросов,
 * что особенно важно при работе с API, имеющими ограничения на количество запросов в единицу времени.
 * 
 * Принцип работы:
 * - Все запросы добавляются в очередь
 * - Запросы выполняются последовательно с заданной задержкой
 * - Каждый запрос возвращает Promise, который разрешается при получении ответа
 * 
 * Основные преимущества:
 * - Предотвращение превышения лимитов API
 * - Автоматическая обработка очереди запросов
 * - Поддержка асинхронной работы через Promise
 */
class RateLimitedQueue {
    /**
     * Создает новую очередь с ограничением скорости
     * @param {number} rateLimitDelay - Задержка между запросами в миллисекундах
     */
    constructor(rateLimitDelay) {
        this.queue = new LinkedListQueue();
        this.isProcessing = false;
        this.delay = rateLimitDelay;
    }

    /**
     * Добавляет запрос в очередь
     * 
     * Алгоритм:
     * 1. Добавить запрос в конец очереди
     * 2. Если очередь не обрабатывается, запустить обработку
     *  {url, options, resolve, reject}
     * @param {Object} request - Объект запроса содержащий url, options, resolve, reject
     */
    enqueue(request) {
        this.queue.enqueue(request);
        if (!this.isProcessing) {
            this.processQueue();
        }
        // TODO: Добавить request в конец массива queue

        // TODO: Проверить, не обрабатывается ли очередь в данный момент
        // TODO: Если isProcessing === false, вызвать метод processQueue()
    }

    /**
     * Обрабатывает очередь запросов последовательно с задержкой
     * 
     * Алгоритм:
     * 1. Проверить, есть ли запросы в очереди
     * 2. Если очередь пуста, остановить обработку
     * 3. Установить флаг обработки
     * 4. Извлечь первый запрос из очереди
     * 5. Выполнить HTTP-запрос
     * 6. Обработать результат (успех/ошибка)
     * 7. Установить таймер для следующего запроса
     * 
     * @async
     * @returns {Promise<void>}
     */
    async processQueue() {
        if (this.queue.isEmpty()) {
            this.isProcessing = false;
            return;
        }

        this.isProcessing = true;

        const requestFromQueue = this.queue.dequeue();

        try {
            const response = await fetch(requestFromQueue.url, requestFromQueue.options);
            const data = await response.json();
            requestFromQueue.resolve(data);
        } catch (error) {
            requestFromQueue.reject(error);
        }
        setTimeout(() => this.processQueue(), this.delay);
    }

    /**
     * Отправляет HTTP-запрос через очередь с ограничением скорости
     * 
     * Алгоритм:
     * 1. Создать новый Promise
     * 2. В конструкторе Promise создать объект запроса с url, options, resolve, reject
     * 3. Добавить запрос в очередь через enqueue()
     * 4. Вернуть Promise
     * 
     * @param {string} url - URL для запроса
     * @param {Object} options - Опции для fetch (method, headers, body и т.д.)
     * @returns {Promise} Promise, который разрешается с данными ответа
     */
    async sendRequest(url, options) {
        return new Promise((resolve, reject) => {
            this.enqueue({ url, options, resolve, reject });
        })
        // TODO: Вернуть новый Promise, который:
        //   - Принимает resolve и reject как параметры
        //   - Создает объект запроса: { url, options, resolve, reject }
        //   - Вызывает this.enqueue() с этим объектом
    }
}

// Пример использования (для демонстрации студентам):

const queue = new RateLimitedQueue(5000); // 1 запрос в секунду

// Добавляем несколько запросов
queue.sendRequest('https://dummyjson.com/test', { method: 'GET' })
  .then(data => console.log('Ответ 1:', data))
  .catch(error => console.error('Ошибка 1:', error));

queue.sendRequest('https://dummyjson.com/ip', { method: 'GET' })
  .then(data => console.log('Ответ 2:', data))
  .catch(error => console.error('Ошибка 2:', error));

queue.sendRequest('https://api.example.com/data3', { method: 'GET' })
  .then(data => console.log('Ответ 3:', data))
  .catch(error => console.error('Ошибка 3:', error));


/**
 * Класс, представляющий систему загрузки файлов с использованием очереди на основе связного списка.
 * Управляет добавлением файлов в очередь, подключением к серверу и обработкой очереди с повторными попытками.
 */
class FileUploader {
    /**
     * Создает экземпляр FileUploader.
     * @param {number} [maxSize=5] - Максимальный размер очереди файлов.
     * @param {number} [retryLimit=3] - Максимальное количество попыток отправки файла.
     */
    constructor(maxSize = 5, retryLimit = 3) {
        // TODO: Инициализировать очередь файлов с использованием LinkedListQueue с указанным maxSize
        // TODO: Установить максимальное количество попыток (retryLimit)
        // TODO: Инициализировать флаг подключения к серверу (isConnected) как false
    }

    /**
     * Добавляет файл в очередь для загрузки.
     * @param {string} fileName - Имя файла для загрузки.
     */
    upload(fileName) {
        // TODO: Создать объект fileTask с полями fileName и attempts (изначально 0)
        // TODO: Добавить fileTask в очередь (используя метод enqueue)
        // TODO: Если файл успешно добавлен, вывести в консоль сообщение, например: "File <fileName> added to queue"
        // TODO: Если подключение к серверу активно (isConnected), вызвать обработку очереди
    }

    /**
     * Устанавливает подключение к серверу и запускает обработку очереди.
     */
    connectToServer() {
        // TODO: Установить флаг isConnected в true
        // TODO: Вызвать метод обработки очереди
    }

    /**
     * Разрывает подключение к серверу.
     */
    disconnect() {
        // TODO: Установить флаг isConnected в false
        // TODO: Вывести в консоль сообщение: "The connection was broken"
    }

    /**
     * Обрабатывает очередь файлов, отправляя их на сервер.
     */
    processQueue() {
        // TODO: Пока очередь не пуста и есть подключение к серверу (isConnected):
        // TODO: Извлечь файл из начала очереди (используя dequeue)
        // TODO: Если количество попыток файла (attempts) достигло retryLimit, вывести ошибку в консоль, например:
        //       "File <fileName> was removed after <retryLimit> attempts", и продолжить цикл
        // TODO: Вызвать метод sendToServer для попытки отправки файла
        // TODO: Если отправка не удалась, увеличить attempts на 1, вывести предупреждение в консоль, например:
        //       "Retry for <fileName>, attempts #<attempts>", и добавить файл обратно в очередь
    }

    /**
     * Отправляет файл на сервер (симуляция).
     * @param {Object} fileTask - Объект задачи с полями fileName и attempts.
     * @returns {boolean} True, если файл успешно отправлен, иначе false.
     */
    sendToServer(fileTask) {
        // TODO: Сымитировать отправку файла, возвращая true с вероятностью > 50% (например, используя Math.random())
        // TODO: Если отправка успешна, вывести в консоль сообщение, например: "The file <fileName> sent successfully"
        // TODO: Если отправка не удалась, вывести в консоль сообщение, например: "The file <fileName> was not sent"
        // TODO: Вернуть результат отправки (true или false)
    }
}