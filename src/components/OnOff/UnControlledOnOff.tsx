import React, {useState} from 'react';

type PropsType = {
    on: boolean
    setOn: (val: boolean) => void
}

const UnControlledOnOff = (props: PropsType) => {


    const OffStyle = {
        width: '35px',
        height: '25px',
        border: '1px black solid',
        margin: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'white' : 'red',
        padding: '5px',
    }
    const OnStyle = {
        width: '35px',
        height: '25px',
        border: '1px black solid',
        margin: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white',
        padding: '5px'
    }
    const IndicatorStyle = {
        width: '30px',
        height: '30px',
        border: '1px black solid',
        margin: '5px',
        display: 'inline-block',
        borderRadius: '35px',
        padding: '5px',
        backgroundColor: props.on ? 'green' : 'red',

    }


    return (
        <div>
            <div onClick={() => props.setOn(true)} style={OnStyle}>On</div>
            <div onClick={() => props.setOn(false)} style={OffStyle}>Off</div>
            <div
                onClick={() => props.setOn(!props.on)}
                style={IndicatorStyle}></div>
        </div>
    );
};

export default UnControlledOnOff;