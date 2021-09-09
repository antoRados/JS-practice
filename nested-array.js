const myArr = [[6], [2], [3], [7], [5]]
/*var myArr = new Array ();

myArr[0] = new Array ([1]);
myArr[1] = new Array ([2]);
myArr[2] = new Array ([3]);
myArr[3] = new Array ([4]);
myArr[4] = new Array ([5]);
*/
for(i = 0; i < myArr.length; i++) {
	if(myArr[i] % 2 === 0){
		console.log("Even")
	} else {console.log("Odd")}
}