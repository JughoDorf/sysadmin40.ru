// Показать загрузочный экран
function showLoading(event) {
  event.preventDefault();  // Предотвращаем стандартную отправку формы
  document.getElementById('loading').style.display = 'flex'; // Показываем экран загрузки

  // Задержка перед отправкой формы (например, 2 секунды)
  setTimeout(function() {
    document.getElementById('myForm').submit();  // Отправляем форму вручную через JavaScript
  }, 2000); // 2000 миллисекунд = 2 секунды
}

function showNotification() {
  const notification = document.getElementById("notification");

  // Показываем уведомление с анимацией вращения
  notification.style.display = "block";
  notification.style.animation = "spinIn 0.7s ease forwards";

  setTimeout(() => {
    // Скрываем уведомление с обратной анимацией
    notification.style.animation = "spinOut 0.7s ease forwards";
    setTimeout(() => {
      notification.style.display = "none";
    }, 700); // Убираем после завершения анимации
  }, 3000); // Уведомление исчезает через 3 секунды
}

// Автоизменение размера textarea
function autoResize(textarea) {
  textarea.style.height = 'auto';  // Сброс высоты, чтобы вычислить новую
  textarea.style.height = (textarea.scrollHeight) + 'px'; // Устанавливаем высоту на основе содержимого
}

function showNotification() {
  const notification = document.getElementById("notification");
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}


