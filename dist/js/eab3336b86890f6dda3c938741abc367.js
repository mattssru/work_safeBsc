$(document).ready(function(){
    var socket = null;
    var checkPair = [];
    if($('#_key').val() != "") {
        socket = io.connect('https://snapblockc.com:5000/',this);

        socket.on('users connected', function(data){
            $('#online').html('Server: <span class="text-success">On</span>' );
            if($('#_key').val() !="") {
                getBalance();
            }
            
        });
        
        socket.on('trade'+$('#_key').val(), function(data){
            $('#'+data.symbol).html(parseFloat(data.price));
            
            checkPair.push(data.symbol);
            let remain = $('.remain'+data.symbol).text()*1;
            let currency = $('#currency').val()*1;
            let remainbuy = $('.remainbuy'+data.symbol).text()*1;
            $('#bath_'+data.symbol).html('฿'+real_format(parseFloat(data.price * currency),3));
    
            $sumremain = parseFloat(((remain * data.price)-remainbuy)*currency).toFixed(3);
            $absremain = (!isNaN($sumremain) ? parseFloat(Math.abs($sumremain)) : 0);
            $('#remain'+data.symbol).text(($sumremain < 0 ? '-' : '')+'฿'+$absremain);
            if($sumremain >= 0) {
                $('#remain'+data.symbol).removeClass('text-danger').addClass('text-success');
            }
            else{
                $('#remain'+data.symbol).removeClass('text-success').addClass('text-danger');
            }
            let price_remain = (!isNaN(parseFloat(remain * data.price)) ? parseFloat(remain * data.price) : 0);
            $('#price'+data.symbol).text(price_remain.toFixed(3));
            if(data.maker){
                $('#'+data.symbol).removeClass('text-danger').addClass('text-success');
            }
            else{
                $('#'+data.symbol).removeClass('text-success').addClass('text-danger');
            }
        });
    }

   
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    $('.fa-cog').click(function(){
        $('[name="make_profit[]"]').prop('checked',false);
        $('.order-checkbox, .btn-cog-times').hide();
        $('.btn-cog').show();
        
        let order = $(this).parents('tr').find('[data-order]').data('order');

        let box = $(this).parents('tr').data('box-history');
        

        let checkOrder = false;
        $('[data-box-history="'+box+'"]').find('.order-checkbox').not('[data-cog-box="'+order+'"]').filter(function(index, el){
            let _v = parseInt($(el).attr("data-cog-box"));
            if(_v < order){
                $(this).show();
                checkOrder = true;
            }
        });
        if(checkOrder){
            $('[data-box-history="'+box+'"]').find('.btn-cog').hide();

            $('[data-box-history="'+box+'"]').find('[data-cog-times="'+order+'"]').show();
        }
        $('#target').val(order);
        $('.view-order').flex();
    });
    $('.btn-cog-times').click(function(){
        $.closeSelectOrder();
    });
    $('[name="make_profit[]"]').click(function(){
        var searchOrder = $('[name="make_profit[]"]:checkbox:checked').map(function(){
            return $(this).val();
        }).get(); 

        if(searchOrder.length > 0){
            $('#select-order').val(searchOrder.join(', '));
        }
        else{
            console.log('none select order id');
        }
    });
    $('#orderModal').on('hidden.bs.modal', function (e) {
        $('#dest').val('');
    });
    $('[data-dismiss="select-order"]').click(function(){
        $.closeSelectOrder();
    });

    /** form */
    $('#form-mark-profit').on('submit', function(e){
        e.preventDefault();
        let formData = new FormData(this);
        let form = $(this)[0];
        if(formData.get('dest') == ""){
            $.warning({content: 'Please select order.'});
            return;
        }
        $.confirm({
            icon: 'fas fa-info-circle',
            theme: 'modern',
            type: 'orange',
            title: 'System Message',
            content: 'Want to manage profits ?',
            buttons: {
                confirm: {
                    text: 'Sure',
                    btnClass: 'btn-warning',
                    action: function(){
                        
                        form.submit();
                    }
                },
                cancel: {
                    text: 'Cancel'
                }
            }
        });
    });

    $.closeSelectOrder = function(){
        $('[name="make_profit[]"]').prop('checked',false);
        $('.order-checkbox, .btn-cog-times').hide();
        $('.btn-cog').show();
        $('.view-order').hide();
        $('#target, #select-order').val('');
    };
    reload = function(key){
        $.post('./api/async?'+key, function(res){
            const obj = $.parseJSON(res);

            if(obj['result']){
                Toast({content: 'Sync Succesfully.'});
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
            else{
                $.danger();
            }
        });
    };
    view_manual = function(order){
        let ord = order;
        const arr_ord = ord.split(',');
        let focus = '';
        $('[data-order]').removeClass('mark-order');
        $.each(arr_ord, function(k, v){
            if(k == 0){
                focus = v;
            }
            $('[data-order="'+ v +'"]').addClass('mark-order').scrollTop(0);
        });
        $('html, body').animate({
            scrollTop: ($('[data-order="'+ focus +'"]').offset().top) - 50
        }, 500);
    };
    function getBalance(){
        let currency = $('#currency').val()*1;
        let currency_symbol = $('#currency_symbol').val();
        let asset_all = 0;
        $.ajax({
            url: `./api/balance?${$('#_key').val()}`,
            type: 'POST',
            data: '',
            success: function(res){
                const obj = $.parseJSON(res);
                $.each(obj['balance'], function(k, v){
                    asset_all += ((v.balance*1) * (v.p*1));
                    let coin = v.name;
                    let total = ((v.onOrder == '-' ? 0 : v.onOrder) + v.available);
                    let estimate = ((v.balance*(v.p*1)) * currency)*1;
                    let dolla = (v.balance*(v.p*1));
                    $('[id^="balance'+coin+'"]').html(total);
                    $('[id^="balance_currency'+coin+'"]').html(real_format(estimate)+' '+currency_symbol);

                    if(currency_symbol == '฿') {
                        let total_sell = $('[id^="currency_profit'+coin+'"]').val()*1;
                        let result = total_sell + estimate;
                        
                        let sign = '';
                        if(result < 0) {
                            $('[id^="profit'+coin+'"]').removeClass('text-success').addClass('text-danger');
                            sign = '≈ -';
                        }
                        else if(result > 0){
                            $('[id^="profit'+coin+'"]').removeClass('text-danger').addClass('text-success');
                            sign = '≈ +';
                        }
                       
                        $('[id^="profit'+coin+'"]').html(sign+''+real_format(Math.abs(result),2)+currency_symbol);
                    }
                    else{
                        let total_sell = $('[id^="dolla_profit'+coin+'"]').val();
                        $('[id^="profit'+coin+'"]').html(real_format(total - total_sell,2));
                    }
                
                });

                
                let resTotal = $('#resulttotal').val()*1;
                let diffTotal = 0;
                
                diffTotal = resTotal + asset_all;
                 
                let s1 = '';
                let s2 = '';
                if(diffTotal < 0){
                    $('#diff_total').removeClass('text-success').addClass('text-danger');
                    s2='-';
                }
                else{
                    
                    if(diffTotal > 0) {
                        $('#diff_total').removeClass('text-danger').addClass('text-success');
                        s1='+';
                        s2='+';
                    }
                }

                if(diffTotal != 0) {
                    $('#diff_total').html(s1+real_format(diffTotal, 2)+'$');
                    let change_currency = Math.abs(diffTotal*currency);
                    $('.sub_diff_total').html('≈ '+s2+''+real_format(change_currency)+''+currency_symbol);
                }
                
            },
            error: function(xhr){
                /**some error code */
            }

        });
    }

    setTimeout(function(){
        let message = $('#message').val();
        if(message != ""){
            Toast();
        }
    },1000);
});
