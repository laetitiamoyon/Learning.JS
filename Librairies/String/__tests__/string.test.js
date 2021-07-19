const stringLibrary = require('../string.js')

describe('String library', () =>
{
    describe('length', () =>
    {
        test('This string should return 5', () =>
        {
            // Arrange
            const string = "Salut"
            const expectedValue = 5
            
            // Act
            const value = stringLibrary.length(string)

            // Assert
            expect(value).toBe(expectedValue)
        })
    })
    describe('startsWith', () =>
    {
        test('If the string start with Salut, it should return true', () =>
        {
            // Arrange
            const string = "Salut! comment ça va ?"
            const start = "Salut"
            const expectedResponse = true
            
            // Act
            const response = stringLibrary.startsWith(string, start)

            // Assert
            expect(response).toBe(expectedResponse)
        })
        test('If the string dont start with comment, it should return false', () =>
        {
            // Arrange
            const string = "Salut! comment ça va ?"
            const start = "comment"
            const expectedResponse = false
            
            // Act
            const response = stringLibrary.startsWith(string, start)

            // Assert
            expect(response).toBe(expectedResponse)
        })
    })
    describe('concat', () =>
    {
        test('Those two text should be consolidate', () =>
        {
            // Arrange
            const string1 = "Salut!"
            const string2 = "comment ça va ?"
            const expectedNewString = "Salut!comment ça va ?"
            
            // Act
            const newString = stringLibrary.concat(string1, string2)

            // Assert
            expect(newString).toBe(expectedNewString)
        })
    })

    describe('repeat', () =>
    {
        test('This text should be repeat 3 times', () =>
        {
            // Arrange
            const string = "Salut!"
            const repeatCount = 3
            const expectedNewString = "Salut!Salut!Salut!"
            
            // Act
            const newString = stringLibrary.repeat(string, repeatCount)

            // Assert
            expect(newString).toBe(expectedNewString)
        })
    })
    describe('charAt', () =>
    {
        test('It should be return the world which it match with his index', () =>
        {
            // Arrange
            const string = "Hello"
            const index = 3
            const expectedNewString = "l"
            
            // Act
            const newString = stringLibrary.charAt(string, index)

            // Assert
            expect(newString).toBe(expectedNewString)
        })
    })
    describe('lastIndexOf', () =>
    {
        test('It should return the index 5', () =>
        {
            // Arrange
            const text = "chienne"
            const value = "n"
            const expectedIndex = 5
            
            // Act
            const index = stringLibrary.lastIndexOf(text, value)

            // Assert
            expect(index).toBe(expectedIndex)
        }),
        test('It should return the index 8', () =>
        {
            // Arrange
            const text = "Barcelone"
            const value = "e"
            const expectedIndex = 8
            
            // Act
            const index = stringLibrary.lastIndexOf(text, value)

            // Assert
            expect(index).toBe(expectedIndex)
        })
    })
    describe('indexOf', () =>
    {
        test('It should return the index 4', () =>
        {
            // Arrange
            const text = "chienne"
            const value = "n"
            const expectedIndex = 4
            
            // Act
            const index = stringLibrary.indexOf(text, value)

            // Assert
            expect(index).toBe(expectedIndex)
        })
        test('It should return the index 4', () =>
        {
            // Arrange
            const text = "Barcelone"
            const value = "e"
            const expectedIndex = 4
            
            // Act
            const index = stringLibrary.indexOf(text, value)

            // Assert
            expect(index).toBe(expectedIndex)
        })
    })
    describe('slice', () =>
    {
        test('It should be return petit', () =>
        {
            // Arrange
            const text = "Thepetitchien"
            const start = 3
            const end = 7
            const expectedNewString = "petit"
            
            // Act
            const newString = stringLibrary.slice(text, start, end)

            // Assert
            expect(newString).toBe(expectedNewString)
        })
    })
    describe('includes', () =>
    {
        test('It should be return true if text contains the word dog', () =>
        {
            // Arrange
            const text = "My dog is very nice"
            const word = "dog"
            const expectedResponse = true
            
            // Act
            const response = stringLibrary.includes(text, word)

            // Assert
            expect(response).toBe(expectedResponse)
        })
        test('It should be return false if text doesnt contains the word good', () =>
        {
            // Arrange
            const text = "My dog is very nice"
            const word = "good"
            const expectedResponse = false
            
            // Act
            const response = stringLibrary.includes(text, word)

            // Assert
            expect(response).toBe(expectedResponse)
        })
    })

})

