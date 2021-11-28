//callback function
const cbprint = function Print(){
    console.log ("Data is added");
}
//passing cb function as a paramter
function node_Add(){
    const data ={name:"Emp01"};
    db_Add(data,cbprint);
}
function db_Add(data, cb){
    //Adds data
    //Executing cb function
    cb();
}
node_Add();



