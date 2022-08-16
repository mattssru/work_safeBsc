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
	<title>Work SafeBsc</title>
  <script>
      
  </script>
</head>
<body class="dark" style="font-family: 'Work Sans', sans-serif !important; padding-bottom: 10vh;">
	<div class="container position-relative" >
    <div class="d-flex align-items-center justify-content-between flex-column flex-md-row mb-5 pt-5">
	  	<h1 class="headline text-white position-relative d-inline-flex mb-4 mb-md-0">Claim Nfts</h1>
    </div>
    <div class="form-profile">
      <div class="row mb-5 align-items-center">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="box-user d-flex align-items-center mb-4 mb-md-0">
            <div class="image-profile mr-4">
              <img src="./dist/images/mr_ball.jpeg" alt="" class="w-100 h-100">
            </div>
            <div class="name-profile text-white">
              MR.BALL
              <a href="#" class="d-block" style="font-size: 16px;">@mrball</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="input-address ml-auto">
            <p class="mb-0 text-truncate text-white" id="wallet_address">0xef658fc96514c1137d5f21e0b707f047455ead25</p>
            <button type="button" class="btn ml-4 btn-copy d-block p-0" onclick="copyToClipboard('#wallet_address')">
              <img src="./dist/images/copy-address.svg" alt="">
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="my-inventory" id="accordion">
      <div class="row position-relative">
        <div class="order-1 order-md-1 col-md-4 col-sm-6 col-xs-12" id="headingOne">
          <div class="card-nfts card" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <img class="card-img-top" src="./dist/images/nfts_1.png" alt="Card image cap">
            <div class="card-body p-0 mt-3">
                <h5 class="card-title mb-0">Nfts_1</h5>
                <!-- <button type="button" class="btn btn-primary w-100">Claim</button> -->
            </div>
          </div>
        </div>
        <div class="order-3 order-md-2 col-md-4 col-sm-6 col-xs-12">
          <div class="card-nfts card" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <img class="card-img-top" src="./dist/images/nfts_2.jpeg" alt="Card image cap">
            <div class="card-body p-0 mt-3">
                <h5 class="card-title mb-0">Nfts_2</h5>
                <!-- <button type="button" class="btn btn-primary w-100">Claim</button> -->
            </div>
          </div>
        </div>
        <div class="order-5 order-md-3 col-md-4 col-sm-6 col-xs-12">
          <div class="card-nfts card" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <img class="card-img-top" src="./dist/images/nfts_3.jpeg" alt="Card image cap">
            <div class="card-body p-0 mt-3">
                <h5 class="card-title mb-0">Nfts_3</h5>
                <!-- <button type="button" class="btn btn-primary w-100">Claim</button> -->
            </div>
          </div>
        </div>
        <div class="order-7 order-md-5 col-md-4 col-sm-6 col-xs-12">
          <div class="card-nfts card" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
            <img class="card-img-top" src="./dist/images/nfts_1.png" alt="Card image cap">
            <div class="card-body p-0 mt-3">
                <h5 class="card-title mb-0">Nfts_1</h5>
                <!-- <button type="button" class="btn btn-primary w-100">Claim</button> -->
            </div>
          </div>
        </div>
        <div class="order-9 order-md-6 col-md-4 col-sm-6 col-xs-12">
          <div class="card-nfts card" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseTwo">
            <img class="card-img-top" src="./dist/images/nfts_2.jpeg" alt="Card image cap">
            <div class="card-body p-0 mt-3">
                <h5 class="card-title mb-0">Nfts_2</h5>
                <!-- <button type="button" class="btn btn-primary w-100">Claim</button> -->
            </div>
          </div>
        </div>
        <div class="order-11 order-md-7 col-md-4 col-sm-6 col-xs-12">
          <div class="card-nfts card" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
            <img class="card-img-top" src="./dist/images/nfts_3.jpeg" alt="Card image cap">
            <div class="card-body p-0 mt-3">
                <h5 class="card-title mb-0">Nfts_3</h5>
                <!-- <button type="button" class="btn btn-primary w-100">Claim</button> -->
            </div>
          </div>
        </div>
          <!-- box 1-->
        <div class="order-2 order-md-4 col-12 collapse collapse_claim" id="collapseOne" aria-labelledby="headingOne"
            data-parent="#accordion">
            <div class="card card-body">
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                        <img src="dist/images/coupon_1.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim d-flex p-0">Claim</button>
                </div>
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                        <img src="dist/images/coupon_2.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim">Claim</button>
                </div>
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                        <img src="dist/images/coupon_3.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim">Claim</button>
                </div>
            </div>
        </div>
          <!--box2-->
        <div class="order-4 order-md-4 col-12 collapse collapse_claim" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card card-body">
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                    <img src="dist/images/coupon_1.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim d-flex p-0">Claim</button>
                </div>
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                    <img src="dist/images/coupon_2.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim">Claim</button>
                </div>
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                    <img src="dist/images/coupon_3.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim">Claim</button>
                </div>
            </div>
        </div>
          <!-- box 3-->
        <div class="order-6 order-md-4 col-12 collapse collapse_claim" id="collapseThree" aria-labelledby="headingThree"
                data-parent="#accordion">
            <div class="card card-body">
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                        <img src="dist/images/coupon_1.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim d-flex p-0">Claim</button>
                </div>
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                        <img src="dist/images/coupon_2.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim">Claim</button>
                </div>
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                        <img src="dist/images/coupon_3.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim">Claim</button>
                </div>
            </div>
        </div>
          <!-- more 3-->
          <!-- box 1-->
        <div class="order-8 order-md-9 col-12 collapse collapse_claim" id="collapseFour" aria-labelledby="headingOne"
            data-parent="#accordion">
            <div class="card card-body">
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                        <img src="dist/images/coupon_1.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim d-flex p-0">Claim</button>
                </div>
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                        <img src="dist/images/coupon_2.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim">Claim</button>
                </div>
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                        <img src="dist/images/coupon_3.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim">Claim</button>
                </div>
            </div>
        </div>
          <!--box2-->
        <div class="order-10 order-md-10 col-12 collapse collapse_claim" id="collapseFive" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card card-body">
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                    <img src="dist/images/coupon_1.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim d-flex p-0">Claim</button>
                </div>
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                    <img src="dist/images/coupon_2.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim">Claim</button>
                </div>
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                    <img src="dist/images/coupon_3.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim">Claim</button>
                </div>
            </div>
        </div>
          <!-- box 3-->
        <div class="order-12 order-md-11 col-12 collapse collapse_claim" id="collapseSix" aria-labelledby="headingThree"
                data-parent="#accordion">
            <div class="card card-body">
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                        <img src="dist/images/coupon_1.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim d-flex p-0">Claim</button>
                </div>
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                        <img src="dist/images/coupon_2.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim">Claim</button>
                </div>
                <div class="card_claim align-items-center">
                    <div class="img_coupon">
                        <img src="dist/images/coupon_3.jpeg" alt="" width="300" height="200">
                    </div>
                    <div class="total_claim text-white text-center">3/50</div>
                    <button type="butotn" class="btn btn_claim">Claim</button>
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
  <script>
    $(document).ready(function(){
      $('.card-nfts').click(function(){
          $(this).parents('.row').find('.card-nfts').removeClass('active');
          $(this).addClass('active');
      });
    });
  </script>
</body>
</html>