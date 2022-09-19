import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

it('should increment counter to 2 when the increment clicked 2 times', () => {
    // render the element in the virtual DOM
    render(<Counter />)

    // select the element you want to interact with
    const counter = screen.getByTestId('counter')
    const incrementBtn = screen.getByTestId('increment')

    // interact with those elements
    fireEvent.click(incrementBtn)
    fireEvent.click(incrementBtn)

    // assert the expected result
    expect(counter).toHaveTextContent('2')
})

it('should decrement counter to 0 when increment clicked 2 times and decrement clicked 2 times', () => {
    render(<Counter/>)

    const counter = screen.getByTestId('counter')
    const incrementBtn = screen.getByTestId('increment')
    const decrementBtn = screen.getByTestId('decrement')

    fireEvent.click(incrementBtn)
    fireEvent.click(incrementBtn)

    fireEvent.click(decrementBtn)
    fireEvent.click(decrementBtn)

    expect(counter).toHaveTextContent('0')
})