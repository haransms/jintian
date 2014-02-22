function deleteType(id){
	jNotify('真的要删除这个管理类型吗？！此对话框3秒后关闭，确定删除点击&nbsp;&nbsp;<a href="javascript:void(0);" onclick="doRealDeleteType('+id+')"><b>这里</b></a>&nbsp;&nbsp;。',{
		VerticalPosition:'center',
		HorizontalPosition:'center',
		TimeShown:3000,
		clickOverlay:true
	});
}
function doRealDeleteType(id){
	$.post(CONTROLLER + '/deleteType',{'id':id},completewithurl);
}
function modifyType(id){
	$("#myModalLabel").html('修改类型');
	$.post(MODULE + '/Ajax/modifyType',{'id':id},function(data){
		$("#modal-body").html(data);
		js$("#modifyTypeModal").modal();
	});
}
$(function(){
	$("#modify-Type-Form").ajaxForm({success:complete,dataType:'json'});
	// $("#add-Type-Form").ajaxForm({success:complete,dataType:'json'});
});