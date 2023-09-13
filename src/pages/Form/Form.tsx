import { FormEvent, useState, useCallback } from 'react'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import { FormatStyle } from '@/hooks/useMask'
import Input from '@/components/Input/Input'
import RadioGroup from '@/components/RadioGroup/RadioGroup'
import Button from '@/components/Button/Button'
import { radioOptions } from '@/models/RadioGroup'
import { FormProps, formInitialState } from '@/models/Form'
import { calculateResult } from '@/services/currencyService'
import { FormElement, FormRow } from './Form.style'

export default function Form(props: FormProps) {

    const { onSubmit, price } = props

    const [formData, setFormData] = useState(formInitialState)

    const handleChange = useCallback((value: string, field: string) => {
        setFormData((prevFormData) => ({ ...prevFormData, [field]: value }))
    }, [])

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        const result = calculateResult(formData, price)
        onSubmit({ value: result, formData })
    }

    return (
        <FormElement onSubmit={handleSubmit}>
            <FormRow>
                <Input
                    title='Dólar'
                    name='dolar'
                    placeholder="$ 0,00"
                    value={formData.dolar}
                    formatStyle={FormatStyle.CURRENCY}
                    onChange={handleChange}
                />
                <Input
                    title='Taxa do Estado'
                    name='tax'
                    placeholder="0.0 %"
                    value={formData.tax}
                    formatStyle={FormatStyle.PERCENT}
                    onChange={handleChange}
                />
            </FormRow>

            <RadioGroup
                title='Tipo de Compra'
                options={radioOptions}
                value={formData.purchaseType}
                onChange={handleChange}
            />
            <Button
                disabled={!formData.tax}
                type="submit"
                primary
            >
                <>
                    <SyncAltIcon />
                    Converter
                </>
            </Button>
        </FormElement>
    )
}