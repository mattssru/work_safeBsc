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
        var $alert =  document.getElementById("alert_address");
        $alert.style.display = "block"
      }
  </script>
</head>
<body class="dark" style="font-family: 'Work Sans', sans-serif !important; padding-bottom: 10vh;">
	<div class="container-fluid px-0">
		<?php include('layers/header.php');?>
	</div>
	<div class="container position-relative" >
  <div class="alert alert_copy text-white" id="alert_address" role="alert">
    Address copied to clipboard !
  </div>
    <div class="d-flex align-items-center justify-content-between flex-column flex-md-row mb-5 pt-5">
	  	<h1 class="headline text-white position-relative d-inline-flex mb-4 mb-md-0">Profile</h1>
      <div class="input-address">
        <p class="mb-0 text-truncate text-white" id="wallet_address">0xef658fc96514c1137d5f21e0b707f047455ead25</p>
        <button type="button" class="btn ml-4 btn-copy d-block p-0" onclick="copyToClipboard('#wallet_address')">
          <img src="./dist/images/copy-address.svg" alt="">
        </button>
      </div>
    </div>
    <div class="form-profile ">
      <div class="box-user d-flex align-items-center mb-5">
        <div class="image-profile mr-4">
          <img src="./dist/images/mr_ball.jpeg" alt="" class="w-100 h-100">
        </div>
        <div class="name-profile text-white">
          MR.BALL
          <a href="#" class="d-block mb-4" style="font-size: 16px;">@mrball</a>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <p class="text-white mb-1" style="font-size: 15px; line-height: 14px;">Completed Quest : 38/50</p>
        <p class="text-white mb-1 d-flex flex-column align-items-center" style="font-size: 15px; line-height: 14px; font-style: italic;">
          <img src="dist/images/ic-nfts.webp" alt="" style="height: 30px; width: 40px; border-radius: 8px;" class="mb-1">
          Claim NFTS
        </p>
      </div>
      <div class="exp-profile progress mb-5">
        <div class="progress-bar bg-warning" role="progressbar" style="width: 60%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="tabs-wallet">
        <ul class="list-tabs nav nav-pills mb-4">
          <li class="nav-item">
            <a class="btn-tabs" id="pills-home-tab" data-toggle="pill" href="#my-nfts" role="tab" aria-controls="pills-home" aria-selected="true">
              My Nfts
            </a>
          </li>
          <li class="nav-item">
            <a class="btn-tabs active" id="pills-profile-tab" data-toggle="pill" href="#my-reward" role="tab" aria-controls="pills-profile" aria-selected="false">
              My Reward
            </a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade" id="my-nfts" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="my-inventory">
              <h3 class="title-profile text-white position-relative pl-3 mb-4">My Nfts</h3>
              <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="card-nfts card">
                    <img class="card-img-top" src="./dist/images/nfts_1.png" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">Nfts</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <!-- <button type="button" class="btn btn-primary w-100">Claim</button> -->
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="card-nfts card">
                    <img class="card-img-top" src="./dist/images/nfts_2.jpeg" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">Nfts</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <!-- <button type="button" class="btn btn-primary w-100">Claim</button> -->
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="card-nfts card">
                    <img class="card-img-top" src="./dist/images/nfts_3.jpeg" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">Nfts</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <!-- <button type="button" class="btn btn-primary w-100">Claim</button> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade show active" id="my-reward" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div class="my-reward">
            <h3 class="title-profile text-white position-relative pl-3 mb-4">My Reward</h3>
              <div class="row justify-content-center">
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="card-reward p-4">
                    <div class="title-reward text-white text-center mb-3">Sync Wallets</div>
                    <div class="image-reward mb-2">
                      <img src="dist/images/metamask.png" class="w-100 h-100" alt="">
                    </div>
                    <p class="text-exp text-center mb-3 d-flex align-items-center justify-content-center">
                      <img src="dist/images/ic-cup.svg" alt="" class="mr-2">
                      100 EXE
                    </p>
                    <button class="btn btn-metamask">
                      <img src="dist/images/ic-metamask.png" alt="">
                      Connect to Metamask
                    </button>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="card-reward p-4">
                    <div class="title-reward text-white text-center mb-3">Sync Twitter</div>
                    <div class="image-reward mb-2">
                     <img src="dist/images/twitter.png" class="w-100 h-100" alt="">
                    </div>
                    <p class="text-exp text-center mb-3 d-flex align-items-center justify-content-center">
                      <img src="dist/images/ic-cup.svg" alt="" class="mr-2">
                      100 EXE
                    </p>
                    <button class="btn btn-twitter">
                      <img src="dist/images/icon-tw.png" alt="">
                      Sync Twitter
                    </button>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="card-reward p-4">
                    <div class="title-reward text-white text-center mb-3">Daily Quest</div>
                    <div class="image-reward mb-2">
                     <img src="dist/icons/icon-logo-green.png" class="w-100 h-100" alt="">
                    </div>
                    <p class="text-exp text-center mb-3 d-flex align-items-center justify-content-center">
                      <img src="dist/images/ic-cup.svg" alt="" class="mr-2">
                      100 EXE
                    </p>
                    <button class="btn btn-twitter">
                      Claim
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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