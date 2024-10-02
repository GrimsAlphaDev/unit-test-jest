import { fetchPromise } from "../app/sum";

test('the data is peanut butter', () => {
    return expect(fetchPromise()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
    return expect(fetchPromise()).rejects.toThrow('error');
})