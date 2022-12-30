import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (value: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClick={props.onClick}
                collapsed={props.collapsed}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    onClick: (value: boolean) => void
    collapsed: boolean
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => props.onClick(!props.collapsed)}>
            -- {props.title} --
        </h3>)
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