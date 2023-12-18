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
    $('.slide').on('click', function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#' + $(this).attr('data-slide')).offset().top
        }, 500);
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
    $(".clients-inner").imageslider({
        slideItems: ".clients-item-link",
        slideContainer: ".clients-list",
        slideDistance: 1,
        slideDuratin: 20,
        resizable: true,
        pause: true,
    });

    $('.vision_item').parents('.vision_item_padding').mouseenter(function() {
        $('.vision_item').removeClass('active')
        $(this).children('.vision_item').addClass('active')
    })

    $('.vision_item').parents('.vision_item_padding').mouseleave(function() {
        $('.vision_item').removeClass('active')
    })

    function decimalAdjust(type, value, exp) {
        // Если степень не определена, либо равна нулю...
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // Если значение не является числом, либо степень не является целым числом...
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        // Сдвиг разрядов
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        // Обратный сдвиг
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    let grayHtml = `<div class="calculator_basket_item" data-block="gray"><div class="color_block padding"><div class="title"><p>Գույնը</p><img src="img/calc-min-1.png"></div><div class="calculator_products_item-img"><img src="img/calc-1.png"></div></div><div class="size_block padding"><p class="title">Գորգի չափսը (սմ)</p><div class="select"><p class="value">60x85</p><img src="img/down-arrow.png"><div class="dropdown"><p>60x85</p><p>85x150</p><p>115x150</p><p>115x240</p><p>150x180</p><p>150x240</p><p>150x400</p></div></div></div><div class="cound_block padding"><p class="title">Գորգերի քանակը</p><div class="input"><button class="minus">-</button><p class="number" data-count="1">1</p><button class="plus">+</button></div></div><div class="week_block padding"><p class="title">Շաբաթական թարմացում</p><div class="select"><p class="value">Երկու շաբաթը մեկ անգամ</p><img src="img/down-arrow.png"><div class="dropdown"><p>Երկու շաբաթը մեկ անգամ</p><p>Շաբաթը մեկ անգամ</p><p>Շաբաթը երկու անգամ</p><p><span class="blue">* </span>Սեզոնային</p></div></div></div><div class="remove_block"><img src="img/close.png"></div></div>`;
    let brownHtml = `<div class="calculator_basket_item" data-block="brown"><div class="color_block padding"><div class="title"><p>Գույնը</p><img src="img/calc-min-2.png"></div><div class="calculator_products_item-img"><img src="img/calc-2.png"></div></div><div class="size_block padding"><p class="title">Գորգի չափսը (սմ)</p><div class="select"><p class="value">60x85</p><img src="img/down-arrow.png"><div class="dropdown"><p>60x85</p><p>85x150</p><p>115x240</p><p>150x240</p><p>150x400</p></div></div></div><div class="cound_block padding"><p class="title">Գորգերի քանակը</p><div class="input"><button class="minus">-</button><p class="number" data-count="1">1</p><button class="plus">+</button></div></div><div class="week_block padding"><p class="title">Շաբաթական թարմացում</p><div class="select"><p class="value">Երկու շաբաթը մեկ անգամ</p><img src="img/down-arrow.png"><div class="dropdown"><p>Երկու շաբաթը մեկ անգամ</p><p>Շաբաթը մեկ անգամ</p><p>Շաբաթը երկու անգամ</p><p><span class="blue">* </span>Սեզոնային</p></div></div></div><div class="remove_block"><img src="img/close.png"></div></div>`;
    let brandedHtml = `<div class="calculator_basket_item" data-block="branded"><div class="color_block padding"><div class="title"><p>Գույնը</p><img src="img/calc-min-3.png"></div><div class="calculator_products_item-img"><img src="img/calc-3.png"></div></div><div class="size_block padding"><p class="title">Գորգի չափսը (սմ)</p><div class="inputs"><input type="text" class="input size1 sizeInput" value="60"><span>x</span><input type="text" class="input size2 sizeInput" value="85"></div></div><div class="cound_block padding"><p class="title">Գորգերի քանակը</p><div class="input"><button class="minus">-</button><p class="number" data-count="1">1</p><button class="plus">+</button></div></div><div class="week_block padding"><p class="title">Շաբաթական թարմացում</p><div class="select"><p class="value">Երկու շաբաթը մեկ անգամ</p><img src="img/down-arrow.png"><div class="dropdown"><p>Երկու շաբաթը մեկ անգամ</p><p>Շաբաթը մեկ անգամ</p><p>Շաբաթը երկու անգամ</p><p><span class="blue">* </span>Սեզոնային</p></div></div></div><div class="remove_block"><img src="img/close.png"></div></div>`;

    function initPrice(prod) {
        let product = {}
        let size = $(prod).children('.size_block').children('.select').children('.value').html()
        let count = +$(prod).children('.cound_block').children('.input').children('.number').attr('data-count')
        let rotation = $(prod).children('.week_block').children('.select').children('.value').html()
        let brandedText = false

        product['color'] = $(prod).attr('data-block')
        product['size'] = size
        product['count'] = count
        product['rotation'] = rotation
        let price = 0;
        let price2 = 0;
        let r2 = 4290;
        let r4 = 6250;
        let r8 = 7840;

        function calcPrice2Rotations(sqMeter, count) {
            return count * (Math.ceil((sqMeter * r2)/10)*10);
        }
        function calcPrice4Rotations(sqMeter, count) {
            return count * (Math.ceil((sqMeter * r4)/10)*10);
        }
        function calcPrice8Rotations(sqMeter, count) {
            return count * (Math.ceil((sqMeter * r8)/10)*10);
        }

        if(prod.getAttribute('data-block') != 'branded') {
            if (size == '60x85' && rotation == 'Երկու շաբաթը մեկ անգամ') {
                price = calcPrice2Rotations(0.51, count);
            }
            else if (size == '60x85' && rotation == 'Շաբաթը մեկ անգամ') {
                price = calcPrice4Rotations(0.51, count);
            }
            else if (size == '60x85' && rotation == 'Շաբաթը երկու անգամ') {
                price = calcPrice8Rotations(0.51, count);
            }

            if (size == '115x150' && rotation == 'Երկու շաբաթը մեկ անգամ') {
                price = calcPrice2Rotations(1.725, count);
            }
            else if (size == '115x150' && rotation == 'Շաբաթը մեկ անգամ') {
                price = calcPrice4Rotations(1.725, count);
            }
            else if (size == '115x150' && rotation == 'Շաբաթը երկու անգամ') {
                price = calcPrice8Rotations(1.725, count);
            }
            if (size == '150x180' && rotation == 'Երկու շաբաթը մեկ անգամ') {
                price = calcPrice2Rotations(2.7, count);
            }
            else if (size == '150x180' && rotation == 'Շաբաթը մեկ անգամ') {
                price = calcPrice4Rotations(2.7, count);
            }
            else if (size == '150x180' && rotation == 'Շաբաթը երկու անգամ') {
                price = calcPrice8Rotations(2.7, count);
            }




            else if (size == '85x150' && rotation == 'Երկու շաբաթը մեկ անգամ') {
                price = calcPrice2Rotations(1.275, count);
            }
            else if (size == '85x150' && rotation == 'Շաբաթը մեկ անգամ') {
                price = calcPrice4Rotations(1.275, count);
            }
            else if (size == '85x150' && rotation == 'Շաբաթը երկու անգամ') {
                price = calcPrice8Rotations(1.275, count);
            }



            else if (size == '115x240' && rotation == 'Երկու շաբաթը մեկ անգամ') {
                price = calcPrice2Rotations(2.76, count);
            }
            else if (size == '115x240' && rotation == 'Շաբաթը մեկ անգամ') {
                price = calcPrice4Rotations(2.76, count);
            }
            else if (size == '115x240' && rotation == 'Շաբաթը երկու անգամ') {
                price = calcPrice8Rotations(2.76, count);
            }




            else if (size == '150x240' && rotation == 'Երկու շաբաթը մեկ անգամ') {
                price = calcPrice2Rotations(3.6, count);
            }
            else if (size == '150x240' && rotation == 'Շաբաթը մեկ անգամ') {
                price = calcPrice4Rotations(3.6, count);
            }
            else if (size == '150x240' && rotation == 'Շաբաթը երկու անգամ') {
                price = calcPrice8Rotations(3.6, count);
            }



            else if (size == '150x400' && rotation == 'Երկու շաբաթը մեկ անգամ') {
                price = calcPrice2Rotations(6, count);
            }
            else if (size == '150x400' && rotation == 'Շաբաթը մեկ անգամ') {
                price = calcPrice4Rotations(6, count);
            }
            else if (size == '150x400' && rotation == 'Շաբաթը երկու անգամ') {
                price = calcPrice8Rotations(6, count);
            }
            else if (size == '60x85' && rotation == '<span class="blue">* </span>Սեզոնային') {
                price = calcPrice2Rotations(0.51, count);
                price2 = calcPrice8Rotations(0.51, count);
            }
            else if (size == '85x150' && rotation == '<span class="blue">* </span>Սեզոնային') {
                price = calcPrice2Rotations(1.275, count);
                price2 = calcPrice8Rotations(1.275, count);
            }
            else if (size == '115x240' && rotation == '<span class="blue">* </span>Սեզոնային') {
                price = calcPrice2Rotations(2.76, count);
                price2 = calcPrice8Rotations(2.76, count);
            }
            else if (size == '150x240' && rotation == '<span class="blue">* </span>Սեզոնային') {
                price = calcPrice2Rotations(3.6, count);
                price2 = calcPrice8Rotations(3.6, count);
            }
            else if (size == '150x400' && rotation == '<span class="blue">* </span>Սեզոնային') {
                price = calcPrice2Rotations(6, count);
                price2 = calcPrice2Rotations(6, count);
            }
        }
        else {
            let size1 = +$(prod).children('.size_block').children('.inputs').children('.size1').val()
            let size2 = +$(prod).children('.size_block').children('.inputs').children('.size2').val()

            let m2 = size1 * size2 / 10000;
            let logoMatDiscount = 0.85;
            m2.toFixed(3);

            if (rotation == 'Երկու շաբաթը մեկ անգամ') {
                price = count * ((m2 * r2)*logoMatDiscount)
            }
            else if (rotation == 'Շաբաթը մեկ անգամ') {
                price = count * ((m2 * r4)*logoMatDiscount)
            }
            else if (rotation == 'Շաբաթը երկու անգամ') {
                price = count * ((m2 * r8)*logoMatDiscount)
            }
            else if (rotation == '<span class="blue">* </span>Սեզոնային') {
                price = price = count * ((m2 * r2)*logoMatDiscount)
                price2 = price = count * ((m2 * r8)*logoMatDiscount)
            }
        }
        if (rotation == '<span class="blue">* </span>Սեզոնային') {
            brandedText = true
        }
        price = decimalAdjust('floor', price, 1);
        price2 = decimalAdjust('floor', price2, 1);
        product['price'] = price
        product['price2'] = price2
        product['brandedText'] = brandedText
        return product
    }

    $('.calculator_products_item').on('click', function() {
        let id = $(this).attr('data-id')
        renderBlock(id)
        init()
    })


    function init() {
        let total = 0
        let total2 = 0
        let brandedText = false
        let products = {
            items: []
        }
        let items = document.getElementsByClassName('calculator_basket_item')
        for (var i = 0; i < items.length; i++) {
            if(initPrice(items[i]).brandedText) {
                brandedText = true
            }
            if(initPrice(items[i]).price2 == 0) {
                total2 += initPrice(items[i]).price
            }
            products.items[i] = initPrice(items[i])
            total += initPrice(items[i]).price
            total2 += initPrice(items[i]).price2
        }
        total = total;
        total2 = total2;
        products['totalPrice'] = total
        if(total2 !== total) {
            $('#totalPrice').html(total + ' - ' + total2 + ' ')
        }
        else {
            $('#totalPrice').html(total + ' ')
        }

        $('#totalPriceInput').val(initMailTable(products))
        initMailTable(products)
        let blocks = document.getElementsByClassName('calculator_basket_item')
        $('#branded_text').css('display', 'none')
        $('#discountText').css('display', 'none');
        $('#brandedTextFirst').css('display', 'none')
        $('.calculator .calculator_inner .container .calculator_price .title').css('margin-bottom', '20px')
        if (blocks.length > 0) {
            if(brandedText == true) {
                $('#brandedTextFirst').css('display', 'block')
            }
            for (var i = 0; i < blocks.length; i++) {
                if(blocks[i].getAttribute('data-block') == 'branded') {
                    $('.calculator .calculator_inner .container .calculator_price .title').css('margin-bottom', '5px')
// 				$('#discountText').css('display', 'block');
                    return $('#branded_text').css('display', 'block')
                }
            }
        }
    }


    function initMailTable(arr) {
        let html = "";
        if(arr.items.length) {
            html += `<table border>`;
            html += `<tr>`;
            html += `<th>Գույնը</th>`;
            html += `<th>Չափսը</th>`;
            html += `<th>Քանակը</th>`;
            html += `<th>Շաբաթական ռոտացիան</th>`;
            html += `<th>Երեւանից դուրս</th>`;
            html += `<th>Անհրաժեշտ են 24-ժամյա ռոտացիաներ</th>`;
            html += `<th>Գինը</th>`;
            html += `</tr>`;
            for(let i = 0; i < arr.items.length; i++) {
                html += `<tr>`;
                html += `<td>${arr.items[i].color}</td>`;
                html += `<td>${arr.items[i].size}</td>`;
                html += `<td>${arr.items[i].count}</td>`;
                html += `<td>${arr.items[i].rotation}</td>`;
                html += `<td>${arr.items[i].outside}</td>`;
                html += `<td>${arr.items[i].first_delivery}</td>`;
                html += `<td>${arr.items[i].price}</td>`;
                html += `</tr>`;
            }
            html += `</table>`;
            html += `<table border>`;
            html += `<tr>`;
            html += `<th>Ընդհանուր արժեքը</th>`;
            html += `</tr>`;

            html += `<tr>`;
            html += `<td>${arr.totalPrice}</td>`;
            html += `</tr>`;
            html += `</table>`;
        }
        return html
    }

    init()

    function renderBlock(id) {
        $('.need_radio').unbind('click')
        $('.outside_radio').unbind('click')
        $('.remove_block').unbind('click')
        $('.size_block .select').unbind('click')
        $('.remove_block').unbind('click')
        $('.size_block .select .dropdown p').unbind('click')
        $('.week_block .select').unbind('click')
        $('.week_block .select .dropdown p').unbind('click')
        $('.minus').unbind('click')
        $('.plus').unbind('click')




        if (id == 'gray') {
            $('.calculator_basket').prepend(grayHtml)
        }
        if (id == 'brown') {
            $('.calculator_basket').prepend(brownHtml)
        }
        if (id == 'branded') {
            $('.calculator_basket').prepend(brandedHtml)
        }


        $('.remove_block img').on('click', function() {
            $(this).parents('.calculator_basket_item').remove()
            init()
        })

        $('.sizeInput').on('input', function() {
            init()
        })

        $('.outside_radio').on('click', function() {
            $(this).toggleClass('active')
            init()
        })
        $('.need_radio').on('click', function() {
            $(this).toggleClass('active')
            init()
        })







        $('.size_block .select').on('click', function() {
            if($(this).children('.dropdown').css('display') == 'none') {
                $('.size_block .select').children('.dropdown').css('display', 'none')
            }
            $(this).children('.dropdown').slideToggle(200)
        })
        $('.size_block .select .dropdown p').on('click', function() {
            $(this).parents('.dropdown').siblings('.value').html($(this).html())
            init()
        })





// 	$(window).on('click', function(e) {
// 		if($('.week_block .select').children('.dropdown').css('display') != 'none') {
// 			$('.week_block .select').children('.dropdown').slideToggle(200)
// 		}
// 		if($('.size_block .select').children('.dropdown').css('display') != 'none') {
// 			$('.size_block .select').children('.dropdown').slideToggle(200)
// 		}
// 	})
        $('.week_block .select').on('click', function() {
            if($(this).children('.dropdown').css('display') == 'none') {
                $('.week_block .select').children('.dropdown').css('display', 'none')
            }
            $(this).children('.dropdown').slideToggle(200)
        })
        $('.week_block .select .dropdown p').on('click', function() {
            $(this).parents('.dropdown').siblings('.value').html($(this).html())
            init()
        })






        $('.minus').on('click', function() {
            let count = +$(this).siblings('.number').attr('data-count')
            if (count > 1) {
                count -= 1
                $(this).siblings('.number').attr('data-count', count)
                $(this).siblings('.number').html(count)
            }
            init()
        })


        $('.plus').on('click', function() {
            let count = +$(this).siblings('.number').attr('data-count')
            count += 1
            $(this).siblings('.number').attr('data-count', count)
            $(this).siblings('.number').html(count)
            init()
        })
    }

    $('.init').on('submit', function (e){
        e.preventDefault();
        $('.wpcf7-form-control-wrap').removeClass('error')
        $('.wpcf7-form-control-wrap .error-text').remove()
        $('.wpcf7-response-output').removeClass('blue');
        $('.wpcf7-response-output').html('')
        let data =  $(".init").serializeArray()
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: data,
            dataType: "json",
            encode: true,
        }).done(function (info) {
            let keys = Object.keys(info.errors)
            if(info.errors){
                for(let i =0;i<keys.length ;i++){
                    $(`.${keys[i]}`).addClass('error')
                    let html = `<span class="error-text">${info.errors[keys[i]]}</span>`
                    $(`.${keys[i]}`).append(html)
                }
            }
            if(keys.length > 0){
                $('.wpcf7-response-output').addClass('blue');
            }
            $('.wpcf7-response-output').html(info.message)
        });

    });

    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });
})