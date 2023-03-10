import {Select} from "./Select";
import {Accordion, ItemType} from "../Accordion/Accordion";
import {action} from "@storybook/addon-actions";
import {ChangeEvent, useState} from "react";

export default {
    title: 'Select',
    component: Select
};


// const users: ItemType[] = [
//     {title: 'Pasha', value: 1},
//     {title: 'Diana', value: 2},
//     {title: 'Masha', value: 3},
//     {title: 'Zeka', value: 4},
// ]


const callBack = action('click off or no')


export const Base = () => {
    const [value, setValue] = useState(3)
    return <div>
        <Select value={value} onChange={setValue} items={[
            {title: 'Pasha', value: 1},
            {title: 'Diana', value: 2},
            {title: 'Masha', value: 3},
            {title: 'Zeka', value: 4},
        ]}/>
    </div>

}


export const Base2 = () => {
    const [value, setValue] = useState(null)
    return <div>
        <Select value={value} onChange={setValue} items={[
            {title: 'Pasha', value: 1},
            {title: 'Diana', value: 2},
            {title: 'Masha', value: 3},
            {title: 'Zeka', value: 4},
        ]}/>
    </div>
}