function validationForm(){
    var number=document.getElementById('foo').value;
    var string=document.getElementById('bar').value;
    var phone=document.getElementById('baz').value;
    if(!Number.isInteger(Number(number))){
        document.getElementById('errors').innerHTML='not number';
        return false;
    }
    if (string.trim() === "") {
        document.getElementById('errors').innerHTML='not string';
        return false;
    }
    var phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$|^8 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('errors').innerHTML='Введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX или 8 (XXX) XXX-XX-XX';
        return false;
    }
    document.getElementById('errors').innerHTML='';
    return true;
}