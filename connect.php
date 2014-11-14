<?php include("header.php"); ?>
  <div class='separator-shadow-bottom small-bottom-margin'>
    <img alt='' src='assets/images/shadow-separator-wide-bottom.png'>
    <div class="outer-div">
       <div class="breadcrumbs">
          <a href="index.php">Home</a>
          <span>&gt;</span>
          <p>Connect</p>     
      </div> 
    </div> 
  </div>
  <div class="container wrap-container"> 
    <h2 class='header-lined has-sub-header text-center'>Contact Us</h2>
    <h4 class='sub-lined-header text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h4>
    <div class="row text-center">
      <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
        <script>
        function initialize() {
            // Create an array of styles.
          var styles = [
            {
              stylers: [
                { hue: "#4AB9DB" },
                { saturation: -20 }
              ]
            },{
              featureType: "road",
              elementType: "geometry",
              stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
              ]
            },{
              featureType: "road",
              elementType: "labels",
              stylers: [
                { visibility: "off" }
              ]
            }
          ];

          // Create a new StyledMapType object, passing it the array of styles,
          // as well as the name to be displayed on the map type control.
          var styledMap = new google.maps.StyledMapType(styles,
            {name: "Styled Map"});



          var myLatlng = new google.maps.LatLng(40.7512993,-73.9765543);
          var mapOptions = {
            zoom: 15,
            center: myLatlng,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
          };
          var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

          //Associate the styled map with the MapTypeId and set it to display.
          map.mapTypes.set('map_style', styledMap);
          map.setMapTypeId('map_style');


          var marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              title: '122 E 42nd St‎ New York, NY 10017',
              // icon: 'http://hitekshealth.com/wp-content/uploads/2014/02/mappoint1.png'
          });
        }

        google.maps.event.addDomListener(window, 'load', initialize);

        </script>
        <div class="col-md-4">
          <div id="map-canvas"></div>

          <!-- twitter panel -->
          <div class="twitter-panel">
            <?php include("2.php"); ?>
          </div>
        </div>
        <div class="col-md-4">
        </div>
        <div class="col-md-4">
          <!-- <div class="col-md-6"> -->
            <!-- contact detail -->
            <div class="contact_info">
              <h4>GET IN TOUCH</h4><br>
              <div class="contact_detail clear">
                <img src="assets/img/mail.png" />
                <p>info@dannyglix.com</p>
              </div>
              <div class="contact_detail clear">
                <img src="assets/img/home.png" />
                <p>Lorem ipsum dolor sit</p>
              </div>
              <div class="contact_detail clear">
                <img src="assets/img/contact-phone2.png" />
                <p>123456789</p>
              </div>
              <p></p>
            </div>
          <!-- </div> -->
          <br>
          <!-- contact form -->
          <div class='modal-dialog'> 
            <div class='modal-header'>    
              <h4 class='modal-title'>Contact Form</h4> 
            </div>
            <div class='modal-body' style="padding-left: 0; padding-right: 0;"> 
              <form action='#' role='form'>
                <div class='form-group'> 
                  <div class='row'>
                    <div class='col-md-12'>
                      <label class='control-label' for=''>Name</label>
                      <input class='form-control' placeholder='your name' type='text'>
                    </div>
                  </div>
                </div>
                <div class='form-group'> 
                <div class='row'>
                    <div class='col-md-12'>
                      <label class='control-label' for=''>Email</label>
                      <input class='form-control' placeholder='your email' type='text'>
                    </div>
                  </div>
                </div>
                <div class='form-group'>
                  <div class='row'>
                    <div class='col-md-12'>
                      <label class='control-label' for=''>Message</label>
                      <textarea class='form-control' name='' rows='4'></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class='modal-footer'>
              <!-- <button class='btn btn-default' data-dismiss='modal' type='button'>Cancel</button> -->
              <button class='btn btn-default' type='button'>Submit</button>
            </div>
          </div>
        </div>


    </div>
  </div>

<?php include("footer.php"); ?>
