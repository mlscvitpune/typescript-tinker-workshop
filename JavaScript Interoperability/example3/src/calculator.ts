export interface IUser{
    id: number,
    name: string,
}


export class Calculator{
    add(a: number, b: number): number{
        return a + b;
    }

    sub(a: number, b: number): number{
        return a - b;
    }

    mul(a: number, b: number): number{
        return a * b;
    }

    div(a: number, b: number): number{
        return a / b;
    }
}