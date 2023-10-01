document.addEventListener("DOMContentLoaded", function () {
    // Загрузка задач из файла db.json при загрузке страницы
    loadTasks();

    // Создание задачи при нажатии на кнопку "Создать"
    document.querySelector("button").addEventListener("click", createTask);
});

// Функция для создания новой задачи
function createTask() {
    const taskName = document.getElementById("taskName").value.trim();
    if (taskName === "") {
        alert("Введите название задачи.");
        return;
    }

    const task = {
        name: taskName,
        status: "Открыто"
    };

    // Отправка данных на сервер (здесь нужно использовать AJAX или fetch)
    // После успешной отправки, добавьте задачу на страницу и в файл db.json
    // Пример:
    // fetch("/createTask", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(task)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         // Обновите интерфейс и добавьте задачу в соответствующий div
    //         addTaskToStatus(task, "open");
    //         // Очистите поле ввода
    //         document.getElementById("taskName").value = "";
    //     } else {
    //         alert("Ошибка при создании задачи.");
    //     }
    // })
    // .catch(error => {
    //     console.error("Ошибка при отправке данных на сервер:", error);
    // });
}

// Функция для добавления задачи в определенный div
function addTaskToStatus(task, status) {
    const statusDiv = document.getElementById(status);
    const taskItem = document.createElement("div");
    taskItem.classList.add("status-item");
    taskItem.innerText = task.name;

    // При клике на задачу, можно реализовать перенос между div (Drag and Drop)

    statusDiv.appendChild(taskItem);
}

// Функция для загрузки задач из файла db.json
function loadTasks() {
    // Отправка запроса на сервер для получения задач (здесь нужно использовать AJAX или fetch)
    // Пример:
    // fetch("/getTasks")
    // .then(response => response.json())
    // .then(data => {
    //     // Обновите интерфейс, добавив задачи в соответствующие div
    //     data.tasks.forEach(task => {
    //         addTaskToStatus(task, task.status.toLowerCase());
    //     });
    // })
    // .catch(error => {
    //     console.error("Ошибка при получении задач с сервера:", error);
    // });
}
