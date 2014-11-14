
(function() {
  $(function() {
    
  });
  $(function() {
    $(".animated-when-visible").each(function(i, el) {
      el = $(el);
      if (el.visible(true)) {
        updateChart();
        return el.addClass("animated " + el.data("animation-type"));
        
      }
    });
    $(window).scroll(function(event) { 
      return $(".animated-when-visible").each(function(i, el) {
        el = $(el);
        if (el.visible(true)) {
          updateChart();
          return el.addClass("animated " + el.data("animation-type")); 
                                                  
        }
      });
    });
    function updateChart(){
      //var chart = window.chart = $('.chart.animated').data('easyPieChart');
      //chart.update(70);
      $('.chart.animated').each(function(){
        var chart = $(this);
        chart.find('.percent').css('color', chart.attr('data-barColor'));
        chart.easyPieChart({
          animate: 2500,
          barColor: chart.attr('data-barColor'),
          trackColor: chart.attr('data-trackColor'),
          scaleColor: chart.attr('data-scaleColor'),
          lineCap: chart.attr('data-lineCap'),
          lineWidth: chart.attr('data-lineWidth'),
          size: chart.attr('data-size'),
          onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          }
        });
      });
      
      //$(".chart").removeClass("animated-when-visible");
    }
    $(".dial").knob({
      readOnly: true,
      draw: function() { 
        return $(this.i).val(this.cv + "%");
      } 
    });
    $.scrollUp({
      scrollText: "<i class='icon-chevron-up'></i>"
    });
  
   });

}).call(this);


