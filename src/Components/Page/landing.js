import React,{ Fragment } from 'react';

const landing = ({ onRoute }) => {
    return(
        <Fragment>
            <div className="center-landing">
                <h1>Honkai Impact 3rd Gacha Simulator</h1>
                <p>for those who didn't wealth enough</p>
                <button onClick={()=>onRoute('gacha')} className="gotoButton gold">Check Now</button>
            </div>
        </Fragment>
    )
}

export default landing