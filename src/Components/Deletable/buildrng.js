import React, { Component } from 'react';
import { valkyrie, material } from '../../resources/data/hi3data';


class rng extends Component {
    constructor(){
        super();
        this.state = {
            valkyrie : valkyrie,
            material : material,
            counter : 0,
            displayGuarantee :[],
            placeholderHistory : '',
            history :[],
        }
    }

    padsZero = (number) => {
        if(number < 10 && number > 0){
            return "00"+number;
        }
        else if(number >= 10 && number < 100){
            return "0"+number;
        }
    }

    filterMaterial = (code) => {
        const selectData = this.state.material.filter(material => material.id === code);
        const displayItem = selectData.map((mats) => mats.name);
        return displayItem;
    }

    filterValk = (code) => {
        const selectData = this.state.valkyrie.filter(valkyrie => valkyrie.id === code);
        const displayItem = selectData.map((valk) => valk.name+" - "+valk.battlesuit);
        return displayItem;
    }

    generateCodes = () => {
        var rngGOD = Math.floor(Math.random() * 10000)+1;

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
        if(rngGOD >= 8501 && rngGOD <= 8650){
            return "AVS002";
        } else {
            var rollNumber = Math.floor(Math.random() * 7)+1;
            return this.filterValk("AVA"+this.padsZero(rollNumber));
        }
    }
    generateFragment = (rngGOD) => {
        if(rngGOD >= 5876 && rngGOD <= 6100){
            return "Fragment S-Awaken";
        } else {
            return "Fragment A-Awaken";
        }
    }
    generateMats = (rngGOD) => {
        if(rngGOD >=1 && rngGOD <= 2500){
            return "Skill Material";
        }
        else if(rngGOD >=2501 && rngGOD <= 3625){
            return "Equipment EXP";
        }
        else if(rngGOD >= 3626 && rngGOD <= 4750){
            return "EXP Chip";
        }
        else{
            var rollNumber = Math.floor(Math.random() * 2)+1;            
            return this.filterMaterial("HC"+this.padsZero(rollNumber));
        }
    }

    soloGacha = () => {
        let eachItem = this.generateCodes();
        // push to history
            this.setState({placeholderHistory : eachItem});
            this.setState(state => {
                const addHistory = state.history.push(state.placeholderHistory);
                return {
                    addHistory,
                    placeholderHistory: '',
                };
            });
        // for counter
            let indexCounter = this.state.counter + 1;
            this.setState({counter : indexCounter});
        // Reset Counter
            if(indexCounter === 100){
                this.setState({counter: 0});
                indexCounter = 0;
            }
        document.getElementById("soloPull").innerHTML = eachItem;
        this.setState({displayGuarantee:[]});
    }

    guaranteeGacha = () => {
        // for counter
            let indexCounter = this.state.counter;
        // for display item
            if(this.state.displayGuarantee !== ""){
                this.setState({displayGuarantee:[]});
            }
            let eachItem = "";

        for(var i=1;i<=10;i++){
            eachItem = this.generateCodes();
            // Push to History
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
                indexCounter = indexCounter + 1;
                this.setState({counter : indexCounter});
            // Reset Counter
                if(indexCounter === 100){
                    this.setState({counter: 0});
                    indexCounter = 0;
                }
        }
        // Display & Reset
            document.getElementById("soloPull").innerHTML = "";
    }

    render(){
        return(
            <div className="tutorial">
                <button onClick={this.soloGacha}>1x Pull</button>
                <button onClick={this.guaranteeGacha}>10x Pull</button>
                <div className="showPull">
                    <div id="soloPull"></div>
                    <div id="guaranteePull">
                        <ol>
                            {this.state.displayGuarantee.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                    </div>
                </div>
                <hr/>
                <div id="counter">{this.state.counter}</div>
                <hr/>
                <br/>
                <div>
                    History
                    <ol>
                        {this.state.history.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                    {valkyrie[38].battlesuit}
                    <img src={process.env.PUBLIC_URL+valkyrie[38].path} alt=""/>
                </div>
            </div>
        )
    }
}
export default rng;

