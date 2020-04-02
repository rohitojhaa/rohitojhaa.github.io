function ActiveUsers(){var serviceUrl='/comparecountajax.php';$.ajax({url:serviceUrl,type:'GET',cache:false,success:function(data){$('.rankingNumber').html(data);}});}function getClick(strEvent,strClickFor){if(strEvent!=''&&strClickFor!=''){var eventName='newHomePage';try{ga('pbTrackerObj.send','event',eventName,strClickFor,'',{'nonInteraction':1});}catch(e){}}}function RedirectUrl(strRedirectUrl){window.location.href=strRedirectUrl;return false;}$(document).ready(function(){if(window.location.pathname=='/policybazaar-home/index.php' || window.location.pathname=='/')setInterval(function(){ActiveUsers()},30000);});var userType="";var callOnPageBottom=function(){this.pageName="";this.channel="";this.subSection1="";this.userType="";this.formname="";this.pageBottomEvent=function(){var digitalData={page:{'pageName':this.pageName,'channel':this.channel,'subSection1':this.subSection1,'userType':this.userType,'formname':this.formname}}
return digitalData;}}
function getuserType(){var userType="guest";return userType}userType=getuserType();var callOnFormStartStatus=function(){this.pageName="";this.channel="";this.subSection1="";this.userType="";this.formname="";this.callOnFormStartEvent=function(){var digitalData={page:{'pageName':this.pageName,'channel':this.channel,'subSection1':this.subSection1,'userType':this.userType,'formname':this.formname}}
return digitalData;}}
var omnitureCallBackEventsOnPreQuote=function(){this.formstep1=function(){try{_satellite.track('formstep-1-Complete');}catch(e){}}
this.pageBottom=function(){try{_satellite.pageBottom();}catch(e){}}}


function RedirectUrlHomeProduct(strRedirectUrl){
    var querystring = window.location.search;
    var href = strRedirectUrl;
    var n = href.indexOf('?');
    if (n > 0) {
        querystring = querystring.replace('?', '&');
    }
    if (href) {
        href += querystring;
        var n = href.indexOf('?');
        if (n > 0) {
            href += '&';
        } else {
            href += '?';
        }
        href += 'utm_content=home_v3';
        //$(this).attr('href', href);
        strRedirectUrl = href;
    }
    window.location.href=strRedirectUrl;
    return false;
}

function getClickv3(strEvent, strClickFor) {
    if (strEvent != '' && strClickFor != ''){
        var eventName = 'newHomePagev3';
        try{
        ga('pbTrackerObj.send', 'event', eventName, strClickFor, '',{'nonInteraction': 1});
        }
        catch (e){}
    }
}


 $(window).load(function() {
   $(".btn-nav").on("click tap", function() {
     $(".nav-container").toggleClass("showNav hideNav").removeClass("hidden");
     $(this).toggleClass("animated");
   });
 });
 
 
 
 	$(document).ready(function()
		{
			$(window).scroll(function() {
				if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
				$('#return-to-top').fadeIn(200);    // Fade in the arrow
		} else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
				}
		});
		$('#return-to-top').click(function() {      // When arrow is clicked
			$('body,html').animate({
			scrollTop : 0                       // Scroll to top of body
									}, 500);
		});  
		});
		
		
		
		
		
		
		
		
		$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});











	
		