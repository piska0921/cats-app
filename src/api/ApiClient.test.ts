import fetchMock from 'jest-fetch-mock'
import { mockOwnersDetails } from '../mocks/ownersDetails'
import ApiClient from './ApiClient'

fetchMock.enableMocks()

describe('ApiClient', () => {
    describe('owner details', () => {
        beforeEach(() => {
            fetchMock.resetMocks()
        })

        it('get the owners details', async () => {
            fetchMock.mockResponseOnce(JSON.stringify(mockOwnersDetails))
            const res = await ApiClient.getOwnersDetails()
            expect(fetchMock).toHaveBeenCalledWith(
                `${ApiClient.BASE_URL}/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json`,
                {
                    method: 'GET'
                }
            )
            expect(res).toEqual(mockOwnersDetails)
        })

        it('throws an error if the call fails', async () => {
            fetchMock.mockResponseOnce('{}', { status: 400 })
            let err
            try {
                await ApiClient.getOwnersDetails()
            } catch (e) {
                err = e
            } finally {
                expect(err).toBeDefined()
            }
        })
    })
})
