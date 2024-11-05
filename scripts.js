// Функция для показа экрана загрузки
function showLoading() {
    document.getElementById("loading").style.display = "flex";
}

// Функция для показа модального окна
function showSuccessModal() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("successModal").style.display = "flex";
}

// Функция для закрытия модального окна
function closeModal() {
    document.getElementById("successModal").style.display = "none";
}

// Функция для авто-расширения textarea
function autoResize(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight) + "px";
}
