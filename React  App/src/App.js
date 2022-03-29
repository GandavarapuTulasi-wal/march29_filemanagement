import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import FileManagement from './FileManagement';
import Folder from './Folder';
import FileModify from './FileModify';
import FolderContents from './FolderContents';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <div>
            <h1 className="heading">App</h1>
          </div>
          <div className="nav">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/files" className="link">
              File Management
            </Link>
            <Link to="/folder" className="link">
              Folder
            </Link>
            <Link to="/modify" className="link">
              Modify
            </Link>
            <Link to="/foldercontents" className="link">
              Folder Contents
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/files" element={<FileManagement />}></Route>
          <Route path="/folder" element={<Folder />}></Route>
          <Route path="/modify" element={<FileModify />}></Route>
          <Route path="/foldercontents" element={<FolderContents />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
