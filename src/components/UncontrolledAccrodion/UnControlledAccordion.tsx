import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}


export const UnAccordion = (props: AccordionPropsType) => {

    // const [collapsed, setCollapsed] = useState(false)

    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>

            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={() => props.onClick()}>-- {props.title} --</h3>
}

export const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}