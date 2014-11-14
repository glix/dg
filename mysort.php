<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>jQuery Sort and Order Portfolio Plugin</title> 
  <script type="text/javascript" src="assets/js/sorting-html.js"></script>
<script type="text/javascript">
(function ($) {
    $.fn.quicksand = function (collection, customOptions) {     
        var options = {
            duration: 600,
            easing: 'swing',
            attribute: 'data-id',
            adjustHeight: 'auto',
            enhancement: function(c) {}, // Visual enhacement (eg. font replacement) function for cloned elements
            selector: '> *',
			easeIn: 'twirlIn',
			easeOut: 'twirlOut',
            dx: 0,
            dy: 0
        };
        $.extend(options, customOptions);
        
        if ($.browser.msie || (typeof($.fn.scale) == 'undefined')) {
            // Got IE and want scaling effect? Kiss my ass.
            options.useScaling = false;
        }
        
        var callbackFunction;
        if (typeof(arguments[1]) == 'function') {
            var callbackFunction = arguments[1];
        } else if (typeof(arguments[2] == 'function')) {
            var callbackFunction = arguments[2];
        }
    
        return this.each(function (i) {
            var val;
            var animationQueue = []; // used to store all the animation params before starting the animation; solves initial animation slowdowns
            var $collection = $(collection).clone(); // destination (target) collection
            var $sourceParent = $(this); // source, the visible container of source collection
            var sourceHeight = $(this).css('height'); // used to keep height and document flow during the animation
            
            var destHeight;
            var adjustHeightOnCallback = false;
            
            var offset = $($sourceParent).offset(); // offset of visible container, used in animation calculations
            var offsets = []; // coordinates of every source collection item            
            
            var $source = $(this).find(options.selector); // source collection items
            
            // Replace the collection and quit if IE6
            if ($.browser.msie && $.browser.version.substr(0,1)<7) {
                $sourceParent.html('').append($collection);
                return;
            }

            // Gets called when any animation is finished
            var postCallbackPerformed = 0; // prevents the function from being called more than one time
            var postCallback = function () {
                
                if (!postCallbackPerformed) {
                    postCallbackPerformed = 1;
                    
                    $toDelete = $sourceParent.find('> *');
                    $sourceParent.prepend($dest.find('> *'));
                    $toDelete.remove();
                         
                    if (adjustHeightOnCallback) {
                        $sourceParent.css('height', destHeight);
                    }
                    options.enhancement($sourceParent); // Perform custom visual enhancements on a newly replaced collection
                    if (typeof callbackFunction == 'function') {
                        callbackFunction.call(this);
                    }                    
                }
            };
            
            // Position: relative situations
            var $correctionParent = $sourceParent.offsetParent();
            var correctionOffset = $correctionParent.offset();
            if ($correctionParent.css('position') == 'relative') {
                if ($correctionParent.get(0).nodeName.toLowerCase() == 'body') {

                } else {
                    correctionOffset.top += (parseFloat($correctionParent.css('border-top-width')) || 0);
                    correctionOffset.left +=( parseFloat($correctionParent.css('border-left-width')) || 0);
                }
            } else {
                correctionOffset.top -= (parseFloat($correctionParent.css('border-top-width')) || 0);
                correctionOffset.left -= (parseFloat($correctionParent.css('border-left-width')) || 0);
                correctionOffset.top -= (parseFloat($correctionParent.css('margin-top')) || 0);
                correctionOffset.left -= (parseFloat($correctionParent.css('margin-left')) || 0);
            }
            
            // perform custom corrections from options (use when Quicksand fails to detect proper correction)
            if (isNaN(correctionOffset.left)) {
                correctionOffset.left = 0;
            }
            if (isNaN(correctionOffset.top)) {
                correctionOffset.top = 0;
            }
            
            correctionOffset.left -= options.dx;
            correctionOffset.top -= options.dy;

            // keeps nodes after source container, holding their position
            $sourceParent.css('height', $(this).height());
            
            // get positions of source collections
            $source.each(function (i) {
                offsets[i] = $(this).offset();
            });
            
            // stops previous animations on source container
            $(this).stop();
            var dx = 0; var dy = 0;
            $source.each(function (i) {
                $(this).stop(); // stop animation of collection items
                var rawObj = $(this).get(0);
                if (rawObj.style.position == 'absolute') {
                    dx = -options.dx;
                    dy = -options.dy;
                } else {
                    dx = options.dx;
                    dy = options.dy;                    
                }

                rawObj.style.position = 'absolute';
                rawObj.style.margin = '0';

                rawObj.style.top = (offsets[i].top - parseFloat(rawObj.style.marginTop) - correctionOffset.top + dy) + 'px';
                rawObj.style.left = (offsets[i].left - parseFloat(rawObj.style.marginLeft) - correctionOffset.left + dx) + 'px';
            });
                    
            // create temporary container with destination collection
            var $dest = $($sourceParent).clone();
            var rawDest = $dest.get(0);
            rawDest.innerHTML = '';
            rawDest.setAttribute('id', '');
            rawDest.style.height = 'auto';
            rawDest.style.width = $sourceParent.width() + 'px';
            $dest.append($collection);      
           
            $dest.insertBefore($sourceParent);
            $dest.css('opacity', 0.0);
            rawDest.style.zIndex = -1;
            
            rawDest.style.margin = '0';
            rawDest.style.position = 'absolute';
            rawDest.style.top = offset.top - correctionOffset.top + 'px';
            rawDest.style.left = offset.left - correctionOffset.left + 'px';

            if (options.adjustHeight === 'dynamic') {
                // If destination container has different height than source container
                // the height can be animated, adjusting it to destination height
                $sourceParent.animate({height: $dest.height()}, options.duration, options.easing);
            } else if (options.adjustHeight === 'auto') {
                destHeight = $dest.height();
                if (parseFloat(sourceHeight) < parseFloat(destHeight)) {
                    // Adjust the height now so that the items don't move out of the container
                    $sourceParent.css('height', destHeight);
                } else {
                    //  Adjust later, on callback
                    adjustHeightOnCallback = true;
                }
            }
          
            $source.each(function (i) {
                var destElement = [];
                if (typeof(options.attribute) == 'function') {
                    
                    val = options.attribute($(this));
                    $collection.each(function() {
                        if (options.attribute(this) == val) {
                            destElement = $(this);
                            return false;
                        }
                    });
                } else {
                    destElement = $collection.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
                }
                if (destElement.length) {
          
                        animationQueue.push({
                                            element: $(this), 
                                            animation: {top: destElement.offset().top - correctionOffset.top, 
                                                        left: destElement.offset().left - correctionOffset.left, 
                                                        opacity: 1.0
                                                       },
											easeClass: options.easeIn
                                            });

                    //}
                } else {
                   
                        animationQueue.push({	element: $(this), 
												animation: {opacity: '0.0'},
												easeClass: options.easeOut
											});
                    //}
                }
            });
            
            $collection.each(function (i) {
                // Grab all items from target collection not present in visible source collection
                
                var sourceElement = [];
                var destElement = [];
                if (typeof(options.attribute) == 'function') {
                    val = options.attribute($(this));
                    $source.each(function() {
                        if (options.attribute(this) == val) {
                            sourceElement = $(this);
                            return false;
                        }
                    });                 

                    $collection.each(function() {
                        if (options.attribute(this) == val) {
                            destElement = $(this);
                            return false;
                        }
                    });
                } else {
                    sourceElement = $source.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
                    destElement = $collection.filter('[' + options.attribute + '=' + $(this).attr(options.attribute) + ']');
                }
                
                var animationOptions;
                if (sourceElement.length === 0) {
               
                        animationOptions = {
							opacity: '1.0'
                        };
                    //}
                    // Let's create it
                    d = destElement.clone();
                    var rawDestElement = d.get(0);
                    rawDestElement.style.position = 'absolute';
                    rawDestElement.style.margin = '0';
                    rawDestElement.style.top = destElement.offset().top - correctionOffset.top + 'px';
                    rawDestElement.style.left = destElement.offset().left - correctionOffset.left + 'px';
                    d.css('opacity', 0.0); // IE
					
                    d.appendTo($sourceParent);
                    
                    animationQueue.push({element: $(d), 
                                         animation: animationOptions, easeClass: options.easeIn});
                }
            });
            
            $dest.remove();
            options.enhancement($sourceParent); // Perform custom visual enhancements during the animation
            for (i = 0; i < animationQueue.length; i++) {
				if(animationQueue[i].easeClass){
					animationQueue[i].element.addClass('animated ' +  animationQueue[i].easeClass)
				}	
                animationQueue[i].element.animate(animationQueue[i].animation, options.duration, options.easing, postCallback);
            }
        });
    };
})(jQuery);


</script>
	<script type="text/javascript">
(function($){      
	$.fn.extend({
		filterPortfolio: function(options) {
	      	// plugin default options, it's extendable
			var settings = { 
				initFilter: '#all',
				itemUL: '#itemUL',
				filterButtons: [ {'link': '#all', 'dom': 'li'}, {'link': '#book', 'dom': 'li.book'}, {'link': '#web', 'dom': 'li.web'}, {'link': '#card', 'dom': 'li.card'} ], 
				orderbyButtons: [ {'link': '#visit', 'dom': 'span.visit', 'isNumber': true}, {'link': '#name', 'dom': 'strong'}, {'link': '#date', 'dom': 'span.date', 'isNumber': true}],
				orderReverse: false,
				sortOption: {
					duration: 800,
					easing: 'easeInOutQuad',					
					adjustHeight: 'auto',
					easeIn: 'flipInX',
					easeOut: 'flipOutX'
				},
			}; 
			
  			// extends settings with options provided
	        if (options) {
				$.extend(settings, options);
			} 
						
			
			var _this = this; 
			_this.data('settings', settings);
			var _list = $(settings.itemUL);
			var _listClone = _list.clone();
			var _currentList = _listClone.find('li');
			var _filterButtonsLen = settings.filterButtons.length; 
			var _preFilterLink;
			for (var i=0; i < _filterButtonsLen; i++) {
				var _link = $(settings.filterButtons[i].link);
				_link.data('dom', settings.filterButtons[i].dom);
				if(_link.parent().hasClass('current')) _preFilterLink = _link.parent();									
				_link.on('click', function(event) {
					// _list.quicksand( _listClone.find($(this).data('dom')), settings.sortOption);
					if($(this).parent()[0]!=_preFilterLink[0]){
					if(_preOrderLink){
						var _dom = _preOrderLink.find('a').data('dom');
						var _isNum = _preOrderLink.find('a').data('isNumber'); 		
						_currentList = _listClone.find($(this).data('dom'));															
						var _sortedData = _currentList.sorted({
							reversed: _this.data('reversed'),
		            		by: function(v) {
								if(_isNum){
			              			return parseFloat($(v).find(_dom).data('num'));							
								}else{
		              				return $(v).find(_dom).text().toLowerCase();							
								}
			            	}
			          	});				
						_list.quicksand( _sortedData, settings.sortOption);						
						//_currentList = _sortedData;
					}else{
						_list.quicksand( _listClone.find($(this).data('dom')), settings.sortOption);						
						_currentList = _listClone.find($(this).data('dom'));						
					}
					if(_preFilterLink) _preFilterLink.removeClass('current');
					_preFilterLink = $(this).parent();
					_preFilterLink.addClass('current');						
					}
				});
			};
			
			if(settings.initFilter){
				$(settings.initFilter).trigger('click');
			}
			

			var _orderbyButtonsLen = settings.orderbyButtons.length;
			var _preOrderLink;
			_this.data('reversed', false);			
			for (var j=0; j < _orderbyButtonsLen; j++) {
				var _link = $(settings.orderbyButtons[j].link);
				if(_link.parent().hasClass('current')) {
					_preOrderLink = _link.parent();					
				}
				_link.data('dom', settings.orderbyButtons[j].dom);
				_link.data('isNumber', settings.orderbyButtons[j].isNumber);				
				_link.on('click', function(event) {
					var _dom = $(this).data('dom');
					var _isNum = $(this).data('isNumber'); 
					if(settings.orderReverse){
						_this.data('reversed') ? _this.data('reversed', false) : _this.data('reversed', true);
					}else{
						_this.data('reversed', false) 						
					}
					
					var _sortedData = _currentList.sorted({
						reversed: _this.data('reversed'),
	            		by: function(v) {
							if(_isNum){
		              			return parseFloat($(v).find(_dom).data('num'));							
							}else{
	              				return $(v).find(_dom).text().toLowerCase();							
							}
		            	}
		          	});				
					if(!settings.orderReverse&&_preOrderLink){
						if($(this).parent()[0]!=_preOrderLink[0]) _list.quicksand(_sortedData, settings.sortOption);						
					}else{
						_list.quicksand(_sortedData, settings.sortOption);												
					}

					if(_preOrderLink) _preOrderLink.removeClass('current');
					_preOrderLink = $(this).parent();
					_preOrderLink.addClass('current');
				});
			};			
						
			_this.updateAnimation = function(p1, p2){
				if(!p1) p1 = "fadeIn";
				if(!p2) p2 = "fadeOut";
				settings.sortOption = {
					easeIn: p1,
					easeOut: p2
				};
			}

			return this;
		}

	});
	
	$.fn.sorted = function(customOptions) {
		var options = {
			reversed: false,
			by: function(a) {
				return a.text();
			}
		};
		$.extend(options, customOptions);
	
		$data = $(this);
		arr = $data.get();
		arr.sort(function(a, b) {
			
		   	var valA = options.by($(a));
		   	var valB = options.by($(b));
			if (options.reversed) {
				return (valA <= valB) ? 1 : (valA > valB) ? -1 : 0;				
			} else {		
				return (valA <= valB) ? -1 : (valA > valB) ? 1 : 0;	
			}
		});
		return $(arr);
	};	
		
})(jQuery);

</script>  

  <script type="text/javascript" charset="utf-8">
    $(document).ready(function() {
      var _filterPortfolio = $('#portfolio').filterPortfolio({
        initFilter: '#all', 
        itemUL: '#itemUL',
        filterButtons: [ 
          {'link': '#all', 'dom': 'li'}, 
          {'link': '#book', 'dom': 'li.book'}, 
          {'link': '#web', 'dom': 'li.web'}, 
          {'link': '#card', 'dom': 'li.card'} 
        ], 
        orderbyButtons: [ 
          {'link': '#visit', 'dom': 'span.visit', 'isNumber': true}, 
          {'link': '#name', 'dom': '.name'}, 
          {'link': '#date', 'dom': 'span.date', 'isNumber': true}
        ],
        orderReverse: true,
        sortOption: {
          adjustHeight: 'auto',
          easeIn: 'twirlIn',
          easeOut: 'twirlOut'
        }
      });     
      
      $("select#easeInType").change(selChange); 
      $("select#easeOutType").change(selChange);        
      function selChange(){
            var _easeIn = $('select#easeInType').val();
            var _easeOut = $('select#easeOutType').val();       
        _filterPortfolio.updateAnimation(_easeIn, _easeOut);
        $('#selections').hide();
      }
        
      $('#toggleImg').on('click', function(event){
        $('#selections').toggle();
      })            
      
      
    });
    
  </script>
  
<style type="text/css">
#wrap{
	width: 960px;
	margin: 0 auto;
}

span{
	font-size: 11px;
}

h3{
  	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 16px;
	color: #FFF;
	margin: 40px 0 10px 0;
	clear: both;
}

a, a:visited{
	color: #0066FF;
	outline: none;	
	border: none;
}


.butt {
    display: inline-block;
    width: auto;
    padding: .6em 12px;
    margin: .75em 0;
 	color: white;
    text-shadow: 0 1px 0 rgba(0,0,0,.3);
    background-image: -webkit-gradient(linear, 0% 0%, 0%100%, from(#52A8E8), to(#377AD0));
    background-image: -moz-linear-gradient(0% 100% 90deg,#377AD0, #52A8E8);
    background-color: #52A8E8;
    border: 1px solid #20559A;    text-decoration: none;
    text-shadow: 0 1px 0 rgba(255,255,255,.3);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.4);
    border-radius: 5px;
    line-height: 1.2em;
    font-weight: 700;
}
.butt:hover, .butt:focus {
    background-image: -webkit-gradient(linear, 0% 0%, 0%100%, from(#3499e4), to(#2c6ab9));
    background-image: -moz-linear-gradient(0% 100% 90deg,#2c6ab9, #3499e4);
    background-color: #2c6ab9;
}


strong {
  font-weight: normal;
  color: #333;
  text-shadow: rgba(255, 255, 255, 0.85) 0 0 3px;
}

.itemContainer{
	clear: left;
}
.itemContainer p,
.itemContainer ul {
  margin-right: 0;
}

#performance-toggle {
  text-align: center;
  margin-right: 0;
  font-size: 11px;
  opacity: 0.5;
  -webkit-transition: opacity 0.25s linear;
  -moz-transition: opacity 0.25s linear;
}

#performance-toggle:hover {
  opacity: 0.999;
}

/* 3.2 =Image Grid
---------------------------------------------------------------------- */

.itemUL {
  margin: -20px 0 0 -40px;
  padding-left: 45px;
  width: 900px;
}

.itemUL:after {
  content: "";
  display: block;
  height: 0;
  overflow: hidden;
  clear: both;
}

.itemUL li {
 
  margin: 20px 0 0 35px;
  float: left;
  text-align: center;
  font-size: 12px;
  font-family: "Helvetica Neue", sans-serif;
  line-height: 17px;
  color: #686f74;
  overflow: hidden;
  list-style: none;
  -webkit-transform:translate3d(0,0,0);
	background: #FFF;
	padding: 4px;
}

.itemUL a{
	color: #0066FF;
}

.itemUL li img,
.itemUL li strong {
  display: block;
	border: none;
}

.itemUL li strong {
  margin-top: 4px;
}


.controlBar p{
	color: #FFF;
	float: left;
	font-size: 13px;
	margin-left: 20px;
}

.bar{
	margin: 12px 0 0 0px;
}
.bar li{
	display: block;
	list-style: none;
	float: left;
	margin-top: 12px;
	margin-left: 12px;
	background: #FFF;
	-moz-border-radius: 4px;
	border-radius: 4px;	 	
	padding: 0 6px;	
	color: #333;
}

.bar li.current, .bar li.current a{
	background: #B22222;
	color: #FFF;
}
.bar li.current a:visited{
	color: #FFF;
}
.bar li a, .bar li a:visited{
	color: #333;
	padding: 0;
	text-decoration: none;
	font-size: 14px;
}

.date{
	display: none;
}

a.noline{
	text-decoration: none;
	outline: none;
}

.strongtext{
	font-weight: normal;
	text-shadow: rgba(255, 255, 255, 0.85) 0 0 3px;
	display: block;
	margin-top: 4px;
}
.grey{
	color: #666;
}

</style>

  <style type="text/css" media="screen">
  /* the demo document's style */
    #transition{
      position: fixed;
      background: url(images/assets/selection.png) no-repeat;
      width: 360px;
      height: 120px;
      bottom: 6px;
      left: 12px;
      color: #FFF;
      z-index: 1000;
    }
    #transition div#selections{
      display: none;
      position: absolute;
      bottom: 20px;
      left: 12px;
      background: #333;
      padding: 12px;
      height: 180px;
      -moz-border-radius: 4px;
      border-radius: 4px;

    }
    #transition div#toggleImg{
      margin-top: 96px;
      background: url(images/assets/toggle.png) no-repeat;  
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
    #transition p{
      font-size: 12px;
    }
    #transition select{
      margin-bottom: 12px;
      font-size: 12px;
      font-weight: normal;
      line-height: 18px;
      display: inline-block;
      width: 180px;
      height: 26px;
      padding: 4px;
      font-size: 13px;
      color: #555555;
      background: #ffffff;
      border: 1px solid #cccccc;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
    }   
  </style>
  
</head>

<body>
  <div id="wrap">
    <div id="portfolio">
    <div class="controlBar">
      <p>Sort by:</p>
      <ul class="bar">
        <li><a href="#" id="visit">Visited Times</a></li>     
        <li><a href="#" id="name">Name</a></li>           
        <li><a href="#" id="date">Added Date</a></li>                 
      </ul>           
    </div>
        
    <div class="itemContainer">
          <ul id="itemUL" class="itemUL">
            <li data-id="id-1" class="book">
              <img src="images/bookandcard/book01.jpg" width="175" height="128" alt="" />
              <a href="http://codecanyon.net/user/sike" class="strongtext name">Rockstar Freelancer</a>
              <span data-num="348" class="visit">348 visits</span>
              <span data-num="20120708" class="date">Jul 8, 2012</span> 
            </li>
            <li data-id="id-2" class="book">
              <img src="images/bookandcard/book04.jpg" width="175" height="128" alt="" />
              <strong class="name">The Back Side</strong>
              <span data-num="401" class="visit">401 visits</span>
        <span data-num="20120901" class="date">Sep 1, 2012</span> 
            </li>
            <li data-id="id-3" class="book">
              <img src="images/bookandcard/book06.jpg" width="175" height="128" alt="" />
              <strong class="name">Another View Angle</strong>
              <span data-num="12875" class="visit">12875 visits</span>
        <span data-num="20121112" class="date">Nov 12, 2012</span>        
            </li>
            <li data-id="id-4" class="card">
              <img src="images/bookandcard/card01.jpg" width="175" height="128" alt="" />
              <strong class="name">Rockable Business Card</strong>
              <span data-num="5273" class="visit">5273 visits</span>
        <span data-num="20121022" class="date">Oct 22, 2012</span>  
            </li>
            <li data-id="id-5" class="card">
              <img src="images/bookandcard/card02.jpg" width="175" height="128" alt="" />
              <strong class="name">White Card 1</strong>
              <span data-num="5437" class="visit">5437 visits</span>
        <span data-num="20121011" class="date">Oct 11, 2012</span>  
            </li>
            <li data-id="id-6" class="web">
        <a href="http://codecanyon.net/user/sike" class="noline"> 
                <img src="images/web/e2.png" width="175" height="128" alt="" />
                <strong class="name">Whole Card as Link</strong>
                <span data-num="234" class="grey visit">234 visits</span>
          <span data-num="20121224" class="date">Dec 24, 2012</span>  
        </a>
            </li>
            <li data-id="id-7" class="web">
              <img src="images/web/tut.png" width="175" height="128" alt="" />
              <strong class="name">Tut Site</strong>
              <span data-num="1234" class="visit">1234 visits</span>
        <span data-num="20121225" class="date">Dec 25, 2012</span>  
            </li>
            <li data-id="id-8" class="card">
              <img src="images/bookandcard/card03.jpg" width="175" height="128" alt="" />
              <strong class="name">More Cards</strong>
              <span data-num="2764" class="visit">2764 visits</span>
        <span data-num="20120918" class="date">Sep 18, 2012</span>  
            </li>
            <li data-id="id-9" class="card">
              <img src="images/bookandcard/card04.jpg" width="175" height="128" alt="" />
              <a href="http://codecanyon.net/user/sike" class="strongtext name">Card Stacks 1</a>
              <span data-num="17612" class="visit">17612 visits</span>
        <span data-num="20121101" class="date">Nov 1, 2012</span> 
            </li>
            <li data-id="id-10" class="card">
              <img src="images/bookandcard/card05.jpg" width="175" height="128" alt="" />
              <strong class="name">Card Stacks 2</strong>
              <span data-num="972" class="visit">972 visits</span>
        <span data-num="20120912" class="date">Sep 12, 2012</span>  
            </li>
            <li data-id="id-11" class="web">
              <img src="images/web/creattica.png" width="175" height="128" alt="" />
              <a href="http://codecanyon.net/user/sike" class="strongtext name">Creattica</a>
              <span data-num="1345" class="visit">1345 visits</span>
        <span data-num="20121222" class="date">Dec 22, 2012</span>  
            </li>
            <li data-id="id-12" class="web">
              <img src="images/web/e1.png" width="175" height="128" alt="" />
              <a href="http://codecanyon.net/user/sike" class="strongtext name">Envato Site</a>
              <span data-num="2356" class="visit">2356 visits</span>
        <span data-num="20121223" class="date">Dec 23, 2012</span>  
            </li>
          </ul>
        </div>
    </div> <!-- end of portfolio -->       
      <div id="toggleImg"></div>      
    </div>
  </div><!-- #wrap -->  
</body>
</html>