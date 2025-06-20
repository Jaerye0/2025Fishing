
//메뉴 이동 js코드
document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-text");

  const sectionIds = [
    "information", 
    "recentInfo",  
    "slide",       
    "prevention" 
  ];

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      const clickNum = parseInt(item.getAttribute("clickNum"), 10);
      const targetId = sectionIds[clickNum - 1];
      const target = document.getElementById(targetId);

      if (target) {
        const targetRect = target.getBoundingClientRect();
        let offsetTop = window.scrollY + targetRect.top;

        if (targetId === "prevention") {
          offsetTop -= 120; 
        } else if (targetId === "recentInfo" || targetId === "slide") {
          offsetTop = window.scrollY + targetRect.top - (window.innerHeight / 2) + (targetRect.height / 2) - 80; // 살짝만 올림
        } else {
          offsetTop = window.scrollY + targetRect.top - (window.innerHeight / 2) + (targetRect.height / 2); // 기본 중앙 정렬
        }


        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTarget = Math.min(offsetTop, maxScroll);

        window.scrollTo({
          top: scrollTarget,
          behavior: "smooth"
        });
      }
    });
  });
});

//커서 애니메이션 js코드
const cursor = document.getElementById("customCursor");
let x = 0, y = 0;

document.addEventListener("mousemove", e => {
  x = e.clientX;
  y = e.clientY;
});

(function smoothMove() {
  cursor.style.left = cursor.offsetLeft + (x - cursor.offsetLeft) * 0.1 + "px";
  cursor.style.top = cursor.offsetTop + (y - cursor.offsetTop) * 0.1 + "px";
  requestAnimationFrame(smoothMove);
})();

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const leftArrow = document.getElementById("leftArrow");
  const rightArrow = document.getElementById("rightArrow");

  const slideData = [
    {
      title: "기관사칭형",
      description:
        "기관 사칭형 보이스피싱이란 검찰, 경찰, 금융감독원 직원 등의 \n기관을 사칭하여 피해를 유발하는 사기 수법을 의미한다. \n피해자가 범죄에 연루되어 있다고 심리적으로 압박하여 \n자금을 이체 또는 직접 전달하게 하거나 금융 정보를 빼낸다."
    },
    {
      title: "대출사기형",
      description: "대출사기형 보이스피싱이란 낮은 금리 등 유리한 조건으로 \n대출을 받을 수 있다며 피해자를 속여 돈을 가로채는 사기 수법을 의미한다. \n앱 설치 또는 신분증 사본, 통장 사본 등 개인 정보를 요구하여 \n개인정보를 빼내거나 대출 수수료, 보증료 등을 명목으로 송금을 유도한다."
    },
    {
      title: "가족·지인 사칭형",
      description: "가족지인 사칭형 보이스피싱이란 가족이나 지인을 사칭하여 \n금전을 요구하거나 개인정보를 탈취하는 사기 수법을 의미한다. \n특히 문자메세지나 SNS를 이용한 메신저피싱이 주를 이루며 \n긴급 상황인척 개인정보나 돈을 요구한다."
    }
  ];
  
  document.getElementById('goToTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



//슬라이드 애니메이션 js코드
  let currentIndex = 1;

  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove("left", "center", "right");

      if (index === currentIndex) {
        slide.classList.add("center");
      } else if (index === (currentIndex + 1) % slides.length) {
        slide.classList.add("right");
      } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
        slide.classList.add("left");
      }
    });

    updateSlideInfo(currentIndex); 
  }


function updateSlideInfo(index) {
  const info = slideData[index];
  document.querySelector("#slideInfo .subTitle-text").textContent = info.title;
  document.querySelector("#slideInfo .main-text").innerHTML = info.description.replace(/\n/g, "<br>");
}

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  });

  updateSlides();
});


//배너 애니메이션 js코드
const telephon01 = document.getElementById("telephon01");
const telephon02 = document.getElementById("telephon02");
const who = document.getElementById("who");
const note = document.getElementById("note");


telephon01.addEventListener("mouseenter", () => {
  telephon01.style.transition = "transform 0.2s ease-out";
  telephon01.style.transform = "translateX(-455px) rotate(-15deg)";
});

telephon01.addEventListener("mouseleave", () => {
  telephon01.style.transition = "transform 0.15s ease-out";
  telephon01.style.transform = "translateX(-455px) rotate(5deg)";

  setTimeout(() => {
    telephon01.style.transition = "transform 0.15s ease-in";
    telephon01.style.transform = "translateX(-455px) rotate(0deg)";
  }, 150);
});


telephon02.addEventListener("mouseenter", () => {
  telephon02.style.transition = "transform 0.2s ease-out";
  telephon02.style.transform = "translateX(500px) rotate(25deg)";
});

telephon02.addEventListener("mouseleave", () => {
  telephon02.style.transition = "transform 0.15s ease-out";
  telephon02.style.transform = "translateX(500px) rotate(5deg)";

  setTimeout(() => {
    telephon02.style.transition = "transform 0.15s ease-in";
    telephon02.style.transform = "translateX(500px) rotate(10deg)";
  }, 150);
});


who.addEventListener("mouseenter", () => {
  who.style.transform = "translateX(-710px) rotate(5deg)";
});

who.addEventListener("mouseleave", () => {
  who.style.transform = "translateX(-710px) rotate(0deg)";
});

note.addEventListener("mouseenter", () => {
  note.style.transform = "translateX(470px) rotate(5deg)";
});

note.addEventListener("mouseleave", () => {
  note.style.transform = "translateX(470px) rotate(0deg)";
});