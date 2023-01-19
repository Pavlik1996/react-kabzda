import React, {useState} from 'react';

type PropsType = {
    // on: boolean
    setOn: (on: boolean) => void
    defaultOn?: boolean
}

const UnControlledOnOff = (props: PropsType) => {

    const [on, setOn] = useState<boolean>(props.defaultOn ? props.defaultOn : false)

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


    const onClicked = () => {
        setOn(true)
        props.setOn(true)
    }

    const offClicked = () => {
        setOn(false)
        props.setOn(false)
    }

    return (
        <div>
            <div onClick={onClicked} style={OnStyle}>On</div>
            <div onClick={offClicked} style={OffStyle}>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    );
};

export default UnControlledOnOff;