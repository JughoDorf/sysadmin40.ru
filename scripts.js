function showLoading() {
  document.getElementById('loading').style.display = 'flex';
}
function hideLoading() {
  document.getElementById('loading').style.display = 'none';
}
function showSuccessModal() {
  hideLoading();
  document.getElementById('successModal').style.display = 'block';
}
function closeModal() {
  document.getElementById('successModal').style.display = 'none';
}
