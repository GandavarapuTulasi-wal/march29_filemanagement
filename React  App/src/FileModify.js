import axios from 'axios';
import { useState } from 'react';

function FileModify() {
  const [content, setContent] = useState(['Enter file name for Content']);
  const [username, setUsername] = useState();
  const modifyContent = () => {
    axios
      .get(`/files/modify/${username}/${content}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchContent = (event) => {
    event.preventDefault();
    setUsername(event.target.filename.value);
    axios
      .get(`/files/readfile/${event.target.filename.value}`)
      .then((res) => setContent(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div className="card-container">
      <h1>File management Form</h1>
      <form onSubmit={fetchContent} className="box">
        <input
          type="text"
          name="filename"
          placeholder="Enter filename"
          className="todo-user-input"
        />
        <button>Get File Content</button>
        <textarea
          rows="5"
          cols="20"
          name="filecontent"
          placeholder="Enter the file name for file content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          className="todo-user-input"
        ></textarea>
      </form>
      <div>
        <button onClick={() => modifyContent()}>Modify</button>
      </div>
    </div>
  );
}
export default FileModify;
