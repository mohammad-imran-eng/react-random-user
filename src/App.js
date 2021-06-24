import './App.css';
import { useEffect, useState } from 'react';
import UserInformation from './components/UserInformation/UserInformation';

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }, [])
  const addMember = (fullName) => {
    setTeam([...team, fullName])
  }
  return (
    <div className="App">
      <ul>
        {
          team.map((m, idx) => <p key={idx}><strong>Name : {m}</strong></p>)
        }
      </ul>
      {

        users.map((user) => <UserInformation user={user} addMember={addMember} key={user.email}></UserInformation>)
      }
    </div >
  );
}

export default App;
