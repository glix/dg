<?php
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->get('/', function () use ($app) {
   //$app->render('hello.php', array('id' => $id));
   require 'home.php';
});

$app->get('/:id', function ($id) use ($app) { 
   //$app->render('hello.php', array('id' => $id));
   require $id.'.php';
});

// $app->get('/portfolio.php#tab=All', function () use ($app) {
//    //$app->render('hello.php', array('id' => $id));
//    require 'portfolio.php';
// });

// $app->get('/portfolio/:id', function ($id) use ($app) {
//    //$app->render('hello.php', array('id' => $id));
//    require 'portfolio-'.$id.'.php';
// });

$app->run();
 
?>
