const Manager = require("../lib/Manager.js");

describe("Employee", () => {
  describe("Employee", () => {
    it("Should create a proper object", () => {
        
      const myManager = new Manager("Kyle", 420, "StraightAKyle@gmail.com", 69);
        expect(myManager.getName()).toEqual("Kyle");
        expect(myManager.getId()).toEqual(420);
        expect(myManager.getEmail()).toEqual("StraightAKyle@gmail.com");
        expect(myManager.officeNumber).toEqual(69);
        expect(myManager.getRole()).toEqual("Manager");
    });
  });
});