const message = `I'm sorry it took me so long to give you these. I had a few problems while making them, but I still wanted to finish them because I wanted to keep my promise to you.\n\nI know how much you love flowers, so even though I can't give you real ones because of the distance, I made these especially for you instead.\n\nI hope you like them as much as I like you. I know they’re simple, but I hope they still make you smile, even just a little. Maybe someday, I’ll finally be able to give you real flowers.`;


function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
