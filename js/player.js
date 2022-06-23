//Variaveis
const video = document.getElementById('videoPlayer');

//CSS
$("#video_tumbnail").hover(function(){
    $('#control_menu').css('opacity','1')
    $('#control_menu').css('visibility','visible')
},function(){
    $('#control_menu').css('opacity','0')
    $('#control_menu').css('visibility','hidden')
})

$("#volume").hover(function(){

    $('#volume_painel').css('opacity','1')
    $('#volume_painel').css('visibility','visible')

})
$("#volume_painel").mouseleave(function(){

    $('#volume_painel').css('opacity','0')
    $('#volume_painel').css('visibility','hidden')

})


//Chamar Função Conforme Evento
$('#play').click(play)
$('#pause').click(pause)
$('#videoPlayer').on('timeupdate',progressBar)
$('#videoPlayer').on('ended',fimVideo)
$('#progress').click(progressTime)
$('#volume').click(volumePause)
$('#muted').click(volumeOn)

//Funções
function play() {
    $('#play').css('display','none')
    $('#pause').css('display','block')
    video.play()
}
function pause() {
    $('#play').css('display','block')
    $('#pause').css('display','none')
    video.pause()
}
function progressBar() {
    var w = Math.round((video.currentTime / video.duration) * 100)
    $('#progress_atual').css('width',w+'%')
    timeAt()
}
function fimVideo() {
    video.currentTime = 0
}
function progressTime(e){
    const progressTime = (e.offsetX / (this).offsetWidth) * video.duration
    video.currentTime = progressTime
}
function timeAt() {
    document.getElementById("time_atual").innerHTML = formatTime(video.currentTime)
    document.getElementById("time_total").innerHTML = formatTime(video.duration)
}
function volumePause(){
    $('#volume').css('display','none')
    $('#muted').css('display','block')
    video.volume = 0;
    
}
function volumeOn(){
    $('#volume').css('display','block')
    $('#muted').css('display','none')
    video.volume = 1;
}

//Converte (Segundos) Em Horas, minutos e segundos
function formatTime(time) {
    if (time < 5999) {
      // MM:SS
      var minutes = Math.floor(time / 60);
      var seconds = Math.round(time - (minutes * 60));
  
      if (minutes < 10) { minutes = "0" + minutes }
      if (seconds < 10) { seconds = "0" + seconds }
  
      return minutes + ":" + seconds
    } else {
      return "Exceeds time"
    }
}