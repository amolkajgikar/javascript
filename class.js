//name of class is not simillar to name of constructor
//no need tp specific finction keyword *this is from egnma script 6
class Employee{
    constructor(name, dept){
    this.name=name
    this.dept=dept;
    }

    Print(){
        console.log(this.name+"Dept: "+this.dept);
    }
}
const emp = new Employee("John","IT");
emp.Print();
