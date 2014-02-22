function lockstatus(id,status){
	$.post(CONTROLLER + '/lockMemberStatus',{'id':id,'status':status},completewithurl);
}
function deleteMember(id){
	jNotify('真的要删除这个用户吗？！此对话框3秒后关闭，确定删除点击<a href="javascript:void(0);" onclick="doRealDeleteMember('+id+')">&nbsp;这里&nbsp;</a>。',{
		VerticalPosition:'center',
		HorizontalPosition:'center',
		TimeShown:3000,
		clickOverlay:true
	});
}
function doRealDeleteMember(id){
	$.post(CONTROLLER + '/deleteMember',{'id':id},completewithurl);
}
function setRoleUser (id,uname) {
	$.post(MODULE + '/Ajax/setRoleUser', {'uid':id}, function(data){
		// alert(data);
		$("#modifyRoleModalLabel").html('设置&nbsp;&nbsp;' + uname + '&nbsp;&nbsp;的角色');
		$("#modal-body").html(data);
		$("#setRoleUserModal").modal();
		$('#modify-Role-Form input').iCheck({
			checkboxClass: 'icheckbox_square-red',
			radioClass: 'iradio_square-red',
			increaseArea: '20%', // optional
		});
		$("#modify-Role-Form").ajaxForm({success:completewithurl,dataType:'json'});
	});
}