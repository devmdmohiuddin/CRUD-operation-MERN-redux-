import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import UpdateUser from './screens/UpdateUser';
import UserListScreen from './screens/UserListScreen';

const App = () => {
  return (
      <main className="container py-5">
    <Routes>
      <Route path="/user-list" element={<UserListScreen />} />
      <Route path="/update/:id" element={<UpdateUser />} />
      <Route path="/" element={<HomeScreen />} />
    </Routes>
      </main>

  );
}

export default App;
