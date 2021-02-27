import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions";

const Counter = ({counter, inc, dec, res}) => {

    return (
        <div className="app__body">
            <div className="counter">
                <div className="container counter__body">
                    <h1 className="counter__value" id="counter">{counter}</h1>
                </div>
            </div>
            <div className="controls">
                <div className="container controls__body">
                    <div 
                        className="controls__btn" 
                        id="inc"
                        onClick={inc}>
                        <img src="./img/controls/plus.svg" className="controls__icon" alt="plus"/>							
                    </div>
                    <div 
                        className="controls__btn" 
                        id="dec"
                        onClick={dec}>
                        <img src="./img/controls/minus.svg" className="controls__icon" alt="minus"/>	
                    </div>
                    <div 
                        className="controls__btn" 
                        id="res"
                        onClick={res}>
                        <img src="./img/controls/reset.svg" className="controls__icon" alt="reset"/>	
                    </div>
                </div>
            </div>
        </div>
    )   
}

const mapStateToProps = (state) => {
    return {
        counter: state,
    }
}

export default connect(mapStateToProps, actions)(Counter)