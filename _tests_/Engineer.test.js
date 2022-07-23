const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

    describe("getName", () => {
        it("should return a name", () => {
            const name = "John";
            const engineer = new Engineer(name);
            const result = engineer.getName(name);
            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return an id", () => {
            const id = 2;
            const engineer = new Engineer(id);
            const result = engineer.getId(id);
            expect(result).toEqual(id);
        });
    });

    describe("getGithub", () => {
        it("should return a github", () => {
            const github = "github.com/john";
            const engineer = new Engineer(github);
            const result = engineer.getGithub(github);
            expect(result).toEqual(github);
        });
    });

    describe("getRole", () => {
        it("should return a role", () => {
            const role = "Engineer";
            const engineer = new Engineer(role);
            const result = engineer.getRole(role);
            expect(result).toEqual(role);
        });
    });

});