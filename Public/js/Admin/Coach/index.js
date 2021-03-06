$(function(){
	$("input").iCheck({
		checkboxClass: 'icheckbox_square-red',
		radioClass: 'iradio_square-red',
		increaseArea: '20%', // optional
	});
	$("input").on('ifChecked',function(){
		$(this).attr('checked','checked');
	})
	$(".ajax-modify").click(function(){
		var url = $(this).attr('url');
		var ids = $('input[type=checkbox]:checked').val();
		if(ids == undefined) {
			jError('请选择！');
		} else {
			window.location.href = url + '/cid/' + ids;
		}
	});
})
function upload (id,name) {
	$("#uploadModalLabel").html('上传&nbsp;' + name + '&nbsp;头像');
	$('#uploadModal').modal();
	var path = '<img src="' + PUBLIC + '/upload/';
	//头像上传Uploadify插件
	$('#face').uploadify({
		swf : PUBLIC + '/Uploadify/uploadify.swf',
		uploader : APP + '/Home/Upload/uploadFace',
		width:120,
		height:30,
		buttonImage : PUBLIC + '/Uploadify/haran.png',
		fileTypeDesc : 'Image File',
		fileTypeExts : '*.jpeg; *.jpg; *.png; *.gif',
		formData : {'uid' : UID, 'cid' : id},
		onUploadSuccess : function (file, data, response) {
			// alert(data);
			// $("#result").html(data);
			eval('var data=' + data);
			if(data.status == 1) {
				jSuccess(data.info, {
					TimeShown:3000,
					onClosed:function(){
						$('#uploadModal').modal('hide');
						path += data.image[0] + '">';
						$('#coach_face_' + id).html(path);
					}
				});
			}else {
				jError(data.info);
			}
		}
	});
};