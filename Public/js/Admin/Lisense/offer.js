function offer_certificate (id) {
	$.post( CONTROLLER + '/offer',{'lid':id},completewithurl);
}