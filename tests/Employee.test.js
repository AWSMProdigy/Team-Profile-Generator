const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe("Employee", () => {
    it("Should create a proper object", () => {
        
      const myEmployee = new Employee("Kyle", 420, "StraightAKyle@gmail.com");
        expect(myEmployee.getName()).toEqual("Kyle");
        expect(myEmployee.getId()).toEqual(420);
        expect(myEmployee.getEmail()).toEqual("StraightAKyle@gmail.com");
        expect(myEmployee.getRole()).toEqual("Employee");
    });
  });
});