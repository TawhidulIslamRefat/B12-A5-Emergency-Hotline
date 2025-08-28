1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
<br>
ANS:- *getElementById:-
Access one element that have this id,Always return one element.
Example:- document.getElementById("Clear-btn"); we get box element.
*getElementByClassName:- 
Access multiple element that have this classes. return a HTML Collection.
Example:- document.getElementByClassName("call-btn");we get multiple call button.
*querySelector:-
It works like CSS selector.It return the frist element that matche the CSS Class,Id or Element.
Example:- document.querySelector(".box");
*querySelectorAll:-
Access all element using CSS Selector.It return a Nodelist.
Example:- document.querySelectorAll(".card");
<br>
2. How do you **create and insert a new element into the DOM**?
<br>
ANS:-
I create and insert a new element into the dom,it is completed in 3 steps.
<br>
Step 1 :- Create a Element.
Step 2 :- Add content.Set InnerText,setAttribute().
Step 3 :- Insert into DOM, append(),appendChild().
<br>
Example:- const newElement = document.createElement("div");
         newElement.innerText ="Hi,How are you?";
         document.body.appendChild(newElement);

<br>      
3. What is **Event Bubbling** and how does it work?
<br>
ANS:-Event Bubbling means- when an event  occurs on a child element,it prapagate upword to the parent,grandparent and root.Clicking on a child element will on the parent,grandparent and root.At frist,the child element id clicked by capturing it and then the parent,grandparent and root clicking by bubbling.
<br>
    
4. What is **Event Delegation** in JavaScript? Why is it useful?
<br>
ANS:-Evnet Delegation:- When need to add event listeners to many child elements,insead od adding event listener to individual children,add event listener to the parent element,add useing event bubbling to identfy the child..
<br>
Why use:-NO need to add many event listeners,Saved time.Add more new elements,its works with the parent event listener.
<br>
5. What is the difference between **preventDefault() and stopPropagation()** methods?
<br>
ANS:-
<br>
*PrevnetDefault():-Disables the default function of an element,For example, disables form auto-submit and page auto reload.
<br>
Example:- document.querySelector("form").addEventListener("click",function(e){
    e.preventDefault();
})
<br>
*stopPropagation:-Stop the evnet bubbling,Doesn't allow the bubbling to go up or the parent.
<br>
Example:-document.getElementById("Child").addEventListener("click",function(e){
    e.stopPropagation();
})
