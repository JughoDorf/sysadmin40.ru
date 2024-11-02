// Функция для автоматического изменения высоты textarea
function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

// Функция для отображения сообщения об успешной отправке
function showSuccessMessage() {
  document.getElementById('successMessage').style.display = 'block';
  setTimeout(() => {
    document.getElementById('successMessage').style.display = 'none';
  }, 3000);
}
