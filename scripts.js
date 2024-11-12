// Показать загрузочный экран
function showLoading() {
  document.getElementById('loading').style.display = 'flex'; // Показываем экран загрузки

  // Задержка перед отправкой формы (например, 2 секунды)
  setTimeout(function() {
    document.forms[0].submit(); // Отправляем форму
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
