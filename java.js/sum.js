// // var arr=[1,9,3,55];
// // var sum=arr[0]+arr[1]+arr[2]+arr[3];
// // console.log(sum);

// // var obj={arr:[1,2],v:99,c:{var:[3,4]},b:{num:1000}};
// // sum=obj.arr[0]+obj.arr[1]+obj.v+obj.c.var[0]+obj.c.var[1]+obj.b.num;
// // console.log(sum);

// var str='hi' + 'world';
// console.log(str);

// let random = Math.random();
// if(random < 0.5){
//     console.log("Your number is : " + random );
// }
// function area(){
//     const s =(a+b+c)/2;
//     let area = Math.sqrt(s(s-a)(s-b)(s-c))

//     return area;

// }
// let a=5;
//     let b=6;
//     let c=8;
// console.log()
// 

// var array = [1,9];

// for (var i =array.length-1; i >= 0; i--) {
//   if(arr[i]<9){
//     arr[i]=arr[i]+1;
//     return arr;
//   }

//   arr[i]=0;
// }
// return arr.unshift(1);

// console.log(array);

// 

//linear search
// function linearSearch(arr,key){
//     for(var i=0;i<arr.length;i++){
//         if(key==arr[i]){
//            return i;
//         }
//     }
//     return -1;
// } 

// var arr=[4,56,48,89,45];
// var size=2;
// arr.forEach(chunky)
// var key=56;
// var index = linearSearch(arr, key);
// console.log(index);

//chunkying the arr

// function chunky(arr,size){
//     let newArr = [];
//     for(var i =0;i<arr.length;i++){
//         const arr1 = arr.slice(i,i+size);
//         newArr.push(arr1);

//     }return newArr;




// }
// const newobj={
//     function:chunky(arr,size),
//     function:linearSearch(arr,key)

// };
// let arr=[1,2,3,91];
// var ans = arr[0]*arr[1]*arr[2]*arr[3];
// console.log(ans);

// function canVote(age){
//     return age >= 18;
// }

// function func(){
//     let filtered = [22,15,18,24,23].filter(canVote);
//     console.log(canVote);
//     return(filtered);
// }
// console.log(func());

// const mixData = [10,'hello',true,null,25,undefined,false];
// let filtered = mixData.filter((mix) => mix != null || undefined);
// console.log(filtered);
// function x(cb,cb2) {
//     z = cb()
//     if (z==0) {
//         return 0;
//     }
//     console.log(cb)
//     cb();
//     cb2();
// }

// function y() {
//     console.log(1+1);
//     return 0;
//     // a()
// }
// function z() {
//     console.log(3-2);
// }
// function omega() {
//     console.log(1);
// }

// // var y = 909090;
//  x();
// y(x);

// function plusOne(num){
    
// }
// function func(){
//     let mappedAr=[24,12,45,150].map(plusOne);
//     console.log(mappedAr);
// }

// func();

// [2,1,7,8,5,7,8,3]
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); 
// var  users =[
//     {firstname : "Abhay" ,lastname : "pratap"},
//     {firstname : "singh" ,lastname : "tomar"},
//     {firstname : "chitkara" ,lastname : "university"}

// ];

// var result = users.map((name)=>{
//     return `${name.firstname} ${name.lastname}`
// })

// console.log(result);

