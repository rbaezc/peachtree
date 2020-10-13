import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '../components/Modal';

test('Modal hides when click on close button', () => {
    const component = renderer.create(
        <Modal></Modal>
    );

    let modal = component.toJSON();
    expect(modal).toMatchSnapshot();

    // manually trigger handleClose
    modal.props.handleClose();
    // re-rendering
    modal = component.toJSON();
    expect(modal).toMatchSnapshot();
})


test('Modal shows when show option is true' , () => {
    const component = renderer.create(
        <Modal show={true}></Modal>
    );

    let modal = component.toJSON();
    expect(modal).toMatchSnapshot();

    // manually trigger show
    modal.props.show();
    // re-rendering
    modal = component.toJSON();
    expect(modal).toMatchSnapshot();
})