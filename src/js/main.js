window.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded Scripts");
});

$(document).ready(function () {
    $('.header-burger').on('click', function () {
        $('.header-burger, .header-menu').toggleClass('active');
        $('.header_left').slideToggle();
    })
    $(window).on("scroll", function() {
        $('.intro  .line').css('right', `${2.5 * $(window).scrollTop()}px`)
    });
    function checkVisible(block) {
        var blockPosition;
        if(block.hasClass('red_message')) {
            blockPosition = block.offset().top - $(window).innerHeight() + ($(window).innerHeight() - (90 * $(window).innerHeight() / 100)) ;
        }
        else if(block.hasClass('blue_message')) {
            blockPosition = block.offset().top - $(window).innerHeight() /2;
        }
        else {
            blockPosition = block.offset().top - $(window).innerHeight();
        }
        var windowScrollPosition = $(window).scrollTop();

        if( blockPosition < windowScrollPosition) {
            return true
        } else {
            return false
        }
    }
    $(window).scroll(function() {
        console.log(checkVisible($('.red_message').first()))
        if(checkVisible($('.red_message').first()) && !checkVisible($('.blue_message').first())) {
            $('.blue_message').first().removeClass('active')
            $('.red_message').first().addClass('active')
        }
        else {
            $('.red_message').first().removeClass('active')
        }
        if(checkVisible($('.blue_message').first())) {
            $('.red_message').first().removeClass('active')
            $('.blue_message').first().addClass('active')

        }
        else {
            $('.blue_message').first().removeClass('active')
        }
        let blockPosition = $('.blue_message').offset().top - ($(window).innerHeight() - (90 * $(window).innerHeight() / 100)) ;
        if( blockPosition < $(window).scrollTop()) {
            $('.blue_message').removeClass('active')
        }
    })

    $(window).resize(function() {
        if(checkVisible($('.red_message').first()) && !checkVisible($('.blue_message').first())) {
            $('.blue_message').first().removeClass('active')
            $('.red_message').first().addClass('active')

        }
        else {
            $('.red_message').first().removeClass('active')
        }
        if(checkVisible($('.blue_message').first())) {
            $('.red_message').first().removeClass('active')
            $('.blue_message').first().addClass('active')

        }
        else {
            $('.blue_message').first().removeClass('active')
        }
    })

    if(checkVisible($('.red_message').first()) && !checkVisible($('.blue_message').first())) {
        $('.blue_message').first().removeClass('active')
        $('.red_message').first().addClass('active')

    }
    else {
        $('.red_message').first().removeClass('active')
    }
    if(checkVisible($('.blue_message').first())) {
        $('.red_message').first().removeClass('active')
        $('.blue_message').first().addClass('active')

    }
    else {
        $('.blue_message').first().removeClass('active')
    }
    $('.message_block').mouseenter(function() {
        $(this).addClass('active')
    })
    $('.message_block').mouseleave(function() {
        $(this).removeClass('active')
    })

    $('.questions_item_title').on('click', function () {
        if ($(this).parent().hasClass("active")) {
            $(".accordeon").removeClass("active").find(".accordeon-text").slideUp().removeClass("active");
        } else {
            $(".accordeon").removeClass("active").find(".accordeon-text").slideUp().removeClass("active");
            $(this).parents(".accordeon").addClass("active").find(".accordeon-text").slideDown()
        }
    })
      new Swiper('.mySwiper', {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerColumnFill: "row",
        navigation: {
            nextEl: ".works-next",
            prevEl: ".works-prev",
        },
        breakpoints: {
            740: {
                slidesPerView: 4,
            }
        }
    });


    $('.list_puncts').parents('.puncts_item_padding').mouseenter(function () {
        let id = '#' + $(this).children('.list_puncts').attr('data-id')
        $('.puncts_list').removeClass('active')


        $('.list_puncts').removeClass('active')
        $(this).children('.list_puncts').addClass('active')


        $(id).addClass('active')
    })

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    $(window).resize(function () {
        if ($(this).width() <= 740) {
            let puncts = $('.puncts_list')
            for (let i = 0; i < puncts.length; i++) {
                let id = puncts[i].getAttribute('id')
                let blocks = $('.list_puncts')
                for (let i = 0; i < blocks.length; i++) {
                    if (blocks[i].getAttribute('data-id') == id) {
                        insertAfter(puncts[i], blocks[i].closest('.puncts_item_padding'))
                    }
                }
            }
        } else {
            let puncts = $('.puncts_list')
            for (let i = 0; i < puncts.length; i++) {
                $('.puncts_right.list').append(puncts[i])
            }
        }
    })

    if ($(this).width() <= 740) {
        let puncts = $('.puncts_list')
        for (let i = 0; i < puncts.length; i++) {
            let id = puncts[i].getAttribute('id')
            let blocks = $('.list_puncts')
            for (let i = 0; i < blocks.length; i++) {
                if (blocks[i].getAttribute('data-id') == id) {
                    insertAfter(puncts[i], blocks[i].closest('.puncts_item_padding'))
                }
            }
        }
        $('.list_puncts').removeClass('active')
    }


    $('.img_puncts').parents('.puncts_item_padding').mouseenter(function () {
        $('.img_puncts').removeClass('active')
        $('.img_puncts_text').css('display', 'none')
        $(this).children('.img_puncts').addClass('active')
        let id = '.puncts_right #' + $(this).children('.img_puncts').attr('data-id')
        $(id).css("display", "flex").hide().fadeIn(200)
    })
    $('.img_puncts').first().addClass('active')
    $('.img_puncts_text').first().css('display', 'flex')


    let zones = ['jardac_first', 'jardac_second', 'jardac_third', 'jardac_fourth', 'jardac_five'];
    let zoneI = 1;


    function zoneInterval() {
        $('.state_info').css('display', 'none');
        $('.xali').attr('stroke-width', '0px');
        $('.jardacLabel').attr('stroke-width', '0px');




        if(zoneI <= zones.length - 1) {
            $("#" + zones[zoneI]).fadeIn()


            let xali = $(".xali[data-id='" + zones[zoneI] +"']");
            let label = $(".jardacLabel[data-id='" + zones[zoneI] +"']");

            xali.attr('stroke', 'rgba(000,000,000,.3)')
            xali.attr('stroke-width', '10px')

            label.attr('stroke', label.attr('fill'))
            label.attr('stroke-width', '5px')

            zoneI++;
        }
        else {
            zoneI = 0
            $("#" + zones[zoneI]).fadeIn()
            let xali = $(".xali[data-id='" + zones[zoneI] +"']");
            let label = $(".jardacLabel[data-id='" + zones[zoneI] +"']");

            xali.attr('stroke', 'rgba(000,000,000,.3)')
            xali.attr('stroke-width', '10px')

            label.attr('stroke', label.attr('fill'))
            label.attr('stroke-width', '5px')
            zoneI++;
        }
    }


    var changeZone = setInterval(zoneInterval, 3000)


    $('.jardacMouseOver').mouseenter(function() {
        clearInterval(changeZone)
    })

    $('.jardacMouseOver').mouseleave(function() {
        changeZone = setInterval(zoneInterval, 3000)
    })

    $('.jardacMouseOver').mouseenter(function() {
        $('.xali').attr('stroke-width', '0px')
        $('.jardacLabel').attr('stroke-width', '0px')

        let xali = $(".xali[data-id='" + $(this).attr('data-id') +"']");
        let label = $(".jardacLabel[data-id='" + $(this).attr('data-id') +"']");

        xali.attr('stroke', 'rgba(000,000,000,.3)')
        xali.attr('stroke-width', '10px')

        label.attr('stroke', label.attr('fill'))
        label.attr('stroke-width', '5px')

        if($('#' + $(this).attr('data-id')).css('display') == 'none') {
            $('.state_info').css('display', 'none');
            $('#' + $(this).attr('data-id')).fadeIn(200)
        }
    })
})