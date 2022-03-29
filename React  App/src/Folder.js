import axios from 'axios';
import { useEffect, useState } from 'react';

function Folder() {
  let [files, setFiles] = useState([]);

  const addFiles = (event) => {
    event.preventDefault();
    axios
      .get(`/files/createfolder/${event.target.foldername.value}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card-container">
      <h1>Folder Form</h1>
      <form onSubmit={addFiles} className="box">
        <input
          type="text"
          name="foldername"
          placeholder="Enter foldername"
          className="todo-user-input"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default Folder;
