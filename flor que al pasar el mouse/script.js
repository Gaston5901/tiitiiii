let w = window.innerWidth;
let h = window.innerHeight;
let R = Math.min(w, h)*0.25;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = w;
canvas.height = h;

const total = 2000;
const centerPts = 600, petalPts = total - centerPts;
const petals = 8;
let particles = [];

const mouse = { x:null, y:null, repulse:150 };

class P {
  constructor(x,y,tx,ty){
    this.x = x; this.y = y;
    this.tx = tx; this.ty = ty;
    this.vx = 0; this.vy = 0;
  }
  update(){
    // repulsión
    if(mouse.x!==null){
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const d = Math.hypot(dx,dy);
      if(d < mouse.repulse){
        const f = (mouse.repulse - d) * 0.02;
        this.vx += (dx/d)*f;
        this.vy += (dy/d)*f;
      }
    }
    // attirar a destino
    this.vx += (this.tx - this.x)*0.005;
    this.vy += (this.ty - this.y)*0.005;

    this.vx *= 0.92;
    this.vy *= 0.92;
    this.x += this.vx;
    this.y += this.vy;
  }
  draw(){
    ctx.fillStyle = 'rgba(255,180,255,0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 1.7, 0, 2*Math.PI);
    ctx.fill();
  }
}

function initParticles(){
  particles = [];
  // metas para formar flor
  const targets = [];
  const cx=w/2, cy=h/2;
  // centro
  for(let i=0;i<centerPts;i++){
    const a = Math.random()*Math.PI*2;
    const rr = Math.random()*R*0.4;
    targets.push({x:cx+Math.cos(a)*rr, y:cy+Math.sin(a)*rr});
  }
  // pétalos
  for(let p=0;p<petals;p++){
    const base = p*(2*Math.PI/petals);
    for(let i=0;i< (petalPts/petals);i++){
      const ang = base + (i/(petalPts/petals)-0.5)*0.6;
      const rr = R*(0.8 + 0.3*Math.cos(i/(petalPts/petals)*Math.PI));
      const off = -20 + Math.random()*40;
      targets.push({x:cx+Math.cos(ang)*(rr+off), y:cy+Math.sin(ang)*(rr+off)});
    }
  }
  // crear partículas desde posiciones random
  for(let i=0;i<total;i++){
    const sx = Math.random()*w, sy = Math.random()*h;
    const t = targets[i%targets.length];
    particles.push(new P(sx,sy,t.x,t.y));
  }
}

window.addEventListener('mousemove',e=>{
  mouse.x=e.clientX; mouse.y=e.clientY;
});
window.addEventListener('mouseout',_=>{
  mouse.x=null; mouse.y=null;
});
window.addEventListener('touchmove',e=>{
  mouse.x=e.touches[0].clientX;
  mouse.y=e.touches[0].clientY;
});
window.addEventListener('touchend',_=>{
  mouse.x=null; mouse.y=null;
});

function anim(){
  ctx.fillStyle='rgba(0,0,0,0.2)';
  ctx.fillRect(0,0,w,h);
  for(const p of particles){
    p.update();
    p.draw();
  }
  requestAnimationFrame(anim);
}

initParticles();
anim();