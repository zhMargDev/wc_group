window.onload = function() {
};
//Loading

document.addEventListener("DOMContentLoaded", function(event) {
    window.scrollTo({top:0})

    //Run func when window loaded
    headerScrollingEvents()

    //Scroll event
    $(window).scroll(function(){headerScrollingEvents()});
})

function headerScrollingEvents(){
    let y_position = parseInt($(window).scrollTop() / 4);
    let y = parseInt($(window).scrollTop());

//First box background fon
    if (y_position <= 100){
        let y_first = y_position - 1;
        $('#box_1').css('background', 'radial-gradient(circle, #333333 0%, #333333 '+ y_first +'%, #7dfcb7 '+ y_position +'%, #5ec7e5 100%)');
    }else{
        $('#box_1').css('background', 'radial-gradient(circle, #333333 0%, #333333 100%, #7dfcb7 100%, #5ec7e5 100%)');
    }

//Header color transparent 0
    if(y_position > 70){
        $('#header').css('background-color', '#333f');
    }else{
        $('#header').css('background-color', '#333a');
    }
}


function footer_clear_inputs(e){
    let parent = e.parentElement.parentElement;
    //Clear all inputes from footer's feedback
    parent.children[2].children[0].value = '';
    parent.children[2].children[1].value = '';
    parent.children[3].value = '';
    parent.children[4].value = '';
    parent.children[5].value = '';
}

//Footer feedback box inputes check for not empty
function f_input_write(e){
    let parent = document.getElementById('f_feedback_box');
    let name = parent.children[2].children[0];
    let surname = parent.children[2].children[1];
    let mail = parent.children[3];
    let phone = parent.children[4];
    let mess = parent.children[5];

    if(name.value != '' && surname.value != '' && mail.value != '' && phone.value != '' && mess.value != '' && mail.value.indexOf('@') != -1 && mail.value.indexOf('.') != -1){
        document.getElementById('f_send_btn').type = 'submit';
        document.getElementById('f_send_btn').style.backgroundColor = '#3ebe3e';
    }else{
        document.getElementById('f_send_btn').type = 'reset';
        document.getElementById('f_send_btn').style.backgroundColor = '#ff3131';
    }
}