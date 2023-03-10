import {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, ItemType} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
};

const users: ItemType[] = [
    {title: 'Pasha', value: 1},
    {title: 'Diana', value: 2},
    {title: 'Masha', value: 3},
    {title: 'Zeka', value: 4},
]

const callBack = action('click off or no')
const onClickCallBack = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'test1'} collapsed={true} onChange={callBack} items={[]} onClick={() => {}}/>
export const UsersOnCollapsedMode = () => <Accordion titleValue={'test2'} collapsed={false} onChange={callBack} items={users} onClick={onClickCallBack}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'changed'} collapsed={value} items={users} onClick={onClickCallBack}
                      onChange={() => setValue(!value)}/>
}