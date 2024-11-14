// Показать загрузочный экран
function showLoading(event) {
  event.preventDefault();  // Предотвращаем стандартную отправку формы
  document.getElementById('loading').style.display = 'flex'; // Показываем экран загрузки

  // Задержка перед отправкой формы (например, 2 секунды)
  setTimeout(function() {
    document.getElementById('myForm').submit();  // Отправляем форму вручную через JavaScript
  }, 2000); // 2000 миллисекунд = 2 секунды
}

// Показать модальное окно после отправки
function showSuccessModal() {
  const loadingScreen = document.getElementById('loading');
  const successModal = document.getElementById('successModal');

  if (loadingScreen.style.display === 'flex') {
    loadingScreen.style.display = 'none'; // Скрыть загрузочный экран
    successModal.style.display = 'flex';   // Показать модальное окно
  }
}

// Закрыть модальное окно
function closeModal() {
  document.getElementById('successModal').style.display = 'none';
}

// Автоизменение размера textarea
function autoResize(textarea) {
  textarea.style.height = 'auto';  // Сброс высоты, чтобы вычислить новую
  textarea.style.height = (textarea.scrollHeight) + 'px'; // Устанавливаем высоту на основе содержимого
}

document.addEventListener("DOMContentLoaded", function () {
  const snowContainer = document.querySelector('.snow');

  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Случайное начальное положение и размер снежинки
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Скорость падения
    snowflake.style.opacity = Math.random();

    // Добавляем снежинку в контейнер
    snowContainer.appendChild(snowflake);

    // Удаляем снежинку после завершения анимации
    snowflake.addEventListener('animationend', () => {
      snowflake.remove();
    });
  }

  // Создаём снежинки каждые 100 мс
  setInterval(createSnowflake, 200);
});

