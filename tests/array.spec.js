/* eslint-disable no-undef */
const expect = require("chai").expect;

describe("Array", () => {
  describe("#sort", () => {
    it("should sort thr array ny name", () => {
      var names = ["Dani", "Moshe", "Adam"];
      expect(names.sort()).to.be.eql(["Adam", "Dani", "Moshe"]);
    });
  });
});
