  $(function(){   
    $(".isotope-w").isotope({    
      itemSelector: '.item',
      masonry: {
       // columnWidth: 100,
        isFitWidth: true
      }, 
      getSortData : {
        name : function ( itemElem   ) {
          return $(itemElem) .find('.name').text(); 
        },
        Tag : function ( itemElem   ) {
          return $(itemElem) .find('.tag').text();
        },
        date: function (itemElem  ) {  
          var dateStr = $(itemElem) .find('.date').text(),
            dateArray = dateStr.split('-'),
            year = dateArray[2],
            month = dateArray[0],  
            day = dateArray[1];   
          return new Date(day, month, year); 
        } 
      },
      success: function(data){
        $container = $(".isotope-w");
        // Update isotope container with new data. 
        $container.isotope('remove', $container.data('isotope').$allAtoms )
        $container.isotope('insert', $(data) )
          // trigger isotope again after images have been loaded
          .imagesLoaded( function() {
            $container.isotope('Layout');
          });
        }
  
    });
  });
  

  $('.portfolio-filters a').click(function(){
    var selector = $(this).attr('data-filter');
    $('.isotope-w').isotope({ filter: selector }, function(){
      if(selector == "*"){
       $(".fancybox").attr("data-fancybox-group", "gallery");
      } else{ 
       $(selector).find(".fancybox").attr("data-fancybox-group", selector);
      }
    });
          
    return false; 
  });



 $(window).bind( 'hashchange', function( event ){
    // get options object from hash
    var hashOptions = $.deparam.fragment();
    $(".isotope-w").isotope( hashOptions );
  }).trigger('hashchange');

  $('.sort-by').on('change', function(){
    var sortName = $(this).val();
    $('.isotope-w').isotope({ sortBy : sortName });
    return false;
  });


  $('select').select2({
    // width : off
  });

  
  $('.view_icon li').click(function(){
    $dataclass = $(this).attr('dataclass');
    $('.isotope-w').removeClass("item-list-small").removeClass("item-grid-small").removeClass("item-list").removeClass("item-grid").removeClass('item-list-medium').removeClass('item-grid-medium');
    $('.isotope-w').addClass($dataclass);
    $('.view_icon li').removeClass('active');
    $(this).addClass('active');
    $(".isotope-w").imagesLoaded( function() {
      $(".isotope-w").isotope('layout');
    });

  });

$( function() {
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      title: '.title',
      description: '.description'
    }
  });

  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
});




$( function() {
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
});
