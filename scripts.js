// Функция для отображения модального окна
function showSuccessModal() {
  const modal = document.getElementById('successModal');
  modal.style.display = 'block';

  // Закрыть модальное окно через 3 секунды
  setTimeout(() => {
    closeModal();
  }, 3000);
}

// Функция для закрытия модального окна
function closeModal() {
  const modal = document.getElementById('successModal');
  modal.style.display = 'none';
}

// Функция для автоматического расширения текстового поля
function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = (textarea.scrollHeight) + 'px';
}
