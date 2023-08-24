const { generateText } = require('./util')

test("should output name and age", () => { 
    const test = generateText("Max", 21)
    expect(test).toBe("Max (21 years old)")

    const test2 = generateText("Jim", 31)
    expect(test2).toBe("Jim (31 years old)")
})

test("should output name and age", () => { 
    const test = generateText("", null)
    expect(test).toBe(" (null years old)")
})