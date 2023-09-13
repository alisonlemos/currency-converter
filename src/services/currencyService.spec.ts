import axios from "axios"
import { PurchaseType } from "@/models/RadioGroup"
import * as service from "./currencyService"

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

const mockData = {
    data: {
        USDBRL: {
            bid: "5.30",
            timestamp: "1631410800",
        },
    },
}

describe("currencyService", () => {

    it("formats the timestamp correctly", () => {
        const timestamp = "1631410800"
        const result = service.getDateString(timestamp)
        const expectedDateString = "11 de setembro de 2021 | 01:40 UTC"
        expect(result).toEqual(expectedDateString)
    })

    it("fetches the last bid price from the API", async () => {
        mockedAxios.get.mockResolvedValue(mockData)
        const result = await service.getLastBidPrice()
        expect(result).toEqual({
            value: mockData.data.USDBRL.bid,
            dateString: expect.any(String),
        })
    })

    it("calculates the result for MONEY purchase type", () => {
        const formData = {
            dolar: "1",
            tax: "1.1",
            purchaseType: PurchaseType.MONEY,
        }
        const price = "4.20"

        const result = service.calculateResult(formData, price)

        expect(result).toBe(4.25)
    })

    it("calculates the result for CREDIT_CARD purchase type", () => {
        const formData = {
            dolar: "1",
            tax: "6.2",
            purchaseType: PurchaseType.CREDIT_CARD,
        }
        const price = "5.2"

        const result = service.calculateResult(formData, price)

        expect(result).toBe(5820)
    })



})
