import {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input'
};

export const UncontrolledInput = () => <input/>


export const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }


    return (
        <div>
            <input onChange={onChange}/> -- {value}
        </div>
    )
}


export const GetValueOfUncontrolledInputByPress = () => {

    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }


    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            actual value: {value}
        </div>
    )
}


export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>

