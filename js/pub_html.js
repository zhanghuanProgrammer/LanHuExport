


//------------------- 公用模板 模块 -------------------

;(function () {

    //操作模板
    document.writeln("<!-- 操作模板 -->");
    document.writeln("		<script type=\'text/x-tmpl\' id=\'operating-area\'>");
    document.writeln("			<div class=\'operating_div\'>");
    document.writeln("				<div class=\'operating_subdiv\'>");
    document.writeln("					<div class=\'operating_area\'><img id=\'all_visiable_img\' title=\'全部选择\' class=\'operating_area_img\' src=\'https://upload-images.jianshu.io/upload_images/14003450-238e2873b7a15ddf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\'/></div>");
    document.writeln("					<div class=\'operating_area\'><img id=\'all_invisiable_img\' title=\'清空选择\' class=\'operating_area_img\' src=\'https://upload-images.jianshu.io/upload_images/14003450-8490e8c102507e34.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\'/></div>");
    document.writeln("					<div class=\'operating_area\'><img id=\'software_set_img\' title=\'设置\' class=\'operating_area_img\' src=\'https://upload-images.jianshu.io/upload_images/14003450-f0a7bf1de11869ac.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\'/></div>");
    document.writeln("					<div class=\'operating_area\'><img id=\'help_img\' title=\'查看帮助\' class=\'operating_area_img\' src=\'https://upload-images.jianshu.io/upload_images/14003450-5797903b1d4f236c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\'/></div>");
    document.writeln("				</div>");
    document.writeln("			</div>");
    document.writeln("		</script>");


    //语言切换模板
    document.writeln("<!-- 语言切换模板 -->");
    document.writeln("		<script type=\'text/x-tmpl\' id=\'operating-lan\'>");
    document.writeln("			<div class=\'operating_lan_div\'>");
    document.writeln("				<div class=\'operating_lan_subdiv\'>");
    document.writeln("					<div id=\'switch_ios_img\' style=\'opacity:1;\' class=\'operating_area\'><img title=\'切换成iOS\' class=\'operating_area_img\' src=\'https://upload-images.jianshu.io/upload_images/14003450-fa13159806e8df6c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\'/></div>");
    document.writeln("					<div id=\'switch_android_img\' style=\'opacity:0.3;\' class=\'operating_area\'><img title=\'切换成Android\' class=\'operating_area_img\' src=\'https://upload-images.jianshu.io/upload_images/14003450-8664c77839bdd505.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\'/></div>");
    document.writeln("					<div id=\'switch_swift_img\' style=\'opacity:0.3;\' class=\'operating_area\'><img title=\'切换成Swift\' class=\'operating_area_img\' src=\'https://upload-images.jianshu.io/upload_images/14003450-a7fe401b30770104.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\'/></div>");
    document.writeln("					<div id=\'switch_flutter_img\' style=\'opacity:0.3;\' class=\'operating_area\'><img title=\'切换成Flutter\' class=\'operating_area_img\' src=\'https://upload-images.jianshu.io/upload_images/14003450-ad790fab0486b973.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\'/></div>");
    document.writeln("				</div>");
    document.writeln("			</div>");
    document.writeln("		</script>");


    //控件信息显示模块
    document.writeln("<script type=\'text/x-tmpl\' id=\'show_info_view\'>");
    document.writeln("		<div id=\'show_info_view_bg\' class=\'fuceng\' style=\'margin-left: 0px;\'>");
    document.writeln("			<div class=\'subtitle\'>控件信息</div>");
    document.writeln("			<div style=\'height:10px;\'></div>");
    document.writeln("			<div class=\'flex-row\'>");
    document.writeln("				<span class=\'item_title\'>类型</span>");
    document.writeln("				<div id=\'info_view_type_bg\' class=\'item_value flex-row\' style=\'pointer-events: none\'>");
    document.writeln("					<div style=\'width: 189px;height: 40px;\' class=\'flex-row\'>");
    document.writeln("						<div style=\'width: 150px;min-width: 150px;height: 40px;\'>");
    document.writeln("							<span id=\'info_view_type\'>未选择</span>");
    document.writeln("						</div>");
    document.writeln("						<img id=\'info_view_type_img\' style=\'pointer-events: none;opacity: 0;height: 15px;width: 15px;margin-left: 8px;margin-top: 12px;\' src=\'https://upload-images.jianshu.io/upload_images/14003450-345864712f07d617.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\'>");
    document.writeln("					</div>");
    document.writeln("				</div>");
    document.writeln("			</div>");
    document.writeln("");
    document.writeln("			<div style=\'height:10px;\'></div>");
    document.writeln("			<div class=\'flex-row\'>");
    document.writeln("				<span class=\'item_title\'>命名</span>");
    document.writeln("				<div id=\'info_view_define_name_bg\' class=\'item_input_value flex-row\' style=\'pointer-events: none\'>");
    document.writeln("					<div style=\'width: 189px;height: 40px;\' class=\'flex-row\'>");
    document.writeln("						<div style=\'width: 150px;min-width: 150px;height: 40px;\'>");
    document.writeln("							<input id=\'info_view_define_name\' style=\'width: 189px;height: 40px; border: 1px;background: #f7f9fc;padding: 0px 30px 0px 8px;\' placeholder=\'未命名\'>");
    document.writeln("						</div>");
    document.writeln("						<img id=\'info_view_define_name_img\' style=\'pointer-events: none; opacity: 0;height: 15px;width: 15px;margin-left: 15px;margin-top: 12px;\' src=\'https://upload-images.jianshu.io/upload_images/14003450-ce1bfd1764a7976a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\'>");
    document.writeln("					</div>");
    document.writeln("				</div>");
    document.writeln("			</div>");
    document.writeln("");
    document.writeln("			<div style=\'height:10px;\'></div>");
    document.writeln("			<div class=\'flex-row\'>");
    document.writeln("				<span class=\'item_title\'>合成</span>");
    document.writeln("				<div id=\'info_view_layer_union_bg\' class=\'item_value flex-row\' style=\'pointer-events: none\'>");
    document.writeln("					<div style=\'width: 189px;height: 40px;\' class=\'flex-row\'>");
    document.writeln("						<div style=\'width: 150px;min-width: 150px;height: 40px;\'>");
    document.writeln("							<span id=\'info_view_layer_union\'>未选择</span>");
    document.writeln("						</div>");
    document.writeln("						<img id=\'info_view_layer_union_img\' style=\'pointer-events: none;opacity: 0; height: 13px;width: 13px;margin-left: 8px;margin-top: 13px;\' src=\'https://upload-images.jianshu.io/upload_images/14003450-fdf4737aadb3c28f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\'>");
    document.writeln("					</div>");
    document.writeln("				</div>");
    document.writeln("			</div>");
    document.writeln("");
    document.writeln("			<div style=\'height:10px;\'></div>");
    document.writeln("			<div class=\'flex-col\'>");
    document.writeln("				<span class=\'item_title\'>代码</span>");
    document.writeln("				<p id=\'info_view_code\' class=\'code_item_value\' style=\'width: 230px; height: 300px;max-height: 300px; margin-left: 24px;overflow: auto;\'>");
    document.writeln("				</p>");
    document.writeln("			</div>");
    document.writeln("			<div style=\'height:50px;\'></div>");
    document.writeln("");
    document.writeln("			<div class=\'view-btn\'>");
    document.writeln("				<div id=\'export_xml\' class=\'view flex-row\'>");
    document.writeln("					<div style=\'margin: auto;\'>");
    document.writeln("						<img id=\'export_btn_img\' style=\'height: 20px;width: 20px;margin-top: 9px;position: absolute;\' src=\'https://upload-images.jianshu.io/upload_images/14003450-c89d154f59ba4ab6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240\'/>");
    document.writeln("						<span id=\'export_btn_text\' style=\'margin-left: 25px;\'>生成iOS布局</span>");
    document.writeln("					</div>");
    document.writeln("				</div>");
    document.writeln("			</div>");
    document.writeln("");
    document.writeln("		</div>");
    document.writeln("		</script>");

    //软件介绍模块
    document.writeln("<script type=\'text/x-tmpl\' id=\'tmpl-set-dialog\'>");
    document.writeln("			<div>");
    document.writeln("			<p class=\'set_ui_css\'>");
    document.writeln("				软件版本:v1.0.1<br><br>");
    document.writeln("				软件功能介绍:<br>");
    document.writeln("				蓝湖辅助工具,从网页界面上直接生成控件代码,包含文本,颜色,字体大小,控件大小边距,圆角等等属性.<br>");
    document.writeln("				代码开源,代码还算规范,注释清晰,正打算学习网页开发的朋友可以练手<br><br>");
    document.writeln("				软件使用介绍:<br>");
    document.writeln("				1.点击左上角切换页面,只需要从蓝湖复制两串代码,就可以切换成你指定的蓝湖界面.<br>");
    document.writeln("				2.左边面板,鼠标移到界面元素上,会有对应的虚线. 可单击和长按来进行选中和不选中,单击是针对单独的控件,长按是针对该控件以及子控件.<br>");
    document.writeln("				3.中间面板,鼠标移到界面元素上,会有对应的虚线. 可单击和长按来进行查看控件的生成代码,单击是查看该控件以及子控件的组合代码. 长按是仅查看该控件的代码,不包含子控件.<br><br>");
    document.writeln("				正在开发中的功能:<br>");
    document.writeln("				1.支持自动生成约束<br>");
    document.writeln("				2.支持Flutter语言模板生成<br>");
    document.writeln("				3.支持用户自定义语言模板<br><br>");
    document.writeln("				备注:使用中如有疑问或Bug,可查看帮助,或加QQ群:481431442(无需验证),或联系开发者微信号:13077821373(无需验证),如若未能即时回复,请谅解<br><br>");
    document.writeln("				开源地址1:<a href=\"https://github.com/zhanghuanProgrammer/LanHuExport\" target=\"_blank\">GitHub开源地址</a><br>");
    document.writeln("				开源地址2:<a href=\"https://download.csdn.net/download/qq_35166501/86565258?spm=1001.2014.3001.5503\" target=\"_blank\">CSDN资源下载(不需要币),GitHub访问不了时请从这里下载</a>");
    document.writeln("			</p>");
    document.writeln("		</div>");
    document.writeln("		</script>");

})(this);

//------------------- 公用模板 模块 -------------------



