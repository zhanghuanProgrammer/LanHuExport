
//------------------- 编辑代码模板 模块 -------------------

var edit_code_template_sure_btn = document.getElementById("edit_code_template_sure_btn");
var edit_code_template_reset_btn = document.getElementById("edit_code_template_reset_btn");

//保存模板点击事件
edit_code_template_sure_btn.onclick = function() {
    var code_template = $("#edit_code_template_textarea").val();

    //先检查输入框数据是否正常
    if (code_template == null || code_template.length <= 0){showToast("请填写模板");return}

    //保存模板数据
    db_saveData_no_page(Code_template,code_template,Save_Code_template());

    //隐藏弹窗
    hide_edit_code_template_dialog();

    //重新刷新页面
    window.location.reload();
};

//重置模板点击事件
edit_code_template_reset_btn.onclick = function() {
    $("#edit_code_template_textarea").val(code_template_default());
};

/**
 * 点击编辑模板按钮,弹出编辑模板弹窗
 */
function edit_code_template() {
    show_edit_code_template_dialog();
}

/**
 * 将保存的数据显示到输入框中
 */
function show_edit_code_template_page_info() {
    var code_template = stringEmptyDefault(db_getData_no_page(Code_template,Save_Code_template()),code_template_default());
    $("#edit_code_template_textarea").val(code_template);
}

function code_template_default() {
    var templateViewsValue = "";
    if (isIOS()) templateViewsValue = document.getElementById('tmpl-ios-code-views').innerHTML.replace(/^\n|\s+$| {6}/g,'');
    if (isSWIFT()) templateViewsValue = document.getElementById('tmpl-swift-code-views').innerHTML.replace(/^\n|\s+$| {6}/g,'');
    if (isFLUTTER()) templateViewsValue = document.getElementById('tmpl-flutter-views').innerHTML.replace(/^\n|\s+$| {6}/g,'');
    if (isANDROID()) templateViewsValue = document.getElementById('tmpl-android-views').innerHTML.replace(/^\n|\s+$| {6}/g,'');
    if (isDEFINE()) templateViewsValue = document.getElementById('tmpl-define-views').innerHTML.replace(/^\n|\s+$| {6}/g,'');
    return templateViewsValue;
}

var cur_code_template_ios = "";
var cur_code_template_swift = "";
var cur_code_template_flutter = "";
var cur_code_template_android = "";
var cur_code_template_define = "";

/**
 * 如果已经保存了自定义模板,那么页面在初始化的时候,模板就需要被加载应用
 */
function use_edit_code_template_info() {
    var code_template = stringEmptyDefault(db_getData_no_page(Code_template,Save_Code_template()),code_template_default());
    if (code_template && code_template.length > 0){
        if (isIOS()){
            cur_code_template_ios = code_template;
        }
        if (isSWIFT()){
            cur_code_template_swift = code_template;
        }
        if (isFLUTTER()){
            cur_code_template_flutter = code_template;
        }
        if (isANDROID()){
            cur_code_template_android = code_template;
        }
        if (isDEFINE()){
            cur_code_template_define = code_template;
        }
    }
}

use_edit_code_template_info();

function get_template(){
    if (isIOS()){
        if (cur_code_template_ios.length <= 0)cur_code_template_ios = code_template_default();
        return cur_code_template_ios;
    }
    if (isSWIFT()){
        if (cur_code_template_swift.length <= 0)cur_code_template_swift = code_template_default();
        return cur_code_template_swift;
    }
    if (isFLUTTER()){
        if (cur_code_template_flutter.length <= 0)cur_code_template_flutter = code_template_default();
        return cur_code_template_flutter;
    }
    if (isANDROID()){
        if (cur_code_template_android.length <= 0)cur_code_template_android = code_template_default();
        return cur_code_template_android;
    }
    if (isDEFINE()){
        if (cur_code_template_define.length <= 0)cur_code_template_define = code_template_default();
        return cur_code_template_define;
    }
}

//------------------- 编辑代码模板 模块 -------------------
