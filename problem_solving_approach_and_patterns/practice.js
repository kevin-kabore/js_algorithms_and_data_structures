/*

Frequency Counter - sameFrequency

Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // true

*/

function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  let arr1 = `${num1}`.split(''),
      arr2 = `${num2}`.split(''),
      freq1 = {};
      
  if(arr1.length !== arr2.length) {return false;}
  for(let n of arr1) {
      freq1[n] ? (freq1[n] +=1) : (freq1[n] = 1);
  }

  for(let n of arr2) {
      if(!freq1[n]) {
          return false;
      } else {
          freq1[n] -= 1;
      }
  }
  
  return true;
}

/*

 areThereDuplicates

 Implement a fn areThereDuplicates that takes a variable num of args, and checks if there are any duplicates among the args passed in
	areThereDuplicates(1,2,3) //false
	areThereDuplicates(1,2,2) //true
	areThereDuplicates('a','b','c','a') //true
*/

function areThereDuplicates(...args) {
	if(args.length === 0) {return false;}

	let freq = {};

	for (let arg of args) {
		if (freq[arg]) {
			return true;
		} else {
			freq[arg] = 1;
		}
	}
	return false;
}



function areThereDuplicatesMP(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

areThereDuplicates(1,2,3) //false
areThereDuplicates(1,2,2) //true
areThereDuplicates('a','b','c','a') //true