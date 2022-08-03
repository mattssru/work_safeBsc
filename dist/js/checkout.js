$(document).ready(function(){
    $("#bankselect")
    .chosen({ width: "100%", disable_search: true })
    .change(function () {
        var _v = $(this).val();
        var _a = $("option:selected", this).data("acc");
        var _n = $("option:selected", this).data("name");
        var _b = $("option:selected", this).data("content");
        var _c = $("option:selected", this).data("color");
        if (_v != "") {
            let content =
                `<div class="col-12">
                    <div class="row px-3 justify-content-center">
                        <div class="col-3 col-sm-3 col-md-4 col-lg-3 p-2">
                            <img src="${_b}" alt="" width="100%" id="" class="detail-bank rounded" style="background-color:${_c}">
                        </div>
                        <div class="col-9 col-sm-9 col-md-8 col-lg-5 p-2 d-flex flex-column justify-content-center align-items-start">
                            <h5 id="acc${_a}" style="color: ${_c}">${_a}</h5>
                            <span class="badge badge-pill badge-secondary font-weight-normal" id="">ชื่อบัญชี</span>
                            <span>${_n}</span>
                        </div>
                        <button data-toggle="tooltip" data-placement="top" title="Copy to clipboard" onclick="$.copyclipboard(this,'${_a}')" class="btn btn-outline-light btn-sm copyacc" type="button">
                            <i class="fas fa-copy mr-2 align-self-center"></i>COPY
                        </button>
                    </div>
                </div>`;
            $(".bank-content").html(content);
            $('[data-toggle="tooltip"]').tooltip();
        } else {
            var content =
                `<div class="col-12">
                    <div class="row px-3 justify-content-center">
                        <div class="col-3 col-sm-3 col-md-4 col-lg-3 p-2">
                            <img src="dist/images/bank.svg" alt="" width="100%" id="" class="detail-bank rounded" style="background-color:#ddd;">
                        </div>
                        <div class="col-9 col-sm-9 col-md-8 col-lg-5 p-2 d-flex flex-column justify-content-center align-items-start">
                            <h5 class="font-weight-bold">กรุณาเลือก บัญชีธนาคาร</h5>
                        </div>
                    </div>
                </div>`;
            $(".bank-content").html(content);
        }
    });

    $('.back-payment').click(function(){
        $('.main-payment').hide();
        $('.review-payment').slideUp('slow',function(){
            $(this).show();
        })
    });
    $('.next-payment').click(function(){
        let duration = $('#duration').val();
        let package = $('#package').val();
        let method = $('#ch_payment').val();

        if(method == 1) {
            $('[name="duration"]').val(duration);
            $('[name="package"]').val(package);
            
            $('.main-payment').slideDown('slow', function(){
                $(this).show();
                $('.review-payment').fadeOut();
            });
        }
        
    });
    $('#package').change(function(){
        let discount = $('option:selected', this).data('discount');
        let price = $('option:selected', this).data('price');
        
        let pay_method = $('#ch_payment').val();
        let currentcy_symbol = (pay_method == 1 ? '฿' : '$');
        let percent = 100 - ((price/discount)*100);

        $('#view-discount').html(currentcy_symbol+discount);
        $('#view-payment').html(currentcy_symbol+price);
        $('#subtotal').html(currentcy_symbol+(price).toFixed(2));
        $('#saving').html(currentcy_symbol+(discount-price).toFixed(2));
        $('#saving-percent').html(`(You save ${percent.toFixed(2)}%)`);
        $('#alltotal').html(currentcy_symbol+(price).toFixed(2));

        $('[name="amount"]').val(price);
    });

    $('#slip').change(function(){
        if($('#slip').val() != "")
        {
            let m =readURL(this, ['png','jpeg','jpg']);	
            if(m){
                $('#blah').show();
            }
        }
        else
        {
            $('#blah').hide();	
        }
    });

    $('#form-payment').on('submit', function(e){
        e.preventDefault();
        //if(!$(this).valid()) return;
        let formData = new FormData(this);
        $.confirm({
            icon: 'far fa-question-circle',
            type: 'blue',
            theme: 'modern',
            title: $('#title_alert').val(),
            content: $('#content_alert').val(),
            buttons: {
                confirm: {
                    text: $('#confirm').val(),
                    btnClass: 'btn-info',
                    action: function(){
                        $.loader();
                        $.ajax({
                            url: './api/payment?q='+Math.random(),
                            type: 'POST',
                            processData: false,
                            contentType: false,
                            catch: false,
                            data: formData,
                            success: function(res){
                                $.closeloader();
                                if(res == "success") {
                                    Toast({
                                        type: 'green',
                                        content: 'Notify the payment is complete wait for approval.'
                                    });
                                    $('#form-payment')[0].reset();
                                    setTimeout(function(){
                                        window.location='configs';
                                    },3000);
                                }
                                else if(res == "fileerror"){
                                    $.danger({content: 'Invalid file'});
                                }
                                else {
                                    $.danger();
                                }
                            },
                            error: function(xhr){
                                $.danger();
                                /** some code error */
                            }
                        });
                    }
                },
                cancel: {
                    text: $('#cancel').val()
                }
            }
        });

        
    });
    
});



