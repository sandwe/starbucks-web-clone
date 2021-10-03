'use strict';

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacitiy: 0,
      display: 'none'
    });
    //to-top 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacitiy: 1,
      display: 'block'
    })
    //to-top 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100 //버튼이 숨어지도록 x축 기준으로 100px 이동
    });
  }
}, 300));
// _.throttle(함수, 시간) 
//사용하려는 함수를 넣고 그 함수가 몇초에 한번씩 실행되면 되는지 시간을 추가

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0  // 요소를 0.7초동안 window의 0px로 옮겨줌
  });
});

// 순서대로 나타나는 기능 넣기
const fadeEls = document.querySelectorAll('.visual .fade-in');
//나타날 요소들을 하나씩 반복해서 처리
fadeEls.forEach(function (fadeEl, index) {
  //각 요소들을 순서대로 delay시켜 보이게 함
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacitiy: 1
  })
});

//슬라이드 요소 관리
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

new Swiper('.promotion .swiper-container', {
  direction: 'horizontal',
  autoplay: {
    delay: 5000 //5초마다 슬라이드 바뀜
  },
  loop: true,
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { //페이지 번호 사용 여부
    el: '.promotion .swiper-pagination',// 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부 
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5 , //한 화면에 몇개의 슬라이드 보여줄 건지
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

//요소를 toggle(숨기거나 보이거나)할 때, js로 class만 추가시키고 실제 동작을 css에서 제어해주는 게 나음!
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
    //숨김 처리!
    promotionEl.classList.add('hide'); //promotion 클래스에 hide를 추가
  } else {
    //보임 처리!
    promotionEl.classList.remove('hide'); //promotion 클래스에 hide를 제거
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { // 옵션
      y: size, //위 아래로 매개변수 size 만큼만 움직임
      repeat: -1,
      yoyo: true, //애니메이션이 한번 진행 후 다시 진행되도록 함
      ease: Power1.easeInOut,
      delay: random(0, delay) // 랜덤하게 delay 실행됨
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic // 메소드 체이닝
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소 지정
      triggerHook: .8 // 감시하는 요소가 뷰 포트의 어떤 지점에서 감시될지 정함(0~1)
    })
    .setClassToggle(spyEl, 'show') //감지되면 show라는 클래스 추가
    .addTo(new ScrollMagic.Controller()); //내부 컨트롤러 동작
});