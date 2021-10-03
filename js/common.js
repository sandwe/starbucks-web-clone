// 루트 index.html 파일과 signin의 index.html 파일이 공통으로 사용하는 JS

// HEADER
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
})

//input 요소가 focus 되었을 때 클래스 추가, placeholder 설정
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

//input 요소가 focus가 해제(blur)됐을 때
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

//FOOTER
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //this-year라는 클래스를 가진 요소의 글자 내용으로 올해 년도가 삽입됨