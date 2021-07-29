const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

//화면자체를 뜻함  lodash cdn 호출 후 _.throttle(함수, 시간) 메서드 사용 0.3초 기준
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);  //y축 위치를 나타내줌
  if (window.scrollY > 500) {
    //배지 숨기기  gsap.r0(요소, 지속시간, 옵션); gsap cdn 호출
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'   //숨기기뿐 아니라 클릭 불가능
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    })
  }else {
    // 배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display:'block'   //다시 나타나게하기
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
},300));

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0    //스크롤 위치 0으로 옮겨줌 
  });
});


//fade in fadeEls는 visual의 fade-in

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay : (index + 1) *0.7,  //인덱스는 0부터 시작 0 1 2 3 으로 순차적으로 실행
    opacity: 1
  });
})

// new Swiper(선택자,옵션) swiperjs.com에서 vertical css, script 호출함
new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',   //수직방향
  autoplay: true,
  loop: true   //반복 자동재생 
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,  //한번에 보여줄 슬라이드 개수
  spaceBetween: 10,  // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  autoplay: {
    delay: 4000
  },
  loop: true,

  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true  //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  direction: 'horizontal', //기본값임 안해도됨
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function() {
  isHidePromotion = !isHidePromotion; // FALSE의 반대인 TRUE 값
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  }else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
})


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소. 시간, 옵션)
  gsap.to(selector, random(1.5,2.5),{
    y: size,
    repeat: -1,   //무한대
    yoyo: true,    //한번재생한 애니메이션을 뒤로 똑같이 실행
    ease: Power1.easeInOut,
    delay: random(0,delay)
  });
}
floatingObject('.floating1',1 ,15); 
floatingObject('.floating2',0.5 ,15); 
floatingObject('.floating3',1.5 ,20); 

//ScrollMagin : 스크롤에 맞춰 애니메이션 나옴
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8   //
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});



