import React from 'react';
import { Button, ButtonType } from './Button';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';

test('applies operator style when button type is operator', () => {
    const buttonRoot = renderer.create(<Button buttonType={ButtonType.Operator}></Button>,).root;
    const element = buttonRoot.findByType('div');
    expect(element.props.className.includes("operator-button")).toBe(true);
});

test('does not apply operator style when button type is input', () => {
    const buttonRoot = renderer.create(<Button buttonType={ButtonType.Input}></Button>,).root;
    const element = buttonRoot.findByType('div');
    expect(element.props.className.includes("operator-button")).toBe(false);
});

test('it calls click handler when clicked', () => {
    const handleClick = jest.fn();

    const { container } = render(<Button onClick={handleClick} buttonType={ButtonType.Input}></Button>);
    const div = container.children[0]
    fireEvent.click(div);

    expect(handleClick).toHaveBeenCalled();
});