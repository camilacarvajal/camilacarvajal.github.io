$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
"use strict";

//grass originally by Roman Taraban #scriptkiddie

var canvas   = document.getElementById('grass'),
    ctx      = canvas.getContext('2d'),
    stack    = [],
    w        = window.innerWidth,
    h        = window.innerHeight;

var drawer = function(){
  //originally made background white
  //ctx.fillStyle='#222';
  ctx.clearRect(0,0,w,h);
  stack.forEach(function(el){
      el();  
  });
  requestAnimationFrame(drawer);
};
var anim = function(){
  var x = 0, y = 0;
  //tallness of blades * variable + min 
  var maxTall = Math.random()*(h/4)+(h/4);
  //thickness of bladess
  var maxSize = Math.random()*(h/60)+5;
  //speed of blade growth
  var speed = Math.random()*1;  
  var position = Math.random()*w-w/2;
  var c = function(l,u){return Math.round(Math.random()*(u||255)+l||0);};
  
  //color of grass    
  var color = 'rgb('+c(125,50)+','+c(225,80)+','+c(80,50)+')';
  return function(){
    
    //how fast + far the blades bend 
    var deviation=Math.cos(x/50)*Math.min(x/4,50),
        tall = Math.min(x/2,maxTall),
        size = Math.min(x/50,maxSize);
    x+=speed;
    ctx.save();
    
    ctx.strokeWidth=10;
    ctx.translate(w/2+position,h);
    ctx.fillStyle=color;
    
    ctx.beginPath();
    ctx.lineTo(-size,0);
    ctx.quadraticCurveTo(-size,-tall/2,deviation,-tall);
    ctx.quadraticCurveTo(size,-tall/2,size,0);
    //ctx.closePath();?
    ctx.fill();
    
    ctx.restore();
  };    
};
//number of blades it makes
for(var x = 0; x<(w/7);x++){stack.push(anim());}
canvas.width = w;
canvas.height = h;
drawer();


/*
Bouncing Balls orignally by Rob Glazebrook
Added glow, changed size, color and speed


var particles = [],
    //number of particles
    particleCount = 200;
    Particle = function(x,y) {     
      this.x = x;
      this.y = y;
      
      
      
      //size of particles 
      this.radius = random(1,5);
      
      //colors red,green,blue,transparancy 
      this.rgba = 'rgba('+floor(random(240,245))+','+floor(random(219,245))+','+floor(random(140,144))+','+random(.2,.8)+')';
      
      //changes speed of particle
      this.vx = random(-.5,.5);
      this.vy = random(-.5,.5);
      
      // Draw our particle to the canvas.
      this.draw = function(ctx) {
        ctx.fillStyle = this.rgba;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,TWO_PI);
        ctx.fill();
        
        //adds blinking glow
        ctx.shadowBlur = random(15,30);
        //glow color
        ctx.shadowColor = "white";
      };
      
      // Update our position. 
      this.update = function(ctx) {
      
        this.x += this.vx;
        this.y += this.vy;
        // Bounce off edges.
        if(this.x + this.radius > ctx.width) {
          this.vx *= -1;
          this.x = ctx.width - this.radius;
        }
        if(this.x - this.radius < 0) {
          this.vx *= -1;
          this.x = this.radius;
        }
        if(this.y + this.radius > ctx.height) {
          this.vy *= -1;
          this.y = ctx.height - this.radius;
        }
        if(this.y - this.radius < 0) {
          this.vy *= -1;
          this.y = this.radius;
        }        
      }
    };

var sketch = Sketch.create({
  setup: function() {
    var i = particleCount;
    while(i--) {
      var p = new Particle(random(0, this.width),random(0, this.height));
      particles.push(p);
    }
  },
  update: function() {
    var i = particleCount;
    while(i--) { 
      particles[i].update(this);
    }
  },
  draw: function() {
    var i = particleCount;
    while(i--) {
      particles[i].draw(this);
    }
  }
});*/

// jshint devel:true
//console.log('\'Allo \'Allo!');

$(".read-more-expand").hide();//Showing and hiding done in javascript in case Javascript is disabled.
$(".read-more-button").show();

$(".read-more-button").click(function(){
  var me = $(this).toggleClass("open"),
      txt = me.is('.open') ? '- hide' : '+ read more';
  me.text(txt);
  $(".read-more-expand").slideToggle();
}); 

  

 
"use strict";

this["JST"] = this["JST"] || {};

this["JST"]["post"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n<a target=\"_blank\" href=\""
    + escapeExpression(((stack1 = (depth1 && depth1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"img__placeholder\" style=\"background-image: url("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.full)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "); background-color: #f6f6f6;\"></span></a>\n";
  return buffer;
  }

  buffer += "\n";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.thumbnail_images), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class=\"news-item__body\"\">\n  <span class=\"news-item__date\">"
    + escapeExpression((helper = helpers.fd || (depth0 && depth0.fd),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.date), options) : helperMissing.call(depth0, "fd", (depth0 && depth0.date), options)))
    + "</span>\n  <h4>\n    <a target=\"_blank\" href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </h4>\n  ";
  stack1 = (helper = helpers.truncate || (depth0 && depth0.truncate),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.excerpt), "80", options) : helperMissing.call(depth0, "truncate", (depth0 && depth0.excerpt), "80", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });