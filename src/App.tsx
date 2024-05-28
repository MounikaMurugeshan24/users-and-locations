import React, { useEffect, useState, createContext, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/SideBar';
import Overview from './pages/overview/Overview';
import AddUsers from './pages/addUsers/AddUsers';
import { getUsers } from './services/users';
import { ROUTES } from './constants/routes';
interface UserContextType {
  users: any[]; 
}
export const UserContext = createContext<UserContextType | undefined>(undefined);


const App: React.FC = () => {

  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers]= useState(0);


  const calculateTotalUsers = (convertedData: any) => {
      const data = convertedData.shift();
      const total: number = convertedData.reduce((acc: number, [country, value]: [string, string]) => acc + Number(value), 0);
      convertedData.unshift(data)
      return total;
  }

  useEffect(()=> {
      const fetchUsers = async () => {
        const usersAndLocationList = await getUsers();
        const convertedData = usersAndLocationList.map((user: { [x: string]: any; }) => [user["0"], user["1"]])
        setUsers(convertedData);
      };
      fetchUsers();

      const intervalId = setInterval(fetchUsers, 10000); 
      return () => {
        clearInterval(intervalId);
      };
  },[])


  useEffect(()=>{
    const totalUsers = calculateTotalUsers(users);
    setTotalUsers(totalUsers)
  },[users])


  return (
    <div className="page-wrapper">
      <Router>
        <nav>
          <Sidebar />
        </nav>
        <main>
        <UserContext.Provider value={{ users }}>
            <Routes>
              <Route path="/" element={<Navigate to={ROUTES.OVERVIEW.PATH} />} />
              <Route path={ROUTES.OVERVIEW.PATH} element={<Overview totalUsers={totalUsers}/>} />
              <Route path={ROUTES.ADD_USER.PATH}  element={<AddUsers totalUsers={totalUsers} />} /> 
            </Routes>
          </UserContext.Provider>
          </main>
        </Router>
    </div>
  );
};

export default App;