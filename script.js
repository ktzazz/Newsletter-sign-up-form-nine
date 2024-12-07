const formulario = document.getElementById('mailForm');
const backBtn = document.getElementById('goBack');


formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener el valor del correo electrónico DENTRO del evento submit
    const email = document.getElementById('mail').value;
    const success = document.getElementById('success');
    const subscribe = document.getElementById('subscribe');
    const errorMsg = document.getElementById('errorMsg');
    const mailInput = document.getElementById('mail');
    const picture = document.getElementById('picture');

    // Expresión regular para validar correos electrónicos
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        success.style.display = 'none';
        subscribe.style.display = 'block';
        errorMsg.textContent = `Valid email required`;
        mailInput.style.backgroundColor = 'rgba(255, 98, 87, 0.2)';
        mailInput.style.border = '1px solid rgb(255, 98, 87)';
        mailInput.classList.add('tomato');
        
    } else {
        success.style.display = 'block';
        subscribe.style.display = 'none';
        document.getElementById('userEmail').textContent = `${email}`; //print user's email
        picture.parentNode.removeChild(picture); //deletes the picture from the first window
    }
});

backBtn.addEventListener('click', () => {
    document.location.reload(); //completely refresh the main window
});