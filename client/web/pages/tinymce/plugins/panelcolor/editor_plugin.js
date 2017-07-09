(function(){var Dispatcher=tinymce.util.Dispatcher,extend=tinymce.extend,DOM=tinymce.DOM;var NAME="panelcolor";tinymce.PluginManager.requireLangPack('panelcolor');tinymce.create('tinymce.plugins.PanelColorPlugin',{init:function(ed,url){var t=this;t.ed=ed;t.url=url;ed.onPanelColorChanged=new Dispatcher(ed);if(false){ed.onPanelColorChanged.add(function(ed,c){alert("testing... event received "+ed.getElement()+", "+c)})}ed.addCommand('setPanelColor',function(ui,c){t._setPanelColor(c)});DOM.loadCSS(url+"/css/ui.css")},createControl:function(n,cm){if(n==NAME){var t=this,ed=t.ed,o={},v;if(ed.getParam('panelcolor_more_colors',1)){o.more_colors_func=function(){t._showPicker({color:t.control.value,func:function(co){t.control.setColor(co)}})}}if(v=ed.getParam('panelcolor_colors'))o.colors=v;if(v=ed.getParam('panelcolor_default_color'))o.default_color=v;o.title=NAME+'.desc';o.onselect=function(v){t._setPanelColor(c.value);ed.onPanelColorChanged.dispatch(ed,c.value)};o['class']=NAME;o.scope=t;t.control=c=cm.createColorSplitButton(n,o);return c}},getInfo:function(){return{longname:'PanelColor plugin',author:'Some author',authorurl:'http://www.whirled.com',infourl:'http://www.whirled.com',version:"1.0"}},_showPicker:function(v){var ed=this.ed;v=v||{};ed.windowManager.open({url:ed.theme.url+'/color_picker.htm',width:375+parseInt(ed.getLang('advanced.colorpicker_delta_width',0)),height:250+parseInt(ed.getLang('advanced.colorpicker_delta_height',0)),close_previous:false,inline:true},{input_color:v.color,func:v.func,theme_url:ed.theme.url})},_setPanelColor:function(c){var t=this;DOM.setStyle(t.ed.getBody(),'background-color',c)}});tinymce.PluginManager.add(NAME,tinymce.plugins.PanelColorPlugin)})();