

//------------------- 切换界面 模块 -------------------

var switch_page_sure_btn = document.getElementById("switch_page_sure_btn");
var switch_page_reset_btn = document.getElementById("switch_page_reset_btn");

//切换页面点击事件
switch_page_sure_btn.onclick = function() {
    var index_html_text = $("#index_html_textarea").val();
    var index_css_text = $("#index_css_textarea").val();
    var common_css_text = $("#common_css_textarea").val()

    //先检查3个输入框数据是否正常
    if (index_html_text == null || index_html_text.length <= 0){showToast("请复制粘贴蓝湖 index.html 的代码");return}
    if (!index_html_text.includes("<body>") || !index_html_text.includes("</body>")){showToast("index.html 代码内容不正确");return}
    if (index_css_text == null || index_css_text.length <= 0){showToast("请复制粘贴蓝湖 index.css 的代码");return}
    if (common_css_text == null || common_css_text.length <= 0){showToast("请复制粘贴蓝湖 common.css 的代码");return}

    //清空当前页面的数存储据
    db_clearCurPage();

    //保存当前3个框数据
    db_saveData("index_html_text",index_html_text,"");
    db_saveData("index_css_text",index_css_text,"");
    db_saveData("common_css_text",common_css_text,"");

    //隐藏弹窗
    hide_switch_page_dialog();

    //重新刷新页面
    window.location.reload();
};

//切换页面重置按钮点击事件
switch_page_reset_btn.onclick = function() {
    //清空当前页面的数存储据
    db_clearCurPage();

    //保存当前3个框数据
    db_saveData("index_html_text","","");
    db_saveData("index_css_text","","");
    db_saveData("common_css_text","","");

    //隐藏弹窗
    hide_switch_page_dialog();

    //重新刷新页面
    window.location.reload();
};

/**
 * 切换页面
 */
function switch_page(index_html_text,index_css_text,common_css_text) {
    var index_html_body_text = mid("<body>","</body>",index_html_text);
    //移除某个元素
    $('*[class^="page"]').remove();
    //添加新元素
    re_add_elements_for_new_page(index_html_body_text);
    //添加元素事件
    page_element_add_event();
    //动态添加样式
    $('#index_css').remove();
    $('#common_css').remove();
    var style = document.createElement('style');
    style.innerText = (index_css_text + common_css_text).replaceAll("\n","");
    document.head.appendChild(style);
}

/**
 * 将保存的数据显示到3个输入框中
 */
function show_switch_page_info() {
    var index_html_text = db_getData("index_html_text","");
    var index_css_text = db_getData("index_css_text","");
    var common_css_text = stringEmptyDefault(db_getData("common_css_text",""),common_css_text_default());
    $("#index_html_textarea").val(index_html_text);
    $("#index_css_textarea").val(index_css_text);
    $("#common_css_textarea").val(common_css_text);
}

/**
 * 如果已经切换了页面,那下次进来,直接显示保存的页面
 */
function show_switch_page_now() {
    var index_html_text = db_getData("index_html_text","");
    var index_css_text = db_getData("index_css_text","");
    var common_css_text = stringEmptyDefault(db_getData("common_css_text",""),common_css_text_default());
    if (index_html_text && index_css_text && common_css_text && index_html_text.length > 0 && index_css_text.length > 0 && common_css_text.length > 0){
        switch_page(index_html_text,index_css_text,common_css_text);
    }
}

show_switch_page_now();

/**
 * 看了一下蓝湖的common.css代码,好像都是一样的,所以这里返回默认的common.css代码内容
 */
function common_css_text_default() {
    return "body * {\n  box-sizing: border-box;\n  flex-shrink: 0;\n}\nbody {\n  font-family: PingFangSC-Regular, Roboto, Helvetica Neue, Helvetica, Tahoma,\nArial, PingFang SC-Light, Microsoft YaHei;\n}\ninput {\n  background-color: transparent;\n  border: 0;\n}\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 1px solid transparent;\n  outline: none;\n  background-color: transparent;\n}\nbutton:active {\n  opacity: 0.6;\n}\n.flex-col {\n  display: flex;\n  flex-direction: column;\n}\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n.justify-start {\n  display: flex;\n  justify-content: flex-start;\n}\n.justify-center {\n  display: flex;\n  justify-content: center;\n}\n.justify-end {\n  display: flex;\n  justify-content: flex-end;\n}\n.justify-evenly {\n  display: flex;\n  justify-content: space-evenly;\n}\n.justify-around {\n  display: flex;\n  justify-content: space-around;\n}\n.justify-between {\n  display: flex;\n  justify-content: space-between;\n}\n.align-start {\n  display: flex;\n  align-items: flex-start;\n}\n.align-center {\n  display: flex;\n  align-items: center;\n}\n.align-end {\n  display: flex;\n  align-items: flex-end;\n}\n";
}

//------------------- 切换界面 模块 -------------------