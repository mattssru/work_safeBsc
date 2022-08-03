const animateCSS = (element, animation, prefix = 'animate__') =>
        new Promise((resolve, reject) => {
            $('.alert-toast').show();
            const animationName = `${prefix}${animation}`;
            const node = document.querySelector(element);

            node.classList.add(`${prefix}animated`, animationName);

            function handleAnimationEnd(event) {
                event.stopPropagation();
                node.classList.remove(`${prefix}animated`, animationName);
                $('.alert-toast').addClass('animate__animated animate__bounceOutRight animate__delay-3s');
                setTimeout(()=>{
                    $('.alert-toast').remove();
                },4000);
                resolve('Animation ended');
            }
            node.addEventListener('animationend', handleAnimationEnd, {once: true});
        });
function Toast({type='green', content='Updated Successfully.', icon='fas fa-check-circle'}={}){
    $('.alert-toast').remove();
    let css = {
        "green": {
            "border": "border-green",
            "color": "text-light-green"
        },
        "danger": {
            "border": "border-red",
            "color": "text-light-red"
        }
    };
    let icons = (icon != "" ? `<i class="${icon} ${css[type]['color']}"></i>` : '');
    $('<div/>', {
        class: 'alert-toast text-white '+ css[type]['border'],
        html: icons + content
    }).appendTo('body');
    animateCSS('.alert-toast', 'bounceInRight');
}