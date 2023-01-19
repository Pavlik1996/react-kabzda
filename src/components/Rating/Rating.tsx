import React from "react";

export type RatingValueType = 1 | 2 | 3 | 4 | 5 | 0

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export const Rating = (props: RatingPropsType) => {
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

type StartPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

const Star = (props: StartPropsType) => {

    return <span onClick={() => {
        props.onClick(props.value)
    }}>
        {props.selected ? <b>Star </b> : 'Star '}
    </span>
}