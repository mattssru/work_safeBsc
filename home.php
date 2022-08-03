<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

?>
<!doctype html>
<html lang="en">
<head>
	<!-- Required meta tags -->
	<title>Snapblock</title>
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
  <link rel="stylesheet" href="dist/css/home.css?v=<?=filemtime('dist/css/home.css');?>">
  <link rel="stylesheet" href="dist/css/theme.css?v=<?=filemtime('dist/css/theme.css');?>">
	<link href="dist/plugins/bootstrap4-toggle/css/bootstrap4-toggle.min.css" rel="stylesheet">
	<link rel="stylesheet" href="./dist/css/animate.min.css">
  <link rel="stylesheet" href="dist/owl/owl.carousel.min.css">
  <link rel="stylesheet" href="dist/owl/owl.theme.default.min.css">
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

  <script src="https://kit.fontawesome.com/0d2d59443f.js" crossorigin="anonymous"></script>

 

</head>
<body class="dark font-body">
  <header>
    <div class="container-fluid position-relative">
      <div class="header d-flex align-items-center justify-content-between">
        <a href="" class="logo navbar-brand d-flex align-items-center " style="flex: 1;">
          <img src="dist/icons/icon-logo-green.png" alt="logo" class="mr-2">
          Snap
          <span style="color: #efb90a;">BlockC</span>
        </a>
        <div class="right_header d-flex justify-content-end" style="flex: 1;">
          <a href="" class="btn btn_default" style="max-width: 140px;">
            LaunchApp
          </a>
        </div>
      </div>
    </div>
  </header>
  <article>
    <section class="section_intro mb-5">
      <div class="container" data-aos="zoom-in" data-aos-duration="1500">
        <div class="row align-items-center mobile_reverse">
          <div class="col-md-6">
            <h1 class="text-white headline_h1">Lorem ipsum dolor sit ametconsectetur, adipisicing elit.</h1>
            <div class="user_online d-flex text-center">
              <div>
                <div class="number_user mb-2">
                  +20k
                </div>
                <p class="text-white" style="font-size: 20px; line-height: 22px;">User SnapBlockC</p>
              </div>
              <div>
              <div class="number_user mb-2">
                +20k
                </div>
                <p class="text-white" style="font-size: 20px; line-height: 22px;">User On</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src="dist/images/section_01.png" alt="" class="img_responsive mx-auto mb-4">
          </div>
        </div>
      </div>
    </section>
    <section class="section_usecase">
      <div class="container">
        <h2 class="headline_h2 text-center text-white" data-aos="zoom-in" data-aos-duration="1500">
          Use Case
        </h2>
        <div class="row">
          <div class="col-sm-6" data-aos="fade-right" data-aos-duration="1000">
            <div class="item_usecase d-flex flex-column flex-lg-row align-items-center align-items-sm-start mb-5 text-center text-sm-left">
              <img src="dist/images/usecase_01.png" alt="" class="mr-0 mr-sm-4 mb-4">
              <div>
                <div class="title_usecase text-white">
                  Cryptoland App
                </div>
                <p class="description_usecase text-white-dimming">Asiatic glassfish pilchard sandburrower, orangestriped triggerfish hamlet Molly Miller trunkfish spiny dogfish! Jewel tetra frigate mackerel</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6" data-aos="fade-left" data-aos-duration="1000">
            <div class="item_usecase d-flex flex-column flex-lg-row align-items-center align-items-sm-start mb-5 text-center text-sm-left">
              <img src="dist/images/usecase_02.png" alt="" class="mr-0 mr-sm-4 mb-4">
              <div>
                <div class="title_usecase text-white">
                  Mining Service
                </div>
                <p class="description_usecase text-white-dimming">Spend real fights effective anything extra by leading. Mouthwatering leading how real formula also locked-in have can mountain thought. Jumbo</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6" data-aos="fade-right" data-aos-duration="1000">
            <div class="item_usecase d-flex flex-column flex-lg-row align-items-center align-items-sm-start mb-5 text-center text-sm-left">
              <img src="dist/images/usecase_03.png" alt="" class="mr-0 mr-sm-4 mb-4">
              <div>
                <div class="title_usecase text-white">
                 Blockchain
                </div>
                <p class="description_usecase text-white-dimming">Clownfish catfish antenna codlet alfonsino squirrelfish deepwater flathead sea lamprey. Bombay duck sand goby snake mudhead</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6" data-aos="fade-left" data-aos-duration="1000" >
           <div class="item_usecase d-flex flex-column flex-lg-row align-items-center align-items-sm-start mb-5 text-center text-sm-left">
              <img src="dist/images/usecase_04.png" alt="" class="mr-0 mr-sm-4 mb-4">
              <div>
                <div class="title_usecase text-white">
                  Exchange
                </div>
                <p class="description_usecase text-white-dimming">Barbelless catfish pelican gulper candlefish thornfishGulf menhaden ribbonbearer riffle dace black dragonfish denticle herring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section_review">
      <div class="container">
        <h2 class="headline_h2 text-center text-white mb-4" data-aos="zoom-in" data-aos-duration="1500">
          Users <span style="color: #efb90a;">Review</span>
        </h2>
        <div class="review-carousel  owl-carousel owl-theme">
          <div class="card_review p-4" data-aos="fade-up-right" data-aos-duration="1400">
            <p class="text-white">ใช้งานได้โอเค ระบบเทรดไม่กาวมีระบบเทรดแบบที่ได้รับการยอมรับ ไม่ได้อยู่จอ คุมอารมณ์ไม่ได้ ma5bot ช่วยได้จริงๆ</p>
            <div class="name_user d-flex align-items-center text-white">
              <img src="dist/images/review_01.jpeg" alt="" class="mr-4 rounded-circle">
              <div>
                <p class="mb-2">Mr.Ball</p>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="card_review p-4" data-aos="fade-up-right" data-aos-duration="1600">
            <p class="text-white">ใช้งานได้โอเค ระบบเทรดไม่กาวมีระบบเทรดแบบที่ได้รับการยอมรับ ไม่ได้อยู่จอ คุมอารมณ์ไม่ได้ ma5bot ช่วยได้จริงๆ</p>
            <div class="name_user d-flex align-items-center text-white">
              <img src="dist/images/review_01.jpeg" alt="" class="mr-4 rounded-circle">
              <div>
                <p class="mb-2">Mr.Ball</p>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="card_review p-4" data-aos="fade-up-right" data-aos-duration="1800">
            <p class="text-white">ใช้งานได้โอเค ระบบเทรดไม่กาวมีระบบเทรดแบบที่ได้รับการยอมรับ ไม่ได้อยู่จอ คุมอารมณ์ไม่ได้ ma5bot ช่วยได้จริงๆ</p>
            <div class="name_user d-flex align-items-center text-white">
              <img src="dist/images/review_01.jpeg" alt="" class="mr-4 rounded-circle">
              <div>
                <p class="mb-2">Mr.Ball</p>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="card_review p-4" data-aos="fade-up-right" data-aos-duration="2000">
            <p class="text-white">ใช้งานได้โอเค ระบบเทรดไม่กาวมีระบบเทรดแบบที่ได้รับการยอมรับ ไม่ได้อยู่จอ คุมอารมณ์ไม่ได้ ma5bot ช่วยได้จริงๆ</p>
            <div class="name_user d-flex align-items-center text-white">
              <img src="dist/images/review_01.jpeg" alt="" class="mr-4 rounded-circle">
              <div>
                <p class="mb-2">Mr.Ball</p>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                  <i class="fa-solid fa-star pr-1" style="color: #efb90a;"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section_howtouse">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-4">
            <a data-aos="fade-right" data-aos-duration="2-00" data-toggle="modal" data-target="#exampleModalCenter" href="https://www.youtube.com/watch?v=3cZjVFKzugY&list=PLcpkKchW7Xe5K578xRCwQbPbeVQGN5K9h&index=11" class="btn_video" target="_blank">
              <img src="dist/images/video_btn.png" alt="">
            </a>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                    ×
                  </button>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/3cZjVFKzugY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div class="box_howto p-5" data-aos="fade-left" data-aos-duration="2000">
              <div class="content_howto">
                <h2 class="headline_h2 text-white mb-4" data-aos="zoom-in" data-aos-duration="1500">
                   A banking platform that
                   <span class="d-block" style="font-weight: 300;">enables developer solutions</span>
                </h2>
                <p class="text-white mb-4" style="font-weight: 500;">Spend real fights effective anything extra by leading. Mouthwatering leading how real formula also locked-in have can mountain thought. Jumbo plus shine sale.</p>
                <ul class="list_howto m-0 p-0 list-style-none text-white">
                  <li class="pl-4 position-relative mb-1">
                    <span style="font-weight: 700;">Modular structure</span>
                    enabling easy implementation for different softwares
                  </li>
                  <li class="pl-4 position-relative mb-1">
                    <span style="font-weight: 700;">Advanced payment</span>
                    and processing technologies, fine-tuned from more than 3 years of development testing
                  </li>
                  <li class="pl-4 position-relative mb-1">
                    <span style="font-weight: 700;">Unified AppStore</span>
                    for retail cryptocurrency solutions with a Crypterium products audience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section_questions">
      <div class="container">
        <h2 class="headline_h2 text-center text-white"" data-aos="zoom-in" data-aos-duration="1500">Frequency Asked Questions</h2>
        <div class="accordion" id="accordionExample">
          <div class="card" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left text-white" type="button" data-toggle="collapse"
                  data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  When is the offical launch ?
                </button>
              </h2>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                The official Monster Ape Club launch date is be announced Futher updates will be revealed on our
                official Discord.
              </div>
            </div>
          </div>
          <div class="card" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left text-white collapsed" type="button"
                  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How can I buy a monster Ape ?
                </button>
              </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                Some placeholder content for the second accordion panel. This panel is hidden by default.
              </div>
            </div>
          </div>
          <div class="card" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left text-white collapsed" type="button"
                  data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                  aria-controls="collapseThree">
                  How I can join the whitelist ?
                </button>
              </h2>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body">
                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by
                default.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section_news">
      <div class="container">
        <h2 class="headline_h2 text-white text-center" data-aos="zoom-in" data-aos-duration="1500">
         Latest News
        </h2>
        <div class="news-carousel owl-carousel owl-theme">
          <a href="#" class="card_news d-block p-4 text-decoration-none;" data-aos="flip-left" data-aos-duration="1300">
            <div class="subtitle_news mb-4" style="color: #efb90a; font-weight: 600;">
             Cryptocurrency
            </div>
            <h3 class="text-white mb-4">New trends in UI/UX Design World Integration</h3>
            <p class="mb-5" style="color: #aab2cd;">Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of personal meet-</p>
            <div class="date_news">September, 15 2017</div>
          </a>
          <a href="#" class="card_news d-block p-4 text-decoration-none;" data-aos="flip-left" data-aos-duration="1500">
            <div class="subtitle_news mb-4" style="color: #efb90a; font-weight: 600;">
             Cryptocurrency
            </div>
            <h3 class="text-white mb-4">New trends in UI/UX Design World Integration</h3>
            <p class="mb-5" style="color: #aab2cd;">Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of personal meet-</p>
            <div class="date_news">September, 15 2017</div>
          </a>
          <a href="#" class="card_news d-block p-4 text-decoration-none;" data-aos="flip-left" data-aos-duration="1700">
            <div class="subtitle_news mb-4" style="color: #efb90a; font-weight: 600;">
             Cryptocurrency
            </div>
            <h3 class="text-white mb-4">New trends in UI/UX Design World Integration</h3>
            <p class="mb-5" style="color: #aab2cd;">Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of personal meet-</p>
            <div class="date_news">September, 15 2017</div>
          </a>
          <a href="#" class="card_news d-block p-4 text-decoration-none;" data-aos="flip-left" data-aos-duration="1900">
            <div class="subtitle_news mb-4" style="color: #efb90a; font-weight: 600;">
             Cryptocurrency
            </div>
            <h3 class="text-white mb-4">New trends in UI/UX Design World Integration</h3>
            <p class="mb-5" style="color: #aab2cd;">Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of personal meet-</p>
            <div class="date_news">September, 15 2017</div>
          </a>
        </div>
      </div>
    </section>
  </article>
  <footer>
    <div class="container">
      <div class="footer py-5 py-md-0">
        <div class="row h-100 align-items-center text-center">
          <div class="col-md-4 col-sm-12">
            <a href="" class="logo navbar-brand mb-3 mb-md-0 mr-0" style="flex: 1;">
              <img src="dist/icons/icon-logo-green.png" alt="logo">
              Snap
              <span style="color: #efb90a;">BlockC</span>
            </a>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="community text-center mb-4 mb-md-0" style="flex: 1;">
              <p class="text-white" style="font-weight: 600;">Community</p>
              <a href="#" class="d-inline-flex mx-1">
                <img src="dist/images/ic_facebook.svg" alt="" height="20px">
              </a>
              <a href="#" class="d-inline-flex mx-1">
                <img src="dist/images/ic_line.svg" alt="" height="20px">
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
             <p class="text-center" style="flex: 1; color: #aab2cd;">แสดงผลลัพธ์ได้ดีใน Firefox, Chrome และ Internet Expolrer 11 ขึ้นไป และรองรับการแสดงบน Mobile Device</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
	<!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="./dist/jquery/jquery-3.3.1.min.js?v=001"></script>
  <script src="./dist/bootstrap/popper.min.js"></script>
	<script src="./dist/bootstrap/bootstrap.min.js"></script>
	<script src="./dist/plugins/bootstrap4-toggle/js/bootstrap4-toggle.min.js"></script>
  <script src="./dist/plugins/bootstrap-select/bootstrap-select.min.js"></script>
	<script src="./dist/jquery.confirm/jquery.confirm.js"></script>
	<script src="./dist/js/main.js?v=<?=filemtime('./dist/js/main.js');?>"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
	<script src="./dist/js/animate.js"></script>
  <script src="./dist/owl/owl.carousel.min.js"></script>

  <script type="text/javascript">
   $(document).ready(function(){
    AOS.init();
    $(".review-carousel").owlCarousel({
      stagePadding: 50,
      loop: true,
      margin: 25,
      // autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      responsive:{
        0:{
            items:1,
            stagePadding: 10,
        },
        600:{
            items:1
        },
        991:{
            items:1
        },
        1000:{
            items:3
        }
       }
      });
      $(".news-carousel").owlCarousel({
        items: 3,
        margin: 30,
        dots: true,
        loop: true,
        responsive : {
          0 : {
            items: 1,
          },
          768 : {
            items: 2,
          },
          992 : {
            items: 3,
          }
        }
		  });
  });
  </script>

</body>
</html>