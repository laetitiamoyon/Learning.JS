const { test } = require('@jest/globals')
const arrayLibrary = require('../array.js')

describe('Array library', () =>
{
    describe('length', () =>
    {
        test('An empty array should return 0', () =>
        {
            // Arrange
            const array = []
            const expectedValue = 0
            
            // Act
            const value = arrayLibrary.length(array)

            // Assert
            expect(value).toBe(expectedValue)
        }),

        test('An array with 3 elements should return 3', () =>
        {
            // Arrange
            const array = [1, 2, 3]
            const expectedValue = 3
            
            //Act
            const value = arrayLibrary.length(array)

            //assert
            expect(value).toBe(expectedValue)
        })
    })
    describe('includes', () => 
    {
        test('If the array contains the value 7, it should return true', () =>
        {
            // Arrange
            const array = [1, 2, 7]
            const expectedResponse = 7 === true

            // Act
            const response = arrayLibrary.includes(array)

            // Assert
            expect(response).toStrictEqual(expectedResponse)
        })
    })
    describe('reverse', () => 
    {
        test('should return a new array with reverse value', () =>
        {
            // Arrange
            const array = [1, 2, 3, 4, 5]
            const expectedNewArray = [5, 4, 3, 2, 1]

            // Act
            const newArray = arrayLibrary.reverse(array)

            // Assert
            expect(newArray).toStrictEqual(expectedNewArray)
        })
    })
    describe('pop', () => 
    {
        test('The last item of an array is 5, it should be delete', () =>
        {
            // Arrange
            const array = [1, 2, 3, 4, 5]
            const expectedNewArray = [1, 2, 3, 4]

            // Act
            const newArray = arrayLibrary.pop(array)

            // Assert
            expect(newArray).toStrictEqual(expectedNewArray)
        })
    })

    describe('shift', () => 
    {
        test('The first item of an array is 1, it should be delete', () =>
        {
            // Arrange
            const array = [1, 2, 3, 4, 5]
            const expectedNewArray = [2, 3, 4, 5]

            // Act
            const newArray = arrayLibrary.shift(array)

            // Assert
            expect(newArray).toStrictEqual(expectedNewArray)
        })
    })
    describe('unshift', () => 
    {
        test('The item 0 should be added at the beginning of the array', () =>
        {
            // Arrange
            const array = [1, 2, 3, 4, 5]
            const newItem = 0
            const expectedNewArray = [0, 1, 2, 3, 4, 5]


            // Act
            const newArray = arrayLibrary.unshift(array, newItem)

            // Assert
            expect(newArray).toStrictEqual(expectedNewArray)
        })
    })
    describe('concat', () => 
    {
        test('it should consolidate two array in one array', () =>
        {
            // Arrange
            const array1 = [1, 2, 3]
            const array2 = [4, 5, 6]
            const expectedNewArray = [1, 2, 3, 4, 5, 6]

            // Act
            const newArray = arrayLibrary.concat(array1, array2)

            // Assert
            expect(newArray).toStrictEqual(expectedNewArray)
        })
    })

    describe('fill', () => 
    {
        test('it should return an array with only the value 5', () =>
        {
            // Arrange
            const array = [1, 2, 3, 4]
            const value = 5
            const expectedNewArray = [5, 5, 5, 5]

            // Act
            const newArray = arrayLibrary.fill(array, value)

            // Assert
            expect(newArray).toStrictEqual(expectedNewArray)
        })
    })
    describe('lastIndexOf', () => 
    {
        test('it should return the index 2', () =>
        {
            // Arrange
            const array = ["Riri", "Fifi", "Loulou"]
            const value = "Loulou"
            const expectedIndex = 2

            // Act
            const index = arrayLibrary.lastIndexOf(array, value)

            // Assert
            expect(index).toStrictEqual(expectedIndex)
        })

        test('it should return -1', () =>
        {
            // Arrange
            const array = ["Riri", "Fifi", "Loulou"]
            const value = "Sissy"
            const expectedIndex = -1

            // Act
            const index = arrayLibrary.lastIndexOf(array, value)

            // Assert
            expect(index).toStrictEqual(expectedIndex)
        })
    })
    describe('containsArray', () => 
    {
        test('if this oject is an array, it should return true', () =>
        {
            // Arrange
            const array = [1, 2, 3, 4]
            const expectedResponse = [] === true

            // Act
            const response = arrayLibrary.containsArray(array)

            // Assert
            expect(response).toStrictEqual(expectedResponse)
        })
        test('if this oject is not an array, it should return false', () =>
        {
            // Arrange
            const array = "Hello World"
            const expectedResponse = false

            // Act
            const response = arrayLibrary.containsArray(array)

            // Assert
            expect(response).toStrictEqual(expectedResponse)
        })
    })
    describe('findIndex', () => 
    {
        test('it should return the index 1', () =>
        {
            // Arrange
            const array = [11, 2, 3, 42]
            const predicate = element => element < 10
            const expectedIndex = 1

            // Act
            const index = arrayLibrary.findIndex(array, predicate)

            // Assert
            expect(index).toStrictEqual(expectedIndex)
        })
    })
    describe('filter', () => 
    {
        test('it should return an array with 11, 20, 50', () =>
        {
            // Arrange
            const array = [1, 2, 11, 20, 4, 50]
            const callback = element => element > 10
            const expectedNewArray = [11, 0, 50]

            // Act
            const newArray = arrayLibrary.filter(array, callback)

            // Assert
            expect(newArray).toStrictEqual(expectedNewArray)
        })
    })
    describe('forEach', () => 
    {
        test('it should multiply every item * 2', () =>
        {
            // Arrange
            const array = [1, 2, 3, 4]
            const callback = element => element * 2
            const expectedNewArray = [2, 4, 6, 8]

            // Act
            const newArray = arrayLibrary.forEach(array, callback)

            // Assert
            expect(newArray).toStrictEqual(expectedNewArray)
        })
    })
    describe('some', () => 
    {
        test('if 16 is smaller than 30, it should return true', () =>
        {
            // Arrange
            const array = [40, 16, 50]
            const predicate = element => element < 20
            const expectedResponse = true

            // Act
            const response = arrayLibrary.some(array, predicate)

            // Assert
            expect(response).toStrictEqual(expectedResponse)
        })
    })
    describe('join', () => 
    {
        test('it should return HelloThePetitChien', () =>
        {
            // Arrange
            const array = ['Hello', 'The', 'Petit', 'Chien']
            const separator = ('')
            const expectedNewArray = 'HelloThePetitChien'

            // Act
            const newArray = arrayLibrary.join(array, separator)

            // Assert
            expect(newArray).toStrictEqual(expectedNewArray)
        })
    })
    describe('every', () => 
    {
        test('Items 16, 22, 13, 90 are should taller than 12', () =>
        {
            // Arrange
            const array = [16, 22, 13, 90]
            const predicate = element => element > 12
            const expectedResponse = true

            // Act
            const response = arrayLibrary.every(array, predicate)

            // Assert
            expect(response).toStrictEqual(expectedResponse)
        })
    })

    describe('reduce', () => 
    {
        test('The some of the items of the array should be equal 12', () =>
        {
            // Arrange
            const array = [2, 3, 5, 2]
            const reducer = (accumulator, element) => accumulator + element
            const expectedValue = 12

            // Act
            const value = arrayLibrary.reduce(array, reducer)

            // Assert
            expect(value).toStrictEqual(expectedValue)
        })
    })
    describe('entries', () => 
    {
        test('This new array should return for every item, the key and the value', () =>
        {
            // Arrange
            const array = [1, 2, 3]
            const expectedValue = {"next": [0,1]}

            // Act
            const value = arrayLibrary.entries(array)

            // Assert
            expect(value).toStrictEqual(expectedValue)
        })
    })

    describe('reduceRight', () => 
    {
        test('The some of the items of the array should be equal 10', () =>
        {
            // Arrange
            const array = [0, 1, 2, 3, 4]
            const reducer = (accumulator, element) => accumulator + element-0
            const expectedValue = 10

            // Act
            const value = arrayLibrary.reduceRight(array, reducer)

            // Assert
            expect(value).toStrictEqual(expectedValue)
        })
    })
    describe('singleFlat', () => 
    {
        test('It should return a new array with all items of subarray', () =>
        {
            // Arrange
            const array = [1, 2, [3, 4]]
            const expectedNewArray = [1, 2, 3, 4]

            // Act
            const newArray = arrayLibrary.singleFlat(array)

            // Assert
            expect(newArray).toStrictEqual(expectedNewArray)
        })
    })
    describe('flat', () => 
    {
        test('It should return a new array with all items of subarray', () =>
        {
            // Arrange
            const array = [1, 2, [3, 4]]
            const expectedNewArray = [1, 2, 3, 4]

            // Act
            const newArray = arrayLibrary.flat(array)

            // Assert
            expect(newArray).toStrictEqual(expectedNewArray)
        })
    })
    describe('flapMap', () => 
    {
        test('it should multiply every item * 2', () =>
        {
            // Arrange
            const array = [2, 4, 6, 8]
            const callback = element => element * 2
            const expectedNewArray = [4, 8, 12, 16]

            // Act
            const newArray = arrayLibrary.flatMap(array, callback)

            // Assert
            expect(newArray).toStrictEqual(expectedNewArray)
        })
    })
})