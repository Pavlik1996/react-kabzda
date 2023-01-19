import {UnAccordion} from "./UnControlledAccordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UnAccordion stories',
    component: UnAccordion
};

const callBack = action('click off or no')

export const MadeChanging = () => {
    return <UnAccordion titleValue={'Users'}/>
}
