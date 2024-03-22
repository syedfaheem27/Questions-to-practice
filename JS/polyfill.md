<a id="top"></a>

# Polyfills of some important higher order functions

1.  [Array.protoype.map](#map)

2.  [Array.prototype.filter](#filter)

3.  [Array.prototype.reduce](#reduce)

4.  [Array.prototype.forEach](#foreach)

**Map**
<a id="map">

```javascript
Array.prototype.ourMap = function (
  callback,
  thisArg
) {
  let arr = [];

  for (let i = 0; i < this.length; i++)
    arr.push(
      callback.call(thisArg, this[i], i, this)
    );

  return arr;
};
```

</a>

[back to top ⬆️](#top)

**Filter**
<a id="filter">

```javascript
Array.prototype.ourFilter = function (
  callback,
  thisArg
) {
  let arr = [];

  for (let i = 0; i < this.length; i++)
    if (callback.call(thisArg, this[i], i, this))
      arr.push(this[i]);

  return arr;
};
```

</a>

[back to top ⬆️](#top)

**Reduce**
<a id="reduce">

```javascript
Array.prototype.ourReduce = function (
  callback,
  initialVal
) {
  let sum = initialVal;

  for (let i = 0; i < this.length; i++) {
    if (sum === undefined) sum = this[i];
    else {
      sum = callback(sum, this[i], i, this);
    }
  }

  return sum;
};
```

</a>

[back to top ⬆️](#top)

**forEach**
<a id="foreach">

```javascript
Array.prototype.ownEach = function (
  callback,
  thisArg
) {
  for (i = 0; i < this.length; i++)
    callback.call(thisArg, this[i], i, this);
};
```

</a>

[back to top ⬆️](#top)
