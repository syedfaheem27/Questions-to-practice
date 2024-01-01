# Interview Questions

<a name="top"></a>

1. [What is event delegation, and how does it function in JavaScript?](#event-delegation-js)

2. Can you provide an illustration of how ES6 has altered the approach to working with "this" in JavaScript?

3. Explain the concept of prototypal inheritance.

4. Differentiate between a variable that is null, undefined, or undeclared.

5. Define what a closure is and describe its uses and advantages.

6. Explain the primary distinction between the Array.forEach() loop and Array.map() method, as well as when to choose one over the other.(see polyfills also)

7. What is a common scenario for employing anonymous functions?

8. Distinguish between host objects and native objects.
   -Clarify the distinctions among 'function User(){}', 'var user = User()', and 'var user = new User()

9. Can you explain the purposes of Function.call and Function.apply, along with their notable differences?

10. Describe the Function.prototype.bind method.

11. Explain the differences between feature detection, feature inference, and utilizing the User Agent (UA) string.

12. Define the concept of "hoisting."

13. What is type coercion, and what are some common pitfalls associated with relying on it in JavaScript code?

14. Describe event bubbling and event capturing.

15. What distinguishes an "attribute" from a "property"?

16. List the advantages and disadvantages of extending built-in JavaScript objects.

17. Explain the differences between == and ===.

18. Discuss the same-origin policy's implications for JavaScript.

19. Why is it referred to as a "Ternary operator," and what does the term "Ternary" signify?

20. Define strict mode and outline some of its advantages and disadvantages.

21. Analyze the pros and cons of writing JavaScript code in a language that compiles to JavaScript.

22. What tools and techniques do you employ for debugging JavaScript code?

23. Enumerate the benefits and drawbacks of immutability and explain how you can achieve it in your code.

24. Differentiate between synchronous and asynchronous functions and elucidate the event loop.

25. Explain the disparities between variables created using let, var, or const.

26. Compare ES6 classes and ES5 function constructors, and furnish a use case for the arrow (=>) function syntax.

27. Describe the advantages of using the arrow syntax for methods in constructors.

28. Define a higher-order function and provide an example of object or array destructuring.

29. Give an example of generating a string using ES6 Template Literals and explain their benefits.

30. Provide an example of a curry function and clarify why this syntax can be advantageous.

31. Discuss the benefits of using spread syntax and differentiate it from rest syntax.

- Explain debounce vs throttling.
- Define what a promise is and describe its applications.
- Explore how Object-Oriented Programming (OOP) principles can be applied when coding in JavaScript.

# Answers/Solutions

1. <a name="event-delegation-js"> 
   [**Event Delegation in JS**]

Event delegation is a technique in javascript where instead of handling individual events on child elements, you add a handler on the parent which handles events for all the child elements. This technique works on the concept of event bubbling where an event object gets created when an event occurs and travels down to the target object and then bubbles up. It is in the bubbling phase that the event is caught by the event listener attached to the parent. **It can prove to be optimal as it reduces the need of attaching a lot of event listeners which can make the application slow**

```html
<div id="parent">
  <button>child1</button><button>child2</button><button>child3</button>
</div>
<script>
  const parent = document.getElementById("parent");
  parent.addEventListener("click", (e) => {
    alert(e.target.textContent);
  });
</script>
```

</a>
