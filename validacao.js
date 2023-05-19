function validarLogin(event) {
    event.preventDefault(); // Impede o envio do formulário antes de validar
    
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    
    // Validação do e-mail e senha
    // Você pode adicionar suas próprias regras de validação aqui
    
    if (email.trim() === '') {
        alert('Por favor, digite um e-mail válido.');
        return false;
    }
    
    if (senha.trim() === '') {
        alert('Por favor, digite uma senha válida.');
        return false;
    }
    
    // Redirecionamento para a página após o login bem-sucedido
    window.location.href = 'index.html';
    
    return true;
}


