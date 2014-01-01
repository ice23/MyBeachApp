$(document).bind('pageinit', function () {
$.mobile.ajaxEnabled=false;
$('input.blurry').focus(function() {
value=$(this).val();
$(this).attr("value","");
});
$('input.blurry').blur(function() {
if($(this).val()=="") {
$(this).val(value);
}
});

$('#nav-bar li.regz a').live('tap',function(event) {
	$('#menulist').hide();
	$('#nav-bar li.regz a').removeClass('prec');
	$('.sortmen').removeClass('open');
    clicked = $(this).attr('title');
	 $(this).addClass('prec');

    $('#collist ul li.couv').each(function() {
      if ($(this).attr('rel') == clicked) {
		$('#collist.sortmen').show();
        $(this).addClass('active');
      } else {
		$('#collist.sortmen').removeClass('active');
        $(this).removeClass('active');
      }
    });

    return false;
  });

  $('#nav-bar li#men a,.linkies a#cll').live('tap',function(event) {
	$('#collist').hide();
	$('#menulist').toggle();
	
  });
  
$('.sortmen ul li.lur-3 a,li#cli-2 li.Blog-sub a').attr('target','_blank');
  
    $('#nav-bar li.regz a.prec').live('tap',function(event) {
	$(this).removeClass('prec');
	$('.sortmen').hide();	
  });
  
  $('#nav-bar ul li a,.linkies a#cll').live('tap',function(event) {
  $('#nav-bar ul li a').find('div').removeClass('acton');
  if($('.sortmen').is(':visible')) {
   $(this).find('div').addClass('acton');
}else {
$(this).find('div').removeClass('acton');
}
});

$('.ItineraryPage #depart-board #depart-board-body a').live('tap',function(event) {
	return false;
});
  
$.fn.cycle.transitions.scrollHorzTouch = function($cont, $slides, opts) {
$cont.css('overflow','hidden').width();
opts.before.push(function(curr, next, opts, fwd) {

	if (opts.rev)
	fwd = !fwd;

	positionNext = $(next).position();
	positionCurr = $(curr).position();

	$.fn.cycle.commonReset(curr,next,opts);
	if( ( positionNext.left > 0 && fwd ) || ( positionNext.left <  0 && !fwd ) )
	{
		opts.cssBefore.left = positionNext.left;
	}
	else
	{
		opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
	}
	if( ( positionCurr.left > 0 && fwd ) || ( positionCurr.left <  0 && !fwd ) )
	{
	opts.animOut.left = positionCurr.left;
	}
	else
	{
	opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
	}

});
opts.cssFirst.left = 0;
opts.cssBefore.top = 0;
opts.animIn.left = 0;
opts.animOut.top = 0;
};
var currenSlide = null;
var slideNumber = 0;
var currentLeft = 0;
var leftStart = 0;
var sliderExpr;
var slideFlag = false;

 $('#rotating-item-wrapper').cycle({
fx:     'scrollHorzTouch',
timeout: 8000,
delay: -3000,
pager:  '#nav',
speedIn:   100,
speedOut:   100,
slideExpr: 'img',
easing: 'easeOutQuad',
before: beforeSlide,
after: afterSlide,
startingSlide: 0
});

if($('#nav a').length > 1) {
$('#rotating-item-wrapper').swipe({ swipeMoving: function( pageX ){

	if( slideFlag ) return;

	var newLeft = currentLeft-pageX;

	currenSlide.css('left', newLeft+'px'  );

	var $slides = $( sliderExpr, $('#rotating-item-wrapper') );
	var scrollSlide;

	nextSlideLeft =   newLeft > 0 ? newLeft - currenSlide.width(): newLeft+currenSlide.width();
	flag = newLeft > 0 ? -1: 1;
	scrollSlide  = slideNumber + flag;
	if( scrollSlide < 0 || scrollSlide > ($slides.length - 1 ) )
	{
		scrollSlide = scrollSlide < 0 ? $slides.length - 1 : 0;
	}

	 $slides.eq( scrollSlide ).css('left',nextSlideLeft + 'px' );
	 $slides.eq( scrollSlide ).show();
},
swipeLeft: function(){$('#rotating-item-wrapper').cycle('next');},
swipeRight: function(){ $('#rotating-item-wrapper').cycle('prev'); }

});
}

// Call this function before the slide start
function beforeSlide( curr, next , opt )
{
 sliderExpr = opt.slideExpr;
 slideFlag = true;
}

// Call this function after the slide start
function afterSlide(curr, next , opt )
{
currenSlide =  $(next);
slideNumber = opt.currSlide;
currentLeft = $(next).position().left;
slideFlag = false;
}

setInterval(function () {
jQuery('#butonix span[rel]').hide();
jQuery('#butonix span[rel]').eq(0).attr('class',jQuery("#rotating-item-wrapper #nav a").eq(0).attr("class"));
jQuery('#butonix span[rel]').eq(1).attr('class',jQuery("#rotating-item-wrapper #nav a").eq(1).attr("class"));
jQuery('#butonix span[rel]').eq(2).attr('class',jQuery("#rotating-item-wrapper #nav a").eq(2).attr("class"));
jQuery('#butonix span[rel]').eq(3).attr('class',jQuery("#rotating-item-wrapper #nav a").eq(3).attr("class"));
jQuery('#butonix span.activeSlide').show();
}, 300);

$('#whats select#select-choice-0').change(function(){
	$('#whats .amen ul li').hide();
	var vle = $(this).val();
	if(vle == 'All') {
	$('#whats #staterooms.amen ul li').show();
	}else{
	$('#whats #staterooms.amen ul li[rel~="'+vle+'"]').show();
	$('#whats #staterooms.amen ul li:visible').first().addClass('cortop');
	$('#whats #staterooms.amen ul li:visible').last().addClass('corbot');
	}
});

if($('#nav a').length==1) {
$('#nav').hide();
}

$('.linkies a#cll').live('tap',function(event) {
$('html,body').animate({scrollTop: '80px'}, 'slow');
});

$('#bl-signup span a').live('tap',function(event) {
var sval = $('input#footer-email').val();
if(sval =="" || sval == "ENTER YOUR EMAIL") {
alert('Please enter your email');
return false;
}
var chref= $(this).attr('href');
$(this).attr('href',chref +'?e='+sval)
});

$('a').bind('mouseover', function(){
   return false;
});

jQuery('#nav-bar ul li.regz a#cli-3').live('tap', function(event){
event.preventDefault();
$('.sortmen').hide();
location.href = "/experience/";
});
$('#rotating-item-wrapper').css('height','240');
});

$(window).bind('orientationchange', function (e) {
setTimeout(function() {
var het = $('#rotating-item-wrapper img').eq(0).width()/1.34;
$('#rotating-item-wrapper').css('height',het);
var lmh = $('#rotating-item-wrapper').height()-84;
$('a#lmore').css('top',lmh);
}, 200);
});
