const Intern = require('../lib/Intern');

describe("Intern", () => {

    describe("getName", () => {
        it("should return a name", () => {
            const name = "Judy";
            const intern = new Intern(name);
            const result = intern.getName(name);
            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return an id", () => {
            const id = 3;
            const intern = new Intern(id);
            const result = intern.getId(id);
            expect(result).toEqual(id);
        });
    });

    describe("getSchool", () => {
        it("should return school", () => {
            const school = "UTA";
            const intern = new Intern(school);
            const result = intern.getSchool(school);
            expect(result).toEqual(school);
        });
    });

    describe("getRole", () => {
        it("should return a role", () => {
            const role = "Intern";
            const intern = new Intern(role);
            const result = intern.getRole(role);
            expect(result).toEqual(role);
        });
    });

});