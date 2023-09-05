import { useState } from "react"

export interface MaskedResult {
    maskedValue: string,
    onValueChange: (value: string) => void
}

enum Locale {
    BR = 'pt-BR',
    EN = 'en-US',
}

export enum FormatStyle {
    CURRENCY = 'currency',
    PERCENT = 'percent'
}


interface FormatOptions {
    locale: Locale,
    stringConfiguration: {
        currency?: string,
        currencyDisplay?: string,
        minimumFractionDigits: number,
        maximumFractionDigits: number,
        style: FormatStyle,
    }
}

export function useMask(initialValue: string, type?: FormatStyle): MaskedResult {

    const [value, setValue] = useState(initialValue)

    function handleChange(value: string): void {
        const digits = value.replace(/\D/g, '')
        setValue(digits)
    }

    function formatValue(divisor: number, formatOptions: FormatOptions): string {

        const numberValue = parseFloat(value) / divisor
        const formatIntance = new Intl.NumberFormat(
            formatOptions.locale,
            formatOptions.stringConfiguration
        )
        return formatIntance.format(numberValue)
    }

    function formatCurrency(): string {
        const decimal = 100
        const formatOptions = {
            locale: Locale.BR,
            stringConfiguration: {
                currency: 'USD',
                currencyDisplay: 'narrowSymbol',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                style: FormatStyle.CURRENCY,
            }
        }
        return formatValue(decimal, formatOptions).replace(/\s+/g, ' ')
    }

    function formatPercentage(): string {
        const percentual = 1000
        const formatOptions = {
            locale: Locale.EN,
            stringConfiguration: {
                style: FormatStyle.PERCENT,
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
            }
        }
        return formatValue(percentual, formatOptions)
    }

    function getMaskedValue(): string {

        if (type === FormatStyle.CURRENCY) {
            return formatCurrency()
        }
        if (type === FormatStyle.PERCENT) {
            return formatPercentage()
        }

        return ''
    }

    const maskedValue = value ? getMaskedValue() : ''

    const result = {
        maskedValue,
        onValueChange: handleChange
    }

    return result
}