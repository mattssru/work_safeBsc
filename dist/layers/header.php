<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><img src="dist/icons/icon-logo-green.png" width="40" height="30" class="d-inline-block align-top" alt=""> SnapBlockC</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <?php include('sub_header.php');?>
                
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item d-flex align-items-center" id="prepare">
                    <a class="nav-link btn btn-outline-info rounded-pill px-3 btn-sm py-1" id="btn-connect" style="height: 31px;" href="#" role="button">
                        <i class="fas fa-wallet"></i> <span>Connect wallet</span></a>
                </li>
                <li class="nav-item  align-items-center" id="connected" style="display: none;">
                    <a class="nav-link btn btn-outline-info rounded-pill pl-3 pr-1 btn-sm py-1" id="btn-disconnect" style="height: 31px;" href="#" role="button">
                    <i class="fas fa-wallet"></i> 
                    <span id="blBNB"></span>
                    <span id="accounts"></span>
                    </a>
                </li>
                
                <li class="nav-item d-flex ml-2 mt-2 mt-lg-0">
                    <div class="dropdown align-self-center order-1 order-md-2"> 
                        <button id="dropdownProfile" class="btn btn-outline-secondary btn-sm my-auto rounded-pill" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img style="width: 30px; height: 30px;" class="rounded-pill" alt="" onerror="this.onerror=null;this.src='./dist/icons/icons8-user-64.png';"></button> 

                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownProfile">
                            <a class="dropdown-item" href="#">
                                <div class="media d-flex align-items-center">
                                    <div class="media-body">
                                        <h6 class="mt-0">Mr.ball</h6> 
                                    </div> 
                                </div> 
                            </a> 
                            <a class="dropdown-item" href="configs">
                                <button type="button" class="btn btn-sm btn-light w-100">Configs</button>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-center text-muted" href="logout">
                                <i class="fas fa-power-off"></i> Logout
                            </a>
                        </div>
                    </div> 
                </li>  
            </ul>
        </div>
        </nav>

</header>