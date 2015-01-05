<!DOCTYPE html>   
<html>
 
<head>  
  
  <meta charset="utf-8">    
  <meta name="viewport" content="width=device-width, initial-scale=1"> 
  <meta name="google-translate-customization" content="7247b7a81f94a08d-9467aa44e79c7181-gb66f5bc1edbbbdf0-24"></meta>
  <link rel='stylesheet' href='assets/css/settings.css'>
  <link rel='stylesheet' href='assets/css/app.css'>
  <link rel='stylesheet' href='assets/css/animate.min.css'>
  <link rel='stylesheet' href='assets/css/select2.css'>
  <link rel='stylesheet' href='assets/css/jquery.fancybox.css'>
  <link rel='stylesheet' href='assets/css/jquery.bxslider.css'> 
  <link rel='stylesheet' href='assets/css/fullwidth.css'>
  <link rel='stylesheet' href='assets/css/swipebox.css'>  
  <link rel='stylesheet' href='assets/css/easy-pie.css'>
  <link rel='stylesheet' href="assets/css/everslider.css">
  <link rel="stylesheet" type="text/css" href="assets/css/shelf.css"> 
  <link rel='stylesheet' href='assets/css/style.css'>
  <link type="text/css" href="assets/css/jquery.jscrollpane.css" rel="stylesheet" />
  <link type="text/css" href="assets/css/jquery.jscrollpane.lozenge.css" rel="stylesheet" /> 
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Yanone+Kaffeesatz:200,300,400,700|Raleway:200,300,400,500,700' rel='stylesheet' type='text/css'>
  <link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">

  <link href="assets/favicon.ico" rel="shortcut icon"> 
  <link href="assets/apple-touch-icon.png" rel="apple-touch-icon">
  <style type="text/css">
  #container25 canvas{
    height: 100% !important;
    width:100% !important;
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
  }
  #stats{
    display: none !important;
  }
  </style>
  <title>danny glix</title>   
</head>
<body>

<div id="container25"></div>
    <script src="assets/webGL/threejs.min.js"></script>
    <script src="assets/webGL/Detector.js"></script>
    <script src="assets/webGL/stats.min.js"></script>
    <script type="x-shader/x-vertex" id="vertexshader">
      attribute float size;
      attribute vec3 customColor;
      varying vec3 vColor;

      void main() {
        vColor = customColor;
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
        gl_PointSize = size * ( 300.0 / length( mvPosition.xyz ) );
        gl_Position = projectionMatrix * mvPosition;
      }
    </script>
    <script type="x-shader/x-fragment" id="fragmentshader">
      uniform vec3 color;
      uniform sampler2D texture;
      varying vec3 vColor;

      void main() {
        gl_FragColor = vec4( color * vColor, 1.0 );
        gl_FragColor = gl_FragColor * texture2D( texture, gl_PointCoord );
      }
    </script>
    <script>
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
    var renderer, scene, camera, stats;
    var particleSystem, uniforms, geometry;
    var particles = 100000;
    var WIDTH = 2560;
    var HEIGHT = 1600;
    init();
    animate();

    function init() {
      camera = new THREE.PerspectiveCamera( 40, WIDTH / HEIGHT, 1, 10000 );
      camera.position.z = 300;
      scene = new THREE.Scene();
      var attributes = {
        size:        { type: 'f', value: null },
        customColor: { type: 'c', value: null }
      };
      uniforms = {
        color:     { type: "c", value: new THREE.Color( 0xffffff ) },
        texture:   { type: "t", value: THREE.ImageUtils.loadTexture( "assets/webGL/textures/sprites/spark1.png" ) }
      };
      var shaderMaterial = new THREE.ShaderMaterial( {
        uniforms:       uniforms,
        attributes:     attributes,
        vertexShader:   document.getElementById( 'vertexshader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
        blending:       THREE.AdditiveBlending,
        depthTest:      false,
        transparent:    true
      });
      var radius = 200;
      geometry = new THREE.BufferGeometry();
      var positions = new Float32Array( particles * 3 );
      var values_color = new Float32Array( particles * 3 );
      var values_size = new Float32Array( particles );
      var color = new THREE.Color();
      for( var v = 0; v < particles; v++ ) {
        values_size[ v ] = 20;
        positions[ v * 3 + 0 ] = ( Math.random() * 2 - 1 ) * radius;
        positions[ v * 3 + 1 ] = ( Math.random() * 2 - 1 ) * radius;
        positions[ v * 3 + 2 ] = ( Math.random() * 2 - 1 ) * radius;
        color.setHSL( v / particles, 1.0, 0.5 );
        values_color[ v * 1 + 0 ] = color.r;
        values_color[ v * 1 + 1 ] = color.g;
        values_color[ v * 1 + 2 ] = color.b;
      }
      geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
      geometry.addAttribute( 'customColor', new THREE.BufferAttribute( values_color, 3 ) );
      geometry.addAttribute( 'size', new THREE.BufferAttribute( values_size, 1 ) );
      particleSystem = new THREE.PointCloud( geometry, shaderMaterial );
      scene.add( particleSystem );
      renderer = new THREE.WebGLRenderer();
      renderer.setSize( WIDTH, HEIGHT );
      renderer.setClearColor( 0xededed, 1);
      var container = document.getElementById( 'container25' );
      container.appendChild( renderer.domElement );
      stats = new Stats();
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.top = '0px';
      container.appendChild( stats.domElement );
      window.addEventListener( 'resize', onWindowResize, false );
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }

    function animate() {
      requestAnimationFrame( animate );
      render();
      stats.update();
    }

    function render() {
      var time = Date.now() * 0.005;
      particleSystem.rotation.z = 0.01 * time;
      var size = geometry.attributes.size.array;
      for( var i = 0; i < particles; i++ ) {
        size[ i ] = 10 * ( 1 + Math.sin( 0.1 * i + time ) );
      }
      geometry.attributes.size.needsUpdate = true;
      renderer.render( scene, camera );
    }
  </script>

<div id="fb-root"></div> 
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=429279887198568";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

  <!-- Login Modal -->
<div aria-hidden='true' aria-labelledby='loginModalLabel' class='modal fade' id='loginModal' role='dialog' tabindex='-1'>
  <div class='modal-dialog'>
    <div class='modal-content'>
      <div class='modal-header'>
        <button aria-hidden='true' class='close' data-dismiss='modal' type='button'>×</button>
        <h4 class='modal-title'>Login example</h4>
      </div>
      <div class='modal-body'>
        <form action='#' role='form'>
          <div class='row'>
            <div class='col-md-6'>
              <label class='control-label' for=''>Username</label>
              <input class='form-control' placeholder='your username' type='text'>
            </div>
            <div class='col-md-6'>
              <label class='control-label' for=''>Password</label>
              <input class='form-control' placeholder='your password' type='text'>
            </div>
          </div>
        </form>
      </div>
      <div class='modal-footer'>
        <button class='btn btn-default' data-dismiss='modal' type='button'>Close</button>
        <button class='btn btn-primary' type='button'>Log In</button>
      </div>
    </div>
  </div>
</div>

<div class='header-main'>
  <div class='container'>
  <nav class='navbar navbar-default' role='navigation'>
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class='navbar-header'>
      <button class='navbar-toggle' data-target='.navbar-ex1-collapse' data-toggle='collapse' type='button'>
        <span class='sr-only'>Toggle navigation</span>
        <span class='icon-bar'></span>
        <span class='icon-bar'></span>
        <span class='icon-bar'></span>
      </button>
      <a class='navbar-brand' href='index.php'>
        <img alt='' height='39px' src='assets/images/logo-small-top.png'>
      </a>
      <div class="tool">
        <div class="tooltip-inner">
           <div>Logo, Graphic and Web design services</div>
        </div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class='collapse navbar-collapse navbar-ex1-collapse'>
      <!-- <a class='btn btn-default navbar-btn navbar-right' data-toggle='modal' href='#loginModal'>
        Sign In
        <i class='icon-signin'></i>
      </a> -->


      <ul class='nav navbar-nav navbar-right'>
        <li class=''>
          <a class='btn btn-default navbar-btn navbar-right' href='home'>
            Home
          </a>
        </li>
        <li class="dropdown">
          <a class='dropdown-toggle btn btn-default navbar-btn navbar-right' href='data'>
            Data
          </a>
          <ul class="dropdown-menu">
              <li><a href="data">Data</a></li>
              <li><a href="experience">Experience</a></li>
              <li><a href="skills">Skills</a></li>
              <li><a href="#">Partners </a></li>
              <li><a href="client">Clients</a></li>
              <li><a href="awards">Awards</a></li>
              <li><a href="association">Associations </a></li>
          </ul>
        </li>
        <li class='dropdown'>
          <a class='dropdown-toggle btn btn-default navbar-btn navbar-right portfolio' href='portfolio'>
            Portfolio
          </a>
          <ul class="dropdown-menu">
            <li><a tabindex="-1" href="portfolio">View all</a></li>
            <li class="dropdown-submenu"><a tabindex="-1" href="#">Logo Design</a>
              <ul class="dropdown-menu1">
                <li><a tabindex="-1" href="#">3D Logo Treatments</a></li>
                <li><a tabindex="-1" href="#">Logo Intros</a></li>
                <li><a tabindex="-1" href="#">Logo Animated GIFs</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu"><a tabindex="-1" href="#">Print Design</a>
              <ul class="dropdown-menu1">
                <li><a tabindex="-1" href="#">Print Collateral</a></li>
                <li><a tabindex="-1" href="#">Business Plans</a></li>
                <li><a tabindex="-1" href="#">Brochures</a></li>
                <li><a tabindex="-1" href="#">Flier / Posters</a></li>
                <li><a tabindex="-1" href="#">Large Format Print</a></li>
                <li><a tabindex="-1" href="#">Packaging / Labels</a></li>
                <li><a tabindex="-1" href="#">Book / Cover Design</a></li>
                <li><a tabindex="-1" href="#">Album / DVD Art</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu"><a tabindex="-1" href="#">Multimedia Design</a>
              <ul class="dropdown-menu1">
                <li><a tabindex="-1" href="#">Digital Materials</a></li>
                <li><a tabindex="-1" href="#">Logo Animation</a></li>
                <li><a tabindex="-1" href="#">Flash Presentations</a></li>
                <li><a tabindex="-1" href="#">PowerPoint</a></li>
                <li><a tabindex="-1" href="#">Banners Ads</a></li>
                <li><a tabindex="-1" href="#">GIF Animation</a></li>
                <li><a tabindex="-1" href="#">E- Signatures</a></li>
                <li><a tabindex="-1" href="#">E-Newsletters</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu"><a tabindex="-1" href="#">User Experience</a>
              <ul class="dropdown-menu1">
                <li><a tabindex="-1" href="#">UxD</a></li>
                <li><a tabindex="-1" href="#">Information Architecture</a></li>
                <li><a tabindex="-1" href="#">User Interaction</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu"><a tabindex="-1" href="#">User Interface Design</a>
              <ul class="dropdown-menu1">
                <li><a tabindex="-1" href="#">UI/GUI</a></li>
                <li><a tabindex="-1" href="#">Web Interface Design</a></li>
                <li><a tabindex="-1" href="#">Web Applications GUI</a></li>
                <li><a tabindex="-1" href="#">Mobile Apps</a></li>
              </ul>
            </li>
            <li><a tabindex="-1" href="#">Web Development</a></li>
          </ul>
        </li>
        <li>
          <a class='btn btn-default navbar-btn navbar-right' href='connect'>
            Connect
          </a>
        </li>
      </ul>

      
          <!-- <li class='active'><a href='index.php'>Home</a></li>
          <li><a href="#">Data</a>
            <ul class="sub-menu"s>
              <li><a href="#">Data</a></li>
              <li><a href="#">Experience</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Partners </a></li>
              <li><a href="#">Clients</a></li>
              <li><a href="#">Awards</a></li>
              <li><a href="#">Associations </a></li>
            </ul>
          </li>
          <li><a href="#">Portfolio</a>
            <ul class="sub-menu" style="display:block">
              <li><a href="#">View all</a></li>
              <li><a href="#">Logo Design</a></li>
              <li><a href="#">Print Design </a>
                <ul class="sub-menu" style="display:block">
                  <li><a href="#">Print Collateral </a></li>
                  <li><a href="#">Business Plans</a></li>
                  <li><a href="#">Brochures </a></li>
                  <li><a href="#">Flier / Posters</a></li>
                  <li><a href="#">Large Format Print </a></li>
                  <li><a href="#">Product Labels </a></li>
                  <li><a href="#">Book / Cover Design</a></li>
                  <li><a href="#">PowerPoint</a></li>
                  <li><a href="#">Album / DVD Art</a></li>
                </ul>
              </li>
              <li><a href="#">Multimedia Design </a>
                <ul class="sub-menu">
                  <li><a href="#">Digital Materials </a></li>
                  <li><a href="#">Logo Animation</a></li>
                  <li><a href="#">Flash Presentations</a></li>
                  <li><a href="#">Banners Ads</a></li>
                  <li><a href="#">GIF Animation</a></li>
                  <li><a href="#">E- Signatures</a></li>
                  <li><a href="#">E-Newsletters </a></li>
                </ul>
              </li>
              <li><a href="#">User Experience ></a>
                <ul class="sub-menu">
                  <li><a href="#">UxD</a></li>
                  <li><a href="#">Information Architecture</a></li>
                  <li><a href="#">User Interaction</a></li>
                </ul>
              </li>
              <li><a href="#">User Interface Design ></a>
                <ul class="sub-menu">
                  <li><a href="#">UI/GUI</a></li>
                  <li><a href="#">Application GUI</a></li>
                  <li><a href="#">Web GUI</a></li>
                </ul>
              </li>
              <li><a href="#">Web Development</a></li>
            </ul>
          </li>
          <li><a href='connect.php'>Connect</a></li> -->
      </ul>
    </div>
  </nav>
</div>

</div>
<script type="text/javascript">
  jQuery('#container25').find('stats').css('display','none');
</script>

