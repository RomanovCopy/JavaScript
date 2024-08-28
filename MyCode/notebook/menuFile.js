// Расширение формата с добавлением line-height
var Parchment = Quill.import('parchment');
var lineHeightStyle = new Parchment.Attributor.Style('line-height', 'line-height', {
    scope: Parchment.Scope.BLOCK,
    whitelist: ['1.0', '1.5', '2.0']
});
Quill.register(lineHeightStyle, true);

const quill = new Quill('#editor-container', {
    theme: 'snow',
    modules: {
        toolbar: {
            container: '#toolbar',
            handlers: {
                'line-height': function(value) {
                    this.quill.format('line-height', value);
                }
            }
        }
    }
});

// Функция для сохранения контента в различных форматах
function saveQuillContent(format) {
    let content, blob, fileName;

    switch (format) {
        case 'html':
            content = quill.root.innerHTML;
            blob = new Blob([content], { type: 'text/html' });
            fileName = 'content.html';
            break;
        case 'text':
            content = quill.getText();
            blob = new Blob([content], { type: 'text/plain' });
            fileName = 'content.txt';
            break;
        case 'json':
            content = JSON.stringify(quill.getContents());
            blob = new Blob([content], { type: 'application/json' });
            fileName = 'content.json';
            break;
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
}

// Функция для выбора директории
function chooseDirectory() {
    const directoryInput = document.getElementById('directory-input');
    directoryInput.click();
    directoryInput.addEventListener('change', function(event) {
        // Получаем выбранные файлы и директории
        const files = event.target.files;
        if (files.length > 0) {
            alert('Директория выбрана. Файлы будут сохранены в выбранную директорию.');
        }
    });
}

// Функция для открытия файла
document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        const content = e.target.result;

        // Обработка в зависимости от типа файла
        if (file.type === 'text/html') {
            quill.root.innerHTML = content;
        } else if (file.type === 'text/plain') {
            quill.setText(content);
        } else if (file.type === 'application/json') {
            try {
                const delta = JSON.parse(content);
                quill.setContents(delta);
            } catch (error) {
                alert('Ошибка при чтении JSON файла.');
            }
        } else {
            alert('Неподдерживаемый тип файла.');
        }
    };
    reader.readAsText(file);
});

// Показать/скрыть выпадающее меню
document.querySelector('#file-menu > button').addEventListener('click', function() {
    const dropdown = document.getElementById('file-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Скрыть меню, если щелкнуть вне его
window.addEventListener('click', function(e) {
    if (!document.getElementById('file-menu').contains(e.target)) {
        document.getElementById('file-dropdown').style.display = 'none';
    }
});