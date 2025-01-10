setTimeout(() => {
    const parent = document.querySelector('.featured-product');
  
    if (parent) {
     
      const items = parent.querySelectorAll('.tb--featured-menu-grid__item');
      
      items.forEach(item => {
        
        parent.style.perspective = '1000px';
  
        item.addEventListener('mousemove', (e) => {
          const rect = item.getBoundingClientRect();
          const x = e.clientX - rect.left; 
          const y = e.clientY - rect.top;  
  
          
          const rotateX = ((y / (rect.height/2)) - 0.5) *-10; 
          const rotateY = ((x / (rect.height/2)) - 0.5) * -10;   
  
         
          item.style.transform = `rotate3d(1, 0, 0, ${rotateX * 20}deg) rotate3d(0, 1, 0, ${rotateY * 20}deg)`;
          item.style.transition = 'transform 1s'; 
          item.style.transformStyle = 'preserve-3d'; 
        });
  
        
        item.addEventListener('mouseleave', () => {
          item.style.transform = 'rotate3d(0, 0, 0, 0deg)';
          item.style.transition = 'transform 0.3s'; 
        });
      });
    } else {
      console.error('Parent element with class "featured-product" not found.');
    }
  }, 1000); 

