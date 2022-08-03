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
    <link rel="stylesheet" href="dist/css/referrals.css?v=<?=filemtime('dist/css/referrals.css');?>">
    <link rel="stylesheet" href="dist/css/theme.css?v=<?=filemtime('dist/css/theme.css');?>">
	  <link href="dist/plugins/bootstrap4-toggle/css/bootstrap4-toggle.min.css" rel="stylesheet">
	
	
	<link rel="stylesheet" href="./dist/css/animate.min.css">
	<title>Work SafeBsc</title>
  <script>
      
  </script>
</head>
<body class="dark" style="font-family: 'Work Sans', sans-serif !important; padding-bottom: 10vh;">
	<div class="container position-relative" >
    <div class="mb-5 pt-5">
	  	<h1 class="headline text-white position-relative d-inline-flex mb-4 mb-md-0">Referrals</h1>
    </div>
    <div class="box_referrals">
      <div class="title_referrals text-center">
        <h2 class="text-white">Grow Your SnapBlockC Family</h2>
        <p class="mb-0">You don't have any referrals yet.</p>
        <img src="dist/images/img_user.svg" alt="" class="my-4">
        <p>You and your friend will each get 300 point when they connect their first portfolio or deposit into SnapBlockC wallet</p>
        <a href="" class="d-block mb-4">LEARN MORE</a>
      </div>
      <div class="copy_clipboard mb-4">
        <p class="mb-1 ml-1">My referral link:</p>
        <div class="input-address text-gray">
          <p class="mb-0 text-truncate id="wallet_address">https://snapblockc.com/dashboard</p>
          <button type="button" class="btn ml-4 btn-copy d-block p-0" onclick="copyToClipboard('#wallet_address')">
            <img src="./dist/images/copy-address.svg" alt="">
          </button>
        </div>
      </div>
      <div class="list_referrls">
        <div class="top_list mb-4 d-flex align-items-center justify-content-between">
          <p class="mb-0">People Referred(1/1)</p>
          <p class="mb-0">Status</p>
        </div>
        <div class="list_active d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img src="dist/images/email.png" alt="" width="25" height="25" class="mr-2">
            <p class="mb-0 text-white">ball.js******</p>
          </div>
          <div class="text-success">Active</div>
        </div>
        <div class="list_active d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img src="dist/images/email.png" alt="" width="25" height="25" class="mr-2">
            <p class="mb-0 text-white">ball.js******</p>
          </div>
          <div class="text-secondary">Pending to connect / deposit</div>
        </div>
      </div>
    </div>
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