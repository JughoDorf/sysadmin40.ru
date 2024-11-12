// Показать загрузочный экран
function showLoading() {
  document.getElementById('loading').style.display = 'flex';
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

