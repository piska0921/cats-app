import { Owner, Pet } from '../types/api-response/ownersResponse'
import { OwnerGender, PetType } from '../types/enums'

type PetsByOwnerGender = {
    [OwnerGender.MALE]: Pet[]
    [OwnerGender.FEMALE]: Pet[]
}

export const sortPetsByOwnerGender = (owners: Owner[], petType: PetType): PetsByOwnerGender => {
    let result: PetsByOwnerGender = {
        [OwnerGender.MALE]: [],
        [OwnerGender.FEMALE]: []
    }

    if (!owners) return result

    owners.forEach((owner) => {
        const { gender, pets } = owner
        //check unkown gender
        if (!result.hasOwnProperty(gender)) {
            return
        }
        result[gender] = result[gender].concat(filterPetsByType(pets, petType))
    })

    for (const gender in result) {
        sortPetsByName(result[gender as OwnerGender])
    }
    return result
}

export const filterPetsByType = (pets: Pet[], petType: PetType) => {
    return pets ? pets.filter((pet) => pet.type === petType) : []
}

export const sortPetsByName = (pets: Pet[]) => {
    return pets.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
}
