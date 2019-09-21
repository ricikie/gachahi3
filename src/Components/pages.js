import React from 'react';

import Landing from './Page/landing';
import About from './Page/about';
import GachaExpansion from './Page/gacha-expansion';
import GachaStandard from './Page/gacha-standard';

const pages = ({ onRoute, setView, activeView, activeTab }) => {
    return(
        <div className="container">            
            <div className = "paging">
                {activeTab==="home" ?(
                    <Landing 
                        onRoute={onRoute}
                    />
                ):activeTab==="gacha" ?(
                    <GachaStandard
                        onRoute={onRoute}
                    />
                ):activeTab==="gachaExp" ?(
                    <GachaExpansion
                        onRoute={onRoute}
                    />
                ):activeTab==="about" ?(
                    <About
                        setView={setView}
                        activeView={activeView}
                    />
                ):(
                    <h1>Error</h1>
                )}
            </div>
        </div>
    )
}
export default pages;