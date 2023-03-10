import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";
import {UnAccordion} from "./components/UncontrolledAccrodion/UnControlledAccordion";
import {UnRating} from "./components/UnControlledRating/UnRating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)


    return (
        <div className={'App'}>

            <OnOff on={on} onChange={() => setOn(!on)}/>

            <UnControlledOnOff setOn={setOn} />
            <UnAccordion titleValue={'menuOne'}/>
            {/*<UnRating />*/}

            <Rating value={ratingValue} onClick={setRatingValue}/>


            {/*<Accordion*/}

            {/*    titleValue={"Menu ONE"}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    onChange={() => setAccordionCollapsed(!accordionCollapsed)}*/}
            {/*/>*/}

        </div>

    );
}

type PadeTitlePropsType = {
    title: string
}

const PageTitle = (props: PadeTitlePropsType) => {
    return <h1>{props.title}</h1>
}

export default App;
