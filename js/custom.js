
// ==== jQuery ====

$(function () {

// ==== ==== FAQ: button_text ==== ===

$('#faq_btn1').click(function(){
    $('#btn_para1').slideToggle();
    $('#norm1').toggle();
    $('#clk1').toggle();
    $('#btn_para2').slideUp();
    $('#btn_para3').slideUp();
    $('#norm2').show();
    $('#clk2').hide();
    $('#norm3').show();
    $('#clk3').hide();
    $("#faq_btn1 i").toggleClass("clicked");
    $("#faq_btn2 i").removeClass("clicked");
    $("#faq_btn3 i").removeClass("clicked");
    $("#faq1").toggleClass("add_border");
    $("#faq2").removeClass("add_border");
    $("#faq3").removeClass("add_border");
});

$('#faq_btn2').click(function(){
    $('#btn_para2').slideToggle();
    $('#norm2').toggle();
    $('#clk2').toggle();
    $('#btn_para1').slideUp();
    $('#btn_para3').slideUp();
    $('#norm1').show();
    $('#clk1').hide();
    $('#norm3').show();
    $('#clk3').hide();
    $("#faq_btn2 i").toggleClass("clicked");
    $("#faq_btn1 i").removeClass("clicked");
    $("#faq_btn3 i").removeClass("clicked");
    $("#faq2").toggleClass("add_border");
    $("#faq1").removeClass("add_border");
    $("#faq3").removeClass("add_border");
});

$('#faq_btn3').click(function(){
    $('#btn_para3').slideToggle();
    $('#norm3').toggle();
    $('#clk3').toggle();
    $('#btn_para1').slideUp();
    $('#btn_para2').slideUp();
    $('#norm2').show();
    $('#clk2').hide();
    $('#norm1').show();
    $('#clk1').hide();
    $("#faq_btn3 i").toggleClass("clicked");
    $("#faq_btn2 i").removeClass("clicked");
    $("#faq_btn1 i").removeClass("clicked");
    $("#faq3").toggleClass("add_border");
    $("#faq2").removeClass("add_border");
    $("#faq1").removeClass("add_border");
});

});