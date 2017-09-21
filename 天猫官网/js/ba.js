/*
* @Author: zhangyanan
* @Date:   2017-09-19 18:31:20
* @Last Modified by:   zhangyanan
* @Last Modified time: 2017-09-19 21:28:05
*/
function getClass(classname,ranger){
		ranger=ranger||document;
	if(ranger.getElementsByClassName){
	  return ranger.getElementsByClassName(classname);
	}else{
		var newarr=[];
	    var all=ranger.getElementsByTagName("*");
	    for(var i=0;i<all.length;i++){
		// if(all[i].className==className){
		// 	newarr.push(all[i])
		// }
		// 
		if(checkClass(all[i].className,className)){
			newarr.push(all[i])
		}
	}
}
return newarr ;
}
function checkClass(className,classname){	
		var arr=className.split('');
		
			if(arr.includes(classname)){
               return true;
			
		}
		return false;
}

   //$('.box')[0].innerHTML="这次的"
	function $(select,ranger){
		ranger=ranger||document;
		var first=select.charAt(0);
		if(first=='.'){
			return getClass(select.substring(1))
		}else if(first=='#'){
			return ranger.getElementById(select.substring(1))
		}else if(/^[a-z][a-z1-6]{1,7}$/){
			return ranger.getElementsByTagName(select.substring(1))
		}
	}
