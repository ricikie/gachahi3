import React, { Fragment } from 'react';

const modals = ({onRoute}) => {
    return (
        <Fragment>
            {/* // Modal Disclaimer */}
            <div className="modal fade bd-example-modal-lg" id="disclaimerPop" tabIndex="-1" role="dialog" aria-labelledby="disclaimerModal" aria-hidden="true">
                <div className="modal-dialog modal-notify modal-info" role="document">
                    <div className="modal-content modal-gacha">
                        <div className="modal-header">
                            <strong className="modal-title" id="disclaimerModal">
                                Disclaimer
                            </strong>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>                            
                        </div>
                        <div className="modal-body text-center">
                            <p>
                                Everything from this website just for fun only, 
                                i can't give you actual in-game reward for what you got here, 
                                maybe this simulator can make you feel better for your real gacha.
                                <br/>
                                Let’s see how good your Gacha
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={()=>onRoute('gacha')} className="gotoButton gold" data-dismiss="modal" aria-label="Close">I know it, Continue</button>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* Rules */}
            <div id="rulesModal" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="rulesLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content modal-gacha">
                        <div className="modal-header">
                            <strong className="modal-title" id="rulesLabel">
                                Rules
                            </strong>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body-rules">
                            <ol>
                                <li>You can only got Awaken Battlesuit from Expansion, rest is same as game</li>
                                <li>10x Pull will Guarantee you A or Higher Rank Battlesuit</li>
                                <li>For Standard, you can get 4 Star Stigma and Weapon like in actual game, including drop list too.</li>
                                <li>For Expansion, it contain all A & S Rank Battlesuit</li>
                                <li>It's a win win solution Right ? hehe</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default modals