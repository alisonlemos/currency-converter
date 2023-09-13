import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { useMask } from "@/hooks/useMask"
import Input, { InputProps } from "./Input"

jest.mock('@/hooks/useMask')

const mockUseMask = useMask as jest.MockedFunction<typeof useMask>

describe('Input Component', () => {
  let inputProps: InputProps
  const onChangeMock = jest.fn()
  const onValueChange = jest.fn()

  beforeEach(() => {
    mockUseMask.mockReturnValue({
      maskedValue: "123456",
      onValueChange,
    })

    inputProps = {
      placeholder: "test",
      onChange: onChangeMock,
      name: "test",
      title: "Test",
      value: "test"
    }
  })
  it("renders correctly", () => {
    render(<Input {...inputProps} />)
    const labelElement = screen.getByLabelText(inputProps.title)
    const inputElement = screen.getByRole('textbox')
    expect(labelElement).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveValue("123456")
    expect(inputElement).toHaveAttribute("name", inputProps.name)
    expect(inputElement).toHaveAttribute("placeholder", inputProps.placeholder)
  })

  it("calls the change methods", async () => {

    const newValue = "New value"
    mockUseMask.mockReturnValue({
      maskedValue: newValue,
      onValueChange,
    })
    render(
      <Input {...inputProps} />
    )

    const inputElement = screen.getByRole('textbox')
    await userEvent.type(inputElement, newValue)

    expect(onValueChange).toHaveBeenCalled()
    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith(newValue, "test")
    expect(inputElement).toHaveValue(newValue)
  })
})
