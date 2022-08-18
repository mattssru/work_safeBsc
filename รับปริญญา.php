<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

?>
<!doctype html>
<html lang="en">
<head>
	<!-- Required meta tags -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="format-detection" content="telephone=no">
    <meta charset="utf-8">

	<!-- Bootstrap CSS -->
  	<link rel="stylesheet" href="dist/bootstrap/bootstrap.min.css" />
    <link rel="stylesheet" href="dist/fonts/font-kanit/font.kanit.css" />
    <link rel="stylesheet" href="dist/fonts/font-roboto/font-roboto.css" />
    <link rel="stylesheet" href="dist/fonts/fontawesome-free/css/all.min.css" />
    <link rel="stylesheet" href="dist/plugins/bootstrap-select/bootstrap-select.css">
    <link rel="stylesheet" href="./dist/jquery.confirm/jquery.confirm.css">
    <link rel="stylesheet" href="dist/css/global.css?v=<?=filemtime('dist/css/global.css');?>">
    <link rel="stylesheet" href="dist/css/theme.css?v=<?=filemtime('dist/css/theme.css');?>">
	  <link href="dist/plugins/bootstrap4-toggle/css/bootstrap4-toggle.min.css" rel="stylesheet">
	
	
	<link rel="stylesheet" href="./dist/css/animate.min.css">
	<title>รับปริญญางับ</title>
  <script>
      $('#accordion').collapse({
        toggle: false
      })
  </script>
</head>
<body class="dark" style="font-family: 'Work Sans', sans-serif !important; padding-bottom: 10vh;">
<div class="matt" style="height: 100vh; width: 100%;">
  <h1 class="headline text-white d-flex align-items-center justify-content-center" style="font-size: 90px; grid-column: 1;">จบมาแล้ว</h1>
  <h1 class="headline text-white d-flex align-items-center justify-content-center" style="font-size: 90px; grid-column: 3;">3 ปี</h1>
  <h1 class="headline text-white d-flex align-items-center justify-content-center" style="font-size: 90px; grid-column: 2; grid-row: 2; border: 3px dashed; border-radius: 16px;">ปริญญา !</h1>
  <h1 class="headline text-white d-flex align-items-center justify-content-center" style="font-size: 90px; grid-column: 1; grid-row: 3;">พึ่งจะ</h1>
  <h1 class="headline text-white d-flex align-items-center justify-content-center" style="font-size: 90px; grid-column: 3; grid-row: 3;">ได้รับ</h1>
</div>
	<!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="./dist/jquery/jquery-3.3.1.min.js?v=001"></script>
    <script src="./dist/bootstrap/popper.min.js"></script>
	<script src="./dist/bootstrap/bootstrap.min.js"></script>
	<script src="./dist/plugins/bootstrap4-toggle/js/bootstrap4-toggle.min.js"></script>
    <script src="./dist/plugins/bootstrap-select/bootstrap-select.min.js"></script>
	<script src="./dist/jquery.confirm/jquery.confirm.js"></script>
	<script src="./dist/js/main.js?v=<?=filemtime('./dist/js/main.js');?>"></script>
	<script src="./dist/js/animate.js"></script>
</body>
</html>