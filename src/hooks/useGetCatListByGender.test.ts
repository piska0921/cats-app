import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import ApiClient from '../api/ApiClient'
import { mockOwnersDetails } from '../mocks/ownersDetails'
import { Owner } from '../types/api-response/ownersResponse'
import useGetCatListByGender from './useGetCatListByGender'

describe('useGetCatListByGender', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('initialize', () => {
        const { result } = renderHook(() => useGetCatListByGender())
        expect(result.current.loading).toBeFalsy()
        expect(result.current.success).toBeFalsy()
        expect(result.current.error).toBeUndefined()
        expect(result.current.data).toEqual({
            Male: [],
            Female: []
        })
    })

    it('success', async () => {
        jest.spyOn(ApiClient, 'getOwnersDetails').mockResolvedValueOnce(mockOwnersDetails as Owner[])
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

        const { result } = renderHook(() => useGetCatListByGender())
        await act(async () => result.current.fetchCatList())
        expect(result.current.success).toBeTruthy()
        expect(result.current.loading).toBeFalsy()
        expect(result.current.error).toBeUndefined()
        expect(result.current.data).toEqual(expectedResult)
    })

    it('error', async () => {
        jest.spyOn(ApiClient, 'getOwnersDetails').mockImplementationOnce(() => {
            throw new Error()
        })
        const { result } = renderHook(() => useGetCatListByGender())
        await act(async () => result.current.fetchCatList())
        expect(result.current.success).toBeFalsy()
        expect(result.current.loading).toBeFalsy()
        expect(result.current.error).toBeDefined()
    })
})
