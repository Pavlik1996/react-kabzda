import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UnAccordion} from "./components/UncontrolledAccrodion/UnControlledAccordion";
import {UnRating} from "./components/UnControlledRating/UnRating";
import UnControlledOnOff from "./components/OnOff/UnControlledOnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] =useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)



    return (
        <div className={'App'}>

            <UnControlledOnOff on={on} setOn={setOn}/>

            <OnOff />
            <UnAccordion titleValue={'menuOne'} />
            <UnRating/>

            <Rating value={ratingValue} onClick={setRatingValue}/>


            <Accordion
                titleValue={"Menu ONE"}
                collapsed={accordionCollapsed}
                onClick={setAccordionCollapsed}
            />
            {/*<Accordion titleValue={"Menu TWO"} collapsed={false}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
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
