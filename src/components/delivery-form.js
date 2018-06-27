import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';

export class DeliveryForm extends React.Component {
    render() {
        return (
        <form>
            <h2>Report a problem with your delivery</h2>
            <label htmlFor="tracking">Tracking number</label>
            <Field name="tracking" type="text" component="input" label="Tracking number"/>
            <label htmlFor="issue">What is your issue?</label>
            <Field name="issue" type="issue" component={() => {
                return(
                    <select>
                        <option value="late">My delivery hasn't arrived</option>
                        <option value="wrong">The wrong item was delivered</option>
                        <option value="missing">Part of my order was missing</option>
                        <option value="damaged">Some of my order arrived damaged</option>
                        <option value="other">Other (give details below)</option>
                    </select>
                );
            }} label="What is your issue?"/>
            <label htmlFor="details">Give more details (optional)</label>
            <Field name="details" component="textarea" label="Give more details (optional)"/>
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