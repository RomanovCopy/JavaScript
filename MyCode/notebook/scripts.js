// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu > li');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.querySelector('.submenu')) {
                e.stopPropagation(); // Остановка всплытия события
                this.querySelector('.submenu').classList.toggle('open'); // Переключение класса open
            }
        });
    });

    // Закрытие подменю при клике вне меню
    document.addEventListener('click', function() {
        menuItems.forEach(item => {
            if (item.querySelector('.submenu')) {
                item.querySelector('.submenu').classList.remove('open');
            }
        });
    });
});