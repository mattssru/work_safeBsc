<!-- Modal -->
<div class="modal fade modal-fullscreen-xl" id="modalLogin" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title d-flex align-items-center" id="">
            <img src="dist/icons/marker_coin.png" width="40" height="40" class="d-inline-block align-top mr-2" alt=""> <?=$lg->text[4];?></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-6 my-lg-5 py-lg-5">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="<?=$lg->text[4];?>" />
                <!-- <img src="../maps/dist/icons/logo-login.png" class="w-100 d-flex mx-auto" alt="Sample image" /> -->
            </div>
            <div class="col-md-8 col-lg-6 col-xl-5">
                <form>
                    <div class="d-flex flex-column align-items-center justify-content-center mb-5">
                        <p class="lead fw-normal mb-0 me-3">Sign in with</p>

                        <a href="./line/login" class="w-100 text-center"><button type="button" class="btn btn-success mt-4 w-50">
                            <i class="fab fa-line"></i> Log in with LINE
                        </button></a>
                    </div>

                    <div class="row">
                        <div class="col"><hr></div>
                        <div class="col-auto">OR</div>
                        <div class="col"><hr></div>
                    </div>


                    <div class="d-flex justify-content-center">
                        <h5 class="text-muted">
                            Comming Soon
                        </h5>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>