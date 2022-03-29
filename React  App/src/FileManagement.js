import axios from 'axios';

function FileManagement() {
  const addFiles = (event) => {
    event.preventDefault();
    axios
      .get(
        `/files/createfile/${event.target.filename.value}/${event.target.filecontent.value}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card-container">
      <h1>File management Form</h1>
      <form onSubmit={addFiles} className="box">
        <input
          type="text"
          name="filename"
          placeholder="Enter filename"
          className="todo-user-input"
        />
        <textarea
          rows="5"
          cols="20"
          name="filecontent"
          placeholder="Enter filecontents"
          className="todo-user-input"
        ></textarea>
        <button>Add</button>
      </form>
    </div>
  );
}
export default FileManagement;
