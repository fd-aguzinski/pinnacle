import React from 'react';
import SwagRequestsCreator from '../swag_requests/swag_requests_creator/SwagRequestsCreator';
import Account from '../account/Account';
import Users from '../users/Users';

import './SwagBase.css';

export default () => (
    <div className='swag-base'>
        <div className="swag-base__card swag-base__account">
            <Account />
        </div>
        <div className='swag-base__card swag-base__swag-requests-creator'>
            <SwagRequestsCreator />
        </div>
        <div className="swag-base__users">
            <Users />
        </div>
    </div>
);
