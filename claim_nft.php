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
    <link rel="stylesheet" href="dist/css/claim_nft.css?v=<?=filemtime('dist/css/claim_nft.css');?>">
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
	  	<h1 class="headline text-white position-relative d-inline-flex mb-4 mb-md-0">My Nfts</h1>
    </div>
      <div class="my-inventory mb-4">
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="card-nfts card"  data-toggle="collapse" data-target="#nft_1" aria-expanded="false" aria-controls="nft_1">
              <img class="card-img-top" src="./dist/images/nfts_1.png" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title mb-0">Nfts_1</h5>
                <!-- <button type="button" class="btn btn-primary w-100">Claim</button> -->
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="card-nfts card">
              <img class="card-img-top" src="./dist/images/nfts_2.jpeg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title mb-0">Nfts_2</h5>
                <!-- <button type="button" class="btn btn-primary w-100">Claim</button> -->
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="card-nfts card">
              <img class="card-img-top" src="./dist/images/nfts_3.jpeg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title mb-0">Nfts_3</h5>
                <!-- <button type="button" class="btn btn-primary w-100">Claim</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="collapse" id="nft_1">
        <div class="card card-body text-white">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
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