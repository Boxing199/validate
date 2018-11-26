$('#myForm').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        name: {
            required: true,
            minlength: 3
        },
        password: {
            required: true,
            minlength: 6
        },
        password_again: {
            required: true,
            minlength: 6,
            equalTo: '#inputPassword'
        },
        tel: {
            required: true,
            minlength: 10,
            digits: true
        }
    },
    messages: {
        email: {
            required: 'Поле email обязательно для заполнения'
        },
        name: {
            required: 'Поле имя обязательно для заполнения',
            minlength: jQuery.validator.format('Минимальная длина имени {0}-х символа')
        },
        password: {
            required: 'Поле пароля обязательно для заполнения',
            minlength: jQuery.validator.format('Минимальная длина пароля {0} символов')
        },
        password_again: {
            required: 'Поле "повторите пароль" обязательно для заполнения',
            minlength: jQuery.validator.format('Минимальная длина пароля {0} символов'),
            equalTo: 'Повторите одно и то же значение'
        },
        tel: {
            required: 'Поле "повторите пароль" обязательно для заполнения',
            minlength: jQuery.validator.format('Минимальная длина номера {0} символов'),
            digits: 'Номер должен состоять только из цифр'
        },
    },
    focusCleanup: true,
    submitHandler: function () {
        alert('valid');
    }
});