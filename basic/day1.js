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
const myMath = {
    multiply(x,y){
        return x * y;
    },
    divide(x,y){
        return x / y;
    },
    square(x){
        return x * x;
    },
    meow(){
        console.log(`${this.multiply} says MEOWWWW` )
    }
}

