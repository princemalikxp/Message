const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "YESSSSS✨ I LOVE YOU MORE BABY😭✨🍇😘";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  
  // Set the original color
  const originalColor = document.body.style.backgroundColor;

  // Add transition effect to background color change
  document.body.style.transition = "background-color 1s ease-in-out";
  document.body.style.background = "#fb93a3";

  // Set the color back to original after the transition completes
  setTimeout(() => {
    document.body.style.background = originalColor;
  }, 1000); // Adjust the time based on your transition duration
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
