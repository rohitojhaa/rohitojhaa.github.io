var pickerEndDate = pickerStartDate = '';
var md = new MobileDetect(window.navigator.userAgent);
$('body').bind('cut copy paste',function(e) {
    e.preventDefault(); return false; 
});
$(function () {

/*for mobile header*/
		$('#menu_v3').metisMenu();
		$('.nav_icon_bar').click(function(){
		$('.overflowHide').fadeIn(200);
		$('.sidebar').animate({left:0},500);
		
		})
		$('.close_panel').click(function(){
			$('.overflowHide').fadeOut(200);
			$('.sidebar').animate({left:-276},500);
		});
		/*end mobile header*/

	if (md.mobile() && md.mobile() !== null) {
		//Below code run for Mobile version only
		
		
		//For testimonial slider
		try {
            $('.speak').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        } catch (exception) {
        }
	} else {
		//Below code run for Desktop version only
		var activeTab = 'health_bg';
		var $tab = $('.leftTab');
		$('ul > li a', $tab).click(function () {
			$tab.removeClass(activeTab);
			$tab.addClass(activeTab);
			$('.content_box', $tab).fadeOut(300);
			$('.content_box', $tab).removeClass(activeTab);

			var tabHighlight = $(this).attr('class');
			$('.content_box', $tab).addClass(tabHighlight + '_bg').fadeIn(300);
			$tab.removeClass(activeTab).addClass(tabHighlight + '_bg');
			activeTab = tabHighlight + '_bg';
		});

		$('.select_feild').click(function () {
			if (!$('input', $(this)).is(':checked')) {
				$('input', $(this)).prop("checked", false);
				$(this).parent().removeClass('active');
			} else {
				$('input', $(this)).prop("checked", true);
				$(this).parent().addClass('active');
			}
		});

		
		//Load random form on home page
		if(!localStorage.getItem('getLastTab')){
			var arrTabName = ["health", "term", "investment", "car", "travel", "twowheeler"];
			var loadTabName = arrTabName[Math.floor(Math.random() * arrTabName.length)];//Get random tab name
			//var loadTabName = arrTabName[0];
			setTimeout(function () {
				$('.leftTab ul li>a.' + loadTabName).trigger('click');
			}, 100);
		} else {
            //Set last visited tab
            var lastTabData = localStorage.getItem('getLastTab');
            var obj = $.parseJSON(lastTabData);
            console.log(obj);
            setTimeout(function () {
                $('.leftTab ul li>a.' + obj.tabName).trigger('click');
            }, 100);
        }
		//End random form load
		
		//Know more start
		$('.knowMore,.know_more').click(function () {
			var tops = ($(window).height() > 700) ? -650 : -400;
			$('.overlay_area').css({'height': $(window).height(), 'top': $(window).height()})
			$('.overlay_area').show().animate({opacity: '0.8'}, 300);
			$('.seo_content_box').show().animate({top: tops + 'px'}, 500);
		});
		
		$('.close_pop').click(function () {
			$('.seo_content_box').fadeOut('slow');
			$('.overlay_area').animate({opacity: '0'}, 500);
			$('.seo_content_box,.overlay_area').hide('slow')
			setTimeout(function(){ 
			$('.easybox,.container').trigger('dblclick');
				$('.easybox,.container').trigger('click'); 
			}, 3000);
		})
		//Know more end
		
		
		//For testimonial slider
		try {
            $('.all_speak').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        } catch (exception) {
        }
	}

    /*parallax*/
   if($(window).width()>740){

    $('#fullpage').fullpage({
        //sectionsColor: ['home', 'made_easy', 'media_section', 'client_section', 'partner_section','footer_section'],
        //anchors: ['home', 'made_easy', 'media_section', 'client_section', 'partner_section','footer_section'],
        menu: '#menu',
        resize: false,
        navigation: true,
        css3: true,
        scrollingSpeed: 1200,	
        // navigation: true,	
        // scrollBar: true,
        easing: 'easeInQuart',
        afterLoad: function (anchorLink, index) {
	    if (index != 2) {
                $('.seo_content_box').fadeOut('slow');
                $('.overlay_area').animate({opacity: '0'}, 500);
                $('.seo_content_box,.overlay_area').hide('slow');
            }	    

            if (index == 1) {
                $('.headerColor').fadeOut(200);
                $('.top_v3_header').fadeIn();
            }
            if (index > 1) {
                $('.headerColor').delay(500).fadeIn(700);
                $('.top_v3_header').fadeOut();
            }
			 
            //section 2
            if (index == 2) {
                //$('.headerColor').delay(500).fadeIn(700);
				
                $('.made_easy h1').delay(500).addClass('animated fadeInLeft block');
                $('.made_easy h4').delay(500).addClass('animated fadeInRight block');
                var x = 0;
                var interval = setInterval(function () {
                    $('.made_easy .easybox').eq(x).children('.info').show().addClass('animated zoomIn');
                    $('.made_easy .easybox').eq(x).children('h6').show().addClass('animated fadeIn');
                    $('.made_easy .easybox').eq(x).children('p').show().addClass('animated fadeIn');
                    x++;
                    if (x == $('div.easybox').length)
                        clearInterval(interval);
                }, 100);

                $('.knowMore').delay(500).addClass('animated bounceInDown block');
                $('.made_easy .mobile').delay(500).addClass('animated fadeInRight block');
            }

            //section 3
            if (index == 3) {
                $('.appmedia').delay(100).addClass('animated fadeInLeft block');
                $('.tvmedia').delay(100).addClass('animated fadeInRight block');
            }

            //section 4
            if (index == 4) {
                $('.testimonials  h2.mov_item ').delay(500).addClass('animated bounceInDown block');
                $('.testimonials  p.mov_item').delay(500).addClass('animated bounceInUp block');
                $('.slick-slide').delay(100).addClass('animated bounceInUp block');
                $('.showing').delay(100).addClass('animated fadeInRight block');

            }

            //section 5
            if (index == 5) {
                $('#partner_section ').delay(100).addClass('animated bounceInDown block');
                var x = 0;
                var interval = setInterval(function () {
                    $('.logos .brand_logo').eq(x).delay(500).addClass('animated fadeIn block');
                    x++;
                    //if (x == $('.category li').length)
                    if (x == $('.logos .brand_logo li').length)
                        clearInterval(interval);
                }, 100);

            }

            //section 6
            if (index == 6) {
                $('#section2').find('.intro').delay(500).animate({
                    left: '0%'
                }, 1500, 'easeOutExpo');
            }
        }
    });
}
else{
	 $('.media_news,.testimonials').remove()
	 $('#fullpage').fullpage({
        //sectionsColor: ['home', 'made_easy', 'media_section', 'client_section', 'partner_section','footer_section'],
        //anchors: ['home', 'made_easy', 'media_section', 'client_section', 'partner_section','footer_section'],
        menu: '#menu',
        resize: false,
        navigation: true,
        css3: true,
        scrollingSpeed: 1200,	
        // navigation: true,	
        // scrollBar: true,
        easing: 'easeInQuart',
        afterLoad: function (anchorLink, index) {

	    if (index != 2) {
                $('.seo_content_box').fadeOut('slow');
                $('.overlay_area').animate({opacity: '0'}, 500);
                $('.seo_content_box,.overlay_area').hide('slow');
            }	    

            if (index == 1) {
                $('.headerColor').fadeOut(200);
                $('.top_v3_header').fadeIn();
            }
            if (index > 1) {
                $('.headerColor').delay(500).fadeIn(700);
                $('.top_v3_header').fadeOut();
            }
			 
            //section 2
            if (index == 2) {
                //$('.headerColor').delay(500).fadeIn(700);
				
                $('.made_easy h1').delay(500).addClass('animated fadeInLeft block');
                $('.made_easy h4').delay(500).addClass('animated fadeInRight block');
                var x = 0;
                var interval = setInterval(function () {
                    $('.made_easy .easybox').eq(x).children('.info').show().addClass('animated zoomIn');
                    $('.made_easy .easybox').eq(x).children('h6').show().addClass('animated fadeIn');
                    $('.made_easy .easybox').eq(x).children('p').show().addClass('animated fadeIn');
                    x++;
                    if (x == $('div.easybox').length)
                        clearInterval(interval);
                }, 100);

                $('.knowMore').delay(500).addClass('animated bounceInDown block');
                $('.made_easy .mobile').delay(500).addClass('animated fadeInRight block');
            }

        

            //section 5
            if (index == 3) {
                $('#partner_section ').delay(100).addClass('animated bounceInDown block');
                var x = 0;
                var interval = setInterval(function () {
                    $('.logos .brand_logo').eq(x).delay(500).addClass('animated fadeIn block');
                    x++;
                    //if (x == $('.category li').length)
                    if (x == $('.logos .brand_logo li').length)
                        clearInterval(interval);
                }, 100);

            }

            //section 6
            if (index == 4) {
                $('#section2').find('.intro').delay(500).animate({
                    left: '0%'
                }, 1500, 'easeOutExpo');
            }
        }
    });
	
	}
	
});

function InsertTracking(VisitId, ipaddress, sessionID, utmsource, utmterm, utmmedium, utmcampaign, leadsource, url, CustID) {
    var strBrowser = detectBrowser();
    Data = '{"VisitId":"' + VisitId + '","url":"' + url + '","sessionID":"' + sessionID + '","utmsource":"' + utmsource + '","utmterm":"' + utmterm + '","ipaddress":"' + ipaddress + '","browser":"' + strBrowser + '","leadsource":"' + leadsource + '","utmmedium":"' + utmmedium + '","utmcampaign":"' + utmcampaign + '","CustID":"' + CustID + '"}';
    TrackUrl = 'https://' + document.location.host + '/services/tracking.php';
    $.ajax({beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Content-Type", "application/json");
            xhrObj.setRequestHeader("Accept", "application/json")
        }, url: TrackUrl, type: "POST", data: Data, dataType: "json", success: function (msg) {
            if (msg != '')
                $('#gaData').attr('data-visit', msg.visitId)
        }})
}

function detectBrowser() {
    var N = navigator.appName;
    var UA = navigator.userAgent;
    //var temp;
    var browserVersion = UA.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    //if(browserVersion && (temp= UA.match(/version\/([\.\d]+)/i))!= null)
    //browserVersion[2]= temp[1];
    //browserVersion= browserVersion? [browserVersion[1]]: [N, navigator.appVersion,'-?'];
    browserVersion = browserVersion ? [browserVersion[1]] : N;
    return browserVersion;
}
$(window).load(function () {
	window.scrollTo(0, 1);
    $('.inter_wrapper').css('visibility', 'visible');
    $('.formarea').addClass('fadeInUp');
    var x = 0;
    // $('.category li').eq(x).children('a').addClass('animated fadeInUp block');
    $('.category li').children('a').addClass('animated fadeInUp block');
    /* var interval = setInterval(function () {
     
     x++;
     if (x == $('.category li').length)
     clearInterval(interval);
     }, 200);*/
});

//Common function start
//var BASEURL = 'http://localhost/pb_content/policybazaar-home/';//Local
//var BASEURL = 'http://qa.policybazaar.com/policybazaar-home/';//QA
var BASEURL = 'https://www.policybazaar.com/policybazaar-home/';//Live


var utmTerm = $('#gaData').attr('data-utm-term');
var utmSource = $('#gaData').attr('data-utm-source');
var utmMedium = $('#gaData').attr('data-utm-medium');
var utmCampaign = $('#gaData').attr('data-utm-campaign');
var utmContent = $('#gaData').attr('data-display-for');
var visitId = $('#gaData').attr('data-visit');
var memberArray = new Array();
var chkItem = new Array();
var maxChild = 4;
var arrMember = {};
$(document).ready(function () {
	var memberArray = new Array();
    var chkItem = new Array();
    utmTerm = $('#gaData').attr('data-utm-term');
    utmSource = $('#gaData').attr('data-utm-source');
    utmMedium = $('#gaData').attr('data-utm-medium');
    utmCampaign = $('#gaData').attr('data-utm-campaign');
    utmContent = $('#gaData').attr('data-display-for');
    visitId = $('#gaData').attr('data-visit');
	
	if (md.mobile() && md.mobile() !== null) {
		//Below code run for Mobile version only
		//For Mobile
		$(document).on('touchmove', 'select,.token-input-dropdown-facebook,#healthPopup,#inter_new_home .header,.seo_content_box', function () {
			$.fn.fullpage.setMouseWheelScrolling(false);
			$.fn.fullpage.setAllowScrolling(false);
		});
		$(document).on("touchend", "select,.token-input-dropdown-facebook,#healthPopup,#inter_new_home .header,.seo_content_box", function () {
			$(this).focusout();
			$.fn.fullpage.setMouseWheelScrolling(true);
			$.fn.fullpage.setAllowScrolling(true);
		});
		//End
	} else {
		//Below code run for Desktop version only
		$(document).on('click', 'label[for="tab-5"]', fncTemp);

		
	
		$(document).on('click', '.leftTab ul li>a', fncGetTabContentAndForm);

		//Car Start
		$(document).on('keyup', '#carRegistrationNumber,#twoWheelerRegistrationNumber', chkRegNumKeyUp);
		$(document).on('click', '#btnSubmit', fncCarProcess);
		//Car End
		//TW Start
		$(document).on('click', '#btntwSubmit', fncTWProcess);
		//TW End
		//Term Start
		$(document).on('keyup', '#termAmt', fncAmountAndLable);
		$(document).on('click', '#btnSubmitTerm', fncProcessTerm);
		//Term End

		//Health Start
		$(document).on("focus", '#healthMember', fncDisplayMembersForm);
		$(document).on("click", '.fa-plus', fncDisplayMembersForm);
		$(document).on("click", '.chkMember', fncCombineMember);
		$(document).on("change", '.chkMemberAge', fncCombineMember);
		$(document).on("click", '.healthAddChild', fncAddChild);
		$(document).on("change", '#healthMoreMembers', fncAddMoreMember);
		$(document).on("change", '#healthMobileCountry', fncSetCountryCode);
		$(document).on('click', '#healthPopup .travel_action .done, #healthPopup .travel_action .cancel', fncProcessMembersForm);
		$(document).on('click', '#btnSubmitHealth', fncProcessHealth);
		//Health End
		//Investment Start
		$(document).on('click', '.investment-bg .tab', fncInvTab);
        $(document).on('keypress', '#invamount,#invage,#birthDay', fncInvDigitOnly);
        $(document).on('keyup', '#invamount', fncAmountAndLableInv);        
        $(document).on('keyup', '#birthDay,#invage', dobValidation);
        $(document).on('keyup', '#birthDay,#invage', ageValidation);
        $(document).on('keyup', '#invage,#birthDay', fncInvNeed);
        //$(document).on('keypress', '#invamount,#invage,#birthDay', fncInvNeed);
        $(document).on('change','#invTerm',fncInvNeed);
        $(document).on('click', '.invproceed', fncInvProceed);
		//Investment End
		//Travel Start
		$(document).on('click', '.travel-bg .tab', fncTravelTab);
		$(document).on('click', '.travelproceed', fncTravelProceed);
		//Travel End
	}
});

if (md.mobile() && md.mobile() !== null) {
	
} else {

fncSetFormValue = function(){
    if(!localStorage.getItem('getLastTab')){
    
    } else {
        var lastTabData = localStorage.getItem('getLastTab');
        var obj = $.parseJSON(lastTabData);
        //Set last visited tab form data
        switch(obj.tabName){
            case 'term':
                $('#termAmt').val(obj.coverAmt);
                fnFormatCurrencyIndianStyle($('#termAmt'), 20);
                $('.fig_lbl').html(convert_number(obj.coverAmt)).removeClass('none');
                
                $('#termBirthday .birthDate').val(obj.dobDay);
                $('#termBirthday .birthMonth').val(obj.dobMonth);
                $('#termBirthday .birthYear').val(obj.dobYear);
                $('input[name="termSmoke"][value="'+obj.tobacco+'"').attr('checked', 'checked');
                break;
            case 'investment':
                switch(parseInt(obj.subTabName)){
                    case 1:
                        setTimeout(function () {
                            $('#tab-'+obj.subTabName).trigger('click');
                            
                            $('#invamount').val(obj.coverAmt);
                            fnFormatCurrencyIndianStyle($('#invamount'), 20);
                            $('.fig_lbl').html(convert_number(obj.coverAmt)).removeClass('none');
                            
                            $('#birthDay').val(obj.age);
                            $('#invTerm').val(obj.optTerm);
                            
                            fncInvNeed($('#invamount'));
                        },100);
                        break;
                    case 2:
                        setTimeout(function () {
                            $('#tab-'+obj.subTabName).trigger('click');
                            
                            $('#invamount').val(obj.coverAmt);
                            fnFormatCurrencyIndianStyle($('#invamount'), 20);
                            $('.fig_lbl').html(convert_number(obj.coverAmt)).removeClass('none');
                            
                            $('#birthDay').val(obj.age);
                            $('#invage').val(obj.ageOther);
                            
                            fncInvNeed($('#invamount'));
                        },100);
                        break;
                    case 3:
                        setTimeout(function () {
                            $('#tab-'+obj.subTabName).trigger('click');
                            
                            $('#invamount').val(obj.coverAmt);
                            fnFormatCurrencyIndianStyle($('#invamount'), 20);
                            $('.fig_lbl').html(convert_number(obj.coverAmt)).removeClass('none');
                            
                            $('#birthDay').val(obj.age);
                            $('#invage').val(obj.ageOther);
                            
                            fncInvNeed($('#invamount'));
                        },100);
                        break;
                }
                
                break;
            case 'car':
                $('#carRegistrationNumber').val(obj.regNum);
                break;
            case 'twowheeler':
                $('#twoWheelerRegistrationNumber').val(obj.regNum);
                break;
            case 'health':
                $('#healthMember').val(obj.members);
                var objCityPin = $('#healthCityPincode');
                objCityPin.val(obj.city_name);
                objCityPin.attr('data-cityid',obj.city_id);
                objCityPin.attr('data-stateid',obj.state_id);
                objCityPin.attr('data-pincode',obj.pincode);
                $('#healthIncome').val(obj.annual_income_id);
                $('#healthGender').val(obj.gender);
                $('#healthName').val(obj.name);
                
                //Set popup data
                /*var arrMembersData = obj.members.split(',')
                $.each(arrMembersData,function(index, value){
                    var arrMatchData = '';
                    var intAge = '', strLabel = '';
                    alert(index+' '+value);
                    //Extract age
                    arrMatchData = value.match(/\((.*)\)/);
                    intAge = arrMatchData[1];
                    //Extract String
                    arrMatchData = value.match(/(.*)\(/);
                    strLabel = arrMatchData[1];
                    alert(strLabel+' '+intAge);
                });*/
                break;
        }
    }
};

fncTemp = function(){
    document.querySelector("input[name='travelPolicy'][value='0']").checked = true;
};

/*
 * Convert a string to base64 encode
 * @param string
 * @returns string
 */
var Base64 = {_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
    }, decode: function (e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = Base64._utf8_decode(t);
        return t
    }, _utf8_encode: function (e) {
        e = e.replace(/rn/g, "n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    }, _utf8_decode: function (e) {
        var t = "";
        var n = 0;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }};

/*
 * Check car registration number format
 * @param string
 * @returns boolean
 */
function checkRegistrationNumber(value) {
    return /^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{4}$/.test(value);
}

/*
 * Check only number
 * @param string
 * @returns boolean
 */
function checkOnlyNumber(value) {
    return /^[0-9]*$/.test(value);
}

function onlyNumber(value) {
    return /^[0-9]*$/.test(value);
}

/*
 * Check only character
 * @param string
 * @returns boolean
 */
function onlycharacter(value) {
    return /^[a-zA-Z\s]+$/.test(value);
}

/*
 * Get current browser name and return
 * @returns String
 */
function getBrowser() {
    var userAgent = window.navigator.userAgent;
    var browsers = {chrome: /chrome/i, safari: /safari/i, firefox: /firefox/i, ie: /internet explorer/i};
    for (var key in browsers) {
        if (browsers[key].test(userAgent)) {
            return key;
        }
    }
    ;
    return 'unknown';
}

/*
 * 
 * @params element object
 * @retun boolean
 */
function addError(obj, msg) {
    var parentDiv = obj.parents('.input_field');
    obj.addClass('error');
    parentDiv.addClass('error');
    $('.err', parentDiv).html(msg);
    return false;
}

/*
 * 
 * @params element object
 */
function clearError(obj) {
    var parentDiv = obj.parents('.input_field');
    obj.removeClass('error');
    parentDiv.removeClass('error');
    $('.err', parentDiv).html('');
}

/*
 * Load home page tab form
 * @returns htm string
 */
fncGetTabContentAndForm = function () {
    var elemClass = $(this).attr('class');
    elemClass = elemClass.replace(' active', '');
    $.ajax({
        url: BASEURL + 'cj-form-and-content.php?type=' + elemClass,
        type: "GET",
        cache: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('.rightTab').removeClass('heathform');
            $('.content_box').hide().html(data.contentBox).fadeIn("slow");
            $('.rightTab').hide().html(data.contentRight).fadeIn("slow");
            switch(elemClass)
            {
                case 'health':
                    $('.rightTab').addClass('heathform');
                    //Get city and pincode details for health
                    $("#healthCityPincode").autocomplete({
                        //source: BASEURL + 'cj-process.php?type=autocomplete-health-city',
                        source: function (request, response) {
                            var search_type = 'p';
                            if (!checkOnlyNumber(request.term)) {
                                search_type = 'c';
                            }
                            $.getJSON(BASEURL + 'cj-process.php?type=autocomplete-health-city&search_type=' + search_type, {q: request.term}, response);
                        },
                        minLength: 3,
                        select: function (event, ui) {
                            $("#healthCityPincode").val(ui.item.CityName);
                            $("#healthCityPincode").attr({"data-cityid": ui.item.CityId, "data-stateid": ui.item.StateId, "data-pincode": ui.item.Pincode});
                            return false;
                        },
                        change: function (event, ui) {
                            if (!ui.item) {
                                //http://api.jqueryui.com/autocomplete/#event-change -
                                // The item selected from the menu, if any. Otherwise the property is null
                                //so clear the item for force selection
                                $("#healthCityPincode").val("");
                            }
                        }
                    })
                        .autocomplete("instance")._renderItem = function (ul, item) {
                        return $("<li>")
                                .append("<a>" + item.CityName + "</a>")
                                .appendTo(ul);
                    };

                    //Get country list for mobile
                    fncGetMobileCountry('#healthMobileCountry');
                    break;
                case 'twowheeler':
                    $('#productid').val(114);
                break;
                case 'car':
                    $('#productid').val(117);
                break;
                case 'investment': case 'term':
                    $("#short-month-birthday,#termBirthday").birthdayPicker({
                    "maxYear": "1998",
                    "minAge": 18,
                    "maxAge": 66,
                    "monthFormat": "short"
                    });    
                break;
            case 'travel':
                var counter = 0;
                var itemName = new Array();
                $("#destinationcategoryid").tokenInput(BASEURL + "countries.php", {
                    preventDuplicates: true,
                    theme: "facebook",
                    tokenLimit: 10,
                    minChars: 2, 'searchDelay': 0, hintText: false,
                   
                    onAdd: function (item) {
                        counter++;
                        itemName.push(item.name);
                        $('#destinationcities').val(itemName);
                    },
                    onDelete: function (item) {
                        counter--;
                        var index = itemName.indexOf(item.name);
                        itemName.splice(index, 1);
                        $('#destinationcities').val(itemName);
                    }
                });
                var $select = $(".0-99");
                for (i = 18; i <= 99; i++) {
                    $select.append($('<option></option>').val(i).html(i))
                }
                var $select = $(".0-18");
                for (i = 1; i <= 18; i++) {
                    $select.append($('<option></option>').val(i).html(i))
                }
				var minDate = new Date().addDays(92);
                var maxDate = new Date().addDays(182);
                var startDate, endDate,
                        updateStartDate = function () {
                            startPicker.setStartRange(startDate);
                            endPicker.setStartRange(startDate);
                            endPicker.setMinDate(startDate);
                        },
                        updateEndDate = function () {
                            //startPicker.setEndRange(endDate);
                            //startPicker.setMaxDate(endDate);
                            //endPicker.setEndRange(endDate);
                        },
                        startPicker = new Pikaday({
                            field: document.getElementById('startdate'),
                            format: 'DD-MM-YYYY',
                            minDate: new Date(),
                            maxDate: minDate,
                            onSelect: function () {
                                startDate = this.getDate();
                                updateStartDate();
                                var numDays = 9;
                                if (endDate !== undefined)
                                {                                    
                                    if(!$('#tripfrequency').is(':checked'))
                                        var numDays = calculateNumDays(startDate, endDate);
                                    else
                                        var numDays = 365;
                                    
                                    endDate = this.getDate().addDays(numDays);
                                    $('#traveldate_lbl').html(numDays + '<p>Days</p>');
                                    $('#tripduration').val(numDays);
                                    $('#tripdays').val(numDays);                                    
                                    //edited on sunday
                                    if(($('#CategoryID').val()==2 || $('#CategoryID').val()==1) && $('#memberType').val() != 'student'){
                                    if(!$('#tripfrequency').is(':checked'))
                                    {
                                        endPicker.setMaxDate(this.getDate().addDays(179));
                                        endPicker.setDate(endDate);
                                    }
                                    else
                                    {
                                        endPicker.setMaxDate(this.getDate().addDays(364));
                                        endPicker.setDate(endDate);
                                    }
                                    }else{
                                        endPicker.setMaxDate(this.getDate().addDays(729));
                                        endPicker.setDate(endDate);
                                    }
                                    //edited on sunday
                                }
                            }
                        }),
                        endPicker = new Pikaday({
                            field: document.getElementById('enddate'),
                            format: 'DD-MM-YYYY',
                            minDate: new Date(),
                            maxDate: maxDate,
                            onSelect: function () {
                                endDate = this.getDate();
                                updateEndDate();
                                if(!$('#tripfrequency').is(':checked'))
                                    var numDays = calculateNumDays(startDate, endDate);
                                else
                                    var numDays = 365;
                                $('#traveldate_lbl').html(numDays + '<p>Days</p>');
                                $('#tripduration').val(numDays);
                                $('#tripdays').val(numDays);
                            }
                        }),
                        _startDate = startPicker.getDate(),
                        _endDate = endPicker.getDate();
                        pickerStartDate = startPicker;
                        pickerEndDate = endPicker;                        
                if (_startDate) {
                    startDate = _startDate;
                    updateStartDate();
                }

                if (_endDate) {
                    endDate = _endDate;
                    updateEndDate();
                }
                break;
            }
			fncSetFormValue();//Set default value
        }
    });
};

/*
 * Load health mobile country list
 * @returns html string
 */
function fncGetMobileCountry(elementId) {
    var listCountry = '<option value="" data-country-code-id="">Country</option>';
    $.ajax({
        url: BASEURL + 'cj-process.php?type=get-mobile-country',
        type: "POST",
        cache: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $.each(data, function (key, value) {
                listCountry += '<option value="' + value.CountryCode + '" ' + ((value.CountryCode == 91) ? 'selected' : '') + '  data-country-code-id="' + value.CountryCodeId + '">' + value.CountryName + '</option>';
            });
            $(elementId).html(listCountry);
        }
    });
}
;

/*
 * Load home page tab form
 * @returns htm string
 */
function fncGetFormInPage(elemClass) {
    $.ajax({
        url: BASEURL + 'cj-form-and-content.php?type=' + elemClass,
        type: "GET",
        cache: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //$('.disForm .content_box').html(data.contentBox).fadeIn("slow");
            $('.disForm .rightContent').html(data.contentRight).fadeIn("slow");
            if (elemClass == 'investment' || elemClass == 'term')
            {
                $("#short-month-birthday,#termBirthday").birthdayPicker({
                    "maxYear": "1998",
                    "minAge": 18,
                    "maxAge": 66,
                    "monthFormat": "short"
                });
            }
        }
    });
}
;

Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};
fncAmountAndLable = function () {
    var obj = $(this);
    var parentDiv = obj.parents('.input_field');
    var minAmt = parseInt(obj.attr('data-min'));
    var maxAmt = parseInt(obj.attr('data-max'));
    var errMsg = obj.attr('data-msg');
    var amt = amt1 = obj.val().replace(/,/g, '');
    
    amt = parseInt(amt);
    if (!checkOnlyNumber(amt)) {
        obj.val('');
        $('.fig_lbl', parentDiv).addClass('none');
        return false;
    }    
    else if (obj.length > 0 && amt >= minAmt && amt <= maxAmt) {
        fnFormatCurrencyIndianStyle(obj, 20);
        $('.fig_lbl', parentDiv).html(convert_number(amt)).removeClass('none');
        obj.removeClass('error');
        parentDiv.removeClass('error');
        $('.err', parentDiv).html('');
    } else {
        obj.addClass('error');
        parentDiv.addClass('error');
        $('.fig_lbl', parentDiv).addClass('none');
        $('.err', parentDiv).html(errMsg + ' ' + convert_number(minAmt) + ' to ' + convert_number(maxAmt));
    }
    /*
    if (amt1 % 1000 !=0) {console.log('if');
        obj.addClass('error');
        parentDiv.addClass('error');
        $('.fig_lbl', parentDiv).addClass('none');
        $('.err', parentDiv).html('Value has to be in the multiples of 1000.');
    }*/
};

fncAmountAndLableInv = function () {
    var obj = $(this);
    var parentDiv = obj.parents('.input_field');
    var minAmt = parseInt(obj.attr('data-min'));
    var maxAmt = parseInt(obj.attr('data-max'));
    var errMsg = obj.attr('data-msg');
    var amt = amt1 = obj.val().replace(/,/g, '');
    
    amt = parseInt(amt);
    if (!checkOnlyNumber(amt)) {
        obj.val('');
        $('.fig_lbl', parentDiv).addClass('none');
        return false;
    }    
    else if (obj.length > 0 && amt >= minAmt && amt <= maxAmt) {
        fnFormatCurrencyIndianStyle(obj, 20);
        $('.fig_lbl', parentDiv).html(convert_number2(amt)).removeClass('none');
        obj.removeClass('error');
        parentDiv.removeClass('error');
        $('.err', parentDiv).html('');
    } else {
        obj.addClass('error');
        parentDiv.addClass('error');
        $('.fig_lbl', parentDiv).addClass('none');
        $('.err', parentDiv).html(errMsg + ' ' + convert_number(minAmt) + ' to ' + convert_number(maxAmt));
    }
	fncInvNeed(obj);
};

function validemail(value) {
    return /^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/.test(value);
}

function validmobile(value) {
    return /^[789]\d{9}$/.test(value);
}

//Common function end

//JS for two wheeler cj start
fncTWProcess = function () {
    var objBtnSubmit = $(this);
    //objBtnSubmit.hide();
	objBtnSubmit.next().show();
    var objRegNum = $('#twoWheelerRegistrationNumber');
    var valRegNum = $.trim(objRegNum.val());
    if (valRegNum.length == 0) {
        addError(objRegNum, 'Please enter valid registration number');
    } else {
        clearError(objRegNum);
    }
    chkRegNum(objRegNum);
    if (!objRegNum.hasClass('error') && valRegNum) {
        //console.log('tets sdfas');
		//Set local storage value for form
        var postdata = JSON.stringify({
            tabName:'twowheeler',
            regNum:valRegNum
        });
        localStorage.setItem("getLastTab", postdata);
        //End
		
        
        setTimeout(function () {
        //window.location.href = 'http://twowheelerqa.policybazaar.com?registrationNo=' + valRegNum;//QA                  
        //window.location.href = 'http://tw.policybazaar.com?registrationNo=' + valRegNum;//Live
		window.location.href ='http://twowheeler.policybazaar.com/#/question?regNo=' + valRegNum;//Live New
        }, 1000);                          
    } else {
        objBtnSubmit.show();
    }
};
//JS for two wheeler cj end

//JS for car cj start
fncCarProcess = function () {
    var objBtnSubmit = $(this);
    //objBtnSubmit.hide();
    //console.log('tets');
    var objRegNum = $('#carRegistrationNumber');
    var valRegNum = $.trim(objRegNum.val());
    if (valRegNum.length == 0) {
        addError(objRegNum, 'Please enter valid registration number');
    } else {
        clearError(objRegNum);
    }
    chkRegNum(objRegNum);
    //console.log(!valRegNum);
    if (!objRegNum.hasClass('error') && valRegNum) {
        //console.log('tets sdfas');
        //Call car service for get enquiry id
        $.ajax({
            //url: 'http://mcarqa.policybazaar.com/MVCController/fla/GetRCDetails?RegistrationNo='+valRegNum,
            url: BASEURL + 'cj-process.php?type=car&RegistrationNo=' + valRegNum,
            type: "GET",
            cache: false,
            contentType: "application/json; charset=utf-8",
            //dataType: "json",
            beforeSend: function () {
                
				objBtnSubmit.next().show();
            },
            success: function (data)
            {
                //console.log('errdata: ' + data);
				//Set local storage value for form
                var postdata = JSON.stringify({
                    tabName:'car',
                    regNum:valRegNum
                });
                localStorage.setItem("getLastTab", postdata);
                //End
				
                if (data == 'error') {
                    console.log('data is null');
                    addError(objRegNum, 'Please enter a valid registration number');
                } else if (data == 'MA==') {
                    //console.log('data is not null and enquiry id is 0 '+encodeURIComponent(Base64.encode(valRegNum)));
                    //window.location.href = 'http://mcarqa.policybazaar.com/question?regid=' + encodeURIComponent(Base64.encode(valRegNum));//QA
                    window.location.href = 'http://car.policybazaar.com/question?regid=' + encodeURIComponent(Base64.encode(valRegNum));//Live
                } else if (data != 'error' && data != 'MA==') {
                    //window.location.href = 'http://mcarqa.policybazaar.com/quote?enquiryId=' + encodeURIComponent(data) + '&frame=true';//QA
                    window.location.href = 'http://car.policybazaar.com/quote?enquiryId=' + encodeURIComponent(data) + '&frame=true';//Live
                }
                //objBtnSubmit.show();
                //data: return data from server
            }
        });
    } else {
        //objBtnSubmit.show();
    }
};

chkRegNumKeyUp = function(){
    chkRegNum($(this));
};

chkRegNum = function (objRegNum) {
    //var objRegNum = $('#carRegistrationNumber');
    //var parentDiv = objRegNum.parents('.input_field');
    var valRegNum = $.trim(objRegNum.val());
    valRegNum = valRegNum.toUpperCase();
    objRegNum.val(valRegNum);
    if (!checkRegistrationNumber(valRegNum)) {
        addError(objRegNum, 'Please enter valid registration number');
    } else {
        clearError(objRegNum);
    }
};
// car cj end

//Term cj start
fncProcessTerm = function () {
    var objBtnSubmit = $(this);
    objBtnSubmit.hide();
    var objAmt = $('#termAmt');
    var objBirthMonth = $('#termBirthday .birthMonth ');
    var objBirthDay = $('#termBirthday .birthDate ');
    var objBirthYear = $('#termBirthday .birthYear');
    var valSmoke = $('input[name="termSmoke"]:checked').val();

    var flagSubmit = true;

    if (objAmt.val() <= 0) {
        addError(objAmt, 'Please enter amount');
        flagSubmit = false;
    } else {
        clearError(objAmt);
    }

    if (objBirthMonth.val() <= 0 || objBirthDay.val() <= 0 || objBirthYear.val() <= 0) {
        addError(objBirthMonth, 'Please select valid dob');
        flagSubmit = false;
    } else {
        clearError(objBirthMonth);
    }

    if (flagSubmit) {

       

        //console.log('http://10.0.10.157/api/redirect/contact?dob='+objBirthDay.val()+'-'+objBirthMonth.val()+'-'+objBirthYear.val()+'&tobacco='+valSmoke+'&cover='+objAmt.val().replace(/,/g,'')+'&visitId=291948&utmCampaign=Google&utmMedium=Google&utmTerm=Google&utmSource=hkjhj');
        //window.location.href = 'http://10.0.10.157/api/redirect/contact?dob='+objBirthDay.val()+'-'+objBirthMonth.val()+'-'+objBirthYear.val()+'&tobacco='+valSmoke+'&cover='+objAmt.val().replace(/,/g,'')+'&visitId=291948&utmCampaign=Google&utmMedium=Google&utmTerm=Google&utmSource=hkjhj';
        //var redirectUrl = 'http://10.0.10.157/api/redirect/contact?dob=' + objBirthDay.val() + '-' + objBirthMonth.val() + '-' + objBirthYear.val() + '&tobacco=' + valSmoke + '&cover=' + objAmt.val().replace(/,/g, '');//QA
        var redirectUrl = 'http://termlife.policybazaar.com/api/redirect/contact?dob='+objBirthDay.val()+'-'+objBirthMonth.val()+'-'+objBirthYear.val()+'&tobacco='+valSmoke+'&cover='+objAmt.val().replace(/,/g,'');//Live

        redirectUrl += (visitId == '' || visitId == 'undefined') ? '' : '&visitId=' + (visitId == 0 ? $('#gaData').attr('data-visit') : visitId);
        redirectUrl += (utmTerm == '' || utmTerm == 'undefined') ? '' : '&utmTerm=' + utmTerm;
        redirectUrl += (utmCampaign == '' || utmCampaign == 'undefined') ? '' : '&utmCampaign=' + utmCampaign;
        redirectUrl += (utmMedium == '' || utmMedium == 'undefined') ? '' : '&utmMedium=' + utmMedium;
        redirectUrl += (utmSource == '' || utmSource == 'undefined') ? '' : '&utmSource=' + utmSource;
        redirectUrl += (utmContent == '' || utmContent == 'undefined') ? '' : '&utm_content=' + utmContent;
        //console.log(redirectUrl);
        window.location.href = redirectUrl;
    } else {
        objBtnSubmit.show();
    }
};

//Get state and city id autocomplete
/*fncAutocompleteCity = function(){
 var objCity = $(this);
 var valCity = objCity.val();
 if (valCity){
 
 var postdata = JSON.stringify({
 q:valCity
 });
 $.ajax({
 url: BASEURL + 'cj-process.php?type=autocompletecity',
 type: "POST",
 cache: false,
 data: postdata,
 contentType: "application/json; charset=utf-8",
 dataType: "json",
 success: function (data) {
 console.log('errdata: ' + data);
 if (data.ok == '1') {
 console.log(data.output);
 }
 //data: return data from server
 }
 });
 }
 //console.log(objCity.val());
 };*/
//Term cj end

//Health cj start
fncSetCountryCode = function () {
    $('.countryCode').text('+' + $(this).val());
    $('.health-bg .mobNumber').val('');
    if ($(this).val() == 91) {
        $('.health-bg .mobNumber').attr({"minlength": "10", "maxlength": "10"});
    } else {
        $('.health-bg .mobNumber').attr({"minlength": "8", "maxlength": "15"});
    }
};

fncDisplayMembersForm = function () {
    $('#healthPopup').modal({backdrop: 'static', keyboard: false})
    //$('.travellerDetails').slideDown('slow').addClass('open');
}

fncCombineMember = function () {//Combine member and display in a div like Self(36),Son(40)    
    var objParent = $(this).parents('.memberadd');
    var intAge = $('select.chkMemberAge option:selected', objParent).val();
    if ($(this).attr('class') == 'chkMemberAge') {
        if (intAge != '')
            $('.chkMember', objParent).prop("checked", "checked");
        else
            $('.chkMember', objParent).prop("checked", "");
    }
    var checked = $('.chkMember', objParent).is(":checked");
    var checkBoxValue = $('.chkMember', objParent).val();

    if (checked === false) {
        $('select.chkMemberAge', objParent).prop('selectedIndex', 0);
        if (checkBoxValue == 'Son' || checkBoxValue == 'Daughter') {
            objParent.remove();
            var objDivChild = $('#healthMembers');
            var objTotalCountChild = objDivChild.attr('data-total-child');
            var totalChildCount = parseInt(objTotalCountChild);
            objDivChild.attr('data-total-child', totalChildCount - 1);
            $('.child_btn').show();
        }
        var arrNotMoreMember = ["Self", "Spouse", "Son", "Daughter"];
        if ($.inArray(checkBoxValue, arrNotMoreMember) == -1) {
            objParent.remove();
            $('select#healthMoreMembers option[value="' + checkBoxValue + '"]').attr('disabled', false);
        }
    }


    var strMember = checkBoxValue + '(' + intAge + ')';
    var indexKey = '';
    var joinedMemberText = '';

    if (checked === true && intAge > 0) {
        if (typeof objParent.attr('data-index') !== typeof undefined) {
            indexKey = objParent.attr('data-index');
        } else {
            indexKey = $.now();
            objParent.attr('data-index', indexKey);
        }
        arrMember[indexKey] = strMember;
    } else {
        indexKey = objParent.attr('data-index');
        delete arrMember[indexKey];
    }
    joinedMemberText = $.map(arrMember, function (e) {
        return e;
    });
    $('#healthMember').val(joinedMemberText);
};

fncAddChild = function () {//Add Child
    var gender = $(this).attr('data-gender');
    var strGender = (gender == 1 ? 'Son' : 'Daughter');
    var objDivChild = $('#healthMembers');
    var objTotalCountChild = objDivChild.attr('data-total-child');
    var totalChildCount = parseInt(objTotalCountChild);
    if (totalChildCount < maxChild) {
        if (totalChildCount == 3) {
            $('.child_btn').hide();
        } else {
            $('.child_btn').show();
        }
        var tmp = $.now();
        var html = '<li class="memberadd input_field" data-index="' + tmp + '"><div class="select_feild"><input id="checkbox' + tmp + '" type="checkbox" value="' + strGender + '" class="chkMember" checked><label for="checkbox' + tmp + '" style="margin-left:-21px;"><span></span>' + strGender + '</label></div><select class="chkMemberAge"><option value="">Age</option><option value="0">3 Months - 12 Months</option>';
        for (var i = 1; i <= 17; i++) {
            html += '<option value="' + i + '">' + i + ' Years</option>';
        }
        html += '</select><div class="err"></div></li>';
        //Update Value
        objDivChild.append(html);
        objDivChild.attr('data-total-child', totalChildCount + 1);//Update total count
    } else {
        $('.child_btn').hide();
    }
};

fncAddMoreMember = function () {
    var objSelected = $('select#healthMoreMembers option:selected');
    if (objSelected.val() != '') {
        var objDivChild = $('#healthMembers');
        var tmp = $.now();
        var html = '<li class="memberadd input_field" data-index="' + tmp + '"><div class="select_feild"><input id="checkbox' + tmp + '" type="checkbox" value="' + objSelected.val() + '" class="chkMember" checked><label for="checkbox' + tmp + '" style="margin-left:-21px;"><span></span>' + objSelected.val() + '</label></div><select class="chkMemberAge"><option value="">Age</option>';
        for (var i = 40; i <= 100; i++) {
            html += '<option value="' + i + '">' + i + ' Years</option>';
        }
        html += '</select><div class="err"></div></li>';
        //Update Value
        objDivChild.append(html);
        //console.log(objSelected.val());
        objSelected.attr('disabled', true);
    }
    $('select#healthMoreMembers').val('');
};

fncProcessMembersForm = function () {
    if ($(this).text() == 'Cancel')
    {
        $('.chkMemberAge').prop('selectedIndex', 0);
        $('.chkMember').attr('checked', false);
        $('#healthMember').val('');
        $('#healthPopup').modal('toggle');
        $('.memberadd').removeClass('error');
        $('.err').html('');
        return;
    }
    var flagError = false;
    $('.chkMember').each(function () {
        var objParent = $(this).parents('.memberadd');
        var checked = $('.chkMember', objParent).is(":checked");
        if (checked === true) {
            var objAgeBox = $('select.chkMemberAge option:selected', objParent);
            var intAge = objAgeBox.val();
            if (intAge < 0 || intAge == '') {
                flagError = true;
                //objParent.addClass('error');
                addError($(this), 'Please select age');
            } else {
                //objParent.removeClass('error');
                clearError($(this));
            }

            //Logic for check parent is selected or not in case of child selected
            var chkChild = $('.chkMember', objParent).val();
            if (chkChild == 'Son' || chkChild == 'Daughter') {
                var selfChecked = $('#healthcheckbox1').is(":checked");
                var spouseChecked = $('#healthcheckbox2').is(":checked");
                if (selfChecked == false && spouseChecked == false) {
                    flagError = true;
                    $('#healthcheckbox1').parents('.memberadd').addClass('error');
                    //addError('select_feild','Please select age');
                } else {
                    //Logic for check child age should 18 Years less from parent min age
                    if (intAge > 0) {
                        var selfAge = $('select.chkMemberAge option:selected', $('#healthcheckbox1').parents('.memberadd')).val();
                        var spouseAge = $('select.chkMemberAge option:selected', $('#healthcheckbox2').parents('.memberadd')).val();
                        selfAge = selfAge == '' ? 0 : selfAge;
                        spouseAge = spouseAge == '' ? 0 : spouseAge;

                        if (selfAge <= 0 && spouseAge <= 0) {
                            flagError = true;
                            //$('#healthcheckbox1').parents('.memberadd').addClass('error');
                        } else {
                            var diff = 0;
                            var minAge = 0;
                            var errorParent = '#healthcheckbox1';
                            if (selfAge > 0 && spouseAge > 0 && selfChecked == true && spouseChecked == true) {
                                var arrAgeSelfSpouse = [selfAge, spouseAge];
                                minAge = Math.min.apply(Math, arrAgeSelfSpouse);
                                if (selfAge == minAge && selfChecked == true) {
                                    errorParent = '#healthcheckbox1';
                                } else if (spouseAge == minAge && spouseChecked == true) {
                                    errorParent = '#healthcheckbox2';
                                }
                            } else if (selfAge > 0 && selfChecked == true) {
                                minAge = selfAge;
                                errorParent = '#healthcheckbox1';
                            } else if (spouseAge > 0 && spouseChecked == true) {
                                minAge = spouseAge;
                                errorParent = '#healthcheckbox2';
                            }
                            diff = minAge - intAge;
                            if (diff < 18) {
                                flagError = true;
                                $(errorParent).parents('.memberadd').addClass('error');
                                addError($(errorParent), 'Age should be greater than 18 yrs from child');
                            } else {
                                clearError($(errorParent));
                            }
                        }
                    }
                }
            }

        } else {
            $('.chkMemberAge', objParent).val('');
            //objParent.removeClass('error');
            clearError($(this));
        }
    });
    //}
    if (flagError == false) {
        $('#healthPopup').modal('toggle');
        // $('.travellerDetails').slideUp('slow').removeClass('open');
    }
}
fncProcessHealth = function () {
    var objBtnSubmit = $(this);
    objBtnSubmit.hide();
    var objString = '';
    var objStringVal = '';
    var flagSubmit = true;

    //Members
    objString = $('#healthMember');
    objStringVal = $.trim(objString.val());
    if (objStringVal.length === 0) {
        addError(objString, 'Please select members');
        flagSubmit = false;
    } else {
        clearError(objString);
    }

    //City / Pincode
    objString = $('#healthCityPincode');
    objStringVal = $.trim(objString.val());
    if (objStringVal.length === 0) {
        addError(objString, 'Please select city');
        flagSubmit = false;
    } else {
        clearError(objString);
    }

    //Income
    objString = $('#healthIncome');
    objStringVal = $.trim(objString.val());
    if (objStringVal.length === 0) {
        addError(objString, 'Please select annual income');
        flagSubmit = false;
    } else {
        clearError(objString);
    }

    //Gender 
    objString = $('#healthGender');
    objStringVal = $.trim(objString.val());
    if (objStringVal.length === 0) {
        addError(objString, 'Please select title');
        flagSubmit = false;
    } else {
        clearError(objString);
    }

    //Name
    objString = $('#healthName');
    objStringVal = $.trim(objString.val());
    if (objStringVal.length === 0) {
        addError(objString, 'Please enter name');
        flagSubmit = false;
    } else if (!onlycharacter(objStringVal)) {
        addError(objString, 'Please enter character only');
        flagSubmit = false;
    } else {
        clearError(objString);
    }

    //Email Id
    objString = $('#healthEmail');
    objStringVal = $.trim(objString.val());
    if (objStringVal.length === 0) {
        addError(objString, 'Please enter email id');
        flagSubmit = false;
    } else if (!validemail(objStringVal)) {
        addError(objString, 'Please enter valid email id');
        flagSubmit = false;
    } else {
        clearError(objString);
    }

    //Country
    var flagCountryError = true;
    objString = $('#healthMobileCountry');
    objStringVal = $.trim(objString.val());
    if (objStringVal.length === 0) {
        addError(objString, 'Please select country');
        flagSubmit = false;
        flagCountryError = false;
    } else {
        clearError(objString);
        flagCountryError = true;
    }

    //Mobile
    if (flagCountryError) {
        var objStringCountryCode = $('#healthMobileCountry');
        var objString = $('.mobNumber');
        objStringVal = $.trim(objString.val());
        if (objStringVal.length === 0) {
            addError(objString, 'Please enter mobile number');
            flagSubmit = false;
        } else if (objStringCountryCode.val() == '91' && !validmobile(objStringVal)) {
            addError(objString, 'Please enter valid mobile number');
            flagSubmit = false;
        } else if (!onlyNumber(objStringVal)) {
            addError(objString, 'Please enter valid mobile number');
            flagSubmit = false;
        } else {
            clearError(objString);
        }
    }

    //flagSubmit = false;
    if (flagSubmit) {

        
        var objCityPin = $('#healthCityPincode');
		
		//Set local storage value for form
        var postdata = JSON.stringify({
            tabName:'health',
            members: $.trim($('#healthMember').val()),
            city_name: $.trim(objCityPin.val()),
            city_id: $.trim(objCityPin.attr('data-cityid')),
            state_id: $.trim(objCityPin.attr('data-stateid')),
            pincode: $.trim(objCityPin.attr('data-pincode')),
            annual_income_id: $.trim($('#healthIncome').val()),
            gender: $.trim($('#healthGender').val()),
            name: $.trim($('#healthName').val())
        });
        localStorage.setItem("getLastTab", postdata);
        //End
		
        var postdata = JSON.stringify({
            visitid: (visitId == 0 ? $('#gaData').attr('data-visit') : visitId),
            utm_term: utmTerm,
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            browser: getBrowser(),
            exit_point_url: window.location.href,
            request_url: window.location.href,
            members: $.trim($('#healthMember').val()),
            city_id: $.trim(objCityPin.attr('data-cityid')),
            state_id: $.trim(objCityPin.attr('data-stateid')),
            pincode: $.trim(objCityPin.attr('data-pincode')),
            annual_income_id: $.trim($('#healthIncome').val()),
            gender: $.trim($('#healthGender').val()),
            name: $.trim($('#healthName').val()),
            emailid: $.trim($('#healthEmail').val()),
            country_id: $.trim($('option:selected', '#healthMobileCountry').attr('data-country-code-id')),
            mobile_number: $.trim($('.mobNumber').val())
        });
        //console.log(postdata);
        $.ajax({
            url: BASEURL + 'cj-process.php?type=health',
            type: "POST",
            cache: false,
            data: postdata,
            contentType: "application/json; charset=utf-8",
            //dataType: "json",
            success: function (data)
            {
                if (data != '') {
                    //window.location.href = 'http://healthqa.policybazaar.com/?enquiryid=' + data + '&lifestyle=' + data;//QA
                    window.location.href = 'http://health.policybazaar.com/?enquiryid='+data+'&lifestyle='+data;//Live
                }
                objBtnSubmit.show();
                //data: return data from server
            }
        });
    } else {
        objBtnSubmit.show();
    }
};



//Health cj end




/*
 * Investment Cj Start*
 */
fncInvTab = function () {
    var selectedTab = $(this).children('input[type=radio]').val();
    clearError($('#invamount'));
    clearError($('.birthDay'));
    clearError($('#invage'));
    clearError($('#invTerm'));
    $('#investmentType').val(selectedTab);
    switch (selectedTab)
    {
        case '1':
            $('#invAge').addClass('dis_none');$('#invTermSelect').removeClass('dis_none');
            $('#invLabel').html('<span class="b">Invest</span><span> (Per Year)</span>');
            $('#birthDay').attr('data-min', 18);
            $('#invamount').attr('data-min', 10000);
            $('#invamount').attr('data-max', 500000);
            $('#invamount').attr('data-msg','Investment amount should be between ');
            $('#invamount').attr('placeholder','To grow your money');
            $('#invamount').val(50000);$('#invamount').trigger('keyup');
            $('#birthDay').val('');
            //$('.fig_lbl').html('').addClass('none');
            $(".input_field:first").addClass('growth_f');
            $(".nextBox_first").removeClass('mr35');
            $('.invlblhead').html('<strong>Growth </strong> Plans');
            $('.invlblsubhead').html('Get the Best investment options to maximize your wealth.');
            $('.info_list').html('<li>Avail tax benefits on your investments.</li><li>Get the dual advantage of return on investment & protection.</li><li>1500+ advisors to help you compare & buy.</li><li>365 days customer support</li>');
            $('#invneedgrowthamt').val('');
            $('.need-amount').html('');
            break;
        case '2':
            $('#invAge').removeClass('dis_none');$('#invTermSelect').addClass('dis_none');
            $('#invDobAge').html('<span class="b">Age</span> <span>(Retirement)</span>');
            $('#invage').val(65);
            $('#invLabel').html('<span class="b">Pension</span><span>(Per Month)</span>');
            $('#birthDay').attr('data-min', 20);
            $('#invamount').attr('data-min', 10000);
            $('#invamount').attr('data-max', 500000);
            $('#invamount').attr('data-msg','Pension amount should be between ');
            $('#invamount').attr('placeholder','Post retirement');
            $('#invamount').val(50000);$('#invamount').trigger('keyup');
            $('#birthDay').val('');
            //$('.fig_lbl').html('').addClass('none');
            $(".input_field:first").removeClass('growth_f');
            $('.invlblhead').html('<strong>Retirement </strong> Plans');
            $('.invlblsubhead').html('Compare best pension plans from top brands and secure a happy retired life!');
            $('.info_list').html('<li>Invest in market linked plans to maximize your retirement corpus.</li><li>Avail tax benefits on your investments.</li><li>1500+ advisors to help you compare & buy.</li><li>365 days customer support</li>');
            $('#invneedgrowthamt').val('');
            $('.need-amount').html('');
            break;
        case '3':
            $('#invAge').removeClass('dis_none');$('#invTermSelect').addClass('dis_none');
            $('#invage').val('');
            $('#invDobAge').html('<span class="b">Age</span> <span>(Child)</span>');
            $('#invLabel').html('<span class="b">Amount</span><span> (You Need)</span>');
            $('#birthDay').attr('data-min', 18);
            $('#invamount').attr('data-min', 500000);
            $('#invamount').attr('data-max', 50000000);
            $('#invamount').attr('data-msg','Amount you need for your child should be between ');
            $('#invamount').attr('placeholder','For your child');
            $('#invamount').val(3000000);$('#invamount').trigger('keyup');
            $('#birthDay').val('');
            //$('.fig_lbl').html('').addClass('none');
            $(".input_field:first").removeClass('growth_f');
            $('.invlblhead').html('<strong>Child </strong> Plans');
            $('.invlblsubhead').html('Get instant quotes from 15+ insurers and secure your child’s future.');
            $('.info_list').html('<li>Compare & choose your plan to achieve the desired corpus for your child.</li><li>Avail tax benefits on your investments.</li><li>1500+ advisors to help you compare & buy.</li><li>365 days customer support</li>');
            $('#invneedgrowthamt').val('');
            $('.need-amount').html('');
            break;
    }
}
fncInvProceed = function () {
    var selectedTab = $('#investmentType').val();
    
    if (selectedTab != '')
    {
        switch (selectedTab)
        {
            case "1":
                if ($('#invamount').val() == '')
                {
                    addError($('#invamount'), 'Investment amount should be between '+convert_number($('#invamount').attr('data-min'))+ ' and '+convert_number($('#invamount').attr('data-max')));
                }
                else {
                    $('#invamount').trigger('keyup');
                }
                if ($('.birthDay').val() == '')
                {
                    addError($('.birthDay'), 'Enter your age');
                }
                else
                {
                    clearError($('.birthDay'));
                }
                if ($('#invTerm').val() == '')
                {
                    addError($('#invTerm'), 'Please select a pay term.');
                }
                else
                {
                    clearError($('#invTerm'));
                }                
                break;
            case "2":
                if ($('#invamount').val() == '')
                {
                    addError($('#invamount'), 'Pension amount should be between '+convert_number($('#invamount').attr('data-min'))+ ' and '+convert_number($('#invamount').attr('data-max')));
                }
                else
                {
                    $('#invamount').trigger('keyup');
                }
                if ($('.birthDay').val() == '')
                {
                    addError($('.birthDay'), 'Enter your age');
                }
                else
                {
                    clearError($('.birthDay'));
                }
                if ($('#invage').val() == '')
                {
                    addError($('#invage'), 'Enter retirement age');
                }
                else
                {
                    clearError($('#invage'));
                }                
            case "3":
                if ($('#invamount').val() == '')
                {
                    addError($('#invamount'), 'Amount you need for your child should be between '+convert_number($('#invamount').attr('data-min'))+ ' and '+convert_number($('#invamount').attr('data-max')));
                }
                else
                {
                    $('#invamount').trigger('keyup');
                }
                if ($('.birthDay').val() == '')
                {
                    addError($('.birthDay'), 'Enter your age');
                }
                else
                {
                    clearError($('.birthDay'));
                }
                if ($('#invage').val() == '')
                {
                    addError($('#invage'), 'Enter child\'s age');
                }
                else
                {
                    clearError($('#invage'));
                }                
                break;
        }
        ageValidation($('#invage'))
                if ($('.err').text() == '')
                    proceed(selectedTab);
    }
    else
    {
        alert('Please select option first.');
    }
}


function proceed(selectedTab)
{
    var objBtnSubmit = $(this);
    objBtnSubmit.hide();
    

    var formURL = BASEURL + 'callservice.php';
    // Give the URL parameters variable names
    var source = utmSource;
    var medium = utmMedium;
    var campaign = utmCampaign;
    var term = utmTerm;
    //var visitId = (visitId == '' || visitId == 'undefined')?'':visitId;
    var visitId = $('#gaData').attr('data-visit');
    var postData = {
        'task': 'investment',
        'investmenttype': selectedTab,
        'amt': $('#invamount').val(),
        'age': $('#invage').val(),
        'dob': $('.birthDay').val(),
        'term': $('#invTerm').find(":selected").val(),
        'utmsource': source,
        'utmmedium': medium,
        'utmcampaign': campaign,
        'utmterm': term,
		'invneedgrowthamt':$('#invneedgrowthamt').val(),
        'visitId': visitId
    };
    $.ajax({
        url: formURL,
        type: "POST",
        data: postData,
        cache: false,
        beforeSend: function () {
            $('.invproceed').hide();
            $('.process').show();
        },
        success: function (data, textStatus, jqXHR)
        {
            if (data != '' && data > 0)
            {
                var redirectUrl = (utmContent == '' || utmContent == 'undefined') ? '' : '&utm_content=' + utmContent;
                //window.location.href = 'http://qainvestment.policybazaar.com/#/customer?enquiryId=' + encodeURIComponent(Base64.encode(data)) + redirectUrl;//QA
                window.location.href = 'http://investmentlife.policybazaar.com/#/customer?enquiryId=' + encodeURIComponent(Base64.encode(data))+'&home=true'+redirectUrl;//Live
                objBtnSubmit.show();
            } else {
                $('.invproceed').show();
                $('.process').hide();
                objBtnSubmit.show();
            }
			
			//Set local storage value for form
            var postdata = JSON.stringify({
                tabName:'investment',
                subTabName: selectedTab,                
                coverAmt:$('#invamount').val().replace(/,/g, ''),
                age:$('.birthDay').val(),
                ageOther:$('#invage').val(),
                optTerm:$('#invTerm').find(":selected").val()
            });
            localStorage.setItem("getLastTab", postdata);
            //End
			
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            console.log('ok' + textStatus);
            objBtnSubmit.show();
        }
    });
    return false;
}
fncInvNeed = function(e){
    invNeedLbl = 0;
    //if(fncInvDigitOnly(e))
    //{
        var selectedTab = $('#investmentType').val();
        var obj = $('#invamount').val();
        var amt = parseInt(obj.replace(/,/g, ''));
        var age = $('.birthDay').val();
        var payTerm = 0;
        switch (selectedTab)
        {
            case "1":
                invTerm = $('#invTerm').val();
				if(invTerm!=='')
                    clearError($('#invTerm')); 
                invNeed = 'You will get <span>0</span> after years';
                if(amt !='' && age !='' && invTerm !=''  && $('.err').text() == ''){
                payTerm = parseInt($('#invTerm').find(":selected").val());
                invNeedLbl = GetGrowthCalc(amt, payTerm);
                invNeed = 'You will get <span>'+convert_number2(invNeedLbl)+'</span> after '+invTerm+' years';
                }
                break;
            case "2":
                var retAge = $('#invage').val();
                invNeed = 'You need to invest <span>0</span> per month';
                if(amt !='' && age !='' && retAge !=''  && $('.err').text() == ''){               
                retAge = parseInt(retAge);
                var diffAge = retAge-age;
                payTerm = (diffAge<=30)?diffAge:30;
                invNeedLbl = GetRetirementCalc(amt, retAge, payTerm);
                invNeed = 'You need to invest <span>'+convert_number2(invNeedLbl)+'</span> per month';
                }
                break;
            case "3":                
                var childTerm = 0;
                var childAge = $('#invage').val();
                invNeed = 'You need to invest <span>0</span> per month';
                if(amt !='' && age !='' && childAge !=''  && $('.err').text() == ''){
                childAge = parseInt(childAge);
                if(childAge>=0 && childAge<9)
                    childTerm = 20;                
                if(childAge>=9 && childAge<14){
                    childTerm = 15;
                }
				if(childAge>=14){
                    childTerm = 10;
                }
                //payTerm = childTerm<10?10:childTerm<15 && childTerm>10?15:childTerm>15?20:20;
                invNeedLbl = compoundInterest(amt, childTerm);
                invNeed = 'You need to invest <span>'+convert_number2(invNeedLbl)+'</span> per month';
                }
                break;            
        }
        $('#invneedgrowthamt').val(invNeedLbl);
        $('.need-amount').html(invNeed);
    //}    
};

fncInvDigitOnly = function (e) {
    /*if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        //$("#inverr").html("Digits Only").show().fadeOut("slow");
        return false;
    }else return true;*/
    var tmpVal = $(this).val();
    if (!onlyNumber(tmpVal.replace(/,/g, ""))){
        $(this).val('');
        return false;
    }
    return true;
}

function dobValidation()
{
    var age = $('#birthDay').val();
    var minVal = parseInt($('#birthDay').attr('data-min'));
    var maxVal = parseInt($('#birthDay').attr('data-max'));
    
    if (age == '')
    {
        addError($('#birthDay'), 'Enter your age');
    }
    else if (age < minVal)
    {
        addError($('#birthDay'),'You should be '+minVal+' years or above');
    }
    else if (age > maxVal)
    {
        addError($('#birthDay'),'Your age should be '+maxVal+' years or less');        
    }
    else
    {
        clearError($('#birthDay'));
    }
    //ageValidation($('#invage'))
    fncInvNeed($('#birthDay'));
}
function ageValidation(obj)
{
    var selectedTab = $('#investmentType').val();
    switch (selectedTab)
    {
        case "3":
            childValidation(obj);
            break;
        case "2":
            retirementValidation(obj, 50, 80, 115);
            break;
    }
    fncInvNeed(obj);
}
function calculate_age(birth_day, birth_month, birth_year) {
    today_date = new Date();
    today_year = today_date.getFullYear();
    today_month = today_date.getMonth();
    today_day = today_date.getDate();
    age = today_year - birth_year;

    if (today_month < (birth_month - 1))
    {
        age--;
    }
    if (((birth_month - 1) == today_month) && (today_day < birth_day))
    {
        age--;
    }
    return age;
}

function retirementValidation(dob, min, max, product)
{
    var retirementage = $('#invage').val();
    var dob = $('.birthDay').val();
    //var date = dob.split('-'); //dd-mm-yyyy
    //var age = calculate_age(date[3], date[1], date[0]);//console.log(dob+'age:'+age);
    var age = dob;
    if (dob == '')
    {
        addError($('.birthDay'), 'Enter your age');
    }
    else if (retirementage == '')
    {
        addError($('#invage'), 'Enter retirement age');
    }
    else if (retirementage < min || retirementage > max)
    {
        addError($('#invage'),'Retirement Age should be between ' + min + ' and ' + max);
    }
    else if (retirementage <= age)
    {
        addError($('.birthDay'),'Your age cannot be greater than retirement age');
        addError($('#invage'),'Difference between retirement age and your age cannot be less than 10');
    }
    else
    {
        clearError($('.birthDay'));
        clearError($('#invage'));
    }
}

function childValidation(objTextBox)
{   
    var dob = $('.birthDay').val();
    var objTextBox = $('#invage').val();
    //var date = dob.split('-'); //dd-mm-yyyy
    //var age = calculate_age(date[3], date[1], date[0]);
    var age = dob; 
    var diffAge = age - objTextBox;
    
    if ($('#invage').val() == '')
    {
        addError($('#invage'), 'Enter child\'s age');
    }    
    else if (objTextBox >= 18)
    {
        if (dob == '')
        {
            addError($('.birthDay'), 'Enter your age');
        }
        addError($('#invage'),'Child age has to be less than 18'); 
    }
    else if (dob == '')
    {
        addError($('.birthDay'), 'Enter your age');
    }
    else if (diffAge < 18)
    {
        addError($('#invage'),'Diff between your and child age should be greater than 18.');
    }
    else
    {
        clearError($('.birthDay'));
        clearError($('#invage'));
    }
}

function fnFormatCurrencyIndianStyle(objTextBox, maxlenght) {
    var number = "";
    /*
     var temp = objTextBox.value.split(',');
     for(var i=0; i < temp.length;i++) {
     number = number + "" + temp[i];
     }*/
    number = objTextBox.val().replace(/,/g, '');
    if (number != "") {
        if (number.charAt(0) == "0" && number > 0) {
            number = RemoveZeroAtFirst(number);
        }

        var tmpstr = fntemp(parseInt(number));
        //objTextBox.value = fntemp(parseInt(number));
        objTextBox.val(tmpstr);

        if (tmpstr.length > maxlenght) {
            tmpstr = tmpstr.substring(0, tmpstr.length - 1);
            //objTextBox.value = tmpstr;		            
            objTextBox.val(tmpstr);
            fnFormatCurrencyIndianStyle(objTextBox, maxlenght);
        }
    }
}

function RemoveZeroAtFirst(number)
{
    if (number.charAt(0) == "0") {
        number = number.substring(1);
        RemoveZeroAtFirst(number);
    }
    return number;
}

function fntemp(number)
{
    var formattedNumber = "";
    if (number > 999)
    {
        var no = parseInt(number / 1000);
        formattedNumber = (number - no * 1000)
        if (formattedNumber == 0)
        {
            formattedNumber = "000";
        }
        else if (formattedNumber < 10)
        {
            formattedNumber = "00" + formattedNumber;
        }
        else if (formattedNumber < 100)
        {
            formattedNumber = "0" + formattedNumber;
        }
        number = no;
        while (no > 99)
        {
            no = parseInt(no / 100);
            var temp = (number - no * 100);
            if (temp == 0)
            {
                formattedNumber = "00" + "," + formattedNumber;
            }
            else if (temp < 10)
            {
                formattedNumber = "0" + (number - no * 100) + "," + formattedNumber;
            }
            else
            {
                formattedNumber = (number - no * 100) + "," + formattedNumber;
            }
            number = no;
        }
        formattedNumber = no + "," + formattedNumber;
    }
    else
    {
        formattedNumber = number;
    }
    return formattedNumber;
}

function convert_number(number)
{
    if ((number < 0) || (number > 999999999))
    {
        //return "NUMBER OUT OF RANGE!";
        return "";
    }
    var Gn = (number / 10000000);  /* Crore */
    var kn = (number / 100000);     /* lakhs */
    var Hn = (number / 1000);      /* thousand */
    var Dn = (number / 100);       /* Tens (deca) */
    //var Dn = number;       /* Tens (deca) */ 
    var res = "";    
    if (Math.floor(Gn) > 0)
    {
        res += Gn.toFixed(0) + "Cr";
    }
    else if (Math.floor(kn) > 0)
    {
        res += kn.toFixed(0) + " L";
    }
    else if (Math.floor(Hn) > 0)
    {
        res += Hn.toFixed(0) + "K";
    }

    else if (Dn)
    {
        res += Dn + " H";
    }
    return res;
}

function convert_number2(value)
{
    if (value !== undefined && value !== null && !isNaN(value)) {
            value = value.toString().replace(/,/g, '');
            var num = Math.round(value).toString(),
                numLength = num.length,
                displayNum = '',
                suffix = '';
            if (numLength < 4) {
                displayNum = num;
            } else if (numLength == 4) {
                displayNum = num / 1000;
                suffix = (displayNum > 1) ? "K" : "K";
            } else if (numLength == 5) {
                displayNum = num / 1000;
                suffix = (displayNum > 1) ? "K" : "K";
            } else if (numLength == 6) {
                displayNum = num / 100000;
                suffix = (displayNum > 1) ? "L" : "L";
            } else if (numLength == 7) {
                displayNum = num / 100000;
                suffix = (displayNum > 1) ? "L" : "L";
            } else if (numLength == 8) {
                displayNum = num / 10000000;
                suffix = (displayNum > 1) ? "Cr" : "Cr";
            } else if (numLength >= 9) {
                displayNum = num / 10000000;
                suffix = (displayNum > 1) ? "Cr" : "Cr";
            }
            if (parseInt(displayNum) > 9) {
                displayNum = Math.round(10 * displayNum) / 10;
            } else {
                displayNum = Math.round(100 * displayNum) / 100;
            }
            return displayNum + " " + suffix;
        } else {
            return 0;
        }
}
// Child Calculation

    compoundInterest = function (corpus, payTerm) {

        var factor = 0.07124;

        var divisor = ((Math.pow((1.07124), (payTerm)))) - 1;

        var amt = corpus * factor / divisor;

        return Math.round(amt / 12);

    };

 

    // Retirement Calculation

    GetRetirementCalc = function (monthlyPension, age, payTerm) {
        var power = -12 * (age < 80 ? (80 - age) : 1);

        var divisor = 0.00667;

        var P = monthlyPension;

        var multiplier = 1 - Math.pow(1.00667, power);

        var corpus = (P * multiplier) / divisor;

        return compoundInterest(corpus, payTerm);

    };

// Growth calculation

    GetGrowthCalc = function (amount, payTerm) {

        var A = amount;

        var R = 0.063;

        var FV = A * (1 + R) * ((Math.pow((1 + R), payTerm) - 1) / R);

        var futureValue = Math.round(FV * 100) / 100;

        return futureValue;

    };
// Parse the URL
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&amp;]" + name + "=([^&amp;#]*)"),
            results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
/*
 * Investment Cj End*
 */

/*
 Travel Cj Start
 * 
 */
$(document).ready(function () {
    /*$('body').click(function(){
     if (!$(this.target).is('.rightTab')){
     $('.travellerDetails').fadeOut('slow').removeClass('open');
     }
     });*/
    $('.rightTab').on("click", '.frq a', function () {
        $('.frq a').removeClass('active');
        $(this).addClass('active');
        $('#tripduration').val($(this).text());
        $('#tripdays').val($(this).text());
		 if($('#tripfrequency').is(':checked'))
            $('.triperr').html('');
    });
    $('.rightTab').on("change",'[id^=memage]',function(){
        var objParent = $(this).parents('.memberadd');
        var intAge = $('[id^=memage] option:selected', objParent).val();
        
            if (intAge != '')
                $('.chkAge', objParent).prop("checked", "checked");
            else
                $('.chkAge', objParent).prop("checked", "");
        setLabel();     
    });
    $('.rightTab').on("focus", '#travellerno,#destinationcities', function () {
        $('.travellerDetails').fadeOut('slow').removeClass('open');
        $('.travellerDetails', $(this).parents('.input_field')).slideDown('slow').addClass('open');
        $('#token-input-destinationcategoryid').focus();
    });
    $('.rightTab').on('click', '.tripfrequency', function () {
        if ($($(this)).is(':checked')) {
            if($('#memberType').val() == 'student'){
               var days = 730;
           }else{
               var days = 367;
           }
            var maxDate = new Date().addDays(days);
            $('#enddate').val($.datepicker.formatDate("dd-mm-yy", maxDate));
            $('#enddate').attr('placeholder', $.datepicker.formatDate("dd-mm-yy", maxDate));
            $('#enddate').attr('disabled', true);
            $('#traveldate_lbl').html((days-2)+'<p>Days</p>');
            $('.frq').removeClass('dis_none');
            $('#tripduration').val(0);
            $('#tripdays').val(0);
            $('#tripType').val(2);
        } else {
            var maxDate = new Date().addDays(12);
            $('#enddate').val($.datepicker.formatDate("dd-mm-yy", maxDate));
            $('#enddate').attr('placeholder', $.datepicker.formatDate("dd-mm-yy", maxDate));
            $('#enddate').attr('disabled', false);
            $('#traveldate_lbl').html('10<p>Days</p>');
            $('.frq').addClass('dis_none');
            $('#tripduration').val(10);
            $('#tripdays').val(10);
            $('#tripType').val(1);
			$('.frq a').removeClass('active');
        }
    });
    $('.rightTab').on('click', '.travel-bg .travel_action .done,.travel-bg .travel_action .cancel', function () {
        var flagError = false;
        if ($(this).text() == 'Cancel')
        {
            $('.18-99').prop('selectedIndex', 0);
            $('#travellerDetails input[type=checkbox]').attr('checked', false);
            $('#travellerno').val('');
        }
        if ($(this).text() == 'Done')
        {
            $('#travellerDetails input[type=checkbox]').each(function () {
                var objParent = $(this).parents('.memberadd');
                var checked = $('.chkAge', objParent).is(":checked");
                if (checked === true) {
                    var intAge = $('select option:selected', objParent).val();
                    if (intAge <= 0 || intAge == 'Yrs') {
                        flagError = true;
                        objParent.addClass('error');
                    } else {
                        objParent.removeClass('error');
                    }
                }
            });
        }
        if (!flagError)
            $('.travellerDetails').fadeOut('slow').removeClass('open');
    });

    $('.rightTab').on('click', '#travellerDetails input[type=checkbox]', function () {
        setLabel();
    });
    $('.rightTab').on('click', '.memberadd .addChild', function () {
        var len = $('#travellerDetails ul li').length + 1;
        if (len == 7)
            var $cloneItem = '<li class="memberadd"><div class="select_feild"><input id="travelcheckbox' + len + '" type="checkbox" name="checkbox" value="' + len + '" class="chkAge"><label for="travelcheckbox' + len + '"><span></span>Child</label></div><select id="memage'+len+'"  class="yrs_' + len + '"><option>Yrs</option></select><span class="addBtn addChild"><i class="fa"></i></span></li>';
        else
            var $cloneItem = '<li class="memberadd"><div class="select_feild"><input id="travelcheckbox' + len + '" type="checkbox" name="checkbox" value="' + len + '" class="chkAge"><label for="travelcheckbox' + len + '"><span></span>Child</label></div><select id="memage'+len+'"  class="yrs_' + len + '"><option>Yrs</option></select><span class="addBtn addChild"><i class="fa fa-plus-square"></i></span></li>';
        if (len != 8) {
            $('#travellerDetails ul').append($cloneItem);
            var $select = $(".yrs_" + len);
            for (i = 1; i <= 18; i++) {
                $select.append($('<option></option>').val(i).html(i))
            }
        }
        else {
            //alert('max limit reach');
        }
    });
    $('.rightTab').on('click', '.memberadd .addMore', function () {
        var len = $('#travellerDetails ul li').length + 1;
        if($('#memberType').val()=='student'){
            var lblName = 'Student ';
            var minSelect = 16;var maxSelect = 35;
        }else{
            var lblName = 'Traveller ';
            var minSelect = 18;var maxSelect = 99;
        }
        lblName = lblName+len;
        if (len == 8)
            var $cloneItem = '<li class="memberadd"><div class="select_feild"><input id="travelcheckbox' + len + '" type="checkbox" name="checkbox" value="' + len + '" class="chkAge"><label for="travelcheckbox' + len + '"><span></span>' + lblName + '</label></div><select id="memage' + len + '"  class="yrs_' + len + '"><option>Yrs</option></select><span class="addBtn addMore"><i class="fa"></i></span></li>';
        else
            var $cloneItem = '<li class="memberadd"><div class="select_feild"><input id="travelcheckbox' + len + '" type="checkbox" name="checkbox" value="' + len + '" class="chkAge"><label for="travelcheckbox' + len + '"><span></span>' + lblName + '</label></div><select id="memage' + len + '"  class="yrs_' + len + '"><option>Yrs</option></select><span class="addBtn addMore"><i class="fa fa-plus-square"></i></span></li>';

        if (len != 9) {
            $('#travellerDetails ul').append($cloneItem);
            var $select = $("#yrs_" + len);
            for (i = minSelect; i <= maxSelect; i++) {
                $select.append($('<option></option>').val(i).html(i))
            }
        }
        else {
            //alert('max limit reach');
        }
    });
    $('.rightTab').on("click", '#travelPolicy', function () {
        $('#travellerDetails input[type=checkbox]').attr('checked', false);
        $('#travellerno').val('');
        $('.travellerDetails').fadeOut('slow').removeClass('open');
        if ($(this).val() == 0)
        {//student
            $('.infoUpdate').addClass('dis_none');
            $('#tripfrequency').attr('checked', false);$('#enddate').attr('disabled', false);$('.frq a').removeClass('active');
            $('#memberType').val('student');
            var i = 1;
            $('#travellerDetails label').each(function ()
            {
                $(this).html('<span></span>Student ' + i);
                i++;
            });
            numDays = 730;
            $('[id^=memage]').find('option').remove().end();
            var $select = $("[id^=memage]");
            $select.append('<option>Yrs</option>');
                for (i = 16; i <= 35; i++) {
                    $select.append($('<option></option>').val(i).html(i))
            }
        }
        else {
            $('.infoUpdate').removeClass('dis_none');
            var i = 1;
            $('#memberType').val('');
            $('#travellerDetails label').each(function ()
            {
                $(this).html('<span></span>Traveller ' + i);
                i++;
            });
            numDays = 182;
            $('[id^=memage]').find('option').remove().end();
            var $select = $("[id^=memage]");
            $select.append('<option>Yrs</option>');
                for (i = 18; i <= 99; i++) {
                    $select.append($('<option></option>').val(i).html(i))
            }
        }
        endDate = new Date().addDays(numDays);
        pickerEndDate.setMaxDate(endDate);
        resetDates(pickerStartDate,pickerEndDate);
    });
});
fncTravelTab = function () {
    var selectedTab = $(this).children('input[type=radio]').val();
    $(this).children('input[type=radio]').prop('checked', 'checked');
    var len = $('#travellerDetails ul li').length;
    $('#travellerDetails input[type=checkbox]').attr('checked', false);
    $('#travellerno').val('');
    $('.travellerDetails').fadeOut('slow').removeClass('open');
    $('#CategoryID').val(selectedTab);
    switch (selectedTab)
    {
        case '1':
            $('#tripPolicy').addClass('dis_none');$('.frq').addClass('dis_none');
            $('.infoUpdate').removeClass('dis_none');  
            $('#tripfrequency').attr('checked', false);$('#enddate').attr('disabled', false);$('.frq a').removeClass('active');	
            var travellerArray = new Array('Self', 'Spouse', 'Father', 'Mother', 'Child', 'Child', 'Child');
            var i = 0;
            $('#travellerDetails label').each(function ()
            {
                $(this).html('<span></span> ' + travellerArray[i]);
                i++;
            });
            $('#memberType').val('');

            if (len >= 8)
            {
                $('#travellerDetails ul li:last-child').remove();
                $('.addBtn').removeClass('addMore');
                $('.addBtn').addClass('addChild');
                $('.fn').removeClass('fa-plus-square');
            }
            $('[class~=0-99]').find('option').remove().end();
            var $select = $("[class~=0-99]");
            $select.append('<option>Yrs</option>');
                for (i = 18; i <= 99; i++) {
                    $select.append($('<option></option>').val(i).html(i))
            }
            $('[class~=0-18],[class*=yrs]').find('option').remove().end();
            var $select = $("[class~=0-18],[class*=yrs]");
            $select.append('<option>Yrs</option>');
                for (i = 1; i <= 18; i++) {
                    $select.append($('<option></option>').val(i).html(i))
            }
            numDays = 182;
            break;
        case '2':
            //$('#travelPolicy').trigger('click');
            $('#tripPolicy').removeClass('dis_none');
            $('.infoUpdate').addClass('dis_none');$('.frq').addClass('dis_none');
	    $('#tripfrequency').attr('checked', false);
	    $('#enddate').attr('disabled', false);
            $('.frq a').removeClass('active');
            $('.addBtn').removeClass('addChild');
            $('.addBtn').addClass('addMore');            
            var i = 1;
            $('#travellerDetails label').each(function ()
            {
                $(this).html('<span></span> Student ' + i);
                i++;
            });
            $('#memberType').val('student');
            $('[id^=memage]').find('option').remove().end();
            var $select = $("[id^=memage]");
            $select.append('<option>Yrs</option>');
                for (i = 16; i <= 35; i++) {
                    $select.append($('<option></option>').val(i).html(i))
            }
            if (len >= 7)
                $('.fn').removeClass('fa-plus-square');
            else
                $('.fn').addClass('fa-plus-square');
            //var picker = new Pikaday({ field: document.getElementById('enddate') });
            numDays = 730;            
            break;
    }
    endDate = new Date().addDays(numDays);
    pickerEndDate.setMaxDate(endDate);
    resetDates(pickerStartDate,pickerEndDate);
}

fncTravelProceed = function () {
    var objstart = $('#startdate');
    var objend = $('#enddate');
    var destinationcities = $("#destinationcities").val();
    var destinationcategoryid = $("#destinationcategoryid").tokenInput("get");
    var objCnt = $('#travellerno');
    var flagSubmit = true;
	if($('#tripfrequency').is(':checked'))
    {
       if($('.frq a').hasClass("active")){}
       else{ $('.triperr').html('Please select trip frequency.'); 
         flagSubmit = false;
        }
    }
    else
    {
       $('.frq a').removeClass('active');
       $('.triperr').html('');
       flagSubmit = true;
    }
    if (destinationcities == '')
    {
        addError($("#destinationcities"), 'Please enter destination');
        flagSubmit = false;
    }
    else
    {
        clearError($("#destinationcities"));
    }
    if (objCnt.val() == '') {
        addError(objCnt, 'Please enter no of travellers');
        flagSubmit = false;
    } else {
        var memberArray = [];
        var objtravellers = $('#travellerDetails input:checkbox').length;
        var no = 1;
        for (var i = 1; i <= objtravellers; i++)
        {
            if ($($('#travelcheckbox' + i)).is(':checked')) {
                var memage = $('#memage' + i).val();
                var lbl = $('#travelcheckbox' + i).next().text();
                memberArray.push(new Array(no, lbl, memage));
                no++;
            }
        }
        clearError(objCnt);
    }

    if (objstart.val() == '' || objend.val() == '') {
        addError(objstart, 'Please select start/end date');
        flagSubmit = false;
    } else {
        clearError(objstart);
    }

    if (flagSubmit) {
        try {
            var objBtnSubmit = $(this);
            objBtnSubmit.hide();
            

            var formURL = BASEURL + 'callservice.php';
            // Give the URL parameters variable names
            var source = utmSource;
            var medium = utmMedium;
            var campaign = utmCampaign;
            var term = utmTerm;
            //var visitId = (visitId == '' || visitId == 'undefined')?'':visitId;
            var visitId = $('#gaData').attr('data-visit');
            var postData = {
                'task': 'travel',
                'traveltype': $('#CategoryID').val(),
                'triptype': $('#tripType').val(),
                'membertype': $('#memberType').val(),
                'cnttraveller': $('#travellerno').val(),
                'startdate': $('#startdate').val(),
                'enddate': $('#enddate').val(),
                'destinationcategoryid': destinationcategoryid,
                'tripduration': $('#tripduration').val(),
                'tripdays': $('#tripdays').val(),
                'members': memberArray,
                'utmsource': source,
                'utmmedium': medium,
                'utmcampaign': campaign,
                'utmterm': term,
                'visitId': visitId
            };
            $.ajax({
                url: formURL,
                type: "POST",
                data: postData,
                cache: false,
                beforeSend: function () {
                    $('.travelproceed').hide();
                    $('.process').show();
                },
                success: function (data, textStatus, jqXHR)
                {   //console.log(data);
                    if (data != '' && ValidURL(data)) {
                        window.location.href = data;
                        objBtnSubmit.show();
                    } else
                    {
                        $('.process').hide();
                        $('.travelproceed').show();
                        objBtnSubmit.show();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown)
                {
                    console.log('ok' + textStatus);
                    objBtnSubmit.show();
                }
            });
            return false;
        } catch (e) {
        }
    }



};


calculateNumDays = function (start, end) {
    var millsec = 24 * 60 * 60 * 1000;   //One day millisec
    var startDate = new Date(start);
    var endDate = new Date(end);
    var diffDays = Math.round(Math.abs((endDate.getTime() - startDate.getTime()) / (millsec)));
    return parseInt(diffDays * 1 + 1);
}

function setLabel() {
    var objtravellers = $('#travellerDetails input:checkbox').length;
    var chkItem = [];    
    var i = 1;
    $('#travellerDetails input[type=checkbox]').each(function () {
        var objParent = $(this).parents('.memberadd');
        var checked = $('.chkAge', objParent).is(":checked");
        if (checked === true) {
            var lbl = $('#travelcheckbox' + i).next().text();
            var selVal = $('#memage'+i).val();
            if(selVal !='' && selVal !=undefined)
                lbl += '('+selVal+')';
            chkItem.push(lbl);
        }
        else{
            $('#memage'+i).prop('selectedIndex',0);
            objParent.removeClass('error');
        }    
     i++;   
    });
    
    $('#travellerno').val(chkItem);
}

function resetDates(pickerStartDate,pickerEndDate)
{    
    var startdays = new Date().addDays(3);
    pickerStartDate.setDate(startdays);
    var enddays = new Date().addDays(12);
    pickerEndDate.setDate(enddays);
    $('#traveldate_lbl').html('10<p>Days</p>'); 
}

function ValidURL(str) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!regex.test(str)) {
        //alert("Please enter valid URL.");
        return false;
    } else {
        return true;
    }
}
/*
 Travel Cj End
 * 
 */
 
 }
 
/*video code*/
(function() {
    var v = document.getElementsByClassName("video_box");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb(v[n].dataset.id);
        p.onclick = labnolIframe;
        v[n].appendChild(p);
    }
})();
	
function labnolThumb(id) {
 var returnStr = '';
 if (id == 'gaJpM3zg4ZE'){
  returnStr = '<img class="youtube-thumb" src="images/' + id + '.jpg"><div class="play-button"></div>';
 } else if(id == 'RuYaF_f1-h4'){
  returnStr = '<img class="youtube-thumb" src="images/' + id + '.jpg"><div class="play-button"></div>';
 }
    return returnStr;
}
	
function labnolIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("width", "300");
    iframe.setAttribute("height", "200");
    //iframe.setAttribute("id", "youtube-iframe");
    this.parentNode.replaceChild(iframe, this);
} 