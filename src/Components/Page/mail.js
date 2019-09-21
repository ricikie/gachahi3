import React, { Fragment } from 'react';

class Mail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            email : '',
            message : '',
            msgBox : '',
            alertTheme : 'none'
        }
    }

    changeName = (event) => {
        this.setState({name : event.target.value});
    }
    changeEmail = (event) => {
        this.setState({email : event.target.value});
    }
    changeMessage = (event) => {
        this.setState({message : event.target.value});
    }

    sayHi = () =>{
        this.setState({
            msgBox: 'Sending . . .',
            alertTheme: 'info'
        });
        fetch('http://localhost:3001/contact', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify( {
                name : this.state.name,
                email : this.state.email,
                message : this.state.message
            })
        })
        .then(response => response.json())
        .then(res => {
            this.setState({
                msgBox: res[0].messageBox,
                alertTheme: res[0].alertTheme
            })
        })
    }
    
    render(){
        return(
            <Fragment>
                    <div className="contact3-form validate-form">
                        <div className="wrap-input3 validate-input">
                            <input autoComplete="off" className="input3" type="text" name="name" placeholder="Name" onChange={this.changeName}/>
                            <span className="focus-input3"></span>
                        </div>

                        <div className="wrap-input3 validate-input">
                            <input autoComplete="off" className="input3" type="text" name="email" placeholder="Email" onChange={this.changeEmail}/>
                            <span className="focus-input3"></span>
                        </div>

                        <div className="wrap-input3 validate-input">
                            <textarea className="input3" name="message" placeholder="Message" onChange={this.changeMessage}></textarea>
                            <span className="focus-input3"></span>
                        </div>

                        <div className="container-contact3-form-btn">
                            <button className="contact3-form-btn" onClick={this.sayHi}>
                                Submit
                            </button>
                        </div>
                        <div className={`alert ${this.state.alertTheme}`} role="alert">
                            {this.state.msgBox}
                        </div>
                    </div>

            </Fragment>
        );        
    }    
}
export default Mail;