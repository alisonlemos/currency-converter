import { act } from "react-dom/test-utils"
import { FormatStyle, MaskedResult, useMask } from "./useMask"
import { renderHook } from '@testing-library/react'

describe('useMask hook', () => {

    it('should format to currency value correctly', () => {
        const initialValue = "1234567"
        const { result } = renderHook((): MaskedResult => {
            return useMask(initialValue, FormatStyle.CURRENCY)
        })
        const { maskedValue, onValueChange } = result.current
        expect(maskedValue).toBe("$ 12.345,67")
        act(() => {
            onValueChange("7890")
        })
        expect(result.current.maskedValue).toBe("$ 78,90")
    })

    it('should format to percentage value correctly', () => {
        const initialValue = "456"
        const { result } = renderHook((): MaskedResult => {
            return useMask(initialValue, FormatStyle.PERCENT)
        })
        const { maskedValue, onValueChange } = result.current

        expect(maskedValue).toBe("45.6%")
        act(() => {
            onValueChange("123")
        })
        expect(result.current.maskedValue).toBe("12.3%")
    })

    it('should return the empty when type is not defined', () => {
        const initialValue = "456"
        const { result } = renderHook((): MaskedResult => {
            return useMask(initialValue)
        })
        const { maskedValue, onValueChange } = result.current
        expect(maskedValue).toBe('')
        act(() => {
            onValueChange("123")
        })
        expect(result.current.maskedValue).toBe('')
    })

    it('should return the empty when initialValue is empty', () => {
        const initialValue = ''
        const { result } = renderHook((): MaskedResult => {
            return useMask(initialValue)
        })
        const { maskedValue, onValueChange } = result.current
        expect(maskedValue).toBe('')
        act(() => {
            onValueChange('')
        })
        expect(result.current.maskedValue).toBe('')
    })
})