<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Allow-Credentials: true");
    header("Content-Type: application/json");
    $get = array(
        'login'  => '493358_stroyzar',
        'pass' => 'sAVDkrEbqd',
        'art' => 'OC47'
    );

    $ch = curl_init('api.forum-auto.ru/v2/clientinfo?' . http_build_query($get));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_HEADER, false);
    $html = curl_exec($ch);
    curl_close($ch);
    
    echo $html;
    /*header('Access-Control-Allow-Origin: http://localhost:3000');
    $user = $_POST['name'];
    echo ("Hello from server: $user");*/
?>