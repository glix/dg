<?php include("header.php"); ?>  
<div class="ajax-load-home"><img src="assets/img/ajax-loader-f.gif"></div>
<div class='container wrap-container'>
  <div class='separator-shadow-bottom small-bottom-margin'>
    <img alt='' src='assets/images/shadow-separator-wide-bottom.png'>
    <div class="outer-div">
       <div class="breadcrumbs">
          <a href="index.php">Home</a>
          <span>&gt;</span>
          <a href="portfolio.php">Portfolios</a>
          <p></p> 
      </div>
    </div>
  </div>    
  <ul id="tabs" class="splitter" >      
    <li> 
        <ul id='filterOptions' class="lavaLampNoImage lavalamp-menu">
            <li><a class="btn btn-default tab1 current" href="#All">View All</a></li>
            <li><a class="btn btn-default tab2" href="#logo">Logo</a></li>
            <li><a class="btn btn-default tab3" href="#print">Print</a></li>
            <li><a class="btn btn-default tab4" href="#multimedia">Multimedia</a></li>
            <li><a class="btn btn-default tab5" href="#experience">User Experience</a></li> 
            <li><a class="btn btn-default tab6" href="#interface">User Interface</a></li>
            <li><a class="btn btn-default tab7" href="#web_development">Web Development</a></li>  
        </ul> 
    </li> 
  </ul>
  <div class="view-sort-wrapper pull-right "> 
     <div class="view_wrapper">       
       <ul class="view_icon pull-right btn-group"> 
        <li dataclass="item-grid-small" class="btn btn-default grid_view_small active"><a href="#"><i class="icon-th"></i></a></li>
        <li dataclass="item-grid-medium" class="btn btn-default grid_view_medium"><a href="#"><i class="icon-th"></i></a></li>
        <li dataclass="item-grid" class="btn btn-default grid_view "><a href="#"><i class="icon-th"></i></a></li>
        <li dataclass="item-list" class="btn btn-default list_view"><a href="#"><i class="icon-th-list"></i></a></li>
        <li dataclass="item-list-medium" class="btn btn-default list_view-medium"><a href="#"><i class="icon-th-list"></i></a></li>
        <li dataclass="item-list-small" class="btn btn-default list_view-small"><a href="#"><i class="icon-th-list"></i></a></li>
      </ul> 
    </div>
    <!-- <div class="btn-group">
      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>
    </div> -->

    <div class="sort_wrapper">
      <select class="sort-by">
        <option value="name">Name</option> 
        <option value="date">Date</option>
        <option value="Tag">Tags</option>  
      </select>
    </div>
  </div>
 <div class="portfolio_container" style="margin: 0 -19px 0 -17px;"> 

 </div>
   
</div>
 
  <?php include("footer.php"); ?>   
<script type="text/javascript">
  $(window).load(function(){
    $('.ajax-load-home').css('display', 'none');
  });
</script>