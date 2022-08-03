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
    <link rel="stylesheet" href="dist/css/theme.css?v=<?=filemtime('dist/css/theme.css');?>">
	<link href="dist/plugins/bootstrap4-toggle/css/bootstrap4-toggle.min.css" rel="stylesheet">
	
	
	<link rel="stylesheet" href="./dist/css/animate.min.css">
	<title>Mrball</title>
</head>
<body class="dark">
	<div class="container-fluid px-0">
		<?php include('layers/header.php');?>
	</div>
	
	<div class="container-fluid position-relative">
		<h1 class="text-white-dimming pt-5 pb-3 w-100">Template<p  class="f1"id="online"></span></h1>
		<div class="row">
			<div class="col-12 mb-3">
				<div class="card">
					<div class="card-body">
						<label class="text-muted">Estimated Profit and Loss all</label>
						<p class="h1">
							<span id="">0.00$</span>
							<small class="text-white-dimming f1 sub_diff_total ml-2">≈0.00</small>
						</p>						
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container-fluid text-white-dimming">
		Simple Text
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