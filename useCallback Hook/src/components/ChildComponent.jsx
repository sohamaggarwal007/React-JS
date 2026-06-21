import React from "react";

const ChildComponent = React.memo(
    (props) => {

        console.log("Child Component got re-rendered");
        return (
          <div>
            <button onClick={props.handleClick}>
              {props.buttonName}
            </button>
          </div>
        )
    }
)

export default ChildComponent
// React.memo -> wrap -> component re-renders only when the props change else it will not re-render
// If you are sending a function then react.memo will not work and re-render occurs