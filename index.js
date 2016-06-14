'use strict';

class Iterator {
	constructor(arr) {
		if (!arr instanceof Array) {
			throw new TypeError('Invalid type of Array');
		}

		this.arr_ = arr;
		this.cursor_ = -1;
	}

	next() {
		this.cursor_ = ++this.cursor_ % this.arr_.length;
		return this.arr_[this.cursor_];
	}

	prev() {
		if (this.cursor_ <= 0) {
			this.cursor_ = this.arr_.length - 1;
		} else {
			this.cursor_ = (--this.cursor_) % this.arr_.length;
		}

		return this.arr_[this.cursor_];
	}
}

class IterArray extends Array {
	static iterator(arr) {
		return new Iterator(arr);
	}

	get iterator() {
		return new Iterator(this);
	}
}

module.exports = IterArray;
