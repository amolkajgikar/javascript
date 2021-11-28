function node_Add(){
    const data ={name:"Emp01"};
    db_Add(data).then(
        (value)=>{
            console.log("data is printed");
        });
        (err=>{
            console.log("Error occured");
        }
        );
}
function db_Add(){
    return new Promise((resolve, reject)=>{
        resolve ("success");
    });
}
node_Add();
   