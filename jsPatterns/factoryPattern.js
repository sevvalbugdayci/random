function Factory() {
    this.createEmployee = function(type) {
       var employee ;

       if(type === 'fulltime') {
         employee = new FullTime();
       } else if (type === 'parttime') {
        employee = new PartTime();
       } else if (type === 'temporary') {
        employee = new Temporary();
       }


       employee.type = type;
       employee.say = function() {

       }

       return employee;
    }
}


var FullTime = function() {
    this.hourly = '30$';
}
var PartTime = function() {
    this.hourly = '20$';
}
var Temporary = function() {
    this.hourly = '10$';
}
var factory = new Factory();

var employees = [];
employees.push(factory.createEmployee('fulltime'));
employees.push(factory.createEmployee('parttime'));
employees.push(factory.createEmployee('temporary'));


employees.forEach(function(emp) {
    emp.say();
})

