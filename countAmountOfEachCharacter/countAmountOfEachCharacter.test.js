function countEachCharacter(input) {
    return undefined;
}

describe('countEachCharacter', () => {
    it('Given bee it should return { "b": 1, "e": 2 }', function () {
        let input = "bee"
        let output = { "b": 1, "e": 2 }

        const result = countEachCharacter(input)
        expect(result).toEqual(output)
    })
})