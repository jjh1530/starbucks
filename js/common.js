const searchEl = document.querySelector('.search');  // search 클래스를 변수에 담음
const searchInputEl = searchEl.querySelector('input'); // searchEl에서 input 요소 찾음

//클릭할시  
searchEl.addEventListener('click', function() {
  searchInputEl.focus(); // 클릭할시 포커스
});
//포커스할시
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused'); //클래스내용 추가
  searchInputEl.setAttribute('placeholder', '통합검색'); //속성이름과 힌트 작성
});
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused'); //클래스내용 추가
  searchInputEl.setAttribute('placeholder', ''); //속성이름과 힌트 작성
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();