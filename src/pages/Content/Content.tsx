import { useState } from "react"
import { useQuery } from "react-query"
import Header from "@/components/Header/Header"
import Loading from "@/components/Loading/Loading"
import Result from "@/pages/Result/Result"
import Form from "@/pages/Form/Form"
import { PriceInfo, getLastBidPrice } from "@/services/currencyService"
import { ResultObject } from "@/models/Form"
import { Container } from "./Content.style"

enum PAGES {
    FORM = 'FORM',
    RESULT = 'RESULT'
}

export default function Content() {
    const { data: priceInfo } = useQuery<PriceInfo>("priceInfo", getLastBidPrice)
    const [page, setPage] = useState(PAGES.FORM)
    const [result, setResult] = useState<ResultObject | undefined>()

    function showResult(resultObject: ResultObject) {
        setPage(PAGES.RESULT)
        setResult(resultObject)
    }
    function showForm() {
        setPage(PAGES.FORM)
    }

    const currentPage = () => {
        if (priceInfo) {
            const formComponent = <Form price={priceInfo.value} onSubmit={showResult} />

            const resultComponent = result && <Result price={priceInfo?.value} {...result} onClick={showForm} />

            return page === PAGES.RESULT ? resultComponent : formComponent
        }
    }

    return (
        priceInfo ?
            <Container>
                <Header title={priceInfo?.dateString} />
                {currentPage()}
            </Container>
            : <Loading />
    )
}