<nav class="navbar navbar-expand-lg navbar-light bg-white"> <a class="navbar-brand mr-md-auto d-flex" href="index">
<img src="dist/icons/marker_coin.png" width="40" height="40" class="d-inline-block align-top mr-2" alt=""> <div class="d-flex align-items-center"><?=$lg->text[4];?></div></a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav ml-auto">


<li class="nav-item"> <a class="nav-link" href="<?=(PHP::__url() == "home" ? './?'.PHP::current_url($lang) : './home?'.PHP::current_url($lang))?>">
    <button type="button" class="btn btn-sm rounded-pill btn-outline-secondary">
    <i class="fas fa-home"></i>
    </button>
</a> </li>

<li class="nav-item d-flex">
    <?=$btnLogin;?>
</li> 

<?php
if(PHP::__url() != "review" && PHP::__url() != "home" && PHP::__url() != "manage"){
    echo '<li class="nav-item view-mobile view-all-items"> <a class="nav-link" href="javascript:void(0);">'.$lg->text[16].'</a> </li>';
}

?>
 <!--<li class="nav-item"> <a class="nav-link" href="#"><?=$lg->text[3];?></a> </li>--> 


<li class="nav-item"> <div class="dropdown"> <button class="btn dropdown-toggle nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-globe"></i> <?=strtoupper($lang);?> </button> <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> <a class="dropdown-item" href="?<?=PHP::current_url('en');?>">EN</a> <a class="dropdown-item" href="?<?=PHP::current_url('th');?>">TH</a> </div> </div> </li> 

<li class="nav-item d-flex">
    <div class="dropdown align-self-center">
        <img id="dropdownQr" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle mt-3 mt-sm-0 mb-3 mb-sm-0 d-flex align-self-center pointer border-dark border" src="./dist/icons/qr-code-free.png" width="30" height="30" alt="<?=$lg->text[4];?>">
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownQr">
            <label class="w-100 mt-3 text-center px-3"><?=$lg->text[48];?></label>
            <div class="dropdown-item d-flex justify-content-center px-0">
                <img onclick="window.open('https://line.me/R/ti/p/@420pdwfw')" id="dropdownQr" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle w-100 h-100" src="./dist/icons/qr-code-free.png"  alt="<?=$lg->text[4];?>">
            </div>
        </div>
    </div>
</li> 






<li class="nav-item"> <a class="nav-link btn d-flex flex-column border-left border-left-0" href="javascript:void(0);" style="padding: 2px 0px 2px 15px;font-size: .8rem;"> <span class="d-block h6 mb-0"><?=$counter;?></span> <?=$lg->text[17];?> </a> </li> </ul> </div> </nav>
