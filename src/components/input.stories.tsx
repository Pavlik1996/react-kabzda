import {ChangeEvent, useRef, useState} from "react";
import {isDataView} from "util/types";
import {action} from "@storybook/addon-actions";

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


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <div>
            <input
                value={parentValue}
                onChange={onChange}
            />
        </div>
    )
}


export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return (
        <div>
            <input
                checked={parentValue}
                type={"checkbox"}
                onChange={onChange}
            />
        </div>
    )
}


export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <div>
            <select value={parentValue} onChange={onChange}>
                <option>none</option>
                <option value={'1'}>Minsk</option>
                <option value={'2'}>Warszawa</option>
                <option value={'3'}>Kiev</option>
            </select>
        </div>
    )
}


export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>

