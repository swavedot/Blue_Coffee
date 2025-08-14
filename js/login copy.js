fetch('login.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('loginOverlay').innerHTML = data;
  });
