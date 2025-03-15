var $ = mdui.$;
var inst = new mdui.Drawer('#drawer');
var ids = new Array("main","websites","social","about")

hide_all();
inst.close();
$('#main').show();
$('#toggle').on('click', function () {
  inst.toggle();
});

function hide_all(){
    for (i=0;i<ids.length;i++){
		 $('#'+ids[i]).hide();
	}
    // inst.close();
}

function show(id){
    hide_all();
    $('#'+id).show()
}

function link(){
    mdui.snackbar({
      message: 'Link Opened...'
    });
}

function copy(){
    var textareaC = document.createElement('textarea');
    textareaC.setAttribute('readonly', 'readonly'); //设置只读属性防止手机上弹出软键盘
    textareaC.value = '_sqj_';
    document.body.appendChild(textareaC); //将textarea添加为body子元素
    textareaC.select();
    var res = document.execCommand('copy');
    document.body.removeChild(textareaC);//移除DOM元素
    mdui.snackbar({
      message: "Copied"
    });
    return res;
}