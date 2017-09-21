/*
* @Author: zhangyanan
* @Date:   2017-09-18 18:21:57
* @Last Modified by:   zhangyanan
* @Last Modified time: 2017-09-20 14:00:10
*/
window.onload=function(){

   let list=document.getElementsByClassName('list')[0];
   let lis=list.getElementsByTagName('li');
   let xuan=document.getElementsByClassName('xuan');
   for(let i=0;i<lis.length;i++){
   	lis[i].onmouseover=function(){
   		xuan[i].style.display='block';
   	}
   	lis[i].onmouseout=function(){
   		xuan[i].style.display='none';
   	}
   }
   //let lunbo=document.getElementsByClassName('lunbo')[0];
   let lunbo=$(".lunbo")[0];
   let banner=$(".banner")[0];
   let yuan=document.getElementsByClassName('yuan')[0];
   let btn=yuan.getElementsByTagName('li')
   let imgs=lunbo.getElementsByTagName('li')
   let now=0;
    for(let i=0;i<btn.length;i++){   	
    	btn[i].onclick=function(){
          animate(imgs[now],{opacity:0}) 
          btn[now].style.background="#B6BCB5";                  
          animate(imgs[i],{opacity:1})
          btn[i].style.background="#fff"; 
          now=i;
      switch(i){     
      case 0:banner.style.background='#E8E8E8';break;
      case 1:banner.style.background='#CBE5CC';break;
      case 2:banner.style.background='#491830';break;
      case 3:banner.style.background='#7F22C3';break;
      case 4:banner.style.background='#E42E20';break;
      case 5:banner.style.background='#E8E8E8';break;
    }
           }    
  }

     let b;
     b=setInterval(move,5000);
     banner.onmouseover=function(){
      clearInterval(b);       
    }
    banner.onmouseout=function(){
      b=setInterval(move,5000);     
    }
    
    
    function move(){
      now++;
      if(now==imgs.length){
        now=0;
      }
      for(let i=0;i<=imgs.length;i++){
       animate(imgs[now],{opacity:1})
       btn[now].style.background="#fff";
       animate(imgs[i],{opacity:0})
       btn[i].style.background="#B6BCB5";
            
    switch(now){     
      case 0:banner.style.background='#E8E8E8';break;
      case 1:banner.style.background='#CBE5CC';break;
      case 2:banner.style.background='#491830';break;
      case 3:banner.style.background='#8938E7';break;
      case 4:banner.style.background='#E42E20';break;
      case 5:banner.style.background='#E8E8E8';break;
    }
}

    }
  }
   


	
	