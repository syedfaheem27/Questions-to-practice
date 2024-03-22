//A simple way to deep clone an Object

/*But there are certain bottlenecks regarding this approach.
    1. If the object contains circular references - it can run into an infinite loop
    2. Also, the prototype chain of the objects isn't preserved
    3. It uses recursion which can be computationally expensive
*/

function deepClone(obj) {
  if (!obj || typeof obj !== "object") return obj;

  let clonedObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key))
      clonedObj[key] = deepClone(obj[key]);
  }

  return clonedObj;
}
