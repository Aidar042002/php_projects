<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="validation.js"></script>
</head>
<body>
    <form action="get_data.php" onsubmit="return validationForm()">
        <div>Введите данные:</div>
        <p>Foo:<input type="text" name="foo" id="foo" placeholder="Введите целое число"></p>
        <p>Bar:<input type="text" name="bar" id="bar" placeholder="Введите строку"></p>
        <p>Baz:<input type="text" name="baz" id="baz" placeholder="Введите российский номер телефона"></p>
        <input type="submit">
    </form>
    <div id="errors"></div>
</body>
</html>