import { useState } from 'react'
import ApiClient from '../api/ApiClient'
import { sortPetsByOwnerGender } from '../mappers/mapCatList'
import { PetType } from '../types/enums'

export function useGetCatListByGender() {
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<any>()
    const [error, setError] = useState<any>()

    const fetchCatList = async () => {
        try {
            setLoading(true)
            const ownersDetails = await ApiClient.getOwnersDetails()
            setData(sortPetsByOwnerGender(ownersDetails, PetType.CAT))
            setSuccess(true)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    return [data, success, loading, error, fetchCatList]
}
