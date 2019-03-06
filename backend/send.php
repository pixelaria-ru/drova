<?php
$fio = $_POST['name'];
$email = $_POST['force'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$fio = urldecode($fio);
$email = urldecode($email);
$fio = trim($fio);
$email = trim($email);

mail("webreddevo@yandex.ru", "Заявка с сайта", "имя:".$fio.". способ связи: ".$email ,"From: webreddevo.ru \r\n")

?>