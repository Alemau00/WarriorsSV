$(document).ready(main);
var contador=1;

function main()
{
    $('.desplegable').click(animacion);
    function animacion()
    {
        if(contador==1)
        {
            $('#head-right').animate({
                left:'0'
            });
            contador=0;
        }
        else
        {
            contador=1;
            $('#head-right').animate({
                left:'-100%'
            });
        }
    }

    $('.submenu').click(function(){
        $(this).children('.secondlist').slideToggle();
    })
}
