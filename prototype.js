
 function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}
Student.prototype.add = function() {
    console.log('ADD')
}
Student.prototype.get = function() {
    console.log('GET')
}
Student.prototype.update = function() {
    console.log('UPDATE')
}
Student.prototype.delete = function() {
    console.log('DELETE')
}
var std = new Student("std01", 33, "Mean");
console.log(std);
std.add();
std.get();
std.update();
std.delete();