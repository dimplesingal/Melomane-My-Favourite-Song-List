let songIndex = 1;
let audioElement = new Audio('Songs/1.mp3');
let masterplay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastrerSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Aaj Dil Shayarana", filepath: "Songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "Afghan Jalebi", filepath: "Songs/2.mp3", coverpath: "covers/2.jpg"},
    {songName: "Badri Ki Dulhania", filepath: "Songs/3.mp3", coverpath: "covers/3.jpg"},
    {songName: "Badtameez Dil", filepath: "Songs/4.mp3", coverpath: "covers/4.jpg"},
    {songName: "Besabriyaan", filepath: "Songs/5.mp3", coverpath: "covers/5.jpg"},
    {songName: "Phatte Tak Nachna", filepath: "Songs/6.mp3", coverpath: "covers/6.jpg"},
    {songName: "Birthday Bash", filepath: "Songs/7.mp3", coverpath: "covers/7.jpg"},
    {songName: "Gazab Ka Hai Yeh Din", filepath: "Songs/8.mp3", coverpath: "covers/8.jpg"},
    {songName: "Main Hoon Hero Tera", filepath: "Songs/9.mp3", coverpath: "covers/9.jpg"},
    {songName: "Hey Bro - DJ", filepath: "Songs/10.mp3", coverpath: "covers/10.jpg"},
]

// songItems.forEach((element,i)=>{
//     element.getElementsByTagName("img")[0].src = songs[i].coverpath;
//     element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
// })

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',() =>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            makeAllPlays();
    
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
           // audioElement.src = 'Songs/3.mp3';
            audioElement.src = `songs/${songIndex}.mp3`;
            masterSongName.innerText = songs[songIndex-1].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
           
            element.addEventListener('click', (e)=>{
                e.target.classList.remove('fa-pause-circle');
                e.target.classList.add('fa-play-circle');
                audioElement.pause();
                gif.style.opacity = 0;
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
        })
   
})
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
   
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
    document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=1){
            songIndex = 10;
        }
        else{
            songIndex -= 1;
        }
       
            audioElement.src = `songs/${songIndex}.mp3`;
            masterSongName.innerText = songs[songIndex-1].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })





