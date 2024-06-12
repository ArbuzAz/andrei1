<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Особенная регистрация для Андреев</title>
<style>
  .hidden {
    display: none;
  }
</style>
</head>
<body>

<form id="registrationForm">
    <label for="firstName">Имя:</label>
    <input type="text" id="firstName" placeholder="Введите ваше имя">

    <label for="lastName">Фамилия:</label>
    <input type="text" id="lastName" placeholder="Введите вашу фамилию">

    <button type="submit">Зарегистрироваться</button>
</form>

<div id="specialMessage" class="hidden">
    Здравствуйте, Андрей! Мы рады приветствовать вас и предлагаем вообще очень специальные условия.
</div>

<script>
document.getElementById('registrationForm').onsubmit = function(e) {
    e.preventDefault();
    
    var firstName = document.getElementById('firstName').value.trim();
    
    if (firstName.toLowerCase() === 'андрей') {
        // Показываем специальное сообщение для Андреев
        document.getElementById('specialMessage').classList.remove('hidden');
    } else {
        // Обычная регистрация для всех остальных пользователей
        // Здесь может быть ваш код для отправки данных формы
        alert('Форма отправлена! Добро пожаловать, ' + firstName + '!');
    }
};
</script>

</body>
</html>
