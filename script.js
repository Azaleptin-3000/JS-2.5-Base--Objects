// Задание 1. Создание и работа с объектами

let user = {
    name: "John Silver", // Йо-хо-хо...
    age: 50,
    email: "john.silver@admiral-benbow.bristol.com",
};

// Вывод информации о пользователе
console.log("Имя: " + user.name);
console.log("Возраст: " + user.age);
console.log("Email: " + user.email);



// Задание 2. Обновление свойств объекта

let user = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
};

// Обновите объект
user.age = 30;          // Изменяем возраст
user.isAdmin = true;   // Добавляем новое свойство

// Выводим обновленный объект
console.log(user);


// Задание 3. Удаление свойства из объекта

let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
};

// Удаляем свойство email
delete user.email;

// Проверяем, что свойство удалено
console.log(user);


// Задание 4. Преобразование объекта

function transformUser(user) {
    // Создаем новый объект с преобразованными данными
    return {
        name: user.name.toUpperCase(), // Преобразуем имя в верхний регистр
        email: user.email              // Сохраняем email
    };
}

let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
};

let transformedUser = transformUser(user);
console.log(transformedUser); // Ожидаемый результат: { name: "JOHN DOE", email: "john.doe@example.com" }


// Задание 5/ Копирование объектов

let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
};

// Создаем копию и изменяем свойство name
let userCopy = {        // Создаем новый объект userCopy, который содержит все свойства оригинального объекта user
    ...user,           // Копируем все свойства из user
    name: "Jane Doe"  // Изменяем имя в копии
};

console.log(user);      // Оригинальный объект
console.log(userCopy);  // Измененная копия


// Задание 6. Преобразование объекта по условию

function filterProperties(obj, keys) {
    // Создаем новый объект с отфильтрованными свойствами
    let filteredObj = {};
    
    // Проходим по массиву ключей
    for (let key of keys) {
        // Если ключ существует в объекте, добавляем его в новый объект
        if (key in obj) {
            filteredObj[key] = obj[key];
        }
    }
    
    return filteredObj; // Возвращаем новый объект
}

let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
};

let filteredUser = filterProperties(user, ["name", "email"]);
console.log(filteredUser); // Ожидаемый результат: { name: "John Doe", email: "john.doe@example.com" }


// Задание 7. Изменение структуры данных объекта

function convertUser(user) {
    // Создаем новый объект с преобразованными данными
    return {
        profile: {
            name: user.name, // Сохраняем имя
            age: user.age    // Сохраняем возраст
        },
        email: user.email,     // Сохраняем email
        isAdmin: user.isAdmin   // Сохраняем isAdmin
    };
}

let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
};

let convertedUser = convertUser(user);
console.log(convertedUser);
// Ожидаемый результат: { profile: { name: "John Doe", age: 30 }, email: "john.doe@example.com", isAdmin: true }


// Задание 8. Объединение объектов

let user = {
    name: "John Doe",
    email: "john.doe@example.com",
};

let details = {
    age: 30,
    isAdmin: true,
};

// Объединяем объекты
let mergedUser = Object.assign({}, user, details);

console.log(mergedUser);
// Ожидаемый результат: { name: "John Doe", email: "john.doe@example.com", age: 30, isAdmin: true }


// Задание 9. Динамическое создание свойств

let key1 = "name";
let key2 = "price";
let key3 = "category";

let product = {}; // Создаем пустой объект

// Добавляем свойства динамически
product[key1] = "Laptop";
product[key2] = 1500;
product[key3] = "Electronics";

console.log(product);
// Ожидаемый результат: { name: "Laptop", price: 1500, category: "Electronics" }