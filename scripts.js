function showLoading() {
  document.getElementById('loading').style.display = 'flex'; // Показать экран загрузки
}

function closeModal() {
  document.getElementById('successModal').style.display = 'none'; // Закрыть модальное окно
}

function showSuccessModal() {
  // Показать модальное окно об успешной отправке через 2 секунды
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none'; // Скрыть экран загрузки
    document.getElementById('successModal').style.display = 'block'; // Показать модальное окно
  }, 2000); // Задержка перед показом окна успешной отправки
}

// Авто-расширение textarea
function autoResize(textarea) {
  textarea.style.height = 'auto'; // Сбрасываем высоту
  textarea.style.height = textarea.scrollHeight + 'px'; // Устанавливаем новую высоту
}
