const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("Engineer", () => {
    it("Should create a proper object", () => {
        
      const myEngineer = new Engineer("Kyle", 420, "StraightAKyle@gmail.com", "AWSMProdigy");
        expect(myEngineer.getName()).toEqual("Kyle");
        expect(myEngineer.getId()).toEqual(420);
        expect(myEngineer.getEmail()).toEqual("StraightAKyle@gmail.com");
        expect(myEngineer.github).toEqual("AWSMProdigy");
        expect(myEngineer.getRole()).toEqual("Engineer");
    });
  });
});