document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // предотвращаем стандартное поведение формы
    // Здесь добавьте код для отправки данных в Google Форму
    const formData = new FormData(this);
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSdpQoFwSu-YUilChpejwLukqsuj4itHOIkvrRNI13mM6vUVhQ/formResponse';
    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
    })
    .then(() => {
        // Показываем сообщение об успешной отправке
        document.getElementById('successMessage').classList.remove('hidden');
        this.reset(); // очищаем форму
    })
    .catch(error => console.error('Ошибка:', error));
});
