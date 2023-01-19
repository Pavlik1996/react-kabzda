import {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
};

const callBack = action('click off or no')

export const MenuCollapsedMode = () => <Accordion titleValue={'test1'} collapsed={true} onChange={callBack}/>
export const UsersOnCollapsedMode = () => <Accordion titleValue={'test2'} collapsed={false} onChange={callBack}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'changed'} collapsed={value} onChange={() => setValue(!value)}/>
}