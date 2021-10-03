var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  //<div id="player"></div> 
  new YT.Player('player', { // player라는 아이디를 가진 요소를 찾음
    videoId: 'An6LvWQuj_8', // 재생하려는 유튜브 영상 ID
    playerVars: { // 영상 재생위한 여러 변수들 객체 데이터로 나타냄
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: { // 영상 준비되면 익명의 함수(메소드) 실행되고, 음소거 처리하겠다!
      onReady: function (event) { //onReady 메소드 실행
        event.target.mute() // 음소거
      }
    }
  });
}