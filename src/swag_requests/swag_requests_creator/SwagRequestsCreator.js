import React from 'react';
import './SwagRequestsCreator.css';

export default ({className}) => (
    <form className='swag-requests-creator'>
        <label
            htmlFor='swag-requests-creator-input'
            className='swag-requests-creator__swag-request-input-label'
        >
            What kind of swag do you want today?
        </label>

        <textarea
            id='swag-requests-creator-input'
            className='swag-requests-creator__swag-request-textarea'
        />

        <button
            type='submit'
            className='swag-requests-creator__submit-button'
        >
            Make Request
        </button>
    </form>
);
