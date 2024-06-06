import { useState } from "react";

function MessageBoard() {
  const [text, setText] = useState("");
  const [textList, setTextList] = useState([]);

  const handleSubmitText = (event) => {
    event.preventDefault(); 
    setTextList([...textList, text])
    setText("")
    
  }

  const handleRemove = (index) => {
    const newText = [...textList]
    newText.splice(index, 1)
    setTextList(newText)
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form class="message-input-container" onSubmit={handleSubmitText}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </label>
        <button className="submit-message-button" type="submit">
          Submit
        </button>
      </form>
      <div class="board">
        {textList.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button className="delete-button" onClick={handleRemove}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
