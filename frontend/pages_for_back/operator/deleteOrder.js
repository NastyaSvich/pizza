function deleteOrder(i) {
  const articul = document.getElementById(`order${i}`).dataset.id;
  DelOneOrder(articul);
  document.getElementById(`td${i}`).style.display = 'none';
}

setTimeout(() => {
  window.location.reload(1);
}, 30000);
