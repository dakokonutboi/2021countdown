(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{RXBc:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return g}));var s=i("dI71"),n=i("q1tI"),o=i.n(n),a="undefined"!=typeof window&&window.innerWidth,h="undefined"!=typeof window&&window.innerHeight,r={x:"undefined"!=typeof window&&window.innerWidth/2,y:300},l=null,p=null,d=[],c=[];function f(t){p=(l=t).getContext("2d"),l.width=a,l.height=h,setInterval(w,800),setInterval(u,20)}function w(){!function(t){if(c.length<10){var e=new x(t);e.explosionColor=10*Math.floor(360*Math.random()/10),e.vel.y=-3*Math.random()-4,e.vel.x=6*Math.random()-3,e.size=8,e.shrink=.999,e.gravity=.01,c.push(e)}}(r.x)}function u(){a!=("undefined"!=typeof window&&window.innerWidth)&&(l.width=a="undefined"!=typeof window&&window.innerWidth),h!=("undefined"!=typeof window&&window.innerHeight)&&(l.height=h="undefined"!=typeof window&&window.innerHeight),p.fillStyle="rgba(0, 0, 0, 0.05)",p.fillRect(0,0,a,h);for(var t=[],e=0;e<c.length;e++){c[e].update(),c[e].render(p);var i=Math.sqrt(Math.pow(r.x-c[e].pos.x,2)+Math.pow(r.y-c[e].pos.y,2)),s=c[e].pos.y<2*h/3&&100*Math.random()<=1;c[e].pos.y<h/5||c[e].vel.y>=0||i<50||s?c[e].explode():t.push(c[e])}c=t;var n=[];for(e=0;e<d.length;e++)d[e].update(),d[e].exists()&&(d[e].render(p),n.push(d[e]));for(d=n;d.length>400;)d.shift()}function y(t){this.pos={x:t?t.x:0,y:t?t.y:0},this.vel={x:0,y:0},this.shrink=.97,this.size=2,this.resistance=1,this.gravity=0,this.flick=!1,this.alpha=1,this.fade=0,this.color=0}function x(t){y.apply(this,[{x:t,y:h}]),this.explosionColor=0}y.prototype.update=function(){this.vel.x*=this.resistance,this.vel.y*=this.resistance,this.vel.y+=this.gravity,this.pos.x+=this.vel.x,this.pos.y+=this.vel.y,this.size*=this.shrink,this.alpha-=this.fade},y.prototype.render=function(t){if(this.exists()){t.save(),t.globalCompositeOperation="lighter";var e=this.pos.x,i=this.pos.y,s=this.size/2,n=t.createRadialGradient(e,i,.1,e,i,s);n.addColorStop(.1,"rgba(255,255,255,"+this.alpha+")"),n.addColorStop(.8,"hsla("+this.color+", 100%, 50%, "+this.alpha+")"),n.addColorStop(1,"hsla("+this.color+", 100%, 50%, 0.1)"),t.fillStyle=n,t.beginPath(),t.arc(this.pos.x,this.pos.y,this.flick?Math.random()*this.size:this.size,0,2*Math.PI,!0),t.closePath(),t.fill(),t.restore()}},y.prototype.exists=function(){return this.alpha>=.1&&this.size>=1},x.prototype=new y,x.prototype.constructor=x,x.prototype.explode=function(){for(var t=10*Math.random()+80,e=0;e<t;e++){var i=new y(this.pos),s=Math.random()*Math.PI*2,n=15*Math.cos(Math.random()*Math.PI/2);i.vel.x=Math.cos(s)*n,i.vel.y=Math.sin(s)*n,i.size=10,i.gravity=.2,i.resistance=.92,i.shrink=.05*Math.random()+.93,i.flick=!0,i.color=this.explosionColor,d.push(i)}},x.prototype.render=function(t){if(this.exists()){t.save(),t.globalCompositeOperation="lighter";var e=this.pos.x,i=this.pos.y,s=this.size/2,n=t.createRadialGradient(e,i,.1,e,i,s);n.addColorStop(.1,"rgba(255, 255, 255 ,"+this.alpha+")"),n.addColorStop(1,"rgba(0, 0, 0, "+this.alpha+")"),t.fillStyle=n,t.beginPath(),t.arc(this.pos.x,this.pos.y,this.flick?Math.random()*this.size/2+this.size/2:this.size,0,2*Math.PI,!0),t.closePath(),t.fill(),t.restore()}};var v=new Date("Thu Dec 31 2020 21:43:00 GMT+0100 (GMT+01:00)"),g=function(t){function e(){for(var e,i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))||this).state={now:new Date,display:"2021",special:!1,white:!1,switcher:!1,show:!0},e.canvas=o.a.createRef(),e.componentDidMount=function(){setInterval((function(){var t=new Date,i=new Date(v-t),s="2021",n=!1;s=i.getHours()+":"+i.getMinutes()+"'"+i.getSeconds(),v-t<1e4&&(n=!0,s=i.getSeconds()),v-t<0&&(s="Happy new year!",e.state.switcher||(e.setState({switcher:!0}),setTimeout((function(){f(e.canvas.current),setTimeout((function(){e.setState({show:!1})}),3e3)}),5e3)),e.setState({white:!0})),e.setState({now:new Date,display:s,special:n})}),250)},e}return Object(s.a)(e,t),e.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"px-44 py-80 text-center z-40"},this.state.show?o.a.createElement("h1",{className:"z-40 text-3xl md:text-7xl font-bold"+(this.state.special?" text-red-700 md:text-7xl lg:text-9xl":"")+(this.state.white?" text-white md:text-7xl lg:text-9xl":"")},this.state.display):null,null),o.a.createElement("canvas",{className:"z-0 absolute top-0",ref:this.canvas}))},e}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-0c8ffa903f4fe22f82e2.js.map