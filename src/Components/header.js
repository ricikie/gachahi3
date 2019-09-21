import React, { Fragment } from 'react';


const header = ({ onRoute, activeTab }) => {
    let activeA, activeB, activeC;
    if(activeTab ==="home"){
        activeA = "active";
    } else if(activeTab === "gacha" || activeTab === "gachaExp"){
        activeB = "active";
    } else if(activeTab === "about"){
        activeC = "active";
    }
    return(
        <Fragment>
            <nav className="">
                <ul className="main-nav">
                    <li className={activeA}><button onClick={()=>onRoute('home')}>Home</button></li>
                    <li><button data-backdrop="static" data-keyboard="false" type="button" data-toggle="modal" data-target="#disclaimerPop">Disclaimer</button></li>
                    <li className={activeB}><button onClick={()=>onRoute('gacha')}>Gacha</button></li>
                    <li className={activeC}><button onClick={()=>onRoute('about')}>About</button></li>
                </ul>
            </nav>
        </Fragment>
    )
}
export default header;