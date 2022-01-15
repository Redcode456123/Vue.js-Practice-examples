jQuery(document).ready(function(){

/*************** Staticfooter script ***************/
var window_height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var body_height = jQuery(document.body).height();
var content = jQuery("div[id$='content_margin']");
if(body_height < window_height){
differ = (window_height - body_height);
content_height = content.height() + differ;
jQuery("div[id$='content_margin']").css({"min-height":content_height+"px"});
}

/* Slideshow Function Call */

if(jQuery('#ttr_slideshow_inner').length){
jQuery('#ttr_slideshow_inner').TTSlider({
stopTransition:false ,
slideShowSpeed:2000, begintime:1000,cssPrefix: 'ttr_'
});
}
/* Animation Function Call */
jQuery().TTAnimation({cssPrefix: 'ttr_'});

/*************** Hamburgermenu slideleft script ***************/
jQuery('button#nav-expander').on('click',function(e){
e.preventDefault();
jQuery('body').toggleClass('nav-expanded');
});

/*************** Menu click script ***************/
jQuery('ul.ttr_menu_items.nav li [data-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
if(jQuery(this).parent().hasClass('open')){
location.assign(jQuery(this).attr('href'));
}
} else {
if(window_width > 991 && jQuery(this).attr('href')){
window.location.href = jQuery(this).attr('href'); 
}
else{
if(jQuery(this).parent().hasClass('open')){
location.assign(jQuery(this).attr('href'));
}
}
}
});

/*************** Sidebarmenu click script ***************/
jQuery('ul.ttr_vmenu_items.nav li [data-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if(window_width > 991 && jQuery(this).attr('href')){
window.location.href = jQuery(this).attr('href'); 
}
else{
if(jQuery(this).parent().hasClass('open')){
location.assign(jQuery(this).attr('href'));
}
}
});

/*************** Tab menu click script ***************/
jQuery('.ttr_menu_items ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 992){
event.preventDefault();
event.stopPropagation();
jQuery(this).parent().siblings().removeClass('open');
jQuery(this).parent().toggleClass(function() {
if (jQuery(this).is(".open") ) {
window.location.href = jQuery(this).children("[data-toggle=dropdown]").attr('href'); 
return "";
} else {
return "open";
}
});
}
});

/*************** Tab-Sidebarmenu script ***************/
jQuery('.ttr_vmenu_items ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 992){
event.preventDefault();
event.stopPropagation();
jQuery(this).parent().siblings().removeClass('open');
jQuery(this).parent().toggleClass(function() {
if (jQuery(this).is(".open") ) {
window.location.href = jQuery(this).children("[data-toggle=dropdown]").attr('href'); 
return "";
} else {
return "open";
}
});
}
});
/*************** Html video script ***************/
var objects = ['iframe[src*="youtube.com"]','iframe[src*="youtu.be"]', 'object'];
for(var i = 0 ; i < objects.length ; i++){
if (jQuery(objects[i]).length > 0) {
jQuery(objects[i]).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
jQuery(objects[i]).addClass('embed-responsive-item');
}
}
});
