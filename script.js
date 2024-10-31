
document.getElementById('requestForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const issue = document.getElementById('issue').value;
    const description = document.getElementById('description').value;

    alert(`Спасибо, ${name}! Ваша заявка отправлена на рассмотрение.`);
});
