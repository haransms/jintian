<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
	public function index(){
		$this->title = '首页';
		$this->display();
	}
}
