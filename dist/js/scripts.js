//libraries like jquery etc
window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
});

$(document).ready(function () {
    $('.header-burger').on('click', function () {
        $('.header-burger, .header-menu').toggleClass('active');
        $('.header_left').slideToggle();
    })
    console.log(   $(".accordeon .accordeon-text").prev().parent())
    $('.questions_item_title').on('click', function () {
        if($(this).parent().hasClass("active")){
            $(".accordeon").removeClass("active").find(".accordeon-text").slideUp().removeClass("active");
        }else{
            $(".accordeon").removeClass("active").find(".accordeon-text").slideUp().removeClass("active");
            $(this).parents(".accordeon").addClass("active").find(".accordeon-text").slideDown()
        }
        // $(this).parents(".accordeon").addClass("active")
    })
    // $(".accordeon .accordeon-text").hide().prev().click(function () {
    //     $(this).parents(".accordeon").removeClass("active");
    //     $(this).parents(".accordeon").find(".accordeon-text").not(this).slideUp().prev().removeClass("active");
    //     $(this).next().not(":visible").slideDown().parents(".accordeon").addClass("active");
    // });
})