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
    <link rel="stylesheet" href="dist/css/global.css?v=<?=filemtime('dist/css/global.css');?>">
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
	<div class="container position-relative" >
  <div class="alert alert_copy text-white" id="alert_address" role="alert">
    Address copied to clipboard !
  </div>
    <div class="d-flex align-items-center justify-content-between flex-column flex-md-row mb-4 pt-5">
	  	<h1 class="headline text-white position-relative d-inline-flex mb-4 mb-md-0">Defi</h1>
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
      <div class="report_defi d-flex mb-5 d-flex flex-wrap flex-column flex-md-row">
        <div class="networth mb-4 mb-md-0">
          <p class="text_underline text-white mb-0">Net Worth</p>
          <strong class="text-white d-block mt-3">$14,852.10</strong>
        </div>
        <div class="total_more align-items-center">
          <div class="total_asset">
            <p class="text-white text_underline mb-0">Total Assets</p>
            <strong class="text-white d-block mt-2 mt-sm-3">$517.92</strong>
          </div>
          <div class="total_asset">
            <p class="text-white text_underline mb-0">My Wallet</p>
            <strong class="text-white d-block mt-2 mt-sm-3">$517.92</strong>
          </div>
          <div class="total_asset">
            <p class="text-white text_underline mb-0">Total Yield</p>
            <strong class="d-block mt-2 mt-sm-3" style="color: #33c481;">$517.92</strong>
          </div>
          <div class="total_asset">
            <p class="text-white text_underline mb-0">Total Debt</p>
            <strong class="d-block mt-2 mt-sm-3" style="color: #ff6675;">$517.92</strong>
          </div>
        </div>
      </div>
      <div class="tabs-wallet">
        <ul class="list-tabs nav nav-pills mb-4">
          <li class="nav-item">
            <a class="btn-tabs" id="tab-nft" data-toggle="pill" href="#my-nfts" role="tab" aria-controls="tab-nft" aria-selected="false">
              My Nfts
            </a>
          </li>
          <li class="nav-item">
            <a class="btn-tabs active" id="tab-defi" data-toggle="pill" href="#my-defi" role="tab" aria-controls="tav-defi" aria-selected="true">
              Defi
            </a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade" id="my-nfts" role="tabpanel" aria-labelledby="#my-nfts">
            <div class="head_wallet">
              My Nfts
            </div>
          </div>
          <div class="tab-pane fade show active" id="my-defi" role="tabpanel" aria-labelledby="#my-defi">
            <div class="mb-4">
              <div class="topic_head d-flex align-items-center">
                <img src="dist/images/wallet.png" alt="" class="mr-2" width="25" height="25">
                Wallet
              </div>
              <div class="table_wallet">
                <table class="table mb-0">
                  <thead>
                    <tr>
                      <th width="40%">ASSET</th>
                      <th>BALANCES</th>
                      <th>PRICES</th>
                      <th>VALUE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center text-white">
                          <img src="dist/images/coin_luna.webp" alt="" width="24" height="24" class="mr-2">
                          LUNA
                        </div>
                      </td>
                      <td>1,227.71</td>
                      <td>$2.15</td>
                      <td>$2,639.57</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center text-white">
                          <img src="dist/images/coin_luna.webp" alt="" width="24" height="24" class="mr-2">
                          LUNA
                        </div>
                      </td>
                      <td>1,227.71</td>
                      <td>$2.15</td>
                      <td>$2,639.57</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center text-white">
                          <img src="dist/images/coin_luna.webp" alt="" width="24" height="24" class="mr-2">
                          LUNA
                        </div>
                      </td>
                      <td>1,227.71</td>
                      <td>$2.15</td>
                      <td>$2,639.57</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="mb-4">
              <div class="topic_head d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <img src="dist/images/pangolin.png" alt="" class="mr-2" width="25" height="25">
                  <p class="mb-0">Pangolin</p>
                </div>
                <div class="text_farms d-flex align-items-center justify-content-center ml-4">1 Pangolin = $1.5</div>
              </div>
              <div class="secondary_head d-flex align-items-center">
              </div>
              <div class="table_wallet">
                <table class="table mb-0">
                  <thead>
                    <tr>
                      <th>POOL</th>
                      <th class="text-right show_desktop">BALANCES</th>
                      <th class="text-right show_desktop">REWARDS</th>
                      <th class="text-right">VALUE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center text-white">
                          <div class="duo_coin d-flex">
                            <img src="dist/images/usdc_coin.png" alt="">
                            <img src="dist/images/eth_coin.png" alt="">
                          </div>
                          <div class="ml-2">USDC-ETH LP</div>
                        </div>
                        <div class="show_mobile mt-4">
                          <p class="mb-1">Balances</p>
                          <div class="farm_balance">
                            <div>
                              0.12432 
                              <span style="color:#b6b4bb;" class="font-bold">PANGOLIN</span>
                              <span>($1.55)</span>
                            </div>
                            <div>
                              0.12432 
                              <span style="color:#b6b4bb;" class="font-bold">ETH</span>
                              <span>($255.4)</span>
                            </div>
                            <div class="text-success font-bold">$255.3</div>
                          </div>
                        </div>
                      </td>
                      <td class="text-right show_desktop">
                        <div class="farm_balance">
                          <div>
                            0.12432 
                            <span style="color:#b6b4bb;" class="font-bold">PANGOLIN</span>
                            <span>($1.55)</span>
                          </div>
                          <div>
                            0.12432 
                            <span style="color:#b6b4bb;" class="font-bold">ETH</span>
                            <span>($255.4)</span>
                          </div>
                          <div class="text-success font-bold">$255.3</div>
                        </div>
                      </td>
                      <td class="text-right show_desktop">
                        <div>0.12432 <span style="color:#b6b4bb;" class="font-bold">PANGOLIN</span></div>
                        <div class="text-danger font-bold">$14.65</div>
                      </td>
                      <td class="text-right">
                        <div class="text-success font-bold">$2,639.57</div>
                        <div class="show_mobile mt-4">
                          <p class="mb-1">Rewards</p>
                          <div>0.12432 <span style="color:#b6b4bb;" class="font-bold">PANGOLIN</span></div>
                          <div class="text-danger font-bold">$14.65</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center text-white">
                          <div class="duo_coin d-flex">
                            <img src="dist/images/usdc_coin.png" alt="">
                            <img src="dist/images/eth_coin.png" alt="">
                          </div>
                          <div class="ml-2">USDC-ETH LP</div>
                        </div>
                        <div class="show_mobile mt-4">
                          <p class="mb-1">Balances</p>
                          <div class="farm_balance">
                            <div>
                              0.12432 
                              <span style="color:#b6b4bb;" class="font-bold">PANGOLIN</span>
                              <span>($1.55)</span>
                            </div>
                            <div>
                              0.12432 
                              <span style="color:#b6b4bb;" class="font-bold">ETH</span>
                              <span>($255.4)</span>
                            </div>
                            <div class="text-success font-bold">$255.3</div>
                          </div>
                        </div>
                      </td>
                      <td class="text-right show_desktop">
                        <div class="farm_balance">
                          <div>
                            0.12432 
                            <span style="color:#b6b4bb;" class="font-bold">PANGOLIN</span>
                            <span>($1.55)</span>
                          </div>
                          <div>
                            0.12432 
                            <span style="color:#b6b4bb;" class="font-bold">ETH</span>
                            <span>($255.4)</span>
                          </div>
                          <div class="text-success font-bold">$255.3</div>
                        </div>
                      </td>
                      <td class="text-right show_desktop">
                        <div>0.12432 <span style="color:#b6b4bb;" class="font-bold">PANGOLIN</span></div>
                        <div class="text-danger font-bold">$14.65</div>
                      </td>
                      <td class="text-right">
                        <div class="text-success font-bold">$2,639.57</div>
                        <div class="show_mobile mt-4">
                          <p class="mb-1">Rewards</p>
                          <div>0.12432 <span style="color:#b6b4bb;" class="font-bold">PANGOLIN</span></div>
                          <div class="text-danger font-bold">$14.65</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="mb-5">
              <div class="topic_head d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <img src="dist/images/shiba.png" alt="" class="mr-2" width="25" height="25">
                  <p class="mb-0">Shibaswap</p>
                </div>
                <div class="text_farms d-flex align-items-center justify-content-center ml-4">1 SHIBA = $0.4</div>
              </div>
              <div class="secondary_head d-flex align-items-center">
              </div>
              <div class="table_wallet">
                <table class="table mb-0">
                  <thead>
                    <tr>
                      <th>POOL</th>
                      <th class="text-right show_desktop">BALANCES</th>
                      <th class="text-right show_desktop">REWARDS</th>
                      <th class="text-right">VALUE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center text-white">
                          <div class="duo_coin d-flex">
                            <img src="dist/images/shiba_coin.webp" alt="">
                            <img src="dist/images/eth_coin.png" alt="">
                          </div>
                          <div class="ml-2">SHIBA-ETH LP</div>
                        </div>
                        <div class="show_mobile mt-4">
                          <p class="mb-1">Balances</p>
                          <div class="farm_balance">
                            <div>
                              0.12432 
                              <span style="color:#b6b4bb;" class="font-bold">SHIBA</span>
                              <span>($1.55)</span>
                            </div>
                            <div>
                              0.12432 
                              <span style="color:#b6b4bb;" class="font-bold">ETH</span>
                              <span>($255.4)</span>
                            </div>
                            <div class="text-success font-bold">$255.3</div>
                          </div>
                        </div>
                      </td>
                      <td class="text-right show_desktop">
                        <div class="farm_balance">
                          <div>
                            0.12432 
                            <span style="color:#b6b4bb;" class="font-bold">SHIBA</span>
                            <span>($1.55)</span>
                          </div>
                          <div>
                            0.12432 
                            <span style="color:#b6b4bb;" class="font-bold">ETH</span>
                            <span>($255.4)</span>
                          </div>
                          <div class="text-success font-bold">$255.3</div>
                        </div>
                      </td>
                      <td class="text-right show_desktop">
                        <div>0.12432 <span style="color:#b6b4bb;" class="font-bold">SHIBA</span></div>
                        <div class="text-danger font-bold">$14.65</div>
                      </td>
                      <td class="text-right">
                        <div class="text-success font-bold">$2,639.57</div>
                        <div class="show_mobile mt-4">
                          <p class="mb-1">Rewards</p>
                          <div>0.12432 <span style="color:#b6b4bb;" class="font-bold">SHIBA</span></div>
                          <div class="text-danger font-bold">$14.65</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center text-white">
                          <div class="duo_coin d-flex">
                            <img src="dist/images/shiba_coin.webp" alt="">
                            <img src="dist/images/eth_coin.png" alt="">
                          </div>
                          <div class="ml-2">SHIBA-ETH LP</div>
                        </div>
                        <div class="show_mobile mt-4">
                          <p class="mb-1">Balances</p>
                          <div class="farm_balance">
                            <div>
                              0.12432 
                              <span style="color:#b6b4bb;" class="font-bold">SHIBA</span>
                              <span>($1.55)</span>
                            </div>
                            <div>
                              0.12432 
                              <span style="color:#b6b4bb;" class="font-bold">ETH</span>
                              <span>($255.4)</span>
                            </div>
                            <div class="text-success font-bold">$255.3</div>
                          </div>
                        </div>
                      </td>
                      <td class="text-right show_desktop">
                        <div class="farm_balance">
                          <div>
                            0.12432 
                            <span style="color:#b6b4bb;" class="font-bold">SHIBA</span>
                            <span>($1.55)</span>
                          </div>
                          <div>
                            0.12432 
                            <span style="color:#b6b4bb;" class="font-bold">ETH</span>
                            <span>($255.4)</span>
                          </div>
                          <div class="text-success font-bold">$255.3</div>
                        </div>
                      </td>
                      <td class="text-right show_desktop">
                        <div>0.12432 <span style="color:#b6b4bb;" class="font-bold">SHIBA</span></div>
                        <div class="text-danger font-bold">$14.65</div>
                      </td>
                      <td class="text-right">
                        <div class="text-success font-bold">$2,639.57</div>
                        <div class="show_mobile mt-4">
                          <p class="mb-1">Rewards</p>
                          <div>0.12432 <span style="color:#b6b4bb;" class="font-bold">SHIBA</span></div>
                          <div class="text-danger font-bold">$14.65</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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