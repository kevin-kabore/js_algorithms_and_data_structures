/* 

Performance of Arrays and Objects

Takeaways: 
- Arrays are great for order, but slower than objects.
- Objects: O(1) except for searching O(n), Arrays: O(n) except for push/pop O(1) and sort O(nlogn)



*/


/*

Object properties

- Insert: O(1)
- Remove: O(1)
- Searching: O(N)
- Access: O(1)


- Useful when no order needed

*/

let intructor = {
	firstname: "Kelly".
	isIntructor: true,
	favNumbers: [1,2,3,4]
}


Object.keys(instructor) // O(n)
Object.values(instructor) // O(n)
Object.entries(instructor) // O(n)
instructor.hasOwnProperty("firstname") // O(1)


/*

Array properties

- Use when need order (usually can still use other data structures) ex linkedlists
- Costs around inserting and removal

- Insert: depends. .push() // O(1) .unshift() // O(n) inerting in beginning
- Remove: depends. .pop() // O(1) .shift() // O(n) remove from beginning
- Searching: O(n)
- Access: O(1)

// .slice (copy), .splice() (remove and add new elements) O(n)
// .sort() O(nlogn)
// forEach/map/filter/reduce/etc O(n)

*/