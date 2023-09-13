import { PurchaseType } from "./RadioGroup"

export interface FormData {
    dolar: string,
    tax: string,
    purchaseType: PurchaseType
}

export const formInitialState: FormData = {
    dolar: '1,00',
    tax: '',
    purchaseType: PurchaseType.MONEY
}

export interface ResultObject {
    value: number,
    formData: FormData
}

export interface FormProps {
    price: string,
    onSubmit: (result: ResultObject) => void
}
