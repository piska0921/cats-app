import { Owner } from '../types/api-response/ownersResponse'

export default class ApiClient {
    static BASE_URL = 'https://gist.githubusercontent.com'

    static async getOwnersDetails(): Promise<Owner[]> {
        const response = await fetch(
            `${this.BASE_URL}/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json`,
            {
                method: 'GET'
            }
        )

        return ApiClient.handleResponse(response, response.ok)
    }

    private static handleResponse(response: Response, statusCheck: boolean, isResJsonFormat = true) {
        if (statusCheck) {
            return isResJsonFormat ? response.json() : response.text()
        } else {
            throw new Error()
        }
    }
}
