import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>

    );
}

const AppTitle = () => {
    return <>This is APP component</>
}



const Rating = () => {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

const Star = () => {
    return (
        <div> STAR </div>
    )
}

export default App;
