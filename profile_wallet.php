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
    <link rel="stylesheet" href="dist/css/main.min.css?v=<?=filemtime('dist/css/main.min.css');?>">
    <link rel="stylesheet" href="dist/css/profile.css?v=<?=filemtime('dist/css/profile.css');?>">
    <link rel="stylesheet" href="dist/css/theme.css?v=<?=filemtime('dist/css/theme.css');?>">
	  <link href="dist/plugins/bootstrap4-toggle/css/bootstrap4-toggle.min.css" rel="stylesheet">
	
	
	<link rel="stylesheet" href="./dist/css/animate.min.css">
	<title>Mrball</title>
  <script>
      function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
        alert("Address copied to clipboard");
      }
  </script>
</head>
<body class="dark">
	<div class="container-fluid px-0">
		<?php include('layers/header.php');?>
	</div>
	
	<div class="container position-relative">
		<h1 class="headline text-white-dimming pt-5 mb-5 position-relative d-inline-flex">Profile</h1>
    <div class="form-profile ">
      <div class="d-flex align-items-center mb-5">
        <div class="image-profile mr-4">
          <img src="./dist/images/profile.png" alt="" class="w-100 h-100">
        </div>
        <div class="name-profile text-white">
          mattew
          <a href="#" class="d-block">@mattew</a>
        </div>
      </div>
      <div class="my-wallet text-white mb-4">
        <div class="row align-items-center">
          <div class="col-md-5 col-sm-12 col-xs-12">
            <p class="title-profile mb-sm-4 mb-md-0">My Wallet</p>
          </div>
          <div class="col-md-7 col-sm-12 col-xs-12">
            <div class="input-address">
              <p class="mb-0 text-truncate" id="wallet_address">0xef658fc96514c1137d5f21e0b707f047455ead25</p>
              <button type="button" class="btn ml-4 btn-copy d-block p-0" onclick="copyToClipboard('#wallet_address')">
               <img src="./dist/images/copy-address.svg" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="tabs-wallet">
        <ul class="list-tabs nav nav-pills mb-3">
          <li class="nav-item">
            <a class="btn-tabs active" id="pills-home-tab" data-toggle="pill" href="#bsc-chain" role="tab" aria-controls="pills-home" aria-selected="true">
              <img src="./dist/images/bsc.png" alt="" class="mr-3" style="width: 30px;">
              Binance Chain
            </a>
          </li>
          <li class="nav-item">
            <a class="btn-tabs" id="pills-profile-tab" data-toggle="pill" href="#eth-chain" role="tab" aria-controls="pills-profile" aria-selected="false">
              <img src="./dist/images/eth.png" alt="" class="mr-3" style="width: 30px;">
              Ethereum
            </a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="bsc-chain" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="box-coin mb-4">
              <h3 class="title-wallet text-white mb-3 text-center">Binance Smart Chain</h3>
              <div class="d-flex align-items-center justify-content-between w-100 mb-3">
                <div class="d-flex">
                  <img src="./dist/images/bsc.png" alt="" style="width: 30px;">
                  <p class="text-white-dimming mb-0 ml-3">BNB</p>
                </div>
                <p class="mb-0 text-white-dimming">0 BNB / 0 $</p>
              </div>
              <div class="d-flex align-items-center justify-content-between w-100 mb-3">
                <div class="d-flex">
                  <img src="./dist/images/bsc.png" alt="" style="width: 30px;">
                  <p class="text-white-dimming mb-0 ml-3">BNB</p>
                </div>
                <p class="mb-0 text-white-dimming">0 BNB / 0 $</p>
              </div>
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img src="./dist/images/bsc.png" alt="" style="width: 30px;">
                  <p class="text-white-dimming mb-0 ml-3">BNB</p>
                </div>
                <p class="mb-0 text-white-dimming">0 BNB / 0 $</p>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="eth-chain" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div class="box-coin">
              <h3 class="title-wallet text-white mb-3 text-center">Ethereum</h3>
              <div class="d-flex align-items-center justify-content-between w-100 mb-3">
                <div class="d-flex">
                  <img src="./dist/images/eth.png" alt="" style="width: 30px;">
                  <p class="text-white-dimming mb-0 ml-3">ETH</p>
                </div>
                <p class="mb-0 text-white-dimming">0 ETH / 0 $</p>
              </div>
              <div class="d-flex align-items-center justify-content-between w-100 mb-3">
                <div class="d-flex">
                  <img src="./dist/images/eth.png" alt="" style="width: 30px;">
                  <p class="text-white-dimming mb-0 ml-3">ETH</p>
                </div>
                <p class="mb-0 text-white-dimming">0 ETH / 0 $</p>
              </div>
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img src="./dist/images/eth.png" alt="" style="width: 30px;">
                  <p class="text-white-dimming mb-0 ml-3">ETH</p>
                </div>
                <p class="mb-0 text-white-dimming">0 ETH / 0 $</p>
              </div>
            </div>
          </div>
        </div>
       </div>
      <div class="my-inventory"></div>
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