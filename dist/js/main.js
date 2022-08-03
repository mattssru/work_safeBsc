(function( $ ) {
    $.fn.flex = function(){
        this.css('display','flex');
        return this;
    };  
    $.fn.hidden = function() {
        this.removeClass('d-flex');
        this.css( "display", "none" );
        return this;
    };
    $.fn.clear = function() {
        this.removeAttr("style");
        return this;
    };
}( jQuery ));

$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $(window).resize(function(){
        resize();
    });
    function resize(){
        let w = $(window).outerWidth();
        if(w <= 1200) {
            $('.container').addClass('container-fluid');
        }
        else{
            $('.container').removeClass('container-fluid');
        }
    }
    resize();
});
function matchCoin(coin){
    const symbol = ['','BUSD', 'USDT', 'BNB', 'BTC' ,'ETH','AUD', 'BIDR', 'BRL', 'EUR', 'GBP', 'RUB', 'TRY', 'TUSD', 'USDC', 'DAI', 'IDRT', 'UAH', 'VAI', 'NGN', 'USDP', 'UST'];
    let match = '';
    symbol.forEach(sym => {
        if(coin.search(sym) > 0){
            match = sym;
        }
    });
    return {
        match: match,
        base: coin.split(match)[0]
    };
}
function formatDate(timestamp){
    let d = new Date(timestamp);
    let m = d.getMonth()+1;
    let format = `${d.getFullYear()}-${('0'+ m).slice(-2)}-${('0' + d.getDate()).slice(-2)} ${('0'+ d.getHours()).slice(-2)}:${('0'+ d.getMinutes()).slice(-2)}:${('0'+d.getSeconds()).slice(-2)}`;
    return format;
}
function readURL(input, extension=[]) {
    let extens = input.files[0].name.split('.').pop().toLowerCase();
    let index = extension.indexOf(extens);
    if(index < 0){
        $('.note-upload').addClass('animate__shakeX');
        setTimeout(function(){
            $('.note-upload').removeClass('animate__shakeX');
        },2000);
        return false;
    }
    //.files.name.split('.').pop();
        /*if(extension == "pdf" || extension == "PDF"){
            $('.thumbnail').append('<img src="public/assets/icons/pdf30x30.png" style="width:30px;margin-right:10px;"/>');
        }*/
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
        return true;
    }
}
function readURL_inside(input, extension=[]) {
    let extens = input.files[0].name.split('.').pop().toLowerCase();
    let index = extension.indexOf(extens);
    let ele = input;
    console.log('extend' ,extens, index)
    if(index < 0){
        $.danger({content: 'Support png, jpeg files.'});
        return false;
    }
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(ele).parent().find('img').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
        return true;
    }
}
$.warning = function({content='An error occurred'}={}){
    $.alert({
        icon: 'fas fa-exclamation-triangle',
        theme: 'modern',
        type: 'orange',
        title: 'System Message',
        content: content,
        buttons: {
            confirm: {
                text: 'OK'
            }
        }
    });
};
$.danger = function({content = 'Oops an error has occurred.'}={}){
    Toast({
        type: 'danger',
        content: content,
        icon: 'fas fa-exclamation-circle'
    });
};

function fallbackCopyTextToClipboard(e,text,oldcontent) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
        var successful = document.execCommand('copy');
        $(e).attr('data-original-title', "Copied").tooltip('show');
        setTimeout(function(){
            $(e).attr('data-original-title', oldcontent);
        },1000);
    } catch (err) {
        $(e).attr('data-original-title', "Fail Copy").tooltip('show');
        setTimeout(function(){
            $(e).attr('data-original-title', oldcontent);
        },1000);
    }
  
    document.body.removeChild(textArea);
  }
$.copyclipboard = function(e,text, ele=''){
    
    let oldcontent = $(e).attr('data-original-title');
    const textToCopy = text;
    if (!navigator.clipboard) {
        
        fallbackCopyTextToClipboard(e,text,oldcontent);
        return;
    }
  
    navigator.clipboard.writeText(textToCopy)
        .then(() => { 
            if(ele == ''){
                $(e).attr('data-original-title', "Copied").tooltip('show');
                setTimeout(function(){
                    $(e).attr('data-original-title', oldcontent);
                },1000);
            }
            else{
                $(e).parents(ele).append('<span class="alert-tooltip d-flex justify-content-center w-100 text-success">Copied.</span>');
                setTimeout(function(){
                    $('.alert-tooltip').remove();
                },1000);
            }
            
        })
        .catch((error) => {
            if(ele == '') {
                $(e).attr('data-original-title', "Fail Copy").tooltip('show');
                setTimeout(function(){
                    $(e).attr('data-original-title', oldcontent);
                },1000);
            }
            else{
                $(e).parents(ele).append('<span class="alert-tooltip d-flex justify-content-center w-100 text-success">Fail Copy.</span>');
                setTimeout(function(){
                    $('.alert-tooltip').remove();
                },1000);
            }
        });
};
$.loader = function(){
    let loader = `<div class="loader"style="background-color: rgba(0,0,0,.4); width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 9999;">
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #fffabf; z-index: 10000;"></i>
    </div>`;
    $('body').append(loader);
};
$.closeloader = function(){
    $('.loader').remove();
};

real_format = function (num, $digit = 2) {
    var str = num.toString().replace("$", ""),
        parts = false,
        output = [],
        i = 1,
        formatted = null;
    if (str.indexOf(".") > 0) {
        parts = str.split(".");
        str = parts[0];
    }
    str = str.split("").reverse();
    for (var j = 0, len = str.length; j < len; j++) {
        if (str[j] != ",") {
            output.push(str[j]);
            if (i % 3 == 0 && j < len - 1) {
                output.push(",");
            }
            i++;
        }
    }
    formatted = output.reverse().join("");
    return formatted + (parts ? "." + parts[1].substr(0, $digit) : "");
};


$(document).ready(function(){
    var geturl = location.pathname;
    var cuturl = geturl.split("/").pop();
    $('a[href="'+cuturl+'"].nav-link').addClass('active');
    $(document).on('change', '#select-project', function(){
        let _v = $(this).val();
        if(_v == 'create') {
            window.location='configs';
        }
        else{
            $.post('./api/set_project?'+_v, function(res){
                if(res == 'success'){
                    window.location =  document.URL;
                }
                else{
                    $.danger();
                }
            });
        }
        console.log('project', _v);
    });
    $('.alert_new').click(function(){
        let key = $(this).data('alert-key');
        let aria = $(this).attr('aria-expanded');
        if(aria == undefined || aria == 'false') {
            $.post('./api/read_notifications?q='+Math.random(), {auth: key}, function(res){
                if(res == 'success'){
                    $('.view-navbar-alert').remove();
                }
            });
        }
    });
    $('.alert_clear').click(function(){
        let key = $(this).data('alert-key');
        let aria = $(this).attr('aria-expanded');
        if(aria == undefined || aria == 'false') {
            $.post('./api/read_notifications?q='+Math.random(), {auth: key}, function(res){
                if(res == 'success'){
                    $('.view-navbar-alert').remove();
                }
            });
        }
    });
});