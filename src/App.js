import AllUsers from './components/allUsers/AllUsers';
import UserForm from './components/userForm/UserForm';
import { ContextProvider } from './contexts/UserContext';

function App() {
  return (
    <div className="container">
      <ContextProvider>
        <UserForm/>
        <AllUsers/>
      </ContextProvider>
    </div>
  );
}

export default App;
