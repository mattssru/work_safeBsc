$(document).ready(function(){
    let _t = $('#_t').val();
    if(_t != "login"){
        viewLogin(false);
    }

    $('[data-login]').click(function(){
        let login = $(this).data('login');
        $('.alert_text').empty();
        if(login == "login"){
            viewLogin(true);
        }
        else{
            viewLogin(false);
        }
    });
});
function viewLogin($status = true){
    
    if(!$status){
        $('.section-register').show();
        $('.section-login').hide();
        window.history.pushState({ _t:'register'}, '', './login?_t=register');
    }
    else{
        $('.section-register').hide();
        $('.section-login').show();
        window.history.pushState({_t:'login'}, 'kk', './login?_t=login');
    }
}