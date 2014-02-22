<?php
return array(

	//URL重写模式
	'URL_MODEL'				=>	2,

	//数据库信息
	// 'DB_TYPE'				=>	'mysqli',
	// 'DB_HOST'				=>	'127.0.0.1',
	// 'DB_NAME'				=>	'jintian',
	// 'DB_USER'				=>	'root',
	// 'DB_PWD'				=>	'',
	// 'DB_PORT'				=>	3306,
	// 'DB_PREFIX'				=>	'haran_',

	//session设置
	// 'SESSION_TYPE'			=>'Db',							//自定义SESSION数据库处理
	// 'SESSION_EXPIRE'		=>900,
	// 'SESSION_EXPIRE'		=>9000,

	// 权限相关配置
	// 'USER_AUTH_GATEWAY'		=>'Home/Public/login',			//登录网关

	//超管设置
	// 'USER_ADMINISTRATOR'		=> array(1,3),

	//模板替换
	// 'TMPL_PARSE_STRING'		=>array(
	// 	// '__ADMINJS__' => __ROOT__ . '/Public/js/Admin', // 更改默认的/Public 替换规则
	// 	'--PUBLIC--' => '__PUBLIC__', // 采用新规则输出/Public字符串
	// ),

	//允许访问模块
	// 'MODULE_ALLOW_LIST'			=>	array('Home','Admin'),

	//默认模块
	// 'DEFAULT_MODULE'			=>	'Home',
	//禁止访问模块
	// 'MODULE_DENY_LIST'		=>	array('Common','Runtime','View'),

	//模块映射
	// 'URL_MODULE_MAP'		=>	array('zhangyunlin95638800'=>'admin'),

	//表单令牌
	// 'TOKEN_ON'				=>	true,
	
	//模板主题
	// 'DEFAULT_THEME'			=>	'default',

	//自动载入配置
	// 'LOAD_EXT_CONFIG'		=>	'custom',

	//缓存时间设置
	// 'SITE_CACHE_EXPIRE'		=>	300,

	//颜色设定
	'ADMIN_BACKGROUND_COLORS'	=>	array('bred', 'blightblue', 'bgreen', 'borange', 'bviolet', 'bogreen', 'cc0000', 'ffcc00', 'b3color'),	

	//公共错误提示页面
	// 'TMPL_EXCEPTION_FILE'	=>	APP_PATH.'/View/commonError.tpl',

	//去除空白及注释
	// 'TMPL_STRIP_SPACE'		=> true,

	// 'AUTOLOAD_NAMESPACE'	=> array(
	// 	'Api' => COMMON_PATH . 'Api',
	// 	),

	// 	不区分大小写
	// 'URL_CASE_INSENSITIVE' =>true,

	'SITE_TITLE'			=>	'安徽金田土鸡有限公司',
	//修改定界符
	'TMPL_L_DELIM'			=>	'<{',		//左定界符
	'TMPL_R_DELIM'			=>	'}>'		//右定界符
);
