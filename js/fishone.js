'use strict'
var JSON={};
//角度转弧度
function d2a(n)
{
	return n/180*Math.PI;
}
//弧度转角度
function a2d(n)
{
	return n/Math.PI*180;
}
function rnd(n,m)
{
	return parseInt(Math.random()*(m-n))+n;
}
//加载鱼
function loadImage(arr,fnSucc,fnLoading)
{
	var count=0;
	for(var i=0;i<arr.length;i++)
	{
		var oImg=new Image();
		;(function(index){
			oImg.onload=function()
			{
				JSON[arr[index]]=this;
				count++;
				fnLoading&&fnLoading(count,arr.length);
				if(count==arr.length)
				{
					fnSucc&&fnSucc();
				}
			};
		})(i);				
		oImg.src='img/'+arr[i]+'.png';
	}
}