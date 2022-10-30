import { useState } from 'react'
import ApiClient from '../api/ApiClient'
import { sortPetsByOwnerGender } from '../mappers/mapCatList'
import { PetsByOwnerGender } from '../types'
import { PetType } from '../types'
import { ApiHookResult } from '../types/apiHooks'

export const useGetCatListByGender = (): ApiHookResult<PetsByOwnerGender> & { fetchCatList: () => void } => {
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<PetsByOwnerGender>({
        Male: [],
        Female: []
    })
    const [error, setError] = useState<Error | undefined>()

    const fetchCatList = async () => {
        try {
            setLoading(true)
            const ownersDetails = await ApiClient.getOwnersDetails()
            setData(sortPetsByOwnerGender(ownersDetails, PetType.CAT))
            setSuccess(true)
        } catch (err) {
            setError(err as Error)
        } finally {
            setLoading(false)
        }
    }

    return { data, success, loading, error, fetchCatList }
}
