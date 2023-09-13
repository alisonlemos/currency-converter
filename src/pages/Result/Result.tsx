import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Button from "@/components/Button/Button"
import { PurchaseType } from '@/models/RadioGroup'
import { FormData } from '@/models/Form'
import { Container, Label, Title, Value } from "./Result.style"

export interface ResultProps {
    onClick: () => void
    price: string,
    value: number,
    formData: FormData,
}

export default function Result(props: ResultProps) {
    const { value, price, formData, onClick } = props

    function currencyValue(value: number) {

        const formatIntance = new Intl.NumberFormat(
            'pt-BR',
            {
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
                style: 'currency',
            }
        )

        return formatIntance.format(value)
    }

    const resultCurrency = () => {
        return currencyValue(value)
    }

    const priceCurrency = () => {
        return price && currencyValue(parseFloat(price))
    }

    const purchaseType = () => {
        switch (formData.purchaseType) {
            case PurchaseType.MONEY:
                return 'dinheiro'
            case PurchaseType.CREDIT_CARD:
                return 'cartão'
        }
    }

    return (
        <Container>
            <Button onClick={onClick}>
                <>
                    <ArrowBackIcon />
                    Voltar
                </>
            </Button>
            <Title>
                O resultado do cálculo é
            </Title>
            <Value>
                {resultCurrency()}
            </Value>
            <Label>
                <strong> Compra no {purchaseType()} e taxa de </strong> {formData?.tax}
            </Label>
            <Label>
                <strong> Cotação do dólar: </strong> $ 1,00 = {priceCurrency()}
            </Label>
        </Container>
    )
}

