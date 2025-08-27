/* function get element by id */
function getElementById(id) {
  const element = document.getElementById(id);
  return element;
}
/* function get element by class name */
function getElementByClassName(className) {
  const element = document.getElementsByClassName(className);
  return element;
}
/* heart count on navbar */
const hearts = getElementByClassName("heart");
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    const countHeart = getElementById("count-heart").innerText;
    const currentCount = Number(countHeart) + 1;
    getElementById("count-heart").innerText = currentCount;
  });
}
/* call button function */
const callButtons = getElementByClassName("call-btn");
for (const callButton of callButtons) {
  callButton.addEventListener("click", function () {
    const totalCoin = getElementById("total-coin");
    let currentCoin = parseInt(totalCoin.innerText);
    currentCoin -= 20;
    totalCoin.innerText = currentCoin;
    if (currentCoin >= 0) {
      const serviceSubName =
        callButton.parentNode.parentNode.children[2].innerText;

      const serviceNumber =
        callButton.parentNode.parentNode.children[3].innerText;

      alert(
        "📞" +
          " " +
          "Calling" +
          " " +
          serviceSubName +
          " " +
          serviceNumber +
          "..."
      );
      const currentTime = new Date().toLocaleTimeString();
      const serviceName =
        callButton.parentNode.parentNode.children[1].innerText;
      const historyContainer = getElementById("history-container");
      const newcard = document.createElement("div");
      newcard.innerHTML = `
          <div class="flex justify-between items-center bg-[#FAFAFA] pt-4 pb-5 pl-4 pr-2 rounded-[8px] mb-3" >
                <div class=" ">
                <h1 class="text-xl font-semibold">${serviceName}</h1>
                <h2 class="text-[1.2rem] text-[#5C5C5C]">${serviceNumber}</h2>
               
            </div>
             <div>
                    <p class="text-[1.2rem]">${currentTime}</p>
                </div>
            </div>
         `;
      historyContainer.append(newcard);
    } else {
      alert(
        "❌" +
          " " +
          "Invalid Balance,you need at least 20 coins to make a call..."
      );
      totalCoin.innerText = 0;
    }
  });
}
/* clear button funtion */
document.getElementById("clear-btn").addEventListener("click", function () {
  const historyContainer = getElementById("history-container");
  historyContainer.innerHTML = "";
});
