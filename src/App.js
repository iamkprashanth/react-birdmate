import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddBird from './components/AddBird';
import ShowBird from './components/ShowBird';

function App() {
  const [bird, setBird] = useState("");
  const [birdlist, setBirdlist] = useState(JSON.parse(localStorage.getItem('birdlist')) || []);
  const [editid, setEditid] = useState(0);
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || "medium");

  const handleSubmit = (event) => {
    event.preventDefault();    

    if(editid){
      const date = new Date();
      const selectedBird = birdlist.find(bird => bird.id === editid);
      const updateBird = birdlist.map((e) => (e.id === selectedBird.id ? (e = {id: e.id, name: bird, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}) : {id: e.id, name: e.name, time: e.time}));
      setBirdlist(updateBird);
      setEditid(0);
      setBird("");
      return;
    }

    if(bird){
      const date = new Date();
      setBirdlist([...birdlist, {id: date.getTime(), name: bird, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}]);
      setBird("");
    }

  }

  const handleEdit = (id) => {
    const selectedBird = birdlist.find(bird => bird.id === id);
    setBird(selectedBird.name);
    setEditid(id);
  }

  const handleDelete = (id) => {
    const updatedBirdlist = birdlist.filter(bird => bird.id !== id);
    setBirdlist(updatedBirdlist);
  }

  useEffect(() => {
    localStorage.setItem('birdlist', JSON.stringify(birdlist));
  }, [birdlist]);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <div className={"App " + theme}>
      <div className="container">
        <Header setTheme={setTheme} theme={theme}>
          Birdmate
        </Header>
        <AddBird handleSubmit={handleSubmit} editid={editid} bird={bird} setBird={setBird}/>
        <ShowBird birdlist={birdlist} setBirdlist={setBirdlist} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default App;
