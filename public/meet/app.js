document.querySelectorAll('.toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    btn.classList.toggle('active');
    // имитация отключений
    const icon = btn.querySelector('.material-symbols-outlined');
    if(btn.dataset.toggle === 'mic'){
      icon.textContent = icon.textContent === 'mic' ? 'mic_off' : 'mic';
      btn.classList.toggle('muted');
    }
    if(btn.dataset.toggle === 'cam'){
      icon.textContent = icon.textContent === 'videocam' ? 'videocam_off' : 'videocam';
      btn.classList.toggle('muted');
    }
  });
});
