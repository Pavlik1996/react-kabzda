import UnControlledOnOff from "../UnControlledOnOff/UnControlledOnOff";
import {OnOff} from "./OnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff
};

const callBack = action('click off or no')

export const OnMod = () => <OnOff on={true} onChange={callBack}/>
export const OffMod = () => <OnOff on={false} onChange={callBack}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={() => setValue(!value)}/>
}