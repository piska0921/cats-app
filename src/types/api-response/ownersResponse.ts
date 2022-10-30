import { OwnerGender } from '../enums'

export type Owner = {
    name: string
    gender: OwnerGender
    age: number
    pets: Pet[]
}

export type Pet = {
    name: string
    type: string
}
