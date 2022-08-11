<!-- Modal -->
<div class="modal fade" id="ModalCenter" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
        <form method="POST" id="form-image" enctype="multipart/form-data">
            <input type="hidden" id="img-data" name="data_id">
            <input type="hidden" id="img-user" name="user_id">
            <div class="modal-header">
                <h5 class="modal-title font-weight-bold" id="exampleModalLongTitle">PHOTO/GALLERY</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body text-right btn-submit" style="display:none;">
                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                <button type="submit" name="save" class="btn btn-warning btn-sm"><i class="fas fa-check"></i> Save changes</button>
                <button type="button" name="blank" class="btn btn-warning btn-sm"  style="display: none;" disabled> Save changes</button>
                <button type="button" name="btn-load" class="btn btn-warning btn-sm"  style="display: none;" disabled><i class="fas fa-spinner"></i> Save changes</button>
            </div>
            <div class="modal-body">
                <div class="row" id="gallery-image"></div>
            </div>
            <div class="modal-footer">
                <div class="input-group mb-3">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="upfile" name="upfile[]" multiple>
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>
            </div>
        </form>
    </div>
  </div>
</div>

<div class="modal fade" id="ModalCenterEdit" tabindex="-1" role="dialog" aria-labelledby="ModalCenterEdit" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
        <form method="POST" id="form-edit">
            <input type="hidden" id="edit-data" name="data_id">
            <input type="hidden" id="edit-user" name="user_id">
            <div class="modal-header">
                <h5 class="modal-title font-weight-bold" id="exampleModalLongTitle"><i class="fas fa-pencil-alt"></i> EDIT DATA</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body text-right btn-submit" style="display:none;">
                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                <button type="submit" name="save" class="btn btn-warning btn-sm"><i class="fas fa-check"></i> Update</button>
                <button type="button" name="btn-load" class="btn btn-warning btn-sm"  style="display: none;" disabled><i class="fas fa-spinner"></i> Update</button>
            </div>
            <div class="modal-body">
               <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Category</label>
                            <select class="custom-select" name="category" id="category">
                                <option value="">-- Select Category --</option>
                                <?=Web::category($category,$lang);?>
                            </select>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label for="">Shop Name</label>
                            <input type="text" class="form-control" name="shopname" id="shopname" placeholder="Enter Shop Name">
                            <!-- <small id="emailHelp" class="form-text text-muted"></small> -->
                        </div>
                        <div class="form-group">
                            <label for="">Shop Description</label>
                            <textarea  class="form-control" name="shopdesc" id="shopdesc" rows="3" placeholder="Enter Shop Description"></textarea>
                            <!-- <small id="emailHelp" class="form-text text-muted"></small> -->
                        </div>
                    </div>
                    <!-- <div class="col-6">
                        <div class="form-group">
                            <label for="">Payment</label>
                            <input type="text" class="form-control" name="payment" id="payment" placeholder="Payment">
                        </div>
                    </div> -->
                    <div class="col-6">
                        <div class="form-group">
                            <label for="">Shop Phone</label>
                            <input type="text" class="form-control" name="shopphone" id="shopphone" placeholder="Shop Phone">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="">Shop Website</label>
                            <input type="text" class="form-control" name="website" id="website" placeholder="Shop Website">
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col pr-0">
                        <label class="font-weight-bold mb-0 required">Date Open:</label>
                        <div class="input-group mb-0">
                            <input type="text" autocomplete="off" size="30" name="date_open" id="date_open" class="form-control timepicker rounded-left" style="border-radius: 0px; z-index: 10000;" placeholder="Date Open" required>
                        </div>
                        <small id="openHelp" class="form-text text-muted">Open 24 hours, Date Open enter: 00:00</small>
                    </div>
                    <div class="col pl-0">
                        <label class="font-weight-bold mb-0">Date Close:</label>
                        <div class="input-group mb-3">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="fas fa-calendar"></i></span>
                            </div>
                            <input type="text" autocomplete="off" size="30" name="date_close" id="date_close" class="form-control timepicker" placeholder="Date Close" required="">
                          <!--  <input type="text" autocomplete="off" size="30" name="date_close" id="date_close" class="form-control datepicker extend_end hasDatepicker" placeholder="Date Close" required="" style="z-index: 10000;">-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                <button type="submit" name="save" class="btn btn-warning btn-sm"><i class="fas fa-save"></i> Update</button>
                <button type="button" name="btn-load" class="btn btn-warning btn-sm"  style="display: none;" disabled><i class="fas fa-spinner"></i> Save changes</button>
            </div>
        </form>
    </div>
  </div>
</div>



<template id="main-box-img">
        <div class="col-lg-4 col-sm-6 position-relative mb-3 dummy-upfile">
            <div class="thumbnail img-responsive border p-1">
                <a href="#" title="Image 1" class="box-img"></a>
            </div>
        </div>
</template>