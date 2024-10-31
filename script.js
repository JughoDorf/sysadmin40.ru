document.getElementById('requestForm').addEventListener('submit', function (event) {
    event.preventDefault(); // предотвращает перезагрузку страницы

    const name = document.getElementById('name').value;
    const className = document.getElementById('class').value; // изменено с department на class
    const issue = document.getElementById('issue').value;
    const description = document.getElementById('description').value;

    alert(`Спасибо, ${name}! Ваша заявка отправлена на рассмотрение.`);
});
