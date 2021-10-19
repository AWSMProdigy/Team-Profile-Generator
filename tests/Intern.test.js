const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("Intern", () => {
    it("Should create a proper object", () => {
        
      const myIntern = new Intern("Kyle", 420, "StraightAKyle@gmail.com", "UCF");
        expect(myIntern.getName()).toEqual("Kyle");
        expect(myIntern.getId()).toEqual(420);
        expect(myIntern.getEmail()).toEqual("StraightAKyle@gmail.com");
        expect(myIntern.getSchool()).toEqual("UCF");
        expect(myIntern.getRole()).toEqual("Intern");
    });
  });
});