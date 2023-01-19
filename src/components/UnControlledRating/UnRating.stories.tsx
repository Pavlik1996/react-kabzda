import {action} from "@storybook/addon-actions";
import {UnRating, RatingValueType} from "./UnRating";


export default {
    title: 'UnRating stories',
    component: UnRating
};

const callBack = action('click off or no')

export const EmptyRating = () => <UnRating defaultValue={0} onChange={callBack}/>
export const Rating1 = () => <UnRating defaultValue={1} onChange={callBack}/>
export const Rating2 = () => <UnRating defaultValue={2} onChange={callBack}/>
export const Rating3 = () => <UnRating defaultValue={3} onChange={callBack}/>
export const Rating4 = () => <UnRating defaultValue={4} onChange={callBack}/>
export const Rating5 = () => <UnRating defaultValue={5} onChange={callBack}/>


