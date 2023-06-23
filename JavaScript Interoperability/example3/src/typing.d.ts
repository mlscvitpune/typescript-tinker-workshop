import * as calc from 'calculator'

declare module 'calculator' {
    export interface IAdmin extends calc.IUser{
        isAdmin: boolean
    }
}