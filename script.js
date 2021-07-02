window.addEventListener('keydown', function(e)
{
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keys=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const icon=document.querySelector(`img`);

    // when some other button is pressed
    if(!audio)
    return;
    
    keys.classList.add('playing');
    icon.classList.add('drumclass');
    audio.currentTime=0;
    audio.play();
   
    setTimeout(function() {
      keys.classList.remove("playing");
      icon.classList.remove('drumclass');
    }, 100);



}
)


