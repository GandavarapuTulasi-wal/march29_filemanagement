import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function FolderContents() {
  let [files, setFiles] = useState([]);
  useEffect(() => {
    axios
      .get('/files/foldercontents')
      .then((res) => setFiles(res.data))
      .catch((error) => console.log(error));
  }, []);
  function getFiles() {
    axios
      .get('/files/foldercontents')
      .then((res) => setFiles(res.data))
      .catch((error) => console.log(error));
  }
  function deleteFile(file) {
    axios
      .get(`/files/deletefile/${file}`)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    getFiles();
  }

  return (
    <div>
      <h1>Files</h1>
      <ol className="card-container">
        {files.map((val, index) => (
          <div className="list-values">
            <li className="item">{val}</li>
            <button
              className="delete"
              onClick={() => {
                deleteFile(val);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </ol>
    </div>
  );
}
export default FolderContents;
