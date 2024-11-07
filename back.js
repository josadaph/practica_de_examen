// Esta función valida los datos del formulario
function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const ageInput = document.getElementById('age').value;
  
    if (!username || !email || !phone || !date || !ageInput) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    const birthDate = new Date(ageInput);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    if (age < 18) {
      alert('Debes ser mayor de edad para realizar una reserva.');
      return;
    }
  
    // Guardar datos en localStorage
    const reservationData = {
      username,
      email,
      phone,
      date,
      birthDate: ageInput
    };
  
    localStorage.setItem('reservation', JSON.stringify(reservationData));
  
    alert('Información registrada, te contactaremos en los próximos minutos.');
  }
  
