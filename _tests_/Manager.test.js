const Manager = require('../lib/Manager');

describe("Manager", () => {

    describe("getName", () => {
        it("should return a name", () => {
            const name = "Tom";
            const manager = new Manager(name);
            const result = manager.getName(name);
            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return an id", () => {
            const id = 4;
            const manager = new Manager(id);
            const result = manager.getId();
            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it("should return an email", () => {
            const email = "tom@mail.com";
            const manger = new Manager(email);
            const result = manger.getEmail(email);
            expect(result).toEqual(email);
        });
    });

    describe("getOfficeNumber", () => {
        it("should return office number", () => {
            const officeNumber = "111-111-1111";
            const manager = new Manager(officeNumber);
            const result = manager.getOfficeNumber(officeNumber);
            expect(result).toEqual(officeNumber);
        });
    });

    describe("getRole", () => {
        it("should return a role", () => {
            const role = "Manager";
            const manager = new Manager(role);
            const result = manager.getRole(role);
            expect(result).toEqual(role);
        });
    });

});