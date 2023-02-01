// const body = document.querySelector("body");
// const nextQuestionButton = document.querySelector(#${NEXT_QUESTION_BUTTON_ID});

// let currentImageIndex = 0;
// const backgroundImages = [
// "00-shire.jpg",
// "01-hobbiton.jpg",
// "02-bree.jpg",
// "03-rivendell.jpg",
// "04-moria-gate.jpg",
// "05-moria-balrog.jpg",
// "06-lothlorien.jpg",
// "07-argonath.jpg",
// "08-dead-marshes.jpg",
// "09-shelob.jpg",
// "10-mount-doom-frodo.jpg",
// "11-result-fail.jpg",
// "11-result-victory.jpg"
// ];

// nextQuestionButton.addEventListener("click", () => {
// currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
// body.style.backgroundImage = url(../images/background-img/${backgroundImages[currentImageIndex]});
// });



const backgroundImages = [
    "../images/background-img/00-shire.jpg",
    "../images/background-img/01-hobbiton.jpg",
    "../images/background-img/02-bree.jpg",
    "../images/background-img/03-rivendell.jpg",
    "../images/background-img/04-moria-gate.jpg",
    "../images/background-img/05-moria-balrog.jpg",
    "../images/background-img/06-lothlorien.jpg",
    "../images/background-img/07-argonath.jpg",
    "../images/background-img/08-dead-marshes.jpg",
    "../images/background-img/09-shelob.jpg",
    "../images/background-img/10-mount-doom-frodo.jpg",
    "../images/background-img/11-result-fail.jpg",
    "../images/background-img/11-result-victory.jpg",
  ];
  let currentImageIndex = 0;
  
  const nextQuestionButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  nextQuestionButton.addEventListener("click", function() {
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    document.body.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
  });