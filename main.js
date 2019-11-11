document.querySelectorAll('.thumbNail').forEach(function (pic){
    const thing = document.querySelector('ul');
    const iLink = document.createElement('a');
    iLink.target = '_blank';
    iLink.href = pic.src; 
    iLink.innerHTML = pic.outerHTML
    thing.replaceChild(iLink, pic);
})