function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');
}

function changeBg(bg, tittle){
    const banner = document.querySelector('.banner');
    const contents = document.querySelector('.content');
    banner.style.background = 'url("../movie_images/${bg}")';
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content =>{
        content.classList.remove('active');
        if(content.classList.contains(title)){
            content.classList.add('active');
        }
    })
}