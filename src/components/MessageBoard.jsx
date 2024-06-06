import { useState } from "react";

function MessageBoard() {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newArrayMsg = [...list];
    newArrayMsg.push(message);
    setList(newArrayMsg);
  };

  const handleRemove = (index) => {
    let newArrayMsg = [...list];
    newArrayMsg.splice(index, 1);
    setList(newArrayMsg);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleChange}
            value={message}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => {
            handleSubmit(event);
          }}
        >
          Submit
        </button>
      </div>
      <div className="board">
        <div>
          {list.map((list, index) => (
            <h1 key={index} className="message">
              {list}
              <button
                className="delete-button"
                onClick={() => {
                  handleRemove(index);
                }}
              >
                x
              </button>
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MessageBoard;
