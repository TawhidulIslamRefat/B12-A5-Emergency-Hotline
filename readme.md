<h1>Answer The Questions</h1>
<h1>1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?</h1>
<br>
<h2>ANS:-</h2> 
<h2>*getElementById:-</h2>
<h3>
Access one element that has this id,Always return one element.
Example:- document.getElementById("Clear-btn"); we get box element.
</h3>
<h2>*getElementsByClassName:- </h2>
<h3>
Access multiple elements that have this class. return a HTML Collection.
Example:- document.getElementsByClassName("call-btn");we get multiple call button.
</h3>
<h2>*querySelector:- </h2>
<h3>
It works like CSS selector.It return the first element that matches the CSS Class,Id or Element.
Example:- document.querySelector(".box");
</h3>
<h2>*querySelectorAll:-</h2>
<h3>
Access all element using CSS Selector.It return a NodeList.
Example:- document.querySelectorAll("#card .cards");
</h3>
<br><br>
<h1>2. How do you **create and insert a new element into the DOM**?</h1>
<br>
<h2>ANS:-</h2>
<h3>To create and insert a new element into the DOM,fellow 3 step.</h3>
<br>
<h2>Step 1 :- Create a Element.</h2>
<h2>Step 2 :- Add content/attributes.Set InnerText,setAttribute.</h2>
<h2>Step 3 :- Insert into DOM, .append(),.appendChild().</h2>
<br>
<h3>Example:- const newElement = document.createElement("div");
         newElement.innerText ="Hi,How are you?";
         document.body.appendChild(newElement);</h3>

<br>      
<h1>3. What is **Event Bubbling** and how does it work?</h1>
<br>
<h2>ANS:-</h2>
<h3>Event bubbling happens when an event starts on the element you actually interact with and then moves up to its parent element one by one.If you click a button inside a div,first the button gets the event,then the div,and then the body.

</h3>
<br>
    
<h1>4. What is **Event Delegation** in JavaScript? Why is it useful?</h1>
<br>
<h2>ANS:-</h2>
<h2>
Event Delegation:- When you need to add event listeners to many child elements,instead of adding them to each child,you can add a single event listener to the parent.Using event bubbling,you can detect which child was interacted with..
</h2>
<br>
<h2>
Why use:-NO need to add many event listeners,Saved time.Add more new elements,its works with the parent event listener.
</h2>
<br>
<h1>5. What is the difference between **preventDefault() and stopPropagation()** methods?</h1>
<br>
<h2>ANS:-</h2>
<h3>
*PreventDefault():-Prevents the default action of an element.For example,it can stop a form from auto-submitting or prevent a page reload.
</h3>
<br>
<h3>
Example:- document.querySelector("form").addEventListener("click",function(e){
    e.preventDefault();
})
</h3>
<br>
<h3>
*stopPropagation:-Stops the event from bubbling,so the parent elements don't receive it.
<br>
Example:-document.getElementById("Child").addEventListener("click",function(e){
    e.stopPropagation();
})
</h3>