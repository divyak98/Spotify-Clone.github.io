console.log("Welcome to Spotify")
// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let gif = document.getElementById('gif');
let songItems = Array.from (document.getElementsByClassName('songItem'));
let songs = [ 
    { songName: "Mera Safer", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Kesariya", filePath: "song/2.mp3", coverpath: "covers/2.jpg" },
    { songName: "Manike", filePath: "song/3.mp3", coverpath: "covers/3.jpeg" },
    { songName: "Nacho Nacho", filePath: "song/4.mp3", coverpath: "covers/4.jpeg" },
    { songName: "Pasoori", filePath: "song/5.mp3", coverpath: "covers/5.jpg" },
    { songName: "Apna Bana Le", filePath: "song/6.mp3", coverpath: "covers/6.jpg" },
    { songName: "Mehmaan (Mismatched)", filePath: "song/7.mp3", coverpath: "covers/7.jpg" },
    { songName: "Kahani", filePath: "song/8.mp3", coverpath: "covers/8.jpg" },
] 
songItems.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src = songs[i].coverpath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// play/pause handling
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// listen to Event
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})



const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');    
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        
        songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-pause-circle');
    e.target.classList.add('fa-play-circle');   
    
masterSongName.innerText = songs[songIndex].songName; 
  audioElement.src=`song/${songIndex+1}.mp3`;
  audioElement.currentTime-0;
 audioElement.play();
 gif.style.opacity=1;
 masterPlay.classList.remove('fa-play-circle');
 masterPlay.classList.add('fa-pause-circle');    
 })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
    songIndex=0;
    }
    else{
    songIndex += 1;
}
audioElement.src=`song/${songIndex+1}.mp3`;

masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime-0;
 audioElement.play();
 gif.style.opacity=1;
 masterPlay.classList.remove('fa-play-circle');
 masterPlay.classList.add('fa-pause-circle');  

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
    songIndex=0;
    }
    else{
    songIndex -= 1;
}
audioElement.src=`song/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime-0;
 audioElement.play();
 gif.style.opacity=1;
 masterPlay.classList.remove('fa-play-circle');
 masterPlay.classList.add('fa-pause-circle');  

})
