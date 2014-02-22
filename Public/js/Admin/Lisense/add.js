function add_certificate (id) {
	var number = $("#number_" + id).val();
	var td = $("#td_" + id);
	if (!number){
		jError('请输入证件号码');
		return false;
	}
	// alert(number);
	$.post( CONTROLLER + '/add',{'lid':id,'number':number},completewithurl);
}