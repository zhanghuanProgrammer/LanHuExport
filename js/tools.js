

//------------------- 界面html 模块 -------------------

//添加操作模块点击事件
document.getElementById("all_visiable_img").onclick = function() {
    showToast("已全部选中显示");
    $('*[class*="page_copy"]').find("*").css({"visibility":"visible"});
    //$('*[class*="page_copy"]').css({"visibility":"visible"});
};
document.getElementById("all_invisiable_img").onclick = function() {
    showToast("已全部隐藏清除");
    $('*[class*="page_copy"]').find("*").css({"visibility":"hidden"});
    //$('*[class*="page_copy"]').css({"visibility":"hidden"});
};
document.getElementById("software_set_img").onclick = function() {
    init_software_set_dialog();
    show_software_set_dialog();
};
document.getElementById("help_img").onclick = function() {
    window.open("https://www.jianshu.com/p/7909a7a7b5b7");
};
document.getElementById("switch_page_div").onclick = function() {
    init_switch_page_dialog();
    show_switch_page_dialog();
};


var switch_ios_img = document.getElementById("switch_ios_img");
var switch_android_img = document.getElementById("switch_android_img");
var switch_swift_img = document.getElementById("switch_swift_img");
var switch_flutter_img = document.getElementById("switch_flutter_img");
var switch_define_img = document.getElementById("switch_define_img");

function setCurLan(lan) {
    if (cur_lan == lan)return;
    cur_lan = lan;
    saveStorageCurLan();
    if (isIOS()) {
        showToast("已切换成 iOS");
        $("#export_btn_img").attr("src","https://upload-images.jianshu.io/upload_images/14003450-c89d154f59ba4ab6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
        $("#export_btn_text").text("导出iOS整页布局");
    }
    if (isANDROID()) {
        showToast("已切换成 Android");
        $("#export_btn_img").attr("src","https://upload-images.jianshu.io/upload_images/14003450-6bbeafd5410d6d1b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
        $("#export_btn_text").text("导出Android整页布局");
    }
    if (isDEFINE()) {
        showToast("已切换成 自定义");
        $("#export_btn_img").attr("src","https://upload-images.jianshu.io/upload_images/14003450-25730904fbc4f005.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
        $("#export_btn_text").text("导出自定义整页布局");
    }
    if (isFLUTTER()) {
        showToast("已切换成 Flutter");
        $("#export_btn_img").attr("src","https://upload-images.jianshu.io/upload_images/14003450-b8ea934846d54842.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
        $("#export_btn_text").text("导出Flutter整页布局");
    }
    if (isSWIFT()) {
        showToast("已切换成 Swift");
        $("#export_btn_img").attr("src","https://upload-images.jianshu.io/upload_images/14003450-aab36867ca011e9a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
        $("#export_btn_text").text("导出Swift整页布局");
    }
    $("#switch_ios_img").css("opacity",isIOS() ? 1 : 0.3);
    $("#switch_android_img").css("opacity",isANDROID() ? 1 : 0.3);
    $("#switch_flutter_img").css("opacity",isFLUTTER() ? 1 : 0.3);
    $("#switch_define_img").css("opacity",isDEFINE() ? 1 : 0.3);
    $("#switch_swift_img").css("opacity",isSWIFT() ? 1 : 0.3);
    clearSelStatus();
}

function loadStorageCurLan() {
    if (!db_isSupportStorage())return;
    var lan = localStorage.getItem("cur_lan");
    if (lan && lan.length > 0){
        setCurLan(parseInt(lan));
    }
}

function saveStorageCurLan() {
    if (!db_isSupportStorage())return;
    localStorage.setItem("cur_lan",""+cur_lan);
}

loadStorageCurLan();

//添加切换语言模块点击事件
switch_ios_img.onclick = function() {
    if (DevelopDone_Lan_ios){
        setCurLan(Develop_Lan_ios);
    }else {
        showToast("iOS 功能开发中...");
    }
};
switch_android_img.onclick = function() {
    if (DevelopDone_Lan_android){
        setCurLan(Develop_Lan_android);
    }else {
        showToast("Android 功能开发中...");
    }
};
switch_swift_img.onclick = function() {
    if (DevelopDone_Lan_swift){
        setCurLan(Develop_Lan_swift);
    }else {
        showToast("Swift 功能开发中...");
    }
};
switch_flutter_img.onclick = function() {
    if (DevelopDone_Lan_flutter){
        setCurLan(Develop_Lan_flutter);
    }else {
        showToast("Flutter 功能开发中...");
    }
};
switch_define_img.onclick = function() {
    if (DevelopDone_Lan_define){
        setCurLan(Develop_Lan_define);
    }else {
        showToast("自定义语音 功能开发中...");
    }
};

//添加事件
var longTapClassName = "";
var page_copy_sel_view_class = null;
var timeout;
var timeout_copy;
function checkIsLongTapView(className){var ret = className == longTapClassName;longTapClassName = "";return ret;}
function page_element_add_event() {
    $('*').css({"visibility":"visible"});

    //左边页面page面板的点击和长按,鼠标经过和离开
    $('*[class^="page "]').find("*").on({
        mousedown: function(event) {
            var className = $(this).prop("class");
            timeout = setTimeout(function() {
                //长按事件,将整个块选中或者隐藏
                var view = $('*[class*="page_copy"]').find("*[class*='"+className+"']");
                var visibility = view.css('visibility');
                if(visibility == 'hidden'){
                    view.css({"visibility":"visible"});
                    view.eq(0).find("*").css({"visibility":"visible"});
                }else{
                    view.css({"visibility":"hidden"});
                    view.eq(0).find("*").css({"visibility":"hidden"});
                }
                longTapClassName = className;
            }, 500);
            event.stopPropagation();
        },
        mouseup: function(event) {
            clearTimeout(timeout);
            event.stopPropagation();
        },
        mouseout: function(event) {
            clearTimeout(timeout);
            event.stopPropagation();
        },
        click: function (event) {
            $(this).css({"outline":"red solid 1px"});
            var className = $(this).prop("class");
            if(checkIsLongTapView(className))return;
            var view = $('*[class*="page_copy"]').find("*[class*='"+className+"']");
            var visibility = view.css('visibility');
            if(visibility == 'hidden'){
                view.css({"visibility":"visible"});
            }else{
                view.css({"visibility":"hidden"});
            }
            event.stopPropagation();
        },
        mouseover: function (event) {
            $(this).css({"outline":"red dashed 1px"});
            //event.stopPropagation();
        },
        mouseout: function (event) {
            $(this).css({"outline":""});
            //event.stopPropagation();
        }
    });

    //右边页面page面板的点击和长按,鼠标经过和离开
    $('*[class^="page_copy"]').find("*").on({
        mousedown: function(event) {
            var className = $(this).prop("class");
            timeout_copy = setTimeout(function() {
                //长按事件,将整个块选中或者隐藏
                longTapClassName = className;

                //长按也是选中
                $('*[class^="page_copy"]').find("*").css({"outline":""});
                if(page_copy_sel_view_class != null){
                    if(className == page_copy_sel_view_class){
                        page_copy_sel_view_class = "";
                        return;
                    }
                }
                var view = $('*[class*="page_copy"]').find("*[class*='"+className+"']");
                view.css({"outline":"blue solid 1px"});
                page_copy_sel_view_class = className;
                show_select_view(className,false,true);
            }, 750);
            event.stopPropagation();
        },
        mouseup: function(event) {
            clearTimeout(timeout_copy);
            event.stopPropagation();
        },
        mouseout: function(event) {
            clearTimeout(timeout_copy);
            event.stopPropagation();
        },
        click: function (event) {
            var className = $(this).prop("class");
            if(checkIsLongTapView(className)){event.stopPropagation();return;}
            $('*[class^="page_copy"]').find("*").css({"outline":""});
            if(page_copy_sel_view_class != null){
                if(className == page_copy_sel_view_class){
                    page_copy_sel_view_class = "";
                    show_select_view(page_copy_sel_view_class,true,false);
                    event.stopPropagation();
                    return;
                }
            }
            $(this).css({"outline":"blue solid 1px"});
            page_copy_sel_view_class = className;
            show_select_view(page_copy_sel_view_class,true,false);
            event.stopPropagation();
        },
        mouseover: function (event) {
            if(page_copy_sel_view_class != null){
                var className = $(this).prop("class");
                if(className == page_copy_sel_view_class){
                    event.stopPropagation();
                    return;
                }
            }
            $(this).css({"outline":"blue dashed 1px"});
            //event.stopPropagation();
        },
        mouseout: function (event) {
            if(page_copy_sel_view_class != null){
                var className = $(this).prop("class");
                if(className == page_copy_sel_view_class){
                    event.stopPropagation();
                    return;
                }
            }
            $(this).css({"outline":""});
            //event.stopPropagation();
        }
    });
}
page_element_add_event();

function clickSelViewByClassName(className) {
    $('*[class^="page_copy"]').find("*").css({"outline":""});
    var view = $('*[class*="page_copy"]').find("*[class*='"+className+"']");
    view.css({"outline":"blue solid 1px"});
    page_copy_sel_view_class = className;
    show_select_view(page_copy_sel_view_class,true,false);
}

function clearSelStatus() {
    $('*[class^="page_copy"]').find("*").css({"outline":""});
    page_copy_sel_view_class = "";
    longTapClassName = "";
    show_select_view(page_copy_sel_view_class,true,false);
}

//编辑模板按钮
document.getElementById("edit_code_template").onclick = function() {
    edit_code_template();
};

//复制代码按钮
document.getElementById("copy_code_btn").onclick = function() {
    var text = info_view_code.innerText;
    text = clearCodeSpecialChar(text);
    copyClipboard(text);
};

//生成xml代码按钮
document.getElementById("export_xml").onclick = function() {
    export_xml();
};

//------------------- 界面html 模块 -------------------