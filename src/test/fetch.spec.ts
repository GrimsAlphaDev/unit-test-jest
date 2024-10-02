import { fetchData } from "../app/sum";

describe("fetch data async", () => {
    test("the data is peanut butter", (done) => {
        function callback(data) {
            expect(data).toBe("peanut butter");
            done();
        }

        fetchData(callback);
    });
});
