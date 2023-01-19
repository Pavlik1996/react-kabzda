import UnControlledOnOff from "../UnControlledOnOff/UnControlledOnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff
};

const callBack = action('click off or no')

export const OnMod = () => <UnControlledOnOff defaultOn={true} setOn={callBack}/>
export const OffMod = () => <UnControlledOnOff defaultOn={false} setOn={callBack}/>
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>

