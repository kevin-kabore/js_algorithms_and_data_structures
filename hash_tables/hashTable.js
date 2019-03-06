/*
	Hash Tables

	Set
	- Accepts key and value
	- Hashes key
	- Stores key/val pair in the hash table array via separate chaining

	Get
	- Accepts key
	- Hashes key
	- Retrieves key/value from hash table
	- If no key, returns undefined

	Keys
	- Loops thorugh the hash table array and returns an array of keys

	Values
	- Loops thorugh the hash table array and returns an array of values
*/

class HashTable {
	constructor(size=53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0,
			PRIME = 31;
		for(let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i],
				val = char.charCodeAt(0) - 96;
			total = (total * PRIME + val) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) {
		let hashIdx = this._hash(key);

		if (!this.keyMap[hashIdx]) {
			this.keyMap[hashIdx] = [];
		} 

		this.keyMap[hashIdx].push([key, value]);
	}

	get(key) {
		let hashIdx = this._hash(key);
		
		if (this.keyMap[hashIdx]) {
			for (let i = 0; i < this.keyMap[hashIdx].length; i++) {
				if (this.keyMap[hashIdx][i][0] === key) {
					return this.keyMap[hashIdx][i][1];
				}
			}
		}

		return undefined;
	}

	keys() {
		let keys = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if(!keys.includes(this.keyMap[i][j][0])) {
						keys.push(this.keyMap[i][j][0]);	
					} 
				}	
			}
		}
		return keys;
	}

	values() {
		let values = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if(!values.includes(this.keyMap[i][j][1])){
						values.push(this.keyMap[i][j][0]);	
					} 
				}	
			}
		}
		return values;
	}
}