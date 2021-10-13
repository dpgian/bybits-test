import Form from './Form';
import Details from './Details';
import { Router } from '@reach/router';
import UserDetailsProvider from './UserDetailsProvider';
import './App.css'

function App() {
  return (
    <UserDetailsProvider>
      <Router>     
        <Form path='/' />
        <Details path='/details' />
      </Router>
    </UserDetailsProvider>
  );
}

export default App;
