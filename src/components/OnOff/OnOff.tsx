import React, {useState} from 'react';

type PropsType = {
    // on: boolean
}

const OnOff = (props: PropsType) => {

    const [on, setOn] = useState<boolean>(false)

    const OffStyle = {
        width: '35px',
        height: '25px',
        border: '1px black solid',
        margin: '5px',
        display: 'inline-block',
        backgroundColor: on ? 'white' : 'red',
        padding: '5px',
    }
    const OnStyle = {
        width: '35px',
        height: '25px',
        border: '1px black solid',
        margin: '5px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white',
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
        backgroundColor: on ? 'green' : 'red',

    }


    return (
        <div>
            <div onClick={() => setOn(true)} style={OnStyle}>On</div>
            <div onClick={() => setOn(false)} style={OffStyle}>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    );
};

export default OnOff;