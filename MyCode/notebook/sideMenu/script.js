// script.js

const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');
const dropdown = document.querySelector('.dropdown');
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

/// Функция для переключения видимости меню и кнопки
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    toggleBtn.classList.toggle('hidden'); // Скрывает или показывает кнопку
});

// Функция для скрытия меню при клике вне его
document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggleBtn = toggleBtn.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnToggleBtn) {
        sidebar.classList.remove('active');
        toggleBtn.classList.remove('hidden'); // Показывает кнопку при закрытии меню
    }
});

// Функция для переключения видимости меню
dropdownBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Предотвращаем всплытие события
    dropdown.classList.toggle('active');
});

// Функция для скрытия меню при клике вне его
document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});
