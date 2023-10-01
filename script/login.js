  document.addEventListener('DOMContentLoaded', function () {
    const usuarioInput = document.getElementById('usuario');
    const contrasenaInput = document.getElementById('contrasena');
    const usuarioLabel = document.querySelector('label[for="usuario"]');
    const contrasenaLabel = document.querySelector('label[for="contrasena"]');
    const usuarioErrorMessage = document.querySelector('.form-group:nth-child(1) .error-message');
    const contrasenaErrorMessage = document.querySelector('.form-group:nth-child(2) .error-message');
    const submitButton = document.querySelector('button[type="submit"]');

    function validarUsuario(valor) {
      const tieneMinusculas = /[a-z]/.test(valor);
      const tieneNumeros = /\d{2,}/.test(valor);
      const longitudValida = valor.length > 6;
      return tieneMinusculas && tieneNumeros && longitudValida;
    }

    function validarContrasena(valor) {
      const tieneMayuscula = /[A-Z]/.test(valor);
      const tieneMinuscula = /[a-z]/.test(valor);
      const tieneCaracterEspecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valor);
      const longitudValida = valor.length >= 8;
      return tieneMayuscula && tieneMinuscula && tieneCaracterEspecial && longitudValida;
    }

    usuarioInput.addEventListener('focus', function () {
      usuarioLabel.style.top = '0%';
    });

    usuarioInput.addEventListener('blur', function () {
      if (usuarioInput.value === '') {
        usuarioLabel.style.top = '50%';
        usuarioLabel.style.paddingLeft = '4px'
        usuarioErrorMessage.style.display = 'none';
        usuarioInput.style.border = '1px solid var(--color-main)';
      } else if (!validarUsuario(usuarioInput.value)) {
        usuarioLabel.style.top = '0%';
        usuarioLabel.style.color = 'red';
        usuarioLabel.style.paddingLeft = '4px'
        usuarioErrorMessage.style.display = 'block';
        usuarioInput.style.border = '1px solid red';
        usuarioErrorMessage.textContent = 'Ingrese un usuario válido';
      }
    });

    contrasenaInput.addEventListener('focus', function () {
      contrasenaLabel.style.top = '0';
    });

    contrasenaInput.addEventListener('blur', function () {
      if (contrasenaInput.value === '') {
        contrasenaLabel.style.top = '50%';
        contrasenaLabel.style.paddingLeft = '4px'
        contrasenaErrorMessage.style.display = 'none';
        contrasenaInput.style.border = '1px solid var(--color-main)';
    } else if (!validarContrasena(contrasenaInput.value)) {
        contrasenaLabel.style.top = '0';
        contrasenaLabel.style.color = 'red';
        contrasenaLabel.style.paddingLeft = '4px'
        contrasenaErrorMessage.style.display = 'block';
        contrasenaInput.style.border = '1px solid red';
        contrasenaErrorMessage.textContent = 'Ingrese una contraseña válida';
      }
    });

    document.querySelector('form').addEventListener('submit', function (event) {
      if (!validarUsuario(usuarioInput.value) || !validarContrasena(contrasenaInput.value)) {
        event.preventDefault()
        usuarioInput.style.border = '1px solid red';
        contrasenaInput.style.border = '1px solid red';
        usuarioLabel.style.color = 'red';
        usuarioLabel.style.paddingLeft = '8px'
        contrasenaLabel.style.color = 'red';
        contrasenaLabel.style.paddingLeft = '8px'
        usuarioErrorMessage.style.display = 'block';
        contrasenaErrorMessage.style.display = 'block';
        usuarioErrorMessage.textContent = 'Ingrese un usuario válido';
        contrasenaErrorMessage.textContent = 'Ingrese una contraseña válida';
      }
    });
  });