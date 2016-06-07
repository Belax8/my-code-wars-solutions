//Rules
/*
You get a new job working for Eggman Movers. Your first task is to write a method that will allow the admin staff to enter a person’s name and return what that person's role is in the company.

You will be given an array of object literals holding the current employees of the company. You code must find the employee with the matching firstName and lastName and then return the role for that employee or if no employee is not found it should return "Does not work here!"

The array is preloaded and can be referenced using the variable employees ($employees in Ruby). It uses the following structure.

There are no duplicate names in the array and the name passed in will be a single string with a space between the first and last name i.e. Jane Doe or just a name.

var employees = [ { firstName: 'Ollie', lastName: 'Hepburn', role: 'Boss' },
{ firstName: 'Morty', lastName: 'Smith', role: 'Truck Driver' },
{ firstName: 'Peter', lastName: 'Ross', role: 'Warehouse Manager' },
{ firstName: 'Cal', lastName: 'Neil', role: 'Sales Assistant' },
{ firstName: 'Jesse', lastName: 'Saunders', role: 'Admin' },
{ firstName: 'Anna', lastName: 'Jones', role: 'Sales Assistant' },
{ firstName: 'Carmel', lastName: 'Hamm', role: 'Admin' },
{ firstName: 'Tori', lastName: 'Sparks', role: 'Sales Manager' },
{ firstName: 'Peter',
lastName: 'Jones',
role: 'Warehouse Picker' },
{ firstName: 'Mort',
lastName: 'Smith',
role: 'Warehouse Picker' },
{ firstName: 'Anna', lastName: 'Bell', role: 'Admin' },
{ firstName: 'Jewel', lastName: 'Bell', role: 'Receptionist' },
{ firstName: 'Colin', lastName: 'Brown', role: 'Trainee' } ];
*/


//My Code
function findEmployeesRole(name) {

  for(var i = 0; i < employees.length; i++) {
    if(employees[i].firstName + " " + employees[i].lastName === name) {
      return employees[i].role;
    }
  }

  return "Does not work here!";
}


//Tests
findEmployeesRole("Dipper Pines"); //should return "Does not work here!"
findEmployeesRole("Morty Smith"); //should return "Truck Driver"
findEmployeesRole("Anna Bell"); //should return "Admin"
