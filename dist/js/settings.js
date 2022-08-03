$(document).ready(async function(){ 
    $('#pair').selectpicker();

    $('#pair').change(function(){
        var v = $(this).val();
        $(this).val('').selectpicker('refresh');
        $(this).parents('span').prepend('<label class="btn btn-sm btn-outline-warning rounded-pill align-self-center tag-pair mr-1">' + v + '<input type="hidden" name="coins[] "value="'+ v +'"> <i class="fas fa-times-circle"></i></label>');
        $('.update-coin').show();
    });
    $('.cancel-update-coin').click(function(){
        let tempCoin = $('#temp-coin').val();
        let arr = tempCoin.split(',');
        $('.area-coin label').remove();
        $.each(arr, function(key, symbol){
            let content = `<label class="btn btn-sm btn-outline-warning rounded-pill align-self-center tag-pair mr-1 mb-2">${symbol}
                <input type="hidden" name="coins[]" value="${symbol}">
                <i class="fas fa-times-circle"></i>
            </label>`;
            $('.area-coin').prepend(content);
        });
        $(this).parents('.update-coin').hide();
    });
    $(document).on('click','.tag-pair i',function(){
        $(this).parent().remove();
        $('.update-coin').show();
    })

    $('.btn-edit').click(function(){
        $(this).parent().find('.btn-group').removeClass('d-none'); 
        $(this).parent().find('input').attr('readonly',false);
        $(this).hide();
        $(this).parent().find('iframe').show();
    });
    $('.btn-times').click(function(){
        $(this).parents('.input-group').find('.btn-edit').show(); 
        $(this).parents('.input-group').find('.btn-group').addClass('d-none'); 
        $(this).parents('.input-group').find('input').attr('readonly',true);
        $(this).parents('.input-group').find('iframe').hide();
    });
    $('.btn-notify-submit').click(function(){
        let key = $(this).parents('.input-group').find('input').val();
        let alert = $(this).parents('.input-group').find('input[data-alert]').data('alert');
        $('#notifykey').val(key);
        $('#alert').val(alert);
        $('#form-edit').submit();
    });

    $('#qrcode').change(function(){
        if($('#qrcode').val() != "")
        {
            let m =readURL_inside(this, ['png','jpeg','jpg']);
        }
        else
        {
            let img = $(this).parent().find('img');
            img.attr('src', img.data('src'));	
        }
    });
    $(document).on('change', '[data-status-key]', function(){
        let key_id = $(this).data('status-key');
        if($(this).is(':checked')){
            let _v = $(this).val();
            setStatus({key: key_id, status: _v});
        }
        else{
            setStatus({key: key_id, status: 0});
        }
    }).on('click', '.fa-eye', function(){
        let long = $(this).parent().find('span').data('long');
        $.dialog({
            title: 'API Key',
            content: `<div class="input-group">
                <input type="text" class="form-control bg-white text-dark f-9" id="viewapi" value="${long}"/>
                <div class="input-group-append">
                   
                </div>
                <span class="input-group-text"><i data-toggle="tooltip" data-placement="bottom" title="Copy to clipboard" onclick="$.copyclipboard(this,'${long}','.input-group');" class="fas fa-copy pointer"></i></span>
            </div>`
        });
    }).on('click', '[data-cog-key]', function(){
        let key = $(this).data('cog-key');
        getConfig(key);
    });;
    

    $('#back-config').click(function(){
        let _key = $('#key_id').val();
        $('#sub-section').slideUp('slow', function(){
            $(this).hide();
        });
        $('#main-section').slideUp('slow',function(){
            $(this).show();
        });
        window.history.replaceState({}, document.title, "/" + "configs");
        getApi();
    });
    $('[name="trade"], [name="new_order"], [name="cancel_order"]').change(function(){
        let v;
        let task = $(this).attr('name');
        let k = $('#key_id').val();
        if($(this).is(':checked')){
            v=1;
        }
        else{
            v=0;
        }
        $.post('./api/spot?q='+Math.random(), {key_id: k, task: task, status: v} , function(res){
            if(res == 'success') {
                Toast();
            }
            else{
                $.danger();
            }
        });
        
    });
    $('[name="notify"]').change(function(){
        let v = $(this).val();
        let k = $('#key_id').val();
        $.post('./api/set-alert?q='+Math.random(), {notify: v, key_id: k} , function(res){
            if(res=='success') {
                Toast();
            }
            else{
                $.danger();
            }
        });
    });


    $('#form-coin').on('submit', function(e){
        e.preventDefault();
        let formData = new FormData(this);
        let _key = $('#key_id').val();
        formData.append('key_id', _key);
        $.ajax({
            url: './api/set-symbol?q='+Math.random(),
            type: 'POST',
            processData: false,
            contentType: false,
            catch: false,
            data: formData,
            success: function(res){
                console.log(res);
                if(res == "success") {
                   
                    Toast();
                    $('.update-coin').hide();
                }
                else {
                    Toast({
                        type: 'danger',
                        content: 'Update faild.',
                        icon: 'fas fa-exclamation-circle'
                    });
                }
            },
            error: function(xhr){
                /** some code error */
            }
        });
    });

    $('#form-edit').on('submit', function(e){
        e.preventDefault();
        let formData = new FormData(this);
        let _key = formData.get('key_id');
        $.ajax({
            url: './api/set-notify?q='+Math.random(),
            type: 'POST',
            processData: false,
            contentType: false,
            catch: false,
            data: formData,
            success: function(res){
                if(res == "success") {
                    $('.show-group').find('.btn-edit').show(); 
                    $('.show-group').find('.btn-group').addClass('d-none'); 
                    $('.show-group').find('input').attr('readonly',true);
                    Toast();
                    getConfig(_key);
                }
                else {
                    Toast({
                        type: 'danger',
                        content: 'Update faild.',
                        icon: 'fas fa-exclamation-circle'
                    });
                }
            },
            error: function(xhr){
                /** some code error */
            }
        });
    });

    $('#form-create').validate({
        rules: {
            apiname: {
                required: true
            },
            api: {
                required: true
            },
            secret: {
                required: true
            }
        },
        messages: {
            apiname: {
                required: "This field is required."
            },
            api: {
                required: "This field is required."
            },
            secret: {
                required: "This field is required."
            }
        }
    });

    $('#form-create').on('submit', function(e){
        e.preventDefault();
        if(!$(this).valid()) return;
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

                        
                        $.ajax({
                            url: './api/create-portfolio?q='+Math.random(),
                            type: 'POST',
                            processData: false,
                            contentType: false,
                            catch: false,
                            data: formData,
                            success: function(res){
                               
                                if(res == "success") {
                                    Toast({
                                        type: 'green',
                                        content: 'Created Portfolio Successfully.'
                                    });
                                    $('#form-create')[0].reset();
                                    getApi();
                                }
                                else if(res == "register"){
                                    Toast({
                                        type: 'danger',
                                        content: 'Please log in or register.',
                                        icon: 'fas fa-exclamation-circle'
                                    });
                                }
                                else if(res == "duplicate") {
                                    $.danger({content: 'This api is already in use, please change api or contact admin.'});
                                }
                                else {
                                    Toast({
                                        type: 'danger',
                                        content: 'Create faild.',
                                        icon: 'fas fa-exclamation-circle'
                                    });
                                }
                            },
                            error: function(xhr){
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

    setStatus = function({key,status}){
        $.post('./api/set_status', {
            key_id: key,
            status: status
        }, function(res){
            if(res == 'login') {
                window.location = './login';
            }
            else{
                Toast();
                changeOptionProject();
            }
        });
    };
    changeOptionProject = function(){
        $.post('./api/option-project?'+Math.random(), function(res){
            const obj = $.parseJSON(res);
            if(obj['result'] == "login") {
                window.location = './login';
            }
            else{
                if(obj['result'] == 'success'){
                    $('.option-project').html(obj['data']);
                    $('#select-project').selectpicker('refresh');
                }
                else{
                    $('.option-project').html(obj['data']);
                }
               
            }
        });
    };
    getConfig = function (key){
        $.post('./api/get-config?q='+Math.random(), {key_id: key}, function(res){
            const obj = $.parseJSON(res);
            $('#key_id').val(key);
            if(obj['result'] == "success"){
                $('#sub-section').slideDown('slow', function(){
                    $(this).show();
                });
                $('#main-section').slideDown('slow', function(){
                    $(this).hide();
                    $('#sub-section').show();
                });
                $('#key_id').val(key);
                $.each(obj['data'][0], function(key, row){
                    if(key == "trade" || key == 'new_order' || key == 'cancel_order'){
                        $('[name="'+key+'"]').prop('checked', row*1);
                    }
                    else if(key == 'notify'){
                        if(row == '') {
                            $('[name="'+key+'"]').prop('checked',false);
                        }
                        else{
                            $('[name="'+key+'"][value="'+row+'"]').prop('checked',true);
                        }
                    }
                    else{
                        $('[name="'+key+'"]').val(row);
                    }
                });
                getSymbol(key);
            }
            else{
                Toast({type: 'danger'});
            }
            
        });
    };
    getApi = async function (){
        let auth = $('#auth').val();
        if(auth == ''){
            $.danger();
            return;
        }
        $.post('./api/get-api?q='+Math.random(), {auth: auth, lang: $('#lang').val()}, function(res){
            const obj = $.parseJSON(res);
            if(obj['result'] == "success"){
                let data = _view(obj['data']);
                $('#table-api').html(data);
                $('.toggle-trigger').bootstrapToggle();
                $('[data-toggle="tooltip"]').tooltip();

                
            }
            else{
                $.danger();
            }
            
        });
    };
    getSymbol = async function(key){
        console.log(key)
        $('.area-coin label').remove();
        $.post('./api/get-symbol?q='+Math.random(), {key_id: key} ,function(res){
            const obj = $.parseJSON(res);
            let temp = [];
            if(obj['result'] == "success") {
                $.each(obj['data'], function(k, v){
                    let content = `<label class="btn btn-sm btn-outline-warning rounded-pill align-self-center tag-pair mr-1 mb-2">${v.symbol}
                        <input type="hidden" name="coins[]" value
                        ="${v.symbol}">
                        <i class="fas fa-times-circle"></i>
                    </label>`;
                    temp.push(v.symbol);
                    $('.area-coin').prepend(content);
                });
                $('#temp-coin').val(temp.join(','));
            }
            
        });
    };
    checkSetting = async function(){
        let settings = $('#settings').val();
        if(settings != "") {
            getConfig(settings);
        }
    };
    function _view(data){
        return atou(_hex(data));
    }
    await getApi();
    if($('#_key').val() != "") {
        await checkSetting();
    }
    $('#camera').on('hide.bs.modal', function () {
        html5QrcodeScanner.clear();
    });
});

var html5QrcodeScanner;
function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 0.1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
function printScanResultPretty(codeId, decodedText, decodedResult) {
    var obj = $.parseJSON(decodedText);
    if(obj.apiKey != "") {
        $('[name="api"]').val(obj.apiKey);
        $('[name="secret"]').val(obj.secretKey);
        $('[name="apiname"]').val(obj.comment);
    }
}

function startQrcode(){
    docReady(function() {
        hljs.initHighlightingOnLoad();
        var lastMessage;
        var codeId = 0;
        
        html5QrcodeScanner = new Html5QrcodeScanner(
            "reader", 
            { 
                fps: 10,
                qrbox: { width: 250, height: 250 },
                experimentalFeatures: {
                    useBarCodeDetectorIfSupported: true
                },
                rememberLastUsedCamera: true,
                formatsToSupport: [
                    Html5QrcodeSupportedFormats.QR_CODE,
                    Html5QrcodeSupportedFormats.AZTEC,
                    Html5QrcodeSupportedFormats.CODABAR,
                    Html5QrcodeSupportedFormats.CODE_39,
                    Html5QrcodeSupportedFormats.CODE_93,
                    Html5QrcodeSupportedFormats.CODE_128,
                    Html5QrcodeSupportedFormats.DATA_MATRIX,
                    Html5QrcodeSupportedFormats.MAXICODE,
                    Html5QrcodeSupportedFormats.ITF,
                    Html5QrcodeSupportedFormats.EAN_13,
                    Html5QrcodeSupportedFormats.EAN_8,
                    Html5QrcodeSupportedFormats.PDF_417,
                    Html5QrcodeSupportedFormats.RSS_14,
                    Html5QrcodeSupportedFormats.RSS_EXPANDED,
                    Html5QrcodeSupportedFormats.UPC_A,
                    Html5QrcodeSupportedFormats.UPC_E,
                    Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION
                ]
            }
        );
        function onScanSuccess(decodedText, decodedResult) {
            if (lastMessage !== decodedText) {
                lastMessage = decodedText;
                printScanResultPretty(codeId, decodedText, decodedResult);
                ++codeId;
                html5QrcodeScanner.clear();
            }
            $('#camera').modal('hide');
        }
        
        html5QrcodeScanner.render(onScanSuccess);
        $('#camera').modal('show');
    });
    
}

function onTelegramAuth(user) {
    let tg_user = (user.first_name ? user.first_name : '') + ' ' + (user.last_name ? user.last_name : '');
    let tg_user_id = user.id;
    let tg_user_name = (user.username ? '@' + user.username : '');
    $('[name="telegramkey"]').val(tg_user_id);
}