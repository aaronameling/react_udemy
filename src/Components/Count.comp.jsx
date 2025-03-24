import { useState } from "react";
import ButtonComp from "./Button.comp";
import './Count.style.css'

function CountComp() {
    const [count, setCount] = useState(0);

    const increaseHandler = () => {
        setCount((prev) => {
            return prev + 1;
        });
    };

    const decreaseHandler = () => {
        setCount(() => {
            return count - 1;
        });
    };

    const resetHandler = () => {
        setCount(0);
    };

    return (
        <>
            <section className="count-section">
                <h3>{count}</h3>

                <div className="button-container">
                    <ButtonComp text={"Increase"} style={"btn-success"} eventhandler={increaseHandler}/>
                    <ButtonComp text={"Decrease"} style={"btn-publish"} eventhandler={decreaseHandler}/>
                    <ButtonComp text={"Reset"} style={"btn-push"} eventhandler={resetHandler}/>
                </div>
            </section>
        </>
    );
}

export default CountComp;