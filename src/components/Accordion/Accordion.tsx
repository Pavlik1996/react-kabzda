import React from "react";

export const Accordion = () => {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

export const AccordionTitle = () => {
    return <h3>Menu</h3>
}

export const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}