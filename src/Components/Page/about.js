import React, { Fragment } from 'react';
import konde from '../../resources/img/konde-smel.png';
import tronya from '../../resources/img/about-tronya.png';
import AICHAN from '../../resources/img/AICHAN.png';
import Mailing from './mail';

const about = ({setView, activeView}) => {
    let activeViewInfo, activeViewMail;
    if(activeView === "mail"){
        activeViewMail = "this-show";
        activeViewInfo = "this-hide";
    } else if(activeView === "info"){
        activeViewMail = "this-hide";
        activeViewInfo = "this-show";
    }
    return(
    <Fragment>
        <div className="main-about">
            <div className="about-share">
                <div className="social-area">
                    <div className="social-circle">
                        <div className="social-toggle">
                            <img src={konde} alt=""/>
                        </div>
                        <ul>
                            <li>
                                <button onClick={()=>setView('info')}>
                                    <i className="fas fa-user-tie"></i>
                                </button>
                            </li>
                            <li>
                                <button onClick={()=>setView('mail')}>
                                    <i className="fas fa-envelope"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-field">

                {/* MAIL */}
                <div className={`field-mail ${activeViewMail}`}>
                    <h6>Have something good to share ? Let me know</h6>
                    <Mailing/>
                </div>

                {/* INFO */}
                    <div className={`field-info ${activeViewInfo}`}>
                        <div className="card-info item-1">
                            <div className="card-info-display">
                                <div className="card-info-icon">
                                    <i className="fas fa-laptop-code"></i>
                                </div>
                                Created By
                            </div>
                            <div className="card-info-content">
                                Ricki Hermawan
                            </div>
                        </div>
                        <div className="card-banner item-2">
                            <img src={AICHAN} alt=""/>
                        </div>
                        <div className="card-info item-3">
                            <div className="card-info-display">
                                <div className="card-info-icon">
                                    <i className="fas fa-share-alt-square"></i>
                                </div>
                                Find Me
                            </div>
                            <div className="card-info-content">
                                <a className="content-social content-blue" href="https://www.facebook.com/ricikie" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                                <a className="content-social content-pink" href="https://www.instagram.com/rici.kie/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                {/* <div className="content-social content-green">
                                    <i className="fab fa-line"></i>
                                </div> */}
                            </div>
                        </div>
                        <div className="card-info item-4">
                            <div className="card-info-display">
                                <div className="card-info-icon">
                                    <i className="fas fa-gamepad"></i>
                                </div>
                                Add My HI3 Account
                            </div>
                            <div className="card-info-content">
                                10119982(SEA)
                            </div>
                        </div>
                        <div className="card-info item-5">
                            <div className="card-info-display">
                                <div className="card-info-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                Location
                            </div>
                            <div className="card-info-content">
                                <iframe className="map_embed" title="semarang-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.796074123!2d110.34702460740775!3d-7.024724603714551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da5cb9f2!2sSemarang%2C%20Kota%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1568996427360!5m2!1sid!2sid" allowFullScreen=""></iframe>
                            </div>
                        </div>
                        <div className="card-info item-6">
                            <div className="card-info-display">
                                <div className="card-info-icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                Phone
                            </div>
                            <div className="card-info-content">
                                It's a Secret
                            </div>
                        </div>
                        <div className="card-banner item-7">
                            <img src={tronya} alt=""/>
                        </div>
                    </div>                
            </div>
        </div>

    </Fragment>
    )
}
export default about