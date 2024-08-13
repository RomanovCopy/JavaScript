var myName = prompt('Как вас зовут?');
var myBirthYear = prompt('Введите ваш год рождения');

var currentYear = 2024;
var age = currentYear - myBirthYear;

if (age < 20) {
    alert('Привет, ' + myName + '!');
} else if (age > 20 && age < 40) {
    alert('Добрый день, ' + myName + '!');
} else {
    alert('Здравствуйте, ' + myName + '!');
}
