import { fetchPromise } from "../app/sum";

describe("fetch async test suite", () => {
    test('the data is peanut butter', async() => {
        const data = await fetchPromise();
        expect(data).toBe('peanut butter');
    })
});