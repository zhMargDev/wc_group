window.onload = function() {
};
//Loading

document.addEventListener("DOMContentLoaded", function(event) {
    //Run func when window loaded
    scrollingEvents()

    //Scroll event
    $(window).scroll(function(){scrollingEvents()});
})

function scrollingEvents(){
    let y = parseInt($(window).scrollTop());

    // this var is calculates y position for elemnts when that elements was hidden
    let y_math = parseInt(y + window.innerHeight - window.innerHeight * 25 / 100 + 100);
//Second box animations
    //box 2's background and lable anim
    if(y_math > $('#box_2').offset().top){
        $('#box_2').css('background-size', '100% 100%');
        if (window.innerWidth > 1000){
            $('#about_lable').css('left', '50px');
        }else if(window.innerWidth > 550){
            $('#about_lable').css('margin-left', '50px');
        }else{
            $('#about_lable').css('margin-left', '30px');
        }
    }

    //box 2 first text box anim
    if(y_math > $('#about_left').offset().top){
        if (window.innerWidth > 1000){
            $('#about_left').css('left', '50px');
        }else if(window.innerWidth > 550){
            $('#about_left').css('margin-left', '50px');
        }else{
            $('#about_left').css('margin-left', '30px');
        }
    }

    //box 2 second text box anim
    if(y_math > $('#about_right').offset().top){
        if (window.innerWidth > 1000){
            $('#about_right').css('right', '50px');
        }else if(window.innerWidth > 550){
            $('#about_right').css('margin-right', '50px');
        }else{
            $('#about_right').css('margin-left', '30px');
        }
    }


//Thert box animations
    //box 3 lable and banner anim and first left text anim
    if(y_math > $('#services_lable').offset().top){
        $('#services_lable').css('left', '30px');
        $('#box_3').css('background-size', '58%');
        $('#services_left').css('left', '40px');
    }

    if(y_math > $('#services_left_2').offset().top){
        $('#services_left_2').css('left', '40px')
    }

    if(y_math > $('#about_services').offset().top){
        if(window.innerWidth > 1000){
            $('#about_services').css('left', '40px');
        }else{
            $('#about_services').css('left', '50%');
        }
    }

    //box 4
    // servoces 1.2.3.4 boxes
    if(y_math > $('#service_sub_box_1').offset().top){
        $('#service_sub_box_1').css('left', '0px');
    }
    if(y_math > $('#service_sub_box_2').offset().top){
        $('#service_sub_box_2').css('right', '0px');
    }
    if(y_math > $('#service_sub_box_3').offset().top){
        $('#service_sub_box_3').css('left', '0px');
    }
    if(y_math > $('#service_sub_box_4').offset().top){
        $('#service_sub_box_4').css('right', '0px');
    }

    //services second box
    if(y_math > $('#about_services_2').offset().top){
        if(window.innerWidth > 1000){
            $('#about_services_2').css('left', '40px');
        }else{
            $('#about_services_2').css('left', '50%');
        }
    }

    if(y_math > $('#service_sub_box_2_1').offset().top){
        $('#service_sub_box_2_1').css('left', '0px');
    }
    if(y_math > $('#service_sub_box_2_2').offset().top){
        $('#service_sub_box_2_2').css('right', '0px');
    }

    //last appeal
    if(y_math > $('#last_appeal_services').offset().top){
        if(window.innerWidth > 550){
            $('#last_appeal_services').css('left', '40px');
        }else{
            $('#last_appeal_services').css('left', '30px');
        }
    }

}

