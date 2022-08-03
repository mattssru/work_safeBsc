<?php require('./app/sessions/start.php'); require_once('../maps/app/database/connect.php'); /*PHP::showError(); #show error php*/ PHP::referer(); /*header referer_page*/ require_once('app/controllers/langController.php'); require_once('../maps/app/controllers/viewController.php'); require_once('../maps/app/controllers/mapsController.php'); require_once('../maps/app/controllers/userController.php'); require_once('../kyc/store/config.php'); require_once('../maps/app/controllers/config.php'); /*echo PHP::current_url()['lang'];*/ $db = new ConnectDB(); $conn = $db->connect(); $lang = isset($_GET['lang']) ? $_GET['lang'] : 'en'; $lg = new lang($lang); $view = new viewController(); $counter = $view->view()['data']; $map = new mapController(); $user = new userController(); $config = new Config(); $category = $config->cat_config_free; require('app/sessions/view.php'); /*view html login or not login*/ require('app/sessions/checklogin.php'); /*checklogin*/ $user_id = $map->en($lineUser['sub']); $user_name = $lineUser['name']; $user_picture = $lineUser['picture']; $storeall = 0; $rateall = 0; $ratingall = 0; $dashboard = $map->getDashboardFree($lineUser['sub']); if($dashboard['result'] == "success"){ $storeall = number_format($dashboard['data'][0]['storeall']); $ratingall = number_format($dashboard['data'][0]['reviewall'],1); $rateall = number_format($dashboard['data'][0]['rateall']); } $galleryJSON = $map->getImageAll($lineUser['sub'],[ 'imagepath'=>$pathimage, 'imagepathreview'=>$pathimagereview ]); $gallery = ''; foreach($galleryJSON as $key=>$value){ $gallery.= '<div class="col-6 col-sm-4 col-md-3 '.$value['type'].'"> <div class="item position-relative"> <a data-fancybox="gallery" data-caption="'.$value['topic'].'" href="'.$value['files'].'"> <img class="w-100" src="'.$value['files'].'"> <div class="fancybox-text-position position-absolute"> <p class="text-truncate p-2 mb-0 ">'.$value['topic'].'</p> </div> </a> <a class="btn-link" target=\'_blank\' href=\'./?view='.$value['view'].'&lang='.$lang.'\'><i class=\'fas fa-eye\'></i></a> </div> </div>'; } $getUserFull = $user->getUserFull($lineUser['sub']); $jsonUser = $getUserFull[0]; ?> <!DOCTYPE html> <html lang="en"> <head> <!-- Required meta tags --> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"> <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"> <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"> <link rel="manifest" href="favicon/site.webmanifest"> <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#000000"> <link rel="shortcut icon" href="favicon/favicon.ico"> <meta name="msapplication-TileColor" content="#ffc40d"> <meta name="msapplication-config" content="favicon/browserconfig.xml"> <meta name="theme-color" content="#ffffff"> <!-- Bootstrap CSS --> <link rel="stylesheet" href="dist/bootstrap/bootstrap.min.css" /> <link rel="stylesheet" href="dist/fonts/font-kanit/font.kanit.css" /> <link rel="stylesheet" href="dist/fonts/fontawesome-free/css/all.min.css" /> <link rel="stylesheet" href="plugins/ol-v6.5.0-dist/ol.css" /> <link rel="stylesheet" href="dist/owl/owl.carousel.min.css" /> <link rel="stylesheet" href="dist/css/main.min.css?v=<?=filemtime('dist/css/main.min.css');?>"> <link rel="stylesheet" href="dist/plugins/fancybox/jquery.fancybox.css" /> <link rel="stylesheet" href="./dist/css/star.css"> <link rel="stylesheet" href="./dist/jquery.confirm/jquery.confirm.css" /> <link rel="stylesheet" href="./dist/plugins/datatables/fixedHeader.bootstrap.min.css"> <link rel="stylesheet" href="./dist/css/card-review.css?v=<?=filemtime('./dist/css/card-review.css');?>"> </head> <?include('layers/analytic.php');?> <title><?=$lg->text[4];?> Manage</title> </head> <body style=""> <div class="container-fluid px-0 border-bottom mb-0 shadow"><?php include('layers/nav.php');?></div> <div class="container-fluid px-0"> <div id="pills-tab-profile" class="jumbotron jumbotron-fluid bg-banner-profile position-relative"> <button type="button" class="btn btn-light position-absolute btn-edit-profile"><i class="fas fa-user-edit"></i> <?=$lg->text[36];?></button> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-sm-4 text-center mb-2"> <img class="align-self-center rounded-pill image-profile mr-1" src="<?=$user_picture;?>" onerror="this.onerror=null;this.src='../maps/dist/icons/icons8-user.png';" alt="<?=$lg->text[4];?>"> <p class="h4 mt-3"><?=$user_name;?></p> </div> <div class="col-12 col-sm-8 row align-items-center mb-2"> <div class="col"> <strong class="h5" id="storeall"><?=$storeall;?></strong> <p class="text-muted"><?=$lg->text[37];?></p> </div> <div class="col"> <strong class="h5" id="rateall"><?=$rateall;?></strong> <p class="text-muted"><?=$lg->text[38];?></p> </div> <div class="col"> <strong class="h5" id="ratingall"><?=$ratingall;?></strong> <p class="text-muted"><?=$lg->text[39];?></p> </div> </div> </div> </div> </div> <div class="d-flex justify-content-center"> <main role="main" class="container p-0"> <input type="hidden" id="notfound" value="<?=$lg->text[18];?>"> <input type="hidden" id="textreview" value="<?=$lg->text[10];?>"> <input type="hidden" id="textfrom" value="<?=$lg->text[19];?>"> <input type="hidden" id="textrecord" value="<?=$lg->text[20];?>"> <input type="hidden" id="incorrect" value="<?=$lg->text[45];?>"> <input type="hidden" id="blank" value="<?=$lg->text[44];?>"> <input type="hidden" id="userkey" value="<?=$user_id;?>"> <div class="card mb-3 box-tab-content"> <div class="card-body p-0"> <ul class="nav nav-pills nav-justified" id="pills-tab" role="tablist"> <li class="nav-item"> <a class="nav-link text-secondary active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><?=$lg->text[37];?></a> </li> <li class="nav-item"> <a class="nav-link text-secondary" id="pills-review-tab" data-toggle="pill" href="#pills-review" role="tab" aria-controls="pills-profile" aria-selected="false"><?=$lg->text[10];?></a> </li> <li class="nav-item"> <a class="nav-link text-secondary" id="pills-picture-tab" data-toggle="pill" href="#pills-picture" role="tab" aria-controls="pills-contact" aria-selected="false"><?=$lg->text[13];?></a> </li> <li class="nav-item d-none"> <a class="nav-link text-secondary" id="pills-edit-tab" data-toggle="pill" href="#pills-edit" role="tab" aria-controls="pills-contact" aria-selected="false"><?=$lg->text[13];?></a> </li> </ul> </div> </div> <div class="row mx-0"> <div class="col-12 col-sm-12 px-0 px-sm-1 mb-2"> <div class="card"> <div class="tab-content card-body" id="pills-tabContent"> <!-- tab 1 --> <div class="tab-pane fade show active table-responsive w-100" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"> <table class="table" id="data-manage"> <thead> <tr class="align-middle text-center f-9"> <th class="align-middle bg-white">#</th> <th class="align-middle text-left bg-white"><?=$lg->text[40];?></th> <th class="align-middle text-left"><?=$lg->text[41];?></th> <th class="align-middle text-left"><?=$lg->text[42];?></th> <th class="align-middle">•••</th> </tr> </thead> </table> </div> <!-- tab 2 --> <div class="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-profile-tab"> <div class="my-3 p-0 rounded shadow-sm box-history" id="history"> <h4 class="w-100 text-center text-muted"><?=$lg->text[18];?></h4> </div> </div> <!-- tab 3 --> <div class="tab-pane fade" id="pills-picture" role="tabpanel" aria-labelledby="pills-contact-tab"> <div class="btn-group mb-3" id="filters"> <button type="button"class="btn btn-light" data-filter="*"><?=$lg->text[35];?></button> <button type="button"class="btn btn-light" data-filter=".Data"><?=$lg->text[43];?></button> <button type="button"class="btn btn-light" data-filter=".Review"><?=$lg->text[10];?></button> </div> <div class="row no-gutters box-img p-0" id="box-img"> <?=$gallery;?> </div> </div> <!-- tab 4 --> <div class="tab-pane fade" id="pills-edit" role="tabpanel" aria-labelledby="pills-contact-tab"> <form method="POST" id="form-user"> <div class="modal-header"> <h5 class="modal-title font-weight-bold" id="exampleModalLongTitle"><i class="fas fa-pencil-alt"></i> <?=strtoupper($lg->text[36]);?></h5> </div> <div class="modal-body"> <div class="row"> <div class="col-12"> <div class="media d-flex align-items-center mb-3"> <img id="userPicture" style="width: 50px; height: 50px;" class="rounded-pill mr-3" src="<?=$jsonUser['picture'];?>" alt="LandMark" onerror="this.onerror=null;this.src='../maps/dist/icons/icons8-user-64.png';"> <div class="media-body"> <h6 class="mt-0"><span id="userDisplay"><?=$jsonUser['display'];?></span> <?php if($jsonUser['category'] == "line"){ echo '<button type="button" class="btn btn-sm btn-warning rounded-pill ml-3" onclick="refreshProfile();">Refresh Profile</button>'; } ?> </h6> </div> </div> </div> <div class="col-6"> <div class="form-group"> <label for=""><?=$lg->text[46];?></label> <input type="text" class="form-control" name="username" id="displayname" placeholder="<?=$lg->text[46];?>" value="<?=$jsonUser['display'];?>"> </div> </div> <div class="col-6"> <div class="form-group"> <label for=""><?=$lg->text[47];?></label> <input type="text" class="form-control" name="phone" id="phone" placeholder="<?=$lg->text[47];?>"value="<?=$jsonUser['otp'];?>"> </div> </div> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-secondary btn-sm btn-edit-profile-close">Close</button> <button type="submit" name="save" class="btn btn-warning btn-sm"><i class="fas fa-save"></i> Update</button> <button type="button" name="btn-load" class="btn btn-warning btn-sm" style="display: none;" disabled><i class="fas fa-spinner"></i> Save changes</button> </div> </form> </div> </div> </div> </div> <!-- <div class="col-12 col-sm-4 px-0 px-sm-1 mb-2"> <div class="card"> <div class="card-bo">xxx</div> </div> </div> --> </div> </main> <div class="alert alert-success" id="success-alert"> <button type="button" class="close" data-dismiss="alert">x</button> <strong><i class="fas fa-bell"></i> Success! </strong> <p>Successfully executed.</p> </div> <div class="alert alert-danger" id="error-alert"> <button type="button" class="close" data-dismiss="alert">x</button> <strong><i class="fas fa-bell"></i> Error! </strong> <p><?=$lg->text[28];?></p> </div> </div> </div> <!-- footer --> <footer class="bg-light text-center text-white mt-5"> <!-- Grid container --> <div class="container p-4 pb-0"> <!-- Section: Social media --> <section class="mb-4"> <!-- Facebook --> <a class="btn btn-primary btn-floating m-1" style="background-color: #3b5998;" href="#!" role="button" ><i class="fab fa-facebook-f"></i ></a> <!-- Twitter --> <a class="btn btn-primary btn-floating m-1" style="background-color: #55acee;" href="#!" role="button" ><i class="fab fa-twitter"></i ></a> </section> <!-- Section: Social media --> </div> <!-- Grid container --> <!-- Copyright --> <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);"> © 2022 Copyright: <a class="text-white" href="https://safebsc.finance/"><?=$lg->text[4];?></a> </div> <!-- Copyright --> </footer> <input type="hidden" id="userId" value="<?=$user_id;?>"/> <input type="hidden" id="lang" value="<?=$lang;?>"> <input type="hidden" id="alert" value="<?=$lg->text[27];?>"> <input type="hidden" id="confirm" value="<?=$lg->text[29];?>"> <input type="hidden" id="required" value="<?=$lg->text[30];?>"> <input type="hidden" id="warning" value="<?=$lg->text[28];?>"> <?php include('layers/modal_manage.php');?> <!-- Optional JavaScript --> <!-- jQuery first, then Popper.js, then Bootstrap JS --> <script src="dist/jquery/jquery-3.3.1.min.js?v=001"></script> <script src="dist/bootstrap/popper.min.js"></script> <script src="dist/bootstrap/bootstrap.min.js"></script> <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script> <script src="plugins/ol-v6.5.0-dist/ol.js"></script> <script src="dist/owl/owl.carousel.min.js"></script> <script src="dist/plugins/fancybox/jquery.fancybox.js"></script> <!-- Datatable --> <script src="dist/plugins/datatables/jquery.dataTables.min.js"></script> <script src="dist/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script> <script src="dist/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script> <script src="dist/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script> <script src="dist/plugins/datatables/dataTables.fixedColumns.min.js"></script> <script src="dist/js/4937a09651c738450070200ac0669afb.js"></script> <script src="dist/jquery.confirm/jquery.confirm.js"></script> <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script> <script src="dist/js/review.js?v=<?=filemtime('dist/js/review.js');?>"></script> <script src="dist/js/manage.js?v=<?=filemtime('dist/js/manage.js');?>"></script> </body> </html>