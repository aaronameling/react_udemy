
import './Button.style.css'

function ButtonComp({text, style, eventhandler}) {

    return (
        <>
          <button
              onClick={(event) => {
                  eventhandler(event, text)
              }}
              className={`btn ${style}`}>
              {text}
          </button>
        </>
    );
}

export default ButtonComp;