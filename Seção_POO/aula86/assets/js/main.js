class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const validFields = this.fieldsIsValid();
        const validPasswords = this.passwordIsValid();

        if (validFields && validPasswords){
            alert('Formulário enviado.')
            this.formulario.submit();
        }
    }

    passwordIsValid(){
        let valid = true;

        const password = this.formulario.querySelector('.password');
        const passwordRepeat = this.formulario.querySelector('.password2');

        if(password.value !== passwordRepeat.value){
            valid = false;
            this.createError(password, 'As senhas devem ser iguais.')
            this.createError(passwordRepeat, 'As senhas devem ser iguais.')
        }

        if(password.value.length < 6 || password.value.length > 12){
            valid = false;
            this.createError(password, 'A senha precisa conter entre 6 e 12 caracteres.')
        }
        return valid;
    }

    fieldsIsValid(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let field of this.formulario.querySelectorAll('.validar')){
            const label = field.previousElementSibling.innerText;

            if(!field.value){
                this.createError(field, `Campo "${label}" não pode estar em branco.`)
            }

            if(field.classList.contains('cpf')){
                if(!this.validaCPF(field)) valid = false;
            }

            if(field.classList.contains('username')){
                if(!this.validaUsuario(field)) valid = false;
            }
        };

        return valid;
    }

    validaUsuario(field){
        const usuario = field.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12){
            this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres.')
            valid = false;
        }

        if(!usuario.match(/[a-zA-Z0-9]+$/g)){
            this.createError(field, 'Nome de usuário precisa conter apenas letras e/ou números.')
            valid = false;
        }

        return valid;
    }

    validaCPF(field){
        const cpf = new ValidaCPF(field.value);

        if(!cpf.valida()){
            this.createError(field, 'CPF Inválido.');
            return false;
        }

        return true;
    }

    createError(field, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();