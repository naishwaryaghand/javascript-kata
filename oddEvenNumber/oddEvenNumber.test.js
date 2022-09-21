function splitOddAndEven(numbers) {
    let even=[];
    let odd=[];
    for (const number of numbers) {
        if (number % 2 == 0) {
            even.push(number)
            console.log(even);
        } else {
            odd.push(number)
            console.log(odd);
        }
    }
    let output;
    return {even:even, odd:odd};
}


describe('oddEvenNumber', () => {
    it('should split odd and even numbers', function () {
        let numbers = [1,2,3,4]
        let expectedOutput = {even:[2,4],odd:[1,3]};

        const result = splitOddAndEven(numbers)
        // expect(splitOddAndEven(numbers)).toBe(splitOddAndEven.even );
        expect(result).toEqual(expectedOutput);
    });
})
