const cursor=document.querySelector('.cursor-dot');
if(cursor && matchMedia('(pointer:fine)').matches){
  addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
  document.querySelectorAll('a,button,.project-entry').forEach(el=>{
    el.addEventListener('mouseenter',()=>cursor.classList.add('big'));
    el.addEventListener('mouseleave',()=>cursor.classList.remove('big'));
  });
}
const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('on');io.unobserve(entry.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('form[data-demo]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();location.href='mailto:riya_khasnis@berkeley.edu?subject=Portfolio inquiry';}));
