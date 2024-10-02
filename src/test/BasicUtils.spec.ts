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

    test.only("User Authentication", () => {
        const sut = authenticateUser;
        const actual = sut("developer", "dev");
        expect(actual.isAuthenticate).toBeTruthy();
        expect(actual.usernameToLower).toBe("developer");
        // arrays
        expect(actual.usernameCharacters).toEqual([
            "d",
            "e",
            "v",
            "e",
            "l",
            "o",
            "p",
            "e",
            "r",
        ]);
        expect(actual.usernameCharacters).toContain("w");
    });
});
