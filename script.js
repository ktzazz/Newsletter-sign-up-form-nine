const formulario = document.getElementById('mailForm');
const backBtn = document.getElementById('goBack');


formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener el valor del correo electrónico DENTRO del evento submit
    const email = document.getElementById('mail').value;
    const success = document.getElementById('success');
    const subscribe = document.getElementById('subscribe');
    const errorMsg = document.getElementById('errorMsg');

    // Expresión regular para validar correos electrónicos
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        success.style.display = 'none';
        subscribe.style.display = 'block';
        errorMsg.textContent = `Valid email required`;

    } else {
        success.style.display = 'block';
        subscribe.style.display = 'none';
        document.getElementById('userEmail').textContent = `${email}`;
        // Aquí enviarías el correo a tu servidor
    }
});

backBtn.addEventListener('click', () => {
    document.location.reload();
});