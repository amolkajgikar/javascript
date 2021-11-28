const empID = (function(){
    let count =0; // another way to declear variable
    return function(){
        ++count;
        return `empID${count}`;
    };
})();
console.log(empID);
console.log("Emp01: "+empID());
console.log("Emp02: "+empID());
console.log("Emp03: "+empID());