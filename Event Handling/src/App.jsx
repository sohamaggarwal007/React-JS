import './App.css'

function App() {

  function handleClick() {
    alert("Button Clicked!");
  }

  function handleMouseOver() {
    alert("Hovering on Para");
  }

  function handleInputChange(e) {
    // console.log("Input mein value change hui hai");
    console.log("Value is: ", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("FORM SUBMITTED");
  }
 
  return (
    <div>

      <button onClick={() => alert("Button clicked")}>
        Click me
      </button> 

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form>

      <p onMouseOver={handleMouseOver} style={{border: "1px solid black"}}>
        I am a Para
      </p>

      <button onClick={handleClick}>
        Click me
      </button> 
    </div>
  )
}

export default App
