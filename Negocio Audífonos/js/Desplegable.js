$(document).ready(main);
var contador = 1;

function main()
{
    //Submenus
    $('.submenu').click(function(){
        $(this).children('.secondlist').slideToggle();
    })
}
