function generarPassword(longitud = 12) {
    // Validar que la longitud esté dentro del rango especificado
    if (longitud < 8 || longitud > 15) {
        throw new Error("La longitud debe estar comprendida entre 8 y 15 caracteres.");
    }

    // Conjuntos de caracteres requeridos
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const digitos = "0123456789";
    const especiales = "!@#$%&*?+=-/";

    function obtenerCaracterAleatorio(cadena) {
        const indiceAleatorio = crypto.getRandomValues(new Uint32Array(1))[0] % cadena.length;
        return cadena[indiceAleatorio];
    }

    // 1. Asegurar al menos un carácter de cada tipo obligatorio
    const password = [
        obtenerCaracterAleatorio(mayusculas),
        obtenerCaracterAleatorio(minusculas),
        obtenerCaracterAleatorio(digitos),
        obtenerCaracterAleatorio(especiales)
    ];

    // 2. Rellenar el resto de la contraseña
    const todosLosCaracteres = mayusculas + minusculas + digitos + especiales;
    for (let i = 4; i < longitud; i++) {
        password.push(obtenerCaracterAleatorio(todosLosCaracteres));
    }

    // 3. Mezclar con Fisher-Yates
    for (let i = password.length - 1; i > 0; i--) {
        const j = crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);
        [password[i], password[j]] = [password[j], password[i]];
    }

    return password.join('');
}



const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');
const lengthVal = document.getElementById('length-val');
const generateBtn = document.getElementById('btn-generate');

// Ajustar los límites del slider para que coincidan con tu validación (8 a 15)
if (lengthInput) {
    lengthInput.min = "8";
    lengthInput.max = "15";
    if (lengthInput.value < 8 || lengthInput.value > 15) {
        lengthInput.value = "12";
    }
    lengthVal.textContent = lengthInput.value;
}

// Función para actualizar la pantalla
function actualizarPassword() {
    try {
        const len = parseInt(lengthInput.value, 10);
        passwordInput.value = generarPassword(len);
    } catch (error) {
        console.error(error.message);
    }
}

// Evento al mover el slider de longitud
lengthInput.addEventListener('input', () => {
    lengthVal.textContent = lengthInput.value;
    actualizarPassword();
});

// Evento al dar clic al botón "Generar Contraseña"
generateBtn.addEventListener('click', actualizarPassword);

// Generar una contraseña automáticamente al cargar la página
actualizarPassword();