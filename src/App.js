import Navbar from './components/NavBar'
import styles from './App.module.css'
import { Container } from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom'
import './api/axiosDefault'
import SignUpForm from './pages/auth/SignUpForm';
import SigninForm from './pages/auth/SignInForm'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path='/' render={() => <h1>Home Page</h1> } />

          <Route exact path='/signin' render={() => <SigninForm /> } />

          <Route exact path='/signup' render={() => <SignUpForm /> } />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;