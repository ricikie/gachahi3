import React, { Component, Fragment } from 'react';
import { hi3data } from '../../resources/data/hi3data';
import ReactPaginate from 'react-paginate';

import bannerExpansion from '../../resources/vids/expansion.mp4';

class rng_expansion extends Component {
    constructor(props){
        super(props);
        this.state = {
            hi3data : hi3data,
            guarantee : 100,
            counter : 0,

            yoloCounter : 10,
            epicCounter : 1,

            displayGuarantee :[],
            placeholderHistory : '',
            history :[],

            pageCount:1,
            pageNow:1,
            totalCount: 0,
        }
    }

    setPaginate = (data, page_size, page_number) => {
        --page_number;
        return data.slice(page_number * page_size, (page_number + 1) *page_size);
    }
    
    setpageCount = (number) =>{
        let totalCounter = this.state.totalCount;
        totalCounter = totalCounter + number;

        let pageNow = Math.ceil(totalCounter / 10);
        // console.log(pageNow+","+totalCounter);
        this.setState({
            pageCount: pageNow,
            totalCount: totalCounter
        });
    }
    switchPages = data => {
        let selected = data.selected+1;
    
        this.setState({
            pageNow : selected
        });
    };


    padsZero = (number) => {
        if(number < 10 && number > 0){
            return "00"+number;
        }
        else if(number >= 10 && number < 100){
            return "0"+number;
        }
    }

    generateCodes = (yoloCounter, epicCounter) => {
        
        let rngGOD = "";

        if (yoloCounter === 1){
            rngGOD = Math.floor(Math.random() * ((10000 - 8500) + 1) + 8500);
            yoloCounter = 10;
        } else {
            yoloCounter = yoloCounter - 1;

            if (epicCounter === 1){
                rngGOD = Math.floor(Math.random() * 10000+1);
                epicCounter = epicCounter + 1;
                
                if(rngGOD > 8500 && rngGOD <= 10000) {
                    yoloCounter = 10;            
                }

            } else if(epicCounter === 3) {
                rngGOD = Math.floor(Math.random() * 8500+1);
                epicCounter = 1;
            } else {
                rngGOD = Math.floor(Math.random() * 8500+1);
                epicCounter = epicCounter + 1;
            }
        }

        this.setState({
            yoloCounter : yoloCounter,
            epicCounter : epicCounter
        });


        if(rngGOD >= 8501 && rngGOD <= 10000){
            return this.generateValkyrie(rngGOD);
        }
        else if(rngGOD >= 5876 && rngGOD <= 8500){
            return this.generateFragment(rngGOD);
        }
        else{
            return this.generateMats(rngGOD);
        }
    }

    generateValkyrie = (rngGOD) => {
        let rollNumber = "";
        if(rngGOD >= 9851 && rngGOD <= 10000){
            rollNumber = Math.floor(Math.random() * 6)+1;
            return "AVS"+this.padsZero(rollNumber);
        } else {
            rollNumber = Math.floor(Math.random() * 7)+1;
            return "AVA"+this.padsZero(rollNumber);
        }
    }
    generateFragment = (rngGOD) => {
        let rollNumber = "";
        if(rngGOD >= 5876 && rngGOD <= 6100){
            rollNumber = Math.floor(Math.random() * 6)+1;
            return "AFS"+this.padsZero(rollNumber);
        } else {
            rollNumber = Math.floor(Math.random() * 7)+1;
            return "AFA"+this.padsZero(rollNumber);
        }
    }
    generateMats = (rngGOD) => {
        let rollNumber = "";
        if(rngGOD >=1 && rngGOD <= 2500){
            return "SM001";
        }
        else if(rngGOD >=2501 && rngGOD <= 3625){
            rollNumber = Math.floor(Math.random() * 2)+1;
            return "EE"+this.padsZero(rollNumber);
        }
        else if(rngGOD >= 3626 && rngGOD <= 4750){
            rollNumber = Math.floor(Math.random() * 4)+1;
            return "EC"+this.padsZero(rollNumber);
        }
        else{
            rollNumber = Math.floor(Math.random() * 2)+1;            
            return "HC"+this.padsZero(rollNumber);
        }
    }

    soloGacha = () => {
        // initiate
            let indexCounter = this.state.counter;
            let yoloCounter = this.state.yoloCounter;
            let epicCounter = this.state.epicCounter;

        // for display
            if(this.state.displayGuarantee !== ""){
                this.setState({displayGuarantee:[]});
            }

        // generate Item    
            let eachItem= '';    
            if(indexCounter === 99){
                yoloCounter = 10;
                epicCounter = 1;
                let rollNumber = Math.floor(Math.random() * 6)+1;
                eachItem = "AVS"+this.padsZero(rollNumber);
            } else {
                if(yoloCounter < 1){
                    yoloCounter = 10;
                }
                if(epicCounter > 3){
                    epicCounter = 1;
                }
                    
                eachItem = this.generateCodes(yoloCounter, epicCounter);
                // console.log(yoloCounter+"  "+epicCounter);

                if(eachItem.match(/AVS.*/) || eachItem.match(/AVA.*/)) {
                    yoloCounter = 10;
                } else { 
                    yoloCounter--;
                }
                    epicCounter++;
            }
            

        // push to history
            this.setState({
                yoloCounter : yoloCounter,
                epicCounter : epicCounter
            });
            this.setState({placeholderHistory : eachItem});
            this.setState(state => {
                const addHistory = state.history.push(state.placeholderHistory);
                const addDisplay = state.displayGuarantee.push(state.placeholderHistory);
                return {
                    addHistory,
                    addDisplay,
                    placeholderHistory: '',
                };
            });

        // for counter
            if(eachItem.match(/AVS.*/) || indexCounter === 100) {
                indexCounter = 0;
                this.setState({counter : indexCounter});
            } else {
                indexCounter = indexCounter + 1;
                this.setState({counter : indexCounter});
            }
            
        this.setpageCount(1);
        
    }

    guaranteeGacha = () => {
        // initiate
            let indexCounter = this.state.counter;
            let yoloCounter = this.state.yoloCounter;
            let epicCounter = this.state.epicCounter;
            let loop = 1;
            let eachItem = "";

        // for display
            if(this.state.displayGuarantee !== ""){
                this.setState({displayGuarantee:[]});
            }
        // 10 times
            while(loop <= 10 ){

                // generate Item    
                    if(indexCounter === 99){
                        yoloCounter = 10;
                        epicCounter = 1;
                        var rollNumber = Math.floor(Math.random() * 6)+1;
                        eachItem = "AVS"+this.padsZero(rollNumber);

                    } else {
                        if(yoloCounter < 1){
                            yoloCounter = 10;
                        }
                        if(epicCounter > 3){
                            epicCounter = 1;
                        }
                        
                        eachItem = this.generateCodes(yoloCounter, epicCounter);
                        // console.log(yoloCounter+"  "+epicCounter);

                        if(eachItem.match(/AVS.*/) || eachItem.match(/AVA.*/)) {
                            yoloCounter = 10;
                        } else { 
                            yoloCounter--;
                        }
                        epicCounter++;
                    }
                    
                // push states
                    this.setState({
                        yoloCounter : yoloCounter,
                        epicCounter : epicCounter
                    });
                    this.setState({placeholderHistory : eachItem});
                    this.setState(state => {
                        const addHistory = state.history.push(state.placeholderHistory);
                        const addDisplay = state.displayGuarantee.push(state.placeholderHistory);
                        return {
                            addHistory,
                            addDisplay,
                            placeholderHistory: '',
                        };
                    });


                // set counter
                    if(eachItem.match(/AVS.*/) || indexCounter === 100){
                        indexCounter = 0;
                        this.setState({counter : indexCounter});
                    } else {
                        indexCounter = indexCounter + 1;
                        this.setState({counter : indexCounter});
                    }
                loop++;
            }
            this.setpageCount(10);
    }

    render(){

        let buildInData = this.setPaginate(this.state.history, 10, this.state.pageNow);

        return(
            <Fragment>
                <div className="gacha-wrap">
                    <div className="gacha-category">
                        <button className="hud-button-category standard" onClick={()=>this.props.onRoute('gacha')}>
                            Standard Supply
                        </button>
                        <button className="hud-button-category expansion" onClick={()=>this.props.onRoute('gachaExp')}>
                            Expansion Supply
                        </button>
                    </div>
                    <div className="gacha-banner">
                        <div className="banner-current">
                            Guaranteed : {this.state.guarantee-this.state.counter}
                        </div>
                        <div className="banner-title">
                            Expansion Supply
                        </div>
                        <video autoPlay loop className="banner-vids">
                            <source src={bannerExpansion} type="video/mp4"/>
                        </video>
                    </div>
                    <div className="gacha-button">
                        <button data-backdrop="static" data-keyboard="false" className="hud-button" data-toggle="modal" data-target="#rulesModal">
                            Rules
                        </button>
                        <button data-backdrop="static" data-keyboard="false" className="hud-button" data-toggle="modal" data-target="#historyExpansionModal">
                            History
                        </button>
                        <button data-backdrop="static" data-keyboard="false" className="hud-gacha-button" onClick={this.soloGacha} data-toggle="modal" data-target="#pullModal">
                            1x Pull
                        </button>
                        <button data-backdrop="static" data-keyboard="false" className="hud-gacha-button" onClick={this.guaranteeGacha} data-toggle="modal" data-target="#pullMassModal">
                            10x Pull
                        </button>
                    </div>
                </div>


                {/* Pull Modal */}
                <div id="pullModal" className="modal fade bd-example-modal-xl modalPull" tabIndex="-1" role="dialog" aria-labelledby="pullLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content modal-gacha">
                            <div className="modal-header">
                                <h5 className="modal-title" id="rulesLabel">
                                    Item Drops
                                </h5>
                            </div>
                            <div className="modal-body item-align">
                                <div className="item-wrap-solo" id="soloPull">
                                    {/* Drop your item here */}
                                    {this.state.displayGuarantee
                                        .map((item, index) =>(
                                            this.state.hi3data
                                                .filter(hi3data => hi3data.id === item)
                                                .map((drop)=>(
                                                    <div key={index} className={`item-drop ${drop.grade}`}>
                                                        <img alt='' src={drop.path}/>
                                                        <p>
                                                            {drop.title}
                                                            <br/>
                                                            {drop.name}
                                                        </p>
                                                    </div>
                                            ))
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="gotoButton gold" data-dismiss="modal" aria-label="Close">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pull Mass Modal */}
                <div id="pullMassModal" className="modal fade bd-example-modal-xl modalPull" tabIndex="-1" role="dialog" aria-labelledby="pullLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content modal-gacha">
                            <div className="modal-header">
                                <h5 className="modal-title" id="rulesLabel">
                                    Item Drops
                                </h5>
                            </div>
                            <div className="modal-body item-align">
                                <div className="item-wrap-mass">
                                    {this.state.displayGuarantee
                                        .map((item, index) =>(
                                            this.state.hi3data
                                                .filter(hi3data => hi3data.id === item && item.match(/AVS.*/))
                                                .map((drop)=>(
                                                    <div key={index} className={`item-drop ${drop.grade}`}>
                                                        <img alt='' src={drop.path}/>
                                                        <p>
                                                            {drop.title}
                                                            <br/>
                                                            {drop.name}
                                                        </p>
                                                    </div>
                                            ))
                                        ))
                                    }
                                    {this.state.displayGuarantee
                                        .map((item, index) =>(
                                            this.state.hi3data
                                                .filter(hi3data => hi3data.id === item && item.match(/AVA.*/))
                                                .map((drop)=>(
                                                    <div key={index} className={`item-drop ${drop.grade}`}>
                                                        <img alt='' src={drop.path}/>
                                                        <p>
                                                            {drop.title}
                                                            <br/>
                                                            {drop.name}
                                                        </p>
                                                    </div>
                                            ))
                                        ))
                                    }
                                    {this.state.displayGuarantee
                                        .map((item, index) =>(
                                            this.state.hi3data
                                                .filter(hi3data => hi3data.id === item && !item.match(/AVS.*/) && !item.match(/AVA.*/))
                                                .map((drop)=>(
                                                    <div key={index} className={`item-drop ${drop.grade}`}>
                                                        <img alt='' src={drop.path}/>
                                                        <p>
                                                            {drop.title}
                                                            <br/>
                                                            {drop.name}
                                                        </p>
                                                    </div>
                                            ))
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="gotoButton gold" data-dismiss="modal" aria-label="Close">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* // History Expansion */}
                <div id="historyExpansionModal" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="historyExpansion" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content modal-gacha">
                            <div className="modal-header">
                                <h5 className="modal-title" id="historyExpansion">
                                    History
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table table-sm table-hover table-borderless">
                                    <tbody>
                                        {buildInData
                                            .map((item, index) =>(
                                                this.state.hi3data
                                                    .filter(hi3data => hi3data.id === item)
                                                    .map((drop)=>(
                                                        <tr key={index+1} className={`list-${drop.grade}`}>
                                                            <td>{index+1}</td>
                                                            <td>|</td>
                                                            <td>{drop.title}</td>
                                                            <td>{drop.name}</td>
                                                        </tr>
                                                ))
                                            ))
                                        }
                                    </tbody>
                                </table>
                                <nav>
                                    <ReactPaginate
                                        previousLabel={'<<'}
                                        nextLabel={'>>'}
                                        breakLabel={'...'}
                                        pageCount={this.state.pageCount}
                                        marginPagesDisplayed={1}
                                        pageRangeDisplayed={3}
                                        onPageChange={this.switchPages}
                                        containerClassName={'pagination'}
                                        breakClassName={'break-me'}
                                        subContainerClassName={'pages pagination'}
                                        activeClassName={'active'}
                                    />
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>                
            </Fragment>
        )
    }
}
export default rng_expansion;