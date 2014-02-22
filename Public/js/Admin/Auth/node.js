$(function(){
	$('#add-Rule-Form input').iCheck({
		checkboxClass: 'icheckbox_square-red',
		radioClass: 'iradio_square-red',
		increaseArea: '20%', // optional
	});
	$("#modify-Node-Form,#add-Rule-Form").ajaxForm({success:completewithurl,dataType:'json'});
});
function modifyNode(id){
	$.post(MODULE + '/Ajax/getRuleInfo',{'id':id},function(data){
		$("#modal-body").html(data);
		$("#modifyNodeModal").modal();
	});
}
function deleteNode(id){
	jNotify('真的要删除这个规则吗？！此对话框3秒后关闭，确定删除点击<a href="javascript:void(0);" onclick="doRealDeleteNode('+id+')">&nbsp;这里&nbsp;</a>。',{
		VerticalPosition:'center',
		HorizontalPosition:'center',
		TimeShown:3000,
		clickOverlay:true
	});
}
function doRealDeleteNode(id){
	$.post(CONTROLLER + '/deleteNode',{'id':id},completewithurl);
}
function addRule () {
	$('#addRuleModal').modal();
}
function addName () {
	var module = $('#add-Rule-Module').val();
	var controller = $('#add-Rule-Controller').val();
	$('#add-Rule-Name').val(module + '/' + controller +'/');
}