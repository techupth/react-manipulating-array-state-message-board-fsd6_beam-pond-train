import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [listMessage, setListMessage] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
    const newMessage = [...listMessage];
    newMessage.push(inputMessage);
    setListMessage(newMessage);
    setInputMessage("");
  };

  const handleDelete = (indexMessage) => {
    const deleteMessage = [...listMessage];
    deleteMessage.splice(indexMessage, 1);
    setListMessage(deleteMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMessage}
            onChange={(event) => {
              setInputMessage(event.target.value);
            }}
          />
        </label>
        <button className="submit-message-button" onClick={handleClick}>
          Submit
        </button>
      </div>
      <div class="board">
        {listMessage.map((items, index) => {
          return (
            <div className="message" key={index}>
              <h1>{items}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  handleDelete(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
