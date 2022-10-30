import { Pet } from './api-response/ownersResponse'
import { OwnerGender } from './enums'

export type PetsByOwnerGender = {
    [OwnerGender.MALE]: Pet[]
    [OwnerGender.FEMALE]: Pet[]
}
