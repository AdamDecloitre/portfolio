// Simple preview script for pages/sites.html
(() => {
  const links = document.querySelectorAll('.demo-link');
  const iframe = document.getElementById('preview-frame');
  const label = document.getElementById('preview-label');

  if (!links.length || !iframe) return;

  let hoverTimeout = null;

  function showPreview(href, text){
    // slight delay to avoid flicker
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(()=>{
      iframe.src = href;
      label.textContent = text || 'Aperçu';
    }, 120);
  }

  function hidePreview(){
    clearTimeout(hoverTimeout);
    // keep last preview but stop loading
    // iframe.src = '';
  }

  links.forEach(a => {
    const href = a.getAttribute('href');
    const labelText = a.dataset.label || a.textContent.trim();
    a.addEventListener('mouseenter', ()=> showPreview(href, labelText));
    a.addEventListener('focus', ()=> showPreview(href, labelText));
    a.addEventListener('mouseleave', hidePreview);
    a.addEventListener('blur', hidePreview);
    // also allow click to open in new tab
    a.addEventListener('click', (e)=>{
      // allow normal navigation; open in new tab instead
      e.preventDefault();
      window.open(href, '_blank');
    });
  });
})();
