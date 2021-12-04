//rest and spread operator (...)
//Rest - combine multiple elements into an array
//spread - spreads an array into mupltiple elements
function add(a,b){
    console.log( a+b);
}
add (1,2);
add (1,2,3);
add (1,2,3,4);
//here the result will come as 3 3 3 irrespective of the number
function addWithRest(...numbers){
    let sum =0;
    for (let num of numbers){
        sum+=num;
    }
    console.log(sum);
}
addWithRest(1);
addWithRest(1,2);
addWithRest(1,3,4,5);

//spread operator
function addNames(){
    const names=["Person1","Person2","Person3"];
    const morenames=["Person4", ...names]
    console.log(morenames);
}
addNames();