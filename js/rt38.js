window.rt38_make_page_toc=function(){var e,t;return e={level1:-1,level2:0,level3:0},t="",$("article div > h2, article div > h3, article div > h4").each(function(l,a){var r,n,i,h,c,v,d;switch(n="bar",i="",$(this)[0].nodeName.toLowerCase()){case"h2":e.level1++,n=""+e.level1,i="level1",t="h2";break;case"h3":"h2"!==t?e.level2++:e.level2=0,n=e.level1+"."+e.level2,i="level2",t="h3";break;case"h4":"h4"===t?e.level3++:e.level3=0,n=e.level1+"."+e.level2+"."+e.level3,i="level3",t="h4"}return r=$(this).text().replace(/[ ,.?!%()\[\]\{\}&-]/gi,"_").replace(/_{2,}/,"_"),d=this.innerHTML,d=n+". "+d,this.innerHTML=d,$(this).attr("id",r),c=document.createElement("p"),h=document.createElement("a"),v=document.createElement("a"),$(h).attr("href","#"+r),h.innerHTML=d,c.appendChild(h),$(c).addClass(i),$(v).attr("href","#top"),$(v).attr("class","toplink"),$(v).attr("title","Go to top of page"),v.appendChild(document.createTextNode("➚")),this.appendChild(v),$(".toc").each(function(){return $(this).append(c)})})};