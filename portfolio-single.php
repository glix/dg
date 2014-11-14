<?php include("header.php");
  $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";   
?> 
<div class="navbar top-navbar">
  <div class="container">
    <div class="col-xs-12 col-sm-12">
      <ul class="menus">
        <li><a href="#" class="icon-angle-left"></a></li> 
        <li><a href="#" class="icon-th"></a></li> 
        <li><a href="#" class="icon-angle-right"></a></li>      
      </ul>
    </div>
  </div>
</div>

<div style="margin-top:30px;" class='container wrap-container'>   
  <div class='row'> 
    <div class='col-md-8'>
    <div style="width: 100%; height: 500px; position: absolute; background: url(&quot;assets/img/ajax-loader.gif&quot;) no-repeat scroll center center transparent; z-index: 9999999; display: block;" class="twitter-loader">
      </div> 
      <ul class="bxslider">
        <li><img src="http://dribbble.s3.amazonaws.com/users/44323/screenshots/1169482/surf_turf.png" /></li>
        <li><img src="http://dribbble.s3.amazonaws.com/users/31752/screenshots/1214482/my-pen-and-well.png" /></li>
        <li><img src="http://dribbble.s3.amazonaws.com/users/73492/screenshots/1210682/potes_1x.jpg" /></li>
      </ul>
      <div class="row">
        <div class="col-md-6">
          <div class="tagcloud">
            <a href="portfolio#tab=logo">Logo</a>
            <a href="portfolio#tab=print">Print</a>
            <a href="portfolio#tab=multimedia">Multimedia</a>
            <a href="portfolio#tab=experience">User Experience</a>
            <a href="portfolio#tab=interface">User Interface</a>
            <a href="portfolio#tab=web_development">Web Development</a>
          </div>
        </div>
        <div class="col-md-6">
          <?php echo '<div class="share-btn text-right"><a href="share.php?url='.$actual_link.'" class="fancyboxiframe fancybox.iframe btn btn-default"><img src="assets/img/share-512.png" alt="Share" height="16px;" /></a></div>' ?>
        </div>
      </div>  
      <!-- <div class="fb-comments" data-href="http://nerdzor.com/dannyglix" data-colorscheme="light" data-numposts="2" data-width="auto"></div> -->

      
      <!-- <div class='portfolio-single-image animated bounceInLeft'> 
        <img alt='' src='http://placehold.it/800x600'> 
      </div> -->
    </div>   
    <div class='col-md-4'>  
      <div class='portfolio-single-description'>  
        <h1>Project Name</h1> 
        <div class='portfolio-single-tags'>
          <a href='#'>Web Design</a> 
          <a href='#'>Development</a>  
          <a href='#'>HTML</a>
        </div>
        <h5>More Views</h5>
        <div id="bx-pager"> 
        <a data-slide-index="0" href=""><img src="http://dribbble.s3.amazonaws.com/users/44323/screenshots/1169482/surf_turf.png" /></a>
        <a data-slide-index="1" href=""><img src="http://dribbble.s3.amazonaws.com/users/31752/screenshots/1214482/my-pen-and-well.png" /></a>
        <a data-slide-index="2" href=""><img src="http://dribbble.s3.amazonaws.com/users/73492/screenshots/1210682/potes_1x.jpg" /></a>
      </div>
        <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> 
        <a class='visit-site pull-right' href='#'>
          View Live Project
        </a>

       

      <!-- AddThis Button BEGIN -->
       <!-- <div class="fb-share-button" data-href="http://nerdzor.com/earth/html/portfolio-single.php" data-width="200" data-type="button_count"></div> -->
      <!-- AddThis Button END -->

      </div>
      
    </div>
    
  </div>
  <!-- <div class="row">
    <div class="col-md-8">
      <div class="fb-comments" data-href="http://nerdzor.com/earth/html" data-colorscheme="light" data-numposts="2" data-width="100%"></div>
    </div>
  </div> -->

<div class="row">

  <div class='related-portfolio-items col-md-4'>
    <div class='pull-right carousel-top-controls'>
      <a data-slide='prev' href='#carousel-works'>
        <span class='icon-angle-left'></span>
      </a>
      <a data-slide='next' href='#carousel-works'>
        <span class='icon-angle-right'></span>
      </a>
    </div>
    <h4 class='header-lined'>Related Portfolio Items</h4>
    <div class='carousel slide carousel-with-animated-content' id='carousel-works'>
      <!-- Wrapper for slides -->
      <div class='carousel-inner'>
        <div class='item active '>
          <div class='portfolio-item portfolio-feature' data-animation-type='flipInY'>
            <div class='frame-browser frame-feature'>
              <figure>
                <img alt='' src='http://dribbble.s3.amazonaws.com/users/3460/screenshots/1211079/bus_illy_1x.png'>
              </figure>
            </div>
            <div class="detail-feature text-left">
              <h5 class="fp-title"><a href="portfolio-single.php">Color PickerA</a></h5>
              <div class="fp-content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
              </div>
            </div>
          </div>
          <div class="clear"></div>
      
          <div class='portfolio-item portfolio-feature' data-animation-type='flipInY'>
            <div class='frame-browser frame-feature'>
              <figure>
                <img alt='' src='http://dribbble.s3.amazonaws.com/users/12516/screenshots/1170099/ledgewood_type_1x.png'>
              </figure>
            </div>
            <div class="detail-feature text-left">
              <h5 class="fp-title"><a href="portfolio-single.php">Color PickerE</a></h5>
              <div class="fp-content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
              </div>
            </div>
          </div>
          <div class="clear"></div>
             
          <div class='portfolio-item portfolio-feature' data-animation-type='flipInY'>
            <div class='frame-browser frame-feature'>
              <figure>
                <img alt='' src='http://dribbble.s3.amazonaws.com/users/73492/screenshots/1210682/potes_1x.jpg'>
              </figure>
            </div>
            <div class="detail-feature text-left">
              <h5 class="fp-title"><a href="portfolio-single.php">Color PickerC</a></h5>
              <div class="fp-content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
              </div>
            </div>
          </div>
          <div class="clear"></div>

        </div>
        <div class='item'>
          <div class='portfolio-item portfolio-feature' data-animation-type='flipInY'>
            <div class='frame-browser frame-feature'>
              <figure>
                <img alt='' src='http://dribbble.s3.amazonaws.com/users/4664/screenshots/1214091/foxgrotesque.jpg'>
              </figure>
            </div>
            <div class="detail-feature text-left">
              <h5 class="fp-title"><a href="portfolio-single.php">Color PickerG</a></h5>
              <div class="fp-content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
              </div>
            </div>
          </div>
          <div class="clear"></div>

            <div class='portfolio-item portfolio-feature' data-animation-type='flipInY'>
              <div class='frame-browser frame-feature'>
                <figure>
                  <img alt='' src='http://dribbble.s3.amazonaws.com/users/31752/screenshots/1214482/my-pen-and-well.png'>

                </figure>
              </div>
              <div class="detail-feature text-left">
                <h5 class="fp-title"><a href="portfolio-single.php">Color PickerF</a></h5>
                <div class="fp-content">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
                </div>
              </div>
            </div>
            <div class="clear"></div>

            <div class='portfolio-item portfolio-feature' data-animation-type='flipInY'>
              <div class='frame-browser frame-feature'>
                <figure>
                  <img alt='' src='http://dribbble.s3.amazonaws.com/users/23569/screenshots/1212234/prince_ink_co_long_live_print_1x.png'>
                </figure>
              </div>
              <div class="detail-feature text-left">
                <h5 class="fp-title"><a href="portfolio-single.php">Color PickerP</a></h5>
                <div class="fp-content">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
                </div>
              </div>
            </div>
          </div>
          <div class='item'>
              <div class='portfolio-item portfolio-feature' data-animation-type='flipInY'>
                <div class='frame-browser frame-feature'>
                  <figure>
                    <img alt='' src='http://dribbble.s3.amazonaws.com/users/18461/screenshots/1211161/rd-pattern.png'>
                  </figure>
                </div>
                <div class="detail-feature text-left">
                  <h5 class="fp-title"><a href="portfolio-single.php">Color PickerY</a></h5>
                  <div class="fp-content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
                  </div>
                </div>
              </div>
              <div class="clear"></div>

              <div class='portfolio-item portfolio-feature' data-animation-type='flipInY'>
                <div class='frame-browser frame-feature'>
                  <figure>
                    <img alt='' src='http://dribbble.s3.amazonaws.com/users/73492/screenshots/1210682/potes_1x.jpg'>
                  </figure>
                </div>
                <div class="detail-feature text-left">
                  <h5 class="fp-title"><a href="portfolio-single.php">Color PickerK</a></h5>
                  <div class="fp-content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
                  </div>
                </div>
              </div>
              <div class="clear"></div>

              <div class='portfolio-item portfolio-feature' data-animation-type='flipInY'>
                <div class='frame-browser frame-feature'>
                  <figure>
                    <img alt='' src='http://dribbble.s3.amazonaws.com/users/12516/screenshots/1170099/ledgewood_type_1x.png'>
                  </figure>
                </div>
                <div class="detail-feature text-left">
                  <h5 class="fp-title"><a href="portfolio-single.php">Color PickerO</a></h5>
                  <div class="fp-content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
  <!-- <div class="col-md-4">
    <h4 class='header-lined'>Tag Cloud</h4>
    <div class="tagcloud">
      <a href="portfolio.php#filter=.filter-html">Html</a>
      <a href="portfolio.php#filter=.filter-design">Design</a>
      <a href="portfolio.php#filter=.filter-logo">Logo</a>
      <a href="portfolio.php#filter=.filter-development">Development</a>
      <a href="portfolio.php#filter=.filter-photoshop">Photoshop</a>
    </div>
</div>   -->
<div class="col-md-4"></div>
<div class="col-md-4 customers-container">
  <div class='pull-right carousel-top-controls'>
    <a data-slide='prev' href='#carousel-work'>
      <span class='icon-angle-left'></span>
    </a>
    <a data-slide='next' href='#carousel-work'>
      <span class='icon-angle-right'></span>
    </a>
  </div>
  <h4 class='header-lined'>Testimonials</h4>
  <!--  <div class="customers-container col-md-4"> -->
   <div class='carousel slide carousel-with-animated-content' id='carousel-work'>
      <!-- Wrapper for slides -->
      <div class='carousel-inner'>
        <article class="item active">
          <div class="inner_article">
            <div class="header">
              <div class="img">
              </div>
              <hgroup>
                <h3>Thomas Mayers</h3>
              </hgroup>
            </div>
            <div class="reviews">
              <div class="review">
                <p>“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.”</p>
                <div style="clear: both;"></div>
              </div>
            </div>
          </div>
        </article>
        <article class="item">
          <div class="inner_article">
            <div class="header">
              <div class="img">
              </div>
              <hgroup>
                <h3>Thomas Mayers</h3>
              </hgroup>
            </div>
            <div class="reviews">
              <div class="review">
                <p>“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.”</p>
                <div style="clear: both;"></div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  <!-- </div> -->
  <div class="fb-comments" data-href="http://nerdzor.com/dannyglix" data-colorscheme="light" data-numposts="2" data-width="350"></div>
</div>  
</div>


</div>
 <?php include("footer.php"); ?>
 