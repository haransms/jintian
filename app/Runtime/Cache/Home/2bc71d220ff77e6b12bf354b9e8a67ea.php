<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?php echo ($title); ?>_<?php echo C('SITE_TITLE');?></title>
<meta name="keywords" content="<?php echo C('SITE_KEYWORD');?>">
<meta name="description" content="<?php echo C('SITE_DESCRIPTION');?>">
<meta name="author" content="<?php echo C('SITE_AUTHOR');?>">
<link rel="stylesheet" type="text/css" href="/git/jintian/Public/css/core.css" />
<script type="text/javascript">var MODULE = "/git/jintian/Home";var CONTROLLER = "/git/jintian/Home/Index";var ACTION = "/git/jintian/Home/Index/index";</script>
<!--[if lt IE 9]>
<script src="/git/jintian/Public/js/html5shiv.js"></script>
<script src="/git/jintian/Public/js/respond.min.js"></script>
<![endif]-->
</head>
<body>
<div id="wrap">
	<div class="container">
		<div class="row">
			
					<div class="col-md-12">
						<div class="navbar navbar-default navbar-fixed-top" style="margin-bottom:5px">
							<div class="navbar-header">
								<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
								<a class="navbar-brand" href="<?php echo U('/default');?>"><?php echo C('SITE_TITLE');?></a>
							</div>
							<div class="navbar-collapse collapse navbar-responsive-collapse">
								<ul class="nav navbar-nav">
									<li <?php if(MODULE_NAME == 'Home' && CONTROLLER_NAME == 'Index' && ACTION_NAME == 'index'): ?>class="active"<?php endif; ?>><a href="<?php echo U('/default');?>">首&nbsp;&nbsp;&nbsp;&nbsp;页</a></li>
									<li <?php if(ACTION_NAME == 'register'): ?>class="active"<?php endif; ?>><a href="<?php echo U('/register');?>">公司简介</a></li>
									<li><a href="#">公司产品</a></li>
									<li><a href="#">金田合作社</a></li>
									<!-- <li><a href="#">在线演示</a></li>
									<li><a href="#">互动交流</a></li> -->
									<li><a href="#">通知公告</a></li>
								</ul>
							</div>
						</div>
					</div>
			
		</div>
	</div>
	<div class="clearfix"></div>
	
		<div class="row" style="margin:0;padding:0;">
			<div class="slider">
				<div class="flexslider" id="mainslider" style="margin:0;padding:0;">
					<ul class="slides">
						<li class="sliders-li">
							<img class="img-responsive" src="/git/jintian/Public/images/slider_1.png" height="250"/>
						</li>
						<li class="sliders-li">
							<img class="img-responsive" src="/git/jintian/Public/images/slider_2.png"  height="250" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	
	<div class="clearfix h10"></div>
	
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="jumbotron">
					<h1>安徽金田土鸡有限公司</h1>
					<p>金田土鸡生态养殖园坐落于余井村大桥下5公里处，养殖园充分利用生态环境，养殖原生态土鸡，出售农副产品，经济效益可观。</p>
					<p>
						<a class="btn btn-primary btn-lg" role="button">了解更多</a>
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="clearfix"></div>
</div>

<div class="row" id="footer" style="margin:0;padding:0">
	<p>
		<ul class="list-inline list-unstyled text-center">
			<li><a href="<?php echo U('/Admin');?>">管理</a></li>
		</ul>
	</p>
</div>

<script type="text/javascript" src="/git/jintian/Public/js/jquery-2.0.3.min.js"></script>
<script type="text/javascript" src="/git/jintian/Public/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/git/jintian/Public/js/jquery.flexslider-min.js"></script>
<script type="text/javascript" src="/git/jintian/Public/js/jquery.easing.js"></script>
<script type="text/javascript" src="/git/jintian/Public/js/jquery.mousewheel.js"></script>
<script type="text/javascript" src="/git/jintian/Public/js/jquery.form.js"></script>
<script type="text/javascript" src="/git/jintian/Public/js/jnotify.js"></script>
<script type="text/javascript" src="/git/jintian/Public/js/sco.message.js"></script>
<script type="text/javascript" src="/git/jintian/Public/js/front.js"></script>
</body>
</html>