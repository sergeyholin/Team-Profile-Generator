const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("getName", () => {
        it("should return a name", () => {
            const name = "Jack";
        
            const result = new Employee().getName(name);

            expect(result).toEqual(name);
        });
    });
});