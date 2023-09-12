export interface RadioOptions {
    label: string,
    name: string,
    value: string,
}

export interface RadioGroupProps {
    title: string,
    options: RadioOptions[],
    value: string,
    onChange: (value: string, field: string) => void
}

export enum PurchaseType {
    MONEY = 'money',
    CREDIT_CARD = 'credit_card'
}

export const radioOptions: RadioOptions[] = [
    {
        label: 'Dinheiro',
        name: 'purchaseType',
        value: PurchaseType.MONEY
    },
    {
        label: 'Cartão',
        name: 'purchaseType',
        value: PurchaseType.CREDIT_CARD
    }
]