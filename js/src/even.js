// build time:Fri Feb 09 2018 22:40:42 GMT+0800 (中国标准时间)
(function(e){"use strict";var t={};t.backToTop=function(){var t=$("#back-to-top");$(e).scroll(function(){if($(e).scrollTop()>100){t.fadeIn(1e3)}else{t.fadeOut(1e3)}});t.click(function(){$("body,html").animate({scrollTop:0})})};t.mobileNavbar=function(){var e=$("#mobile-navbar");var t=$(".mobile-navbar-icon");var n=new Slideout({panel:document.getElementById("mobile-panel"),menu:document.getElementById("mobile-menu"),padding:180,tolerance:70});n.disableTouch();t.click(function(){n.toggle()});n.on("beforeopen",function(){e.addClass("fixed-open");t.addClass("icon-click").removeClass("icon-out")});n.on("beforeclose",function(){e.removeClass("fixed-open");t.addClass("icon-out").removeClass("icon-click")});$("#mobile-panel").on("touchend",function(){n.isOpen()&&t.click()})};t.toc=function(){var t=20;var n=$(".post-toc"),o=$(".post-footer");if(n.length){var i=n.offset().top-t;var a=o.offset().top-n.height()-t;var c={start:{position:"absolute",top:i},process:{position:"fixed",top:t},end:{position:"absolute",top:a}};$(e).scroll(function(){var t=$(e).scrollTop();if(t<i){n.css(c.start)}else if(t>a){n.css(c.end)}else{n.css(c.process)}})}var s=30;var l=$(".toc-link"),r=$(".headerlink");var f=$.map(r,function(e){return $(e).offset().top});$(e).scroll(function(){var t=$(e).scrollTop();for(var n=0;n<l.length;n++){var o=n+1===l.length,i=f[n]-s,a=o?Infinity:f[n+1]-s;if(i<t&&t<=a){$(l[n]).addClass("active")}else{$(l[n]).removeClass("active")}}})};t.fancybox=function(){if($.fancybox){$(".post").each(function(){$(this).find("img").each(function(){$(this).wrap('<a class="fancybox" href="'+this.src+'" title="'+this.alt+'"></a>')})});$(".fancybox").fancybox({openEffect:"elastic",closeEffect:"elastic"})}};t.visits=function(){var e=$(".post-visits");function t(e,t){var n=e.text()+" "+t;e.text(n)}function n(n){var o=new AV.Query(n);var i=e.data("url").trim();var a=e.data("title").trim();o.equalTo("url",i);o.find().then(function(o){if(o.length>0){var c=o[0];c.save(null,{fetchWhenSave:true}).then(function(e){e.increment("time",1);return e.save()}).then(function(n){t(e,n.get("time"))})}else{var s=new n;s.set("title",a);s.set("url",i);s.set("time",1);s.save().then(function(n){t(e,s.get("time"))})}},function(e){console.log("Error:"+e.code+" "+e.message)})}function o(n){e.each(function(){var e=$(this);var o=new AV.Query(n);var i=e.data("url").trim();o.equalTo("url",i);o.find().then(function(n){if(n.length===0){t(e,0)}else{var o=n[0];t(e,o.get("time"))}},function(e){console.log("Error:"+e.code+" "+e.message)})})}if(typeof AV==="object"){var i=AV.Object.extend("Counter");if(e.length===1){n(i)}else{o(i)}}};e.Even=t})(window);
//rebuild by neat 