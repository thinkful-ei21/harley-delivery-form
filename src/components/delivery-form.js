import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from './input';

export class DeliveryForm extends React.Component {
    render() {
        return (
        <form>
            <h2>Report a problem with your delivery</h2>
            <Field name="tracking" type="text" component={Input} label="Tracking number"/>
            <Field name="issue" type="issue" element="select" children={
                    [
                        <option value="late">My delivery hasn't arrived</option>,
                        <option value="wrong">The wrong item was delivered</option>,
                        <option value="missing">Part of my order was missing</option>,
                        <option value="damaged">Some of my order arrived damaged</option>,
                        <option value="other">Other (give details below)</option>
                    ]
                } component={Input} label="What is your issue?"/>
            <Field name="details" element="textarea" component={Input} label="Give more details (optional)"/>
            <button type="submit">Submit</button>
        </form>
        );
    }
}

export default reduxForm({
    form: 'delivery',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('delivery', Object.keys(errors)[0]))
})(DeliveryForm);