
//------------------- 弹窗Html模板 模块 -------------------

;(function () {

    //自定义命名,切换控件类型,合成控件类型 模板
    document.writeln('      <dialog id=\"ios_switch_view_type_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 1px; border-color: white\">');
    document.writeln('		</dialog>');
    document.writeln('');
    document.writeln('		<dialog id=\"android_switch_view_type_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 1px; border-color: white\">');
    document.writeln('		</dialog>');
    document.writeln('');
    document.writeln('		<dialog id=\"define_switch_view_type_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 1px; border-color: white\">');
    document.writeln('		</dialog>');
    document.writeln('');
    document.writeln('		<dialog id=\"flutter_switch_view_type_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 1px; border-color: white\">');
    document.writeln('		</dialog>');
    document.writeln('');
    document.writeln('		<dialog id=\"ios_union_view_type_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 1px; border-color: white\">');
    document.writeln('		</dialog>');
    document.writeln('');
    document.writeln('		<dialog id=\"android_union_view_type_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 1px; border-color: white\">');
    document.writeln('		</dialog>');
    document.writeln('');
    document.writeln('		<dialog id=\"define_union_view_type_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 1px; border-color: white\">');
    document.writeln('		</dialog>');
    document.writeln('');
    document.writeln('		<dialog id=\"flutter_union_view_type_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 1px; border-color: white\">');
    document.writeln('		</dialog>');
    document.writeln('');
    document.writeln('		<script type=\"text/x-tmpl\" id=\"tmpl-define-dialog-father\">');
    document.writeln('			<div style=\"display: flex;flex-direction: column;justify-content: space-between;margin: 9px;\">');
    document.writeln('    		      {% if (o.root.datas) { %}');
    document.writeln('    		      {% var templateValue = document.getElementById(\"tmpl-define-dialog-child\").innerHTML;var map = {};map[\"root\"] = o.root.datas; var ret = tmpl(templateValue, map); %}');
    document.writeln('    		      {% if(ret) { %}');
    document.writeln('    		      {%=ret%}');
    document.writeln('    		      {% } %}');
    document.writeln('    		      {% } %}');
    document.writeln('    		</div>');
    document.writeln('    	 </script>');
    document.writeln('');
    document.writeln('		<script type=\"text/x-tmpl\" id=\"tmpl-define-dialog-child\">');
    document.writeln('		{% for (var i=0; i<o.root.length; i++) { %}');
    document.writeln('			{% var subArr = o.root[i]; %}');
    document.writeln('			<div style=\"display: flex;flex-direction: row;justify-content: space-between;\">');
    document.writeln('			{% for (var j=0; j<subArr.length; j++) { %}');
    document.writeln('				{% var data = subArr[j]; %}');
    document.writeln('				<div id=\"{%=data.bg_id %}\" class=\"define_view_box_view\">');
    document.writeln('					<img id=\"{%=data.img_id %}\" class=\"define_view_box_img\" title=\"{%=data.text %}\" src=\"{%=data.src %}\" />');
    document.writeln('					<span id=\"{%=data.text_id %}\" class=\"define_view_box_title\" title=\"{%=data.text %}\">{%=data.text %}</span>');
    document.writeln('				</div>');
    document.writeln('			{% } %}');
    document.writeln('			</div>');
    document.writeln('		{% } %}');
    document.writeln('    	</script>');

    //设置模板
    document.writeln('<dialog id=\"software_set_dialog\" class=\"fuceng\" style=\"z-index:999999;padding: 20px; border-color: white\">');
    document.writeln('</dialog>');

})(this);

//------------------- 弹窗Html模板 模块 -------------------


//------------------- 控件Dialog弹窗显示或隐藏 模块 -------------------

// OC SWIFT

/**
 * 初始化切换控件类型面板数据
 */
var ios_switch_view_type_dialog_is_init = false;
function initDefineDialogIos_OC_Swift(){
    if (ios_switch_view_type_dialog_is_init == true)return;
    ios_switch_view_type_dialog_is_init = true;

    var datas = new Array();
    var data_sub1 = new Array();
    data_sub1.push({"bg_id":"ios_switch_view_type_bg1","img_id":"ios_switch_view_type_img1","text_id":"ios_switch_view_type_text1","text":"UILabel","src":"https://upload-images.jianshu.io/upload_images/14003450-c114e679a24d1e8b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"ios_switch_view_type_bg2","img_id":"ios_switch_view_type_img2","text_id":"ios_switch_view_type_text2","text":"UIImageView","src":"https://upload-images.jianshu.io/upload_images/14003450-e69ce0ad8e908007.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"ios_switch_view_type_bg3","img_id":"ios_switch_view_type_img3","text_id":"ios_switch_view_type_text3","text":"UIButton","src":"https://upload-images.jianshu.io/upload_images/14003450-5308bad9df4eb932.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"ios_switch_view_type_bg4","img_id":"ios_switch_view_type_img4","text_id":"ios_switch_view_type_text4","text":"UIView","src":"https://upload-images.jianshu.io/upload_images/14003450-00a22844a1138a38.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    var data_sub2 = new Array();
    data_sub2.push({"bg_id":"ios_switch_view_type_bg5","img_id":"ios_switch_view_type_img5","text_id":"ios_switch_view_type_text5","text":"UITextField","src":"https://upload-images.jianshu.io/upload_images/14003450-7d82eb225c1ea8da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub2.push({"bg_id":"ios_switch_view_type_bg6","img_id":"ios_switch_view_type_img6","text_id":"ios_switch_view_type_text6","text":"UITextView","src":"https://upload-images.jianshu.io/upload_images/14003450-619c41116d084826.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub2.push({"bg_id":"ios_switch_view_type_bg7","img_id":"ios_switch_view_type_img7","text_id":"ios_switch_view_type_text7","text":"UIScrollView","src":"https://upload-images.jianshu.io/upload_images/14003450-835c390a62e9fac4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub2.push({"bg_id":"ios_switch_view_type_bg8","img_id":"ios_switch_view_type_img8","text_id":"ios_switch_view_type_text8","text":"UISwitch","src":"https://upload-images.jianshu.io/upload_images/14003450-4dffa33d04f87d6e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    var data_sub3 = new Array();
    data_sub3.push({"bg_id":"ios_switch_view_type_bg9","img_id":"ios_switch_view_type_img9","text_id":"ios_switch_view_type_text9","text":"UIActivityIndicatorView","src":"https://upload-images.jianshu.io/upload_images/14003450-98ce5ec9fa78dcdb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub3.push({"bg_id":"ios_switch_view_type_bg10","img_id":"ios_switch_view_type_img10","text_id":"ios_switch_view_type_text10","text":"UIProgressView","src":"https://upload-images.jianshu.io/upload_images/14003450-2857fb5d5ba168f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub3.push({"bg_id":"ios_switch_view_type_bg11","img_id":"ios_switch_view_type_img11","text_id":"ios_switch_view_type_text11","text":"UITableView","src":"https://upload-images.jianshu.io/upload_images/14003450-c5eae0711075f94b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub3.push({"bg_id":"ios_switch_view_type_bg12","img_id":"ios_switch_view_type_img12","text_id":"ios_switch_view_type_text12","text":"UICollectionView","src":"https://upload-images.jianshu.io/upload_images/14003450-ff91b56ce74d6c3f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    var data_sub4 = new Array();
    data_sub4.push({"bg_id":"ios_switch_view_type_bg13","img_id":"ios_switch_view_type_img13","text_id":"ios_switch_view_type_text13","text":"UIStepper","src":"https://upload-images.jianshu.io/upload_images/14003450-b1cf5711506871f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub4.push({"bg_id":"ios_switch_view_type_bg14","img_id":"ios_switch_view_type_img14","text_id":"ios_switch_view_type_text14","text":"UIPageControl","src":"https://upload-images.jianshu.io/upload_images/14003450-44fc6322e7e24181.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub4.push({"bg_id":"ios_switch_view_type_bg15","img_id":"ios_switch_view_type_img15","text_id":"ios_switch_view_type_text15","text":"UIPickerView","src":"https://upload-images.jianshu.io/upload_images/14003450-f55cf3f4135f3cad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub4.push({"bg_id":"ios_switch_view_type_bg16","img_id":"ios_switch_view_type_img16","text_id":"ios_switch_view_type_text16","text":"UIDatePicker","src":"https://upload-images.jianshu.io/upload_images/14003450-9983042c31cfb901.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    var data_sub5 = new Array();
    data_sub5.push({"bg_id":"ios_switch_view_type_bg17","img_id":"ios_switch_view_type_img17","text_id":"ios_switch_view_type_text17","text":"UIMapView","src":"https://upload-images.jianshu.io/upload_images/14003450-88202e84842e97da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub5.push({"bg_id":"ios_switch_view_type_bg18","img_id":"ios_switch_view_type_img18","text_id":"ios_switch_view_type_text18","text":"UISearchBar","src":"https://upload-images.jianshu.io/upload_images/14003450-78fbea9bbacc5422.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub5.push({"bg_id":"ios_switch_view_type_bg19","img_id":"ios_switch_view_type_img19","text_id":"ios_switch_view_type_text19","text":"WKWebView","src":"https://upload-images.jianshu.io/upload_images/14003450-ba6ad7b78384f942.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub5.push({"bg_id":"ios_switch_view_type_bg20","img_id":"ios_switch_view_type_img20","text_id":"ios_switch_view_type_text20","text":"UISlider","src":"https://upload-images.jianshu.io/upload_images/14003450-279c6b081ff83d9b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    datas.push(data_sub1,data_sub2,data_sub3,data_sub4,data_sub5);

    var mapJson = {"root":{"datas":datas}};
    var templateInputValue = document.getElementById('tmpl-define-dialog-father').innerHTML.replace(/^\n|\s+$| {6}/g,'');
    var ret = tmpl(templateInputValue, mapJson);
    ret = js_template_escape(ret);
    ret = formatXml_android(ret);
    var dialog = $("#ios_switch_view_type_dialog");
    var info_view_type_bg = $("#info_view_type_bg");
    dialog.append(ret);
    dialog.css("margin-left",info_view_type_bg.offset().left + "px");
    dialog.css("margin-top",(info_view_type_bg.offset().top + 40) + "px");
    document.getElementById("ios_switch_view_type_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_ios_switch_view_type_dialog();
    });
    //添加点击事件
    dialog.find("*[class*='define_view_box_view']").on({
        click: function (event) {
            var text = $(this).text();
            switch_view_type_callback(text);
            hide_ios_switch_view_type_dialog();
            event.stopPropagation();
        }
    });
}

function show_ios_switch_view_type_dialog() {
    show_dialog("ios_switch_view_type_dialog");
}
function show_swift_switch_view_type_dialog() {
    show_ios_switch_view_type_dialog();
}
function hide_ios_switch_view_type_dialog() {
    hide_dialog("ios_switch_view_type_dialog");
}

function initDefineDialogIos(){
    initDefineDialogIos_OC_Swift();
}

function initDefineDialogSwift(){
    initDefineDialogIos_OC_Swift();
}

// OC SWIFT



// 安卓

/**
 * 初始化切换控件类型面板数据
 */
var android_switch_view_type_dialog_is_init = false;
function initDefineDialogAndroid(){
    if (android_switch_view_type_dialog_is_init == true)return;
    android_switch_view_type_dialog_is_init = true;

    var datas = new Array();
    var data_sub1 = new Array();
    data_sub1.push({"bg_id":"android_switch_view_type_bg1","img_id":"android_switch_view_type_img1","text_id":"android_switch_view_type_text1","text":"TextView","src":"https://upload-images.jianshu.io/upload_images/14003450-c114e679a24d1e8b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"android_switch_view_type_bg2","img_id":"android_switch_view_type_img2","text_id":"android_switch_view_type_text2","text":"ImageView","src":"https://upload-images.jianshu.io/upload_images/14003450-e69ce0ad8e908007.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"android_switch_view_type_bg3","img_id":"android_switch_view_type_img3","text_id":"android_switch_view_type_text3","text":"Button","src":"https://upload-images.jianshu.io/upload_images/14003450-5308bad9df4eb932.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"android_switch_view_type_bg4","img_id":"android_switch_view_type_img4","text_id":"android_switch_view_type_text4","text":"RelativeLayout","src":"https://upload-images.jianshu.io/upload_images/14003450-00a22844a1138a38.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    var data_sub2 = new Array();
    data_sub2.push({"bg_id":"android_switch_view_type_bg5","img_id":"android_switch_view_type_img5","text_id":"android_switch_view_type_text5","text":"EditText","src":"https://upload-images.jianshu.io/upload_images/14003450-7d82eb225c1ea8da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub2.push({"bg_id":"android_switch_view_type_bg7","img_id":"android_switch_view_type_img7","text_id":"android_switch_view_type_text7","text":"ScrollView","src":"https://upload-images.jianshu.io/upload_images/14003450-835c390a62e9fac4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub2.push({"bg_id":"android_switch_view_type_bg8","img_id":"android_switch_view_type_img8","text_id":"android_switch_view_type_text8","text":"Switch","src":"https://upload-images.jianshu.io/upload_images/14003450-4dffa33d04f87d6e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub2.push({"bg_id":"android_switch_view_type_bg10","img_id":"android_switch_view_type_img10","text_id":"android_switch_view_type_text10","text":"ProgressBar","src":"https://upload-images.jianshu.io/upload_images/14003450-2857fb5d5ba168f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    var data_sub3 = new Array();
    data_sub3.push({"bg_id":"android_switch_view_type_bg11","img_id":"android_switch_view_type_img11","text_id":"android_switch_view_type_text11","text":"RecyclerView","src":"https://upload-images.jianshu.io/upload_images/14003450-c5eae0711075f94b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub3.push({"bg_id":"android_switch_view_type_bg16","img_id":"android_switch_view_type_img16","text_id":"android_switch_view_type_text16","text":"DatePicker","src":"https://upload-images.jianshu.io/upload_images/14003450-9983042c31cfb901.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub3.push({"bg_id":"android_switch_view_type_bg19","img_id":"android_switch_view_type_img19","text_id":"android_switch_view_type_text19","text":"WebView","src":"https://upload-images.jianshu.io/upload_images/14003450-ba6ad7b78384f942.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub3.push({"bg_id":"android_switch_view_type_bg20","img_id":"android_switch_view_type_img20","text_id":"android_switch_view_type_text20","text":"SeekBar","src":"https://upload-images.jianshu.io/upload_images/14003450-279c6b081ff83d9b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    datas.push(data_sub1,data_sub2,data_sub3);

    var mapJson = {"root":{"datas":datas}};
    var templateInputValue = document.getElementById('tmpl-define-dialog-father').innerHTML.replace(/^\n|\s+$| {6}/g,'');
    var ret = tmpl(templateInputValue, mapJson);
    ret = js_template_escape(ret);
    ret = formatXml_android(ret);
    var dialog = $("#android_switch_view_type_dialog");
    var info_view_type_bg = $("#info_view_type_bg");
    dialog.append(ret);
    dialog.css("margin-left",info_view_type_bg.offset().left + "px");
    dialog.css("margin-top",(info_view_type_bg.offset().top + 40) + "px");
    document.getElementById("android_switch_view_type_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_android_switch_view_type_dialog();
    });
    //添加点击事件
    dialog.find("*[class*='define_view_box_view']").on({
        click: function (event) {
            var text = $(this).text();
            switch_view_type_callback(text);
            hide_android_switch_view_type_dialog();
            event.stopPropagation();
        }
    });
}


function show_android_switch_view_type_dialog() {
    show_dialog("android_switch_view_type_dialog");
}
function hide_android_switch_view_type_dialog() {
    hide_dialog("android_switch_view_type_dialog");
}

// 安卓


// 自定义模板

/**
 * 初始化切换控件类型面板数据
 */
var define_switch_view_type_dialog_is_init = false;
function initDefineDialogDefine(){
    if (define_switch_view_type_dialog_is_init == true)return;
    define_switch_view_type_dialog_is_init = true;

    var datas = new Array();
    var data_sub1 = new Array();
    data_sub1.push({"bg_id":"define_switch_view_type_bg1","img_id":"define_switch_view_type_img1","text_id":"define_switch_view_type_text1","text":"TextView","src":"https://upload-images.jianshu.io/upload_images/14003450-c114e679a24d1e8b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"define_switch_view_type_bg2","img_id":"define_switch_view_type_img2","text_id":"define_switch_view_type_text2","text":"ImageView","src":"https://upload-images.jianshu.io/upload_images/14003450-e69ce0ad8e908007.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"define_switch_view_type_bg3","img_id":"define_switch_view_type_img3","text_id":"define_switch_view_type_text3","text":"Button","src":"https://upload-images.jianshu.io/upload_images/14003450-5308bad9df4eb932.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"define_switch_view_type_bg4","img_id":"define_switch_view_type_img4","text_id":"define_switch_view_type_text4","text":"View","src":"https://upload-images.jianshu.io/upload_images/14003450-00a22844a1138a38.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    var data_sub2 = new Array();
    data_sub2.push({"bg_id":"define_switch_view_type_bg5","img_id":"define_switch_view_type_img5","text_id":"define_switch_view_type_text5","text":"EditText","src":"https://upload-images.jianshu.io/upload_images/14003450-7d82eb225c1ea8da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub2.push({"bg_id":"define_switch_view_type_bg7","img_id":"define_switch_view_type_img7","text_id":"define_switch_view_type_text7","text":"ScrollView","src":"https://upload-images.jianshu.io/upload_images/14003450-835c390a62e9fac4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub2.push({"bg_id":"define_switch_view_type_bg8","img_id":"define_switch_view_type_img8","text_id":"define_switch_view_type_text8","text":"Switch","src":"https://upload-images.jianshu.io/upload_images/14003450-4dffa33d04f87d6e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub2.push({"bg_id":"define_switch_view_type_bg10","img_id":"define_switch_view_type_img10","text_id":"define_switch_view_type_text10","text":"ProgressBar","src":"https://upload-images.jianshu.io/upload_images/14003450-2857fb5d5ba168f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    var data_sub3 = new Array();
    data_sub3.push({"bg_id":"define_switch_view_type_bg11","img_id":"define_switch_view_type_img11","text_id":"define_switch_view_type_text11","text":"ListView","src":"https://upload-images.jianshu.io/upload_images/14003450-c5eae0711075f94b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub3.push({"bg_id":"define_switch_view_type_bg16","img_id":"define_switch_view_type_img16","text_id":"define_switch_view_type_text16","text":"DatePicker","src":"https://upload-images.jianshu.io/upload_images/14003450-9983042c31cfb901.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub3.push({"bg_id":"define_switch_view_type_bg19","img_id":"define_switch_view_type_img19","text_id":"define_switch_view_type_text19","text":"WebView","src":"https://upload-images.jianshu.io/upload_images/14003450-ba6ad7b78384f942.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub3.push({"bg_id":"define_switch_view_type_bg20","img_id":"define_switch_view_type_img20","text_id":"define_switch_view_type_text20","text":"SeekBar","src":"https://upload-images.jianshu.io/upload_images/14003450-279c6b081ff83d9b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    datas.push(data_sub1,data_sub2,data_sub3);

    var mapJson = {"root":{"datas":datas}};
    var templateInputValue = document.getElementById('tmpl-define-dialog-father').innerHTML.replace(/^\n|\s+$| {6}/g,'');
    var ret = tmpl(templateInputValue, mapJson);
    ret = js_template_escape(ret);
    ret = formatXml_android(ret);
    var dialog = $("#define_switch_view_type_dialog");
    var info_view_type_bg = $("#info_view_type_bg");
    dialog.append(ret);
    dialog.css("margin-left",info_view_type_bg.offset().left + "px");
    dialog.css("margin-top",(info_view_type_bg.offset().top + 40) + "px");
    document.getElementById("define_switch_view_type_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_define_switch_view_type_dialog();
    });
    //添加点击事件
    dialog.find("*[class*='define_view_box_view']").on({
        click: function (event) {
            var text = $(this).text();
            switch_view_type_callback(text);
            hide_define_switch_view_type_dialog();
            event.stopPropagation();
        }
    });
}


function show_define_switch_view_type_dialog() {
    show_dialog("define_switch_view_type_dialog");
}
function hide_define_switch_view_type_dialog() {
    hide_dialog("define_switch_view_type_dialog");
}

// 自定义模板


// Flutter

/**
 * 初始化切换控件类型面板数据
 */
var flutter_switch_view_type_dialog_is_init = false;
function initDefineDialogFlutter(){
    if (flutter_switch_view_type_dialog_is_init == true)return;
    flutter_switch_view_type_dialog_is_init = true;

    var datas = new Array();
    var data_sub1 = new Array();
    data_sub1.push({"bg_id":"flutter_switch_view_type_bg1","img_id":"flutter_switch_view_type_img1","text_id":"flutter_switch_view_type_text1","text":"Text","src":"https://upload-images.jianshu.io/upload_images/14003450-c114e679a24d1e8b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"flutter_switch_view_type_bg2","img_id":"flutter_switch_view_type_img2","text_id":"flutter_switch_view_type_text2","text":"Image","src":"https://upload-images.jianshu.io/upload_images/14003450-e69ce0ad8e908007.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"flutter_switch_view_type_bg3","img_id":"flutter_switch_view_type_img3","text_id":"flutter_switch_view_type_text3","text":"Button","src":"https://upload-images.jianshu.io/upload_images/14003450-5308bad9df4eb932.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"flutter_switch_view_type_bg4","img_id":"flutter_switch_view_type_img4","text_id":"flutter_switch_view_type_text4","text":"Container","src":"https://upload-images.jianshu.io/upload_images/14003450-00a22844a1138a38.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    var data_sub2 = new Array();
    data_sub2.push({"bg_id":"flutter_switch_view_type_bg5","img_id":"flutter_switch_view_type_img5","text_id":"flutter_switch_view_type_text5","text":"TextField","src":"https://upload-images.jianshu.io/upload_images/14003450-7d82eb225c1ea8da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    // data_sub2.push({"bg_id":"flutter_switch_view_type_bg7","img_id":"flutter_switch_view_type_img7","text_id":"flutter_switch_view_type_text7","text":"ScrollView","src":"https://upload-images.jianshu.io/upload_images/14003450-835c390a62e9fac4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    // data_sub2.push({"bg_id":"flutter_switch_view_type_bg8","img_id":"flutter_switch_view_type_img8","text_id":"flutter_switch_view_type_text8","text":"Switch","src":"https://upload-images.jianshu.io/upload_images/14003450-4dffa33d04f87d6e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    // data_sub2.push({"bg_id":"flutter_switch_view_type_bg10","img_id":"flutter_switch_view_type_img10","text_id":"flutter_switch_view_type_text10","text":"ProgressBar","src":"https://upload-images.jianshu.io/upload_images/14003450-2857fb5d5ba168f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    // var data_sub3 = new Array();
    // data_sub3.push({"bg_id":"flutter_switch_view_type_bg11","img_id":"flutter_switch_view_type_img11","text_id":"flutter_switch_view_type_text11","text":"RecyclerView","src":"https://upload-images.jianshu.io/upload_images/14003450-c5eae0711075f94b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    // data_sub3.push({"bg_id":"flutter_switch_view_type_bg16","img_id":"flutter_switch_view_type_img16","text_id":"flutter_switch_view_type_text16","text":"DatePicker","src":"https://upload-images.jianshu.io/upload_images/14003450-9983042c31cfb901.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    // data_sub3.push({"bg_id":"flutter_switch_view_type_bg19","img_id":"flutter_switch_view_type_img19","text_id":"flutter_switch_view_type_text19","text":"WebView","src":"https://upload-images.jianshu.io/upload_images/14003450-ba6ad7b78384f942.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    // data_sub3.push({"bg_id":"flutter_switch_view_type_bg20","img_id":"flutter_switch_view_type_img20","text_id":"flutter_switch_view_type_text20","text":"SeekBar","src":"https://upload-images.jianshu.io/upload_images/14003450-279c6b081ff83d9b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    datas.push(data_sub1,data_sub2);//data_sub3

    var mapJson = {"root":{"datas":datas}};
    var templateInputValue = document.getElementById('tmpl-define-dialog-father').innerHTML.replace(/^\n|\s+$| {6}/g,'');
    var ret = tmpl(templateInputValue, mapJson);
    ret = js_template_escape(ret);
    ret = formatXml_flutter(ret);
    var dialog = $("#flutter_switch_view_type_dialog");
    var info_view_type_bg = $("#info_view_type_bg");
    dialog.append(ret);
    dialog.css("margin-left",info_view_type_bg.offset().left + "px");
    dialog.css("margin-top",(info_view_type_bg.offset().top + 40) + "px");
    document.getElementById("flutter_switch_view_type_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_flutter_switch_view_type_dialog();
    });
    //添加点击事件
    dialog.find("*[class*='define_view_box_view']").on({
        click: function (event) {
            var text = $(this).text();
            switch_view_type_callback(text);
            hide_flutter_switch_view_type_dialog();
            event.stopPropagation();
        }
    });
}


function show_flutter_switch_view_type_dialog() {
    show_dialog("flutter_switch_view_type_dialog");
}
function hide_flutter_switch_view_type_dialog() {
    hide_dialog("flutter_switch_view_type_dialog");
}

// Flutter


// 控件合成 - OC SWIFT

/**
 * 初始化合成控件类型面板数据
 */
var ios_union_view_type_dialog_is_init = false;
function initDefineUnionDialogIos_OC_Swift(){
    if (ios_union_view_type_dialog_is_init == true)return;
    ios_union_view_type_dialog_is_init = true;

    var datas = new Array();
    var data_sub1 = new Array();
    data_sub1.push({"bg_id":"ios_union_view_type_bg3","img_id":"ios_union_view_type_img3","text_id":"ios_union_view_type_text3","text":"UIButton","src":"https://upload-images.jianshu.io/upload_images/14003450-5308bad9df4eb932.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"ios_union_view_type_bg5","img_id":"ios_union_view_type_img5","text_id":"ios_union_view_type_text5","text":"UITextField","src":"https://upload-images.jianshu.io/upload_images/14003450-7d82eb225c1ea8da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"ios_union_view_type_bg6","img_id":"ios_union_view_type_img6","text_id":"ios_union_view_type_text6","text":"UITextView","src":"https://upload-images.jianshu.io/upload_images/14003450-619c41116d084826.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    datas.push(data_sub1);

    var mapJson = {"root":{"datas":datas}};
    var templateInputValue = document.getElementById('tmpl-define-dialog-father').innerHTML.replace(/^\n|\s+$| {6}/g,'');
    var ret = tmpl(templateInputValue, mapJson);
    ret = js_template_escape(ret);
    ret = formatXml_android(ret);
    var dialog = $("#ios_union_view_type_dialog");
    var info_view_layer_union_bg = $("#info_view_layer_union_bg");
    dialog.append(ret);
    dialog.css("margin-left",info_view_layer_union_bg.offset().left + "px");
    dialog.css("margin-top",(info_view_layer_union_bg.offset().top + 40) + "px");
    document.getElementById("ios_union_view_type_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_ios_union_view_type_dialog();
    });
    //添加点击事件
    dialog.find("*[class*='define_view_box_view']").on({
        click: function (event) {
            var text = $(this).text();
            union_view_type_callback(text);
            hide_ios_union_view_type_dialog();
            event.stopPropagation();
        }
    });
}

function show_ios_union_view_type_dialog() {
    show_dialog("ios_union_view_type_dialog");
}
function show_swift_union_view_type_dialog() {
    show_ios_union_view_type_dialog();
}
function hide_ios_union_view_type_dialog() {
    hide_dialog("ios_union_view_type_dialog");
}

function initDefineUnionDialogIos(){
    initDefineUnionDialogIos_OC_Swift();
}

function initDefineUnionDialogSwift(){
    initDefineUnionDialogIos_OC_Swift();
}

// 控件合成 - OC SWIFT


// 控件合成 - 安卓

/**
 * 初始化合成控件类型面板数据
 */
var android_union_view_type_dialog_is_init = false;
function initDefineUnionDialogAndroid(){
    if (android_union_view_type_dialog_is_init == true)return;
    android_union_view_type_dialog_is_init = true;

    var datas = new Array();
    var data_sub1 = new Array();
    data_sub1.push({"bg_id":"android_union_view_type_bg3","img_id":"android_union_view_type_img3","text_id":"android_union_view_type_text3","text":"Button","src":"https://upload-images.jianshu.io/upload_images/14003450-5308bad9df4eb932.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"android_union_view_type_bg6","img_id":"android_union_view_type_img6","text_id":"android_union_view_type_text6","text":"EditText","src":"https://upload-images.jianshu.io/upload_images/14003450-619c41116d084826.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    datas.push(data_sub1);

    var mapJson = {"root":{"datas":datas}};
    var templateInputValue = document.getElementById('tmpl-define-dialog-father').innerHTML.replace(/^\n|\s+$| {6}/g,'');
    var ret = tmpl(templateInputValue, mapJson);
    ret = js_template_escape(ret);
    ret = formatXml_android(ret);
    var dialog = $("#android_union_view_type_dialog");
    var info_view_layer_union_bg = $("#info_view_layer_union_bg");
    dialog.append(ret);
    dialog.css("margin-left",info_view_layer_union_bg.offset().left + "px");
    dialog.css("margin-top",(info_view_layer_union_bg.offset().top + 40) + "px");
    document.getElementById("android_union_view_type_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_android_union_view_type_dialog();
    });
    //添加点击事件
    dialog.find("*[class*='define_view_box_view']").on({
        click: function (event) {
            var text = $(this).text();
            union_view_type_callback(text);
            hide_android_union_view_type_dialog();
            event.stopPropagation();
        }
    });
}

function show_android_union_view_type_dialog() {
    show_dialog("android_union_view_type_dialog");
}
function hide_android_union_view_type_dialog() {
    hide_dialog("android_union_view_type_dialog");
}

// 控件合成 - 安卓



// 控件合成 - 自定义模板

/**
 * 初始化合成控件类型面板数据
 */
var define_union_view_type_dialog_is_init = false;
function initDefineUnionDialogDefine(){
    if (define_union_view_type_dialog_is_init == true)return;
    define_union_view_type_dialog_is_init = true;

    var datas = new Array();
    var data_sub1 = new Array();
    data_sub1.push({"bg_id":"define_union_view_type_bg3","img_id":"define_union_view_type_img3","text_id":"define_union_view_type_text3","text":"Button","src":"https://upload-images.jianshu.io/upload_images/14003450-5308bad9df4eb932.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"define_union_view_type_bg6","img_id":"define_union_view_type_img6","text_id":"define_union_view_type_text6","text":"EditText","src":"https://upload-images.jianshu.io/upload_images/14003450-619c41116d084826.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    datas.push(data_sub1);

    var mapJson = {"root":{"datas":datas}};
    var templateInputValue = document.getElementById('tmpl-define-dialog-father').innerHTML.replace(/^\n|\s+$| {6}/g,'');
    var ret = tmpl(templateInputValue, mapJson);
    ret = js_template_escape(ret);
    ret = formatXml_android(ret);
    var dialog = $("#define_union_view_type_dialog");
    var info_view_layer_union_bg = $("#info_view_layer_union_bg");
    dialog.append(ret);
    dialog.css("margin-left",info_view_layer_union_bg.offset().left + "px");
    dialog.css("margin-top",(info_view_layer_union_bg.offset().top + 40) + "px");
    document.getElementById("define_union_view_type_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_define_union_view_type_dialog();
    });
    //添加点击事件
    dialog.find("*[class*='define_view_box_view']").on({
        click: function (event) {
            var text = $(this).text();
            union_view_type_callback(text);
            hide_define_union_view_type_dialog();
            event.stopPropagation();
        }
    });
}

function show_define_union_view_type_dialog() {
    show_dialog("define_union_view_type_dialog");
}
function hide_define_union_view_type_dialog() {
    hide_dialog("define_union_view_type_dialog");
}

// 控件合成 - 自定义模板



// 控件合成 - Flutter

/**
 * 初始化合成控件类型面板数据
 */
var flutter_union_view_type_dialog_is_init = false;
function initDefineUnionDialogFlutter(){
    if (flutter_union_view_type_dialog_is_init == true)return;
    flutter_union_view_type_dialog_is_init = true;

    var datas = new Array();
    var data_sub1 = new Array();
    data_sub1.push({"bg_id":"flutter_union_view_type_bg3","img_id":"flutter_union_view_type_img3","text_id":"flutter_union_view_type_text3","text":"Button","src":"https://upload-images.jianshu.io/upload_images/14003450-5308bad9df4eb932.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    data_sub1.push({"bg_id":"flutter_union_view_type_bg6","img_id":"flutter_union_view_type_img6","text_id":"flutter_union_view_type_text6","text":"TextField","src":"https://upload-images.jianshu.io/upload_images/14003450-619c41116d084826.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    datas.push(data_sub1);

    var mapJson = {"root":{"datas":datas}};
    var templateInputValue = document.getElementById('tmpl-define-dialog-father').innerHTML.replace(/^\n|\s+$| {6}/g,'');
    var ret = tmpl(templateInputValue, mapJson);
    ret = js_template_escape(ret);
    ret = formatXml_flutter(ret);
    var dialog = $("#flutter_union_view_type_dialog");
    var info_view_layer_union_bg = $("#info_view_layer_union_bg");
    dialog.append(ret);
    dialog.css("margin-left",info_view_layer_union_bg.offset().left + "px");
    dialog.css("margin-top",(info_view_layer_union_bg.offset().top + 40) + "px");
    document.getElementById("flutter_union_view_type_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_flutter_union_view_type_dialog();
    });
    //添加点击事件
    dialog.find("*[class*='define_view_box_view']").on({
        click: function (event) {
            var text = $(this).text();
            union_view_type_callback(text);
            hide_flutter_union_view_type_dialog();
            event.stopPropagation();
        }
    });
}

function show_flutter_union_view_type_dialog() {
    show_dialog("flutter_union_view_type_dialog");
}
function hide_flutter_union_view_type_dialog() {
    hide_dialog("flutter_union_view_type_dialog");
}

// 控件合成 - 安卓



// 设置弹框模块

var software_set_dialog_is_init = false;
function init_software_set_dialog(){
    if (software_set_dialog_is_init == true)return;
    software_set_dialog_is_init = true;

    var templateValue = document.getElementById('tmpl-set-dialog').innerHTML.replace(/^\n|\s+$| {6}/g,'');
    var dialog = $("#software_set_dialog");
    dialog.append(templateValue);
    document.getElementById("software_set_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_software_set_dialog();
    });
}

function show_software_set_dialog() {
    show_dialog("software_set_dialog");
}
function hide_software_set_dialog() {
    hide_dialog("software_set_dialog");
}

// 设置弹框模块


// 切换页面模块

var switch_page_dialog_is_init = false;
function init_switch_page_dialog(){
    if (switch_page_dialog_is_init == true)return;
    switch_page_dialog_is_init = true;
    document.getElementById("switch_page_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_switch_page_dialog();
    });
}

function show_switch_page_dialog() {
    show_dialog("switch_page_dialog");
    show_switch_page_info();
}

function hide_switch_page_dialog() {
    hide_dialog("switch_page_dialog");
}

// 切换页面模块

// 编辑模板弹窗模块

var edit_code_template_dialog_is_init = false;
function init_code_template_dialog(){
    if (edit_code_template_dialog_is_init == true)return;
    edit_code_template_dialog_is_init = true;

    document.getElementById("edit_code_template_dialog").addEventListener('click', function (ev) {
        if (ev.target.nodeName === 'DIALOG')hide_edit_code_template_dialog();
    });
}

function show_edit_code_template_dialog() {
    init_code_template_dialog();
    show_dialog("edit_code_template_dialog");
    show_edit_code_template_page_info();
}

function hide_edit_code_template_dialog() {
    hide_dialog("edit_code_template_dialog");
}

// 编辑模板弹窗模块

//------------------- 控件Dialog弹窗显示或隐藏 模块 -------------------
