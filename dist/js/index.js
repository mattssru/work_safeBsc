$.info = function({content}){
    $.alert({
        icon: 'fas fa-info-circle',
        type: 'blue',
        theme: 'modern',
        title: $('#alert').val(),
        content: content,
        buttons:{
            confirm: {
                text: $('#confirm').val()
            }
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
_view = function(t){
    return atou(_hex(t));
}