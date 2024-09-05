// script.js

const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');
const dropdownBtns = document.querySelectorAll('.dropdown-btn'); // Все кнопки
const dropdownMenus = document.querySelectorAll('.dropdown-menuFile, .dropdown-menuEncode'); // Все меню


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


// Добавляем обработчики событий для каждой кнопки
dropdownBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Получаем соответствующее меню по индексу кнопки
        const dropdownMenu = dropdownMenus[index];
        
        // Закрываем все остальные меню перед открытием нужного
        dropdownMenus.forEach(menu => {
            if (menu !== dropdownMenu) {
                menu.classList.remove('active'); // Закрыть
            }
        });

        // Переключаем видимость текущего меню
        dropdownMenu.classList.toggle('active'); // Открыть/закрыть выбранное меню
    });
});

// Закрытие всех меню, если кликнуть за пределами кнопки и меню
document.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-btn')) {
        dropdownMenus.forEach(menu => {
            menu.classList.remove('active'); // Закрываем все меню
        });
    }
});

// script.js

// Добавляем кастомные размеры шрифта в пикселях
const Size = Quill.import('attributors/style/size');
Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px', '24px', '32px', '40px'];
Quill.register(Size, true);

// Инициализация панели инструментов с явными значениями для выпадающего списка размеров шрифта
const toolbarOptions = [
  [{ 'font': [] }],
  [{ 'size': [
      { value: '10px', label: '10px' }, 
      { value: '12px', label: '12px' }, 
      { value: '14px', label: '14px' }, 
      { value: '16px', label: '16px' }, 
      { value: '18px', label: '18px' }, 
      { value: '20px', label: '20px' }, 
      { value: '24px', label: '24px' }, 
      { value: '32px', label: '32px' }, 
      { value: '40px', label: '40px' } 
  ] }], // Явное задание значений для выпадающего списка размеров шрифта
  ['bold', 'italic', 'underline', 'strike'],  // Форматирование текста
  [{ 'color': [] }, { 'background': [] }],    // Цвет текста и фона
  [{ 'list': 'ordered'}, { 'list': 'bullet' }], // Нумерованные и ненумерованные списки
  [{ 'align': [] }],                           // Выравнивание текста
  ['link', 'image'],                           // Добавление ссылок и изображений
  ['clean']                                    // Очистка форматирования
];

// Инициализация редактора Quill
const editor = new Quill('#editor-container', {
  theme: 'snow',
  modules: {
    toolbar: toolbarOptions
  }
});




  
