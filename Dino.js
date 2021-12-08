function Dino(x,y,yvel){
			this.xpos=x;
			this.ypos=y;
			this.yvel=yvel;
			this.gravity=0;
			this.draw=function(){
				fill(255);
				rect(this.xpos,this.ypos,20,30);
							}
			this.update=function(){
					this.yvel+=this.gravity;
					this.ypos+=this.yvel;
					if(this.ypos<550)
					this.gravity=1.5;
					else{
						this.gravity=0;
						this.yvel=0;
					}
					//console.log(this.ypos);
				}
			this.jump=function(){
				if(this.yvel==0 && this.ypos==550)
				this.yvel=-30;
			}
			this.contact=function(pole){
				if((Math.abs(pole.xpos-this.xpos)<=20 || Math.abs(this.xpos-pole.xpos)<=10) && this.ypos>=(600-pole.height-30)){
					return true;
					}
					return false;
			}
		}