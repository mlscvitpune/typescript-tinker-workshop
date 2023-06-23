import { IUser, Calculator, IAdmin} from 'calculator'

const user: IUser = {
    id: 1,
    name: 'arpit'
}

const adminUser: IAdmin = {
    id: 2,
    name: 'arpit',
    isAdmin: true
}

const calculator = new Calculator();

console.log(calculator.add(10,20))
console.log(calculator.mul(10,20))
console.log(calculator.sub(10,20))
console.log(calculator.div(10,20))