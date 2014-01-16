/*************************************************
      SlidePanel JS v2.0
      @author Fabio Mangolini
      http://www.responsivewebmobile.com
**************************************************/
(function($) {
	$.SlidePanel = function(options) {
		//default status is closed
		
		//initialize the panel show/hide button 
		$("a[class^='slidein-panel-btn']").css({ 'position': 'absolute', 'top': 0, 'right': -$("a[class^='slidein-panel-btn']").outerWidth() + 'px' });

        //initialize the panel
		$("div[class$='slidein-panel']").css({ 'position': 'absolute', 'top': 0, 'left': -$("div[class$='slidein-panel']").outerWidth(), 'height': $(window).height() });

        //show and hide the panel depending on status
        $("a[class^='slidein-panel-btn']").click(
			function() {
				if(status == 'close') {
					status = 'open';
					$("div[class$='slidein-panel']").animate({'left':0});
				}
				else if(status == 'open') {
					status = 'close';
					$("div[class$='slidein-panel']").animate({'left':-$("div[class$='slidein-panel']").outerWidth()});
				}
			}
		);
	};
})(jQuery);