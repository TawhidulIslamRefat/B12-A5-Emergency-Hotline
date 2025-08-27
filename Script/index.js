/* function get element by id */
function getElementById(id){
const element = document.getElementById(id);
return element;
}
/* function get element by class name */
function getElementByClassName(className){
    const element = document.getElementsByClassName(className);
    return element;
}
/* heart count on navbar */
const hearts = getElementByClassName("heart");
for (const heart of hearts) {
    heart.addEventListener("click",function() {
        const countHeart = getElementById("count-heart").innerText;
        const currentCount = Number(countHeart) + 1;
        getElementById("count-heart").innerText = currentCount;
    })
}
/* call function */
const callButtons = getElementByClassName("call-btn");
for (const callButton of callButtons) {
    callButton.addEventListener("click",function(){
        const serviceSubName = callButton.parentNode.parentNode.children[2].innerText;
        // console.log(serviceName);
         const serviceNumber = callButton.parentNode.parentNode.children[3].innerText;
        //   console.log(serviceNumber);
        alert("📞"+" "+"Calling"+" "+serviceSubName+  " " +serviceNumber+"...");
         const serviceName = callButton.parentNode.parentNode.children[1].innerText;
         const cardContainer = getElementById()
    })
}