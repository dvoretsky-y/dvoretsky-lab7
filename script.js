// определяем элементы для того, чтобы иметь к ним доступ с JS кода.
const user_input = document.getElementById("current_number");
const processing_button = document.getElementById("processing");
// Создание функции для удвоения (умножения на 2).
function multiple() {
    let raw_value = user_input.value;
    if (!isNaN(raw_value)) { // Если имеющиеся в поле данные - это число, то
        // парсим это число как число с плавающей точкой
        let current_number = parseFloat(raw_value);
        // и выводим его удвоенное значение в консоль.
        console.log("Удвоенное значение числа: " + current_number * 2 + ".");
    }
}
// В случае клика на кнопку вызываем функцию multiple.
processing_button.addEventListener("click", multiple)


// Получаем имя пользователя при загрузке страницы путём вызовамодального окна.
// В качестве значения по умолчанию выбрана пустая строка.
const name = prompt("Как вас зовут?", "");
// Если пользователь не нажал на кнопку "Отмена" или же не отправил пустую строку,
if (name != null && name != "") { // мы приветствуем его с помощью модального окна.
    alert("Добро пожалоать, " + name + "!");
}