/*!
 * StepWizard v0.3
 *
 * Copyright 2014 eastpiger
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */

function stepwizard_prev(handle){
	handle=handle.children("li.active");
	var t1=handle.parent().children().index(handle);
	if(t1==0){
		return(-1);
	}else{
		handle.prev().children("span[data-toggle=\"tab\"]").tab('show');
		return(0);
	}
}

function stepwizard_next(handle){
	handle=handle.children("li.active");
	var t1=handle.parent().children().index(handle);
	var t2=handle.parent().children().size();
	if(t1==t2){
		return(-1);
	}else{
		handle.next().children("span[data-toggle=\"tab\"]").tab('show');
		return(0);
	}
}

function stepwizard_to(handle,index){
	var t2=handle.children().size();
	if(index>=t2){
		return(-1);
	}else{
		handle.children("li:eq("+index+")").children("span[data-toggle=\"tab\"]").tab('show');
		return(0);
	}
}

function stepwizard_index(handle){
	handle=handle.children("li.active");
	return handle.parent().children().index(handle);
}

$(function(){	
	$(".nav-stepwizard > li").append("<div class=\"nav-stepwizard-dec\"></div>\n<div class=\"nav-stepwizard-dec-bg\"></div>");
	$(".nav-stepwizard.nav-stepwizard_unabled > li").append("<div class=\"nav-stepwizard-shelter\"></div>");
	$(".nav-stepwizard > li > span[data-toggle=\"tab\"]").on('show', function (e) {
		$(e.target).parent().removeClass("complete");
		$(e.target).parent().siblings().removeClass("complete");
		$(e.relatedTarget).parent().removeClass("active");
		$(e.target).parent().prevAll().addClass("complete");
		$(e.target).parent().addClass("active");
	})
})