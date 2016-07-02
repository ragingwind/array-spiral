# array-spiral [![Build Status](https://travis-ci.org/ragingwind/array-spiral.svg?branch=master)](https://travis-ci.org/ragingwind/array-spiral)

> Extended Array with spiral iterator. (Migrated from [iterarry](https://github.com/ragingwind/iterarry))


## Install

```
$ npm install --save array-spiral
```


## Usage

```js
var arr = new ArraySpiral();
var itr;

arr.push(1, 2, 3, 4, 5);
itr = arr.iterator;

console.log(itr.next());
//=> 0

console.log(itr.prev());
//=> 1

// re-gain with iterator
itr = ArraySpiral.iterator(arr.concat([6, 7, 8, 9]));
console.log(itr.next());
```

## API

### ArraySpiral

#### ArraySpiral::iterator(new Array())

Create an Array supporting iterator

#### ArraySpiral.iterator

Return iterator from Array instance created with ArraySpiral

### Iterator

#### next()

Returns next item

#### prev()

Returns previous item

## License

MIT © [Jimmy Moon](http://ragingwind.me)
