import { FormData } from "@/models/Form"
import { PurchaseType } from "@/models/RadioGroup"
import axios from "axios"

export interface PriceInfo {
    value: string,
    dateString: string
}


export async function getLastBidPrice() {

    const { data } = await axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL')
    const result = {
        value: data['USDBRL'].bid,
        dateString: getDateString(data['USDBRL'].timestamp)
    }
    return result
}

export function getDateString(timestamp: string): string {

    const date = new Date(parseInt(timestamp) * 1000)

    const formatedDate = new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date)

    const formatedHour = new Intl.DateTimeFormat('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC',
    }).format(date)

    return `${formatedDate} | ${formatedHour} UTC`
}


export function parseToNumber(value: string): number {
    const cleanedValue = value.replace(/[^\d,.]/g, '')
        .replace(',', '.')
    return parseFloat(cleanedValue)
}

export function calculateResult(formData: FormData, price: string): number {
    const dolar = parseToNumber(formData.dolar.replace('.', ''))
    const tax = (parseToNumber(formData.tax) / 100) * dolar
    const formValues = dolar + tax
    const lastPrice = parseToNumber(price)
    let IOF = 0

    switch (formData.purchaseType) {
        case PurchaseType.MONEY:
            IOF = 0.011 * dolar
            return (formValues * (lastPrice + IOF))
        case PurchaseType.CREDIT_CARD:
            IOF = 0.064 * dolar
            return (formValues + IOF) * lastPrice
    }
}
