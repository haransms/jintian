function lockstatus(id,status){
	$.post(CONTROLLER + '/lockRoleStatus',{'id':id,'status':status},completewithurl);
}
function deleteRole(id){
	jNotify('真的要删除这个管理角色吗？！此对话框3秒后关闭，确定删除点击&nbsp;&nbsp;<a href="javascript:void(0);" onclick="doRealDeleteRole('+id+')"><b>这里</b></a>&nbsp;&nbsp;。',{
		VerticalPosition:'center',
		HorizontalPosition:'center',
		TimeShown:3000,
		clickOverlay:true
	});
}
function doRealDeleteRole(id){
	$.post(CONTROLLER + '/deleteRole',{'id':id},completewithurl);
}
function modifyRole(id){
	$("#myModalLabel").html('修改角色');
	$.post(MODULE + '/Ajax/modifyRole',{'id':id},function(data){
		$("#modal-body").html(data);
		js$("#modifyRoleModal").modal();
	});
}
$(function(){
	// $("#modifyRole-submit").click(function(e){
		$("#modify-Role-Form").ajaxForm({success:complete,dataType:'json'});
	// });	
});