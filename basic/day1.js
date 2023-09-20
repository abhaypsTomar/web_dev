// let objs={college:'chitkara university',roll_no:2110993753,name:"Abhay Pratap Singh Tomar",num_student:[1,2,3,4]}
// console.log(objs)
// function sum(a,b){
//     return a+b;
    
// }
// console.log(sum(1,2))
// var obj={
    
//     sum:function(a,b){
//         return a+b;
        
//     },
//     multi:function(a,b){
//         return a*b;
//     }
// }
// console.log(obj)
// let numhens = 5 ;

// let numRoosters = 1;

// console.log(numRoosters)

// let firstName = "Ziggy";

// let msg = "Please do not feed the chimps";

// console.log(firstName.toUpperCase(5));

// firstName.search(Z);
// console.log(`I counted ${3+4} sheep`);
// 
// const fitBitData = {
//     totalSteps : 308727,
//     totalMiles : 211.7,
//     avgCalorieBurn : 5755,
//     workoutThisWeek : '5 of 7',
//     avgGoodSleep : '2:13',
//     gym: {
//         workoutThisWeek: 89,
        
//     },
//     workoutToday:[
//         'legs',3,'excercise'
//     ]
// }

// fitBitData.forEach(function(el){
//     console.log(`${el.totalMiles}`)
// });

// console.log(fitBitData['totalMiles']); 

// const gym = [""];

// for(const work of gym){
//     console.log(work);
// }
 
// function grumpus(){
//     console.log('ugh...you again...');
//     console.log('for the last time...');
//     console.log('LEAVE ME ALONE!!!');
// }

// function gym(workout){
//     console.log(`workout of the day : ${workout}`);
// }

// const gymm = gym("legs")

//nested function
// function bankRobbary(){
//     let heros=["spider","wolvrine","batman"];
//     function callForHelp(){
//         for(let hero of heros){
//             console.log(`PLEASE HELP US : ${hero.toUpperCase()}`)
//         }
//     }
//     cryForHelp();

// }
// function callTentime(func){
    
//     func();
//     func();
//     func();
//     func();func();

    
// }
// function rolldie(){
//     const roll =  Math.floor(Math.random()*6)+1;
//     console.log(roll);
// }

// callTentime(rolldie);
// const myMath = {
//     multiply(x,y){
//         return x * y;
//     },
//     divide(x,y){
//         return x / y;
//     },
//     square(x){
//         return x * x;
//     },
//     meow(){
//         console.log(`${this.multiply} says MEOWWWW` )
//     }
// }
// try {
//     // Attempt to parse a non-integer as an integer
//     const result = parseInt("Hello");
//     console.log(result); // This line will not be reached
// } catch (error) {
//     // Handle the exception
//     console.error("An error occurred:", error);
// }
// function yell(msg){
//     try{
//         console.log(msg.toUpperCase().repeat(3));
//     }
//     catch(error){
//         console.log(error);
//         console.log("please pass a String next time");
//     }
// };
//  const num = [1,2,2,3,56,46,];
//  const text = num.map(function(y){
//     return y*2;
//  })
// num.forEach(function(el){
//     if(el % 2==0){
//         console.log(el);
//     }
   
// })

// MAP method;
// const texts = ['I' , 'love' , 'you' ,'moreeee'];

// const cap = texts.map(function(t){
//     return t.toUpperCase();
// })
const square = (x) => {
    return x*x;
}

const rollDie = () => {
    return  Math.floor(Math.random() * 6)+1;
}