
import ButtonComp from "./Button.comp";
import './Hero.style.css'

function HeroComp(eventHandler) {
    return (
        <>
            <section className="hero-section">
                <div className="hero-text-container">
                    <h1>Hello React</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium illo ipsum nam natus quae
                        quibusdam sint? At et officiis quis!</p>
                </div>
                <div className="button-container">
                    <ButtonComp
                        text={"Send"}
                        style={"btn-success"}
                        eventhandler={eventHandler}
                    />
                </div>
            </section>
        </>
    )
}

export default HeroComp;