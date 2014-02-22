<?php
if(version_compare(PHP_VERSION,'5.3.0','<')){die('require PHP > 5.3.0 !');}
define('DIR_SECURE_FILENAME','index.html');
define('DIR_SECURE_CONTENT','deny access');
define('APP_PATH','./app/');
define('APP_DEBUG',true);
define('HARAN','HARAN95638800');
require('../thinkphp/ThinkPHP/ThinkPHP.php');