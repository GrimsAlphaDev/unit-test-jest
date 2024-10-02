import { authenticateUser, product } from "../app/BasicUtils";

describe("BasicUtils test suite", () => {
    test("returns the product of 3 and 2", () => {
        // arrange
        const sut = product;
        // acting
        const actual = sut(3, 2);
        // asserting
        expect(actual).toBe(6);
        expect(actual).toEqual(6);
        expect(actual).toBeLessThan(8);
        expect(actual).toBeGreaterThan(4);
    });
    describe("Authentication test suite", () => {
        test("return the lower case of a valid user", () => {
            const sut = authenticateUser;
            const actual = sut("developer", "dev");
            expect(actual.usernameToLower).toBe("developer");
        });
        test("return the username characters of a valid user", () => {
            const sut = authenticateUser;
            const actual = sut("developer", "dev");
            expect(actual.usernameCharacters).toEqual(expect.arrayContaining([
                "l",
                "o",
                "p",
                "e",
                "r",
                "d",
                "e",
                "v",
                "e",
            ]));
        });
        test("return the username characters of a valid user", () => {
            const sut = authenticateUser;
            const actual = sut("developer", "dev");
        });
    });
});

function myFunction(input: any): any {
    if (typeof input !== 'number'){
        throw new Error("Invalid input");
    }
}


test.only('Throws on invalid input', () => {
    expect(() => {
        myFunction('asd');
    }).toThrow();
});
