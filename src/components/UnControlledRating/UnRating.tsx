import React, {useState} from "react";

export type RatingValueType = 1 | 2 | 3 | 4 | 5 | 0

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export const UnRating = (props: RatingPropsType) => {

    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue(1); props.onChange(1)}}/>
            <Star selected={value > 0} setValue={() => {setValue(2); props.onChange(2)}}/>
            <Star selected={value > 0} setValue={() => {setValue(3); props.onChange(3)}}/>
            <Star selected={value > 0} setValue={() => {setValue(4); props.onChange(4)}}/>
            <Star selected={value > 0} setValue={() => {setValue(5); props.onChange(5)}}/>

        </div>
    )
}

type StartPropsType = {
    selected: boolean
    setValue: () => void
}

const Star = (props: StartPropsType) => {
    return <span onClick={props.setValue}>
        {props.selected ? <b>Start </b> : 'Start '}
    </span>
}