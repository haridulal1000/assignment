function Pole(x){
			this.xpos=x;
			this.ypos=520;
			this.xvel=5;
			this.height=60;
			this.draw=function(){
				fill(255,200,60);
				rect(this.xpos,this.ypos,10,this.height);
			}
			this.update=function(){
				this.xpos-=this.xvel;
			}
		}