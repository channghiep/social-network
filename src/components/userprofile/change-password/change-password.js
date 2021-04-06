import React from 'react';
import {
  Link
} from 'react-router-dom';

import './change-password.css';

function ChangePw() {
    return (
        <div className='change-pw-body'>
            <Link to="/profile">
                <svg className='return-to-profile' width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg>
            </Link>

            <h1>CHANGE PASSWORD</h1>

            <div className='change-pw-div old-pw'>
                <label for="old-pw">old password</label>
                <input type="text" id="old-pw" name="old password"/>
            </div>

            <div className='change-pw-div new-pw'>
                <label for="new-pw">new password</label>
                <input type="text" id="new-pw" name="new password"/>
            </div>

            <div className='change-pw-div confirm-pw'>
                <label for="confirm-pw">confirm new password</label>
                <input type="text" id="confirm-pw" name="confirm password"/>
            </div>

            <div className='change-pw-buttons'>
                <div className='button cancel-pw'>
                    <p>cancel</p>
                </div>
                <div className='button save-pw'>
                    <p>save</p>
                </div>
            </div>

        </div>
    )
}

export default ChangePw;