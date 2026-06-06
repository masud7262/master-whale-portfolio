document.addEventListener("DOMContentLoaded", () => {
  const texts = [
    "Web3 Contributor",
    "Community Manager",
    "Ambassador",
    "Top Role Holder"
  ];

  let count = 0;
  let index = 0;

  function typeEffect() {
    const current = texts[count];
    document.querySelector(".typing").textContent =
      current.substring(0, index);

    index++;

    if (index > current.length) {
      setTimeout(() => {
        index = 0;
        count = (count + 1) % texts.length;
      }, 1500);
    }

    setTimeout(typeEffect, 100);
  }

  typeEffect();
});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 100;

    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter,20);
    }else{
      counter.innerText = target;
    }

  };

  updateCounter();

});
