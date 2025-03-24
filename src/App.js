import ButtonComp from "./Components/Button.comp.jsx";
import CountComp from "./Components/Count.comp.jsx";
import HeroComp from "./Components/Hero.comp.jsx";
import './App.style.css';

function App() {

    const onClickHandler = (event, text) => {
        event.target.style.backgroundColor = "red";
        alert(text)
    }

  return (
    <>
        <header>
            <HeroComp eventHandler={onClickHandler} />
        </header>
        <main>
            <CountComp/>
            <CountComp/>
            <CountComp/>
        </main>
    </>
  );
}

export default App;
