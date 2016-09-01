'use strict'
function Coin(type)
{
	this.x=0;
	this.y=0;
	this.cur=0;
	this.type=type;

	this.move();
}				
Coin.prototype.draw=function(gd)
{
	gd.save();
	if(this.type<3){
		gd.drawImage(JSON['coinAni1'],
			0,this.cur*60,60,60,
			this.x,this.y,60,60
		);
	}else{
		gd.drawImage(JSON['coinAni2'],
			0,this.cur*60,60,60,
			this.x,this.y,60,60
		);
	}			
	gd.restore();
};
Coin.prototype.move=function()
{
	var _this=this;
	//钱转
	setInterval(function(){
		if(_this.cur>=10)
		{
			_this.cur=0;
		}
	},30);
	//收钱
	setInterval(function(){
		_this.x+=(50-_this.x)/20;
		_this.y+=(650-_this.y)/20;
	},30)
	
}