import { mockOwnersDetails } from '../mocks/ownersDetails'
import { Owner } from '../types/api-response/ownersResponse'
import { PetType } from '../types/enums'
import { filterPetsByType, sortPetsByName, sortPetsByOwnerGender } from './mapCatList'

describe('mapCatList', () => {
    describe('sortPetsByOwnerGender', () => {
        it('return pet lists by gender', () => {
            const expectedResult = {
                Male: [
                    {
                        name: 'Garfield',
                        type: 'Cat'
                    }
                ],
                Female: [
                    {
                        name: 'Garfield',
                        type: 'Cat'
                    },
                    {
                        name: 'Tabby',
                        type: 'Cat'
                    }
                ]
            }
            const result = sortPetsByOwnerGender(mockOwnersDetails as Owner[], PetType.CAT)
            expect(result).toEqual(expectedResult)
        })

        it('return empty pet list if with no input', () => {
            const result = sortPetsByOwnerGender(undefined as any, PetType.CAT)
            expect(result).toEqual({
                Male: [],
                Female: []
            })
        })

        it('skip if there is unknown gender type', () => {
            const mockInput = [
                mockOwnersDetails[0],
                {
                    ...mockOwnersDetails[1],
                    gender: 'ANY'
                }
            ]
            const expectedResult = {
                Male: [],
                Female: [
                    {
                        name: 'Tabby',
                        type: 'Cat'
                    }
                ]
            }
            const result = sortPetsByOwnerGender(mockInput as Owner[], PetType.CAT)
            expect(result).toEqual(expectedResult)
        })
    })
    describe('filterPetsByType', () => {
        it('return filtered pet array', () => {
            const mockInput = [
                {
                    name: 'A',
                    type: 'Cat'
                },
                {
                    name: 'B',
                    type: 'Dog'
                }
            ]
            const expectedResult = [
                {
                    name: 'A',
                    type: 'Cat'
                }
            ]
            const result = filterPetsByType(mockInput, PetType.CAT)
            expect(result).toEqual(expectedResult)
        })

        it('return an empty array if with no input', () => {
            const result = filterPetsByType(undefined as any, PetType.CAT)
            expect(result).toEqual([])
        })
    })

    describe('sortPetsByName', () => {
        it('return the sorted pet array', () => {
            const mockInput = [
                {
                    name: 'B',
                    type: 'Cat'
                },
                {
                    name: 'A',
                    type: 'Cat'
                }
            ]
            const expectedResult = [
                {
                    name: 'A',
                    type: 'Cat'
                },
                {
                    name: 'B',
                    type: 'Cat'
                }
            ]
            const result = sortPetsByName(mockInput)
            expect(result).toEqual(expectedResult)
        })

        it('return the sorted pet array without case sensitivity', () => {
            const mockInput = [
                {
                    name: 'b',
                    type: 'Cat'
                },
                {
                    name: 'A',
                    type: 'Cat'
                }
            ]
            const expectedResult = [
                {
                    name: 'A',
                    type: 'Cat'
                },
                {
                    name: 'b',
                    type: 'Cat'
                }
            ]
            const result = sortPetsByName(mockInput)
            expect(result).toEqual(expectedResult)
        })
    })
})
