/*Fancy Box*/
$('.fancybox').fancybox({
  openEffect  : 'elastic',
  closeEffect : 'elastic', 
  width : 800,
  helpers     : {
      title: {
          type: 'outside'   
      }
  } 
});

$('.fancyboxiframe').fancybox({
  openEffect  : 'elastic',
  closeEffect : 'elastic', 
  width : 500, 
  helpers     : { 
      title: { 
          type: 'outside'    
      }  
  }
});  

/* Tooltip */
  $(".navbar-brand").hover(function(){ 
    $(".tool").stop().animate({  
      width: "255px"
    },800);
  },function(){  
    $(".tool").stop().animate({   
      width: "0px" 
    },800); 
  });  
  
   
 
/* DropDown Menu */   
$('.nav li').hover(function(){ 
    $(this).find('.dropdown-menu').stop().slideDown(500);
  },function(){
    $(this).find('.dropdown-menu').stop().slideUp(100);
  });
  $('.dropdown-submenu').hover(function(){
    $(this).find('.dropdown-menu1').stop().slideDown(500);
  },function(){
    $(this).find('.dropdown-menu1').stop().slideUp(100);
  });

/* slider */
$('.bxslider').bxSlider({
    pagerCustom: '#bx-pager',
    preloadImages: 'all'
});

$('.bx-slider').bxSlider();

/*Menus Active*/
$(function (){
    $('.navbar-nav li a').each(function(){
        var path = window.location.href;
        var current =  path.substring(path.lastIndexOf('/') + 1);
        var url = $(this).attr('href');
        if(url == current){
            $(this).addClass('active');
            // $(this).append(' <div class="navbar-arrow"></div>');
        };
    });        
}); 

/*Experience Slider*/
$('.row.post-loop').mouseover(function(){
  $top = $(this).offset().top;
  console.log($top);
  $('.slider-arrow').animate({
    'top': $top
  },100);
});

/* Fixed Footer on Resize */
// $( window ).resize(function() {
//   $fheight = $('#main-footer').height();
//   $('.wrap-container').css('padding-bottom', $fheight+100);  
// });

// $(document).ready(function() {
//   $fheight = $('#main-footer').height();
//   $('.wrap-container').css('padding-bottom', $fheight+100);  
// });

/*Sitemap*/
$('.sitemap').click(function(e){
  if($(this).text() == 'Sitemap' ) {
    $('.sitemap').html('<a href="#">Close Sitemap</a>');
  }
  else {
    $('.sitemap').html('<a href="#">Sitemap</a>');
  }
  $('.upper-footer').slideToggle('400');
  e.preventDefault();
});

/* Homepage 3Icon href  */
$('.iconed-feature').click(function(){
  window.location.href = 'index.php#';
});

/* Tooltip */
$(document).ready(function(){
  // $('.tooltip').tooltip('hide');

  /* Google search*/
  $('#gsearch').append('<gcse:search></gcse:search>');
});

/* HomePage Slider */
if ($.fn.cssOriginal!=undefined)
$.fn.css = $.fn.cssOriginal;

$('.fullwidthbanner').revolution(
  {
    delay:9000,
    startwidth:960,
    startheight:600,

    onHoverStop:"on",           // Stop Banner Timet at Hover on Slide on/off

    thumbWidth:100,             // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
    thumbHeight:50,
    thumbAmount:3,

    hideThumbs:0,
    navigationType:"bullet",        // bullet, thumb, none
    navigationArrows:"solo",        // nexttobullets, solo (old name verticalcentered), none

    navigationStyle:"round",        // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


    navigationHAlign:"center",        // Vertical Align top,center,bottom
    navigationVAlign:"bottom",         // Horizontal Align left,center,right
    navigationHOffset:0,
    navigationVOffset:20,

    soloArrowLeftHalign:"left",
    soloArrowLeftValign:"center",
    soloArrowLeftHOffset:20,
    soloArrowLeftVOffset:0,

    soloArrowRightHalign:"right",
    soloArrowRightValign:"center",
    soloArrowRightHOffset:20,
    soloArrowRightVOffset:0,

    touchenabled:"on",            // Enable Swipe Function : on/off



    stopAtSlide:-1,             // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
    stopAfterLoops:-1,            // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

    hideCaptionAtLimit:0,         // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
    hideAllCaptionAtLilmit:0,       // Hide all The Captions if Width of Browser is less then this value
    hideSliderAtLimit:0,          // Hide the whole slider, and stop also functions if Width of Browser is less than this value


    fullWidth:"on",

    shadow:0                //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

  }
);


/* Tab Page Load */

 // $("#filterOptions a").on('click', function(e){
 //    e.preventDefault();

 //    var fileName = "portfolio-" + $(this).attr('href').slice(1) + ".php";
 //    //console.log(fileName);
 //    $('.ajax-load').css('display', 'block');
 //    $('.portfolio_container').load(fileName, function(){
 //      $(".isotope-w").isotope({
 //        filter: '*'
 //      });
 //      $('.ajax-load').css('display', 'none');
 //    });
 //  });
 //  $("#filterOptions li:first-child a").trigger('click');

  $('#tabs a').click(function(){
    $this = $(this);
    $('#tabs a').removeClass('current');
    $this.addClass('current');
  });

  $('#filterOptions a').click(function(){
    $active = $('.view_icon').find('li.active');
    $viewClass = $active.attr('dataclass');

    var parent = $("#filterOptions").find('a.current');
    var parent_val = parent.attr('href').replace( /^#/, '' );
    var href ='tab='+parent_val;
    var option = $.deparam( href, true );
    $.bbq.pushState( option );
    $('.breadcrumbs p').html('<span>&gt;&nbsp;</span><p>'+parent_val+'</p>');
    var fileName = "portfolio-" + $(this).attr('href').slice(1) + ".php";
    $('.ajax-load').css('display', 'block');
    $('.portfolio_container').load(fileName, function(){
    $(".isotope-w").isotope({
      filter: '*'
    });
    $('.isotope-w').removeClass("item-list-small").removeClass("item-grid-small").removeClass("item-list").removeClass("item-grid").removeClass('item-list-medium').removeClass('item-grid-medium');
    $(".isotope-w").addClass($viewClass);
    $(".isotope-w").imagesLoaded( function() {
      $(".isotope-w").isotope('layout');
    });
    
    $('.ajax-load').css('display', 'none');
  });
  return false; 
  });

  $('.portfolio_container').load('portfolio-All.php', function(){ 

  });

  $(function(){
    $('.isotope-w').addClass('item-grid-small');
  });

  $(document).ready(function(){
    var url = window.location.href ;
    var split_url = url.split("#tab=");
    $('#filterOptions li a[href=#'+ split_url[1] +']').trigger("click");
  });

$(function(){
        
  $("#box1").jScrollPane({
          autoReinitialise : true
  });
  $("#box2").jScrollPane({
          autoReinitialise : true
  });
  $("#box3").jScrollPane({
          autoReinitialise : true
  });
  $("#box4").jScrollPane({
          autoReinitialise : true,
          showArrows: true
  });

  var scrollTimerCount = 0;
   scrollTimer = setInterval(function() {
   if($('.twtr-bd div').hasClass('twtr-tweet-wrap') || scrollTimerCount == 6 ){
           $('.twtr-timeline').jScrollPane();
           
           addClickToTwitter();
           scrollTimerClear();
   }
   scrollTimerCount++;
   }, 1000);
        
   function scrollTimerClear(){
           clearInterval(scrollTimer);
           // console.debug("test");
           $(".twitter-loader").hide();
   }
        
  function addClickToTwitter(){
    $("#twitter-widget-tabs-tabs li").click(function(e) {
       e.preventDefault();
       // switch all tabs off
       if ($(this).find('a').hasClass('active')){
       }else{
       $("#twitter-widget-tabs-tabs").find("a.active").removeClass("active");
       // switch this tab on
       $(this).find('a').addClass("active");
       // slide all content up
       $(".twitter-widget-tabs-content").hide();
      
       // slide this content up
       var content_show = $(this).attr("rel");
       $("#"+content_show).show();
       }
      
    });
  }
});
              
$(document).ready(function(){
  $('.getoomi-twitter-widget').click(function(e){
    e.preventDefault();
          
          /*if($('#twitter_username1').val()){*/
    var url = $(this).attr('href');
    //console.debug(message);
    if($('#twitter_username1').val() == $('#twitter_username1').attr('placeholder')){
            $('#twitter_username1').val('');
    }
    if($('#message1').val() == $('#message1').attr('placeholder')){
            $('#message1').val('');
    }
    var message = encodeURIComponent($('#message1').val());
    if (message == ""){
            message = "Check out dannyglix.com ";
            //message = "I wish you had %23getoomi, its cool and lets you share your time online easily http://getoomi.com";
    }
    var usernameVal = "";
    if ($('#twitter_username1').val()!="") {
            usernameVal = "@"+$('#twitter_username1').val();
    };
    url = url+usernameVal+ " " + message + " %23dannyglix";
    //console.debug(url);
     //window.location.href=url;
             var width = 575,
     height = 400,
     left = ($(window).width() - width) / 2,
     top = ($(window).height() - height) / 2,
     url = url,
     opts = 'status=1' +
     ',width=' + width +
     ',height=' + height +
     ',top=' + top +
     ',left=' + left;
    
     window.open(url, 'twitter', opts);
     return false;
  });
});

$('#project_carousel').everslider({
  mode: 'carousel',
  itemWidth: 148,
  itemHeight: 120,
  itemMargin: 25,
  navigation: true,
  mouseWheel: true,
  tickerTimeout: 2000
});

$(function(){
  $('.lshowcase-hover-grayscale').tooltip();
});

