import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainRoute from './Routes/MainRoutes'

function App() {
  return (
    <div className="App">
      <Router>
        {MainRoute.map(item => {
          return (
            <Route exact={item.exact} path={item.path} render={(props) => <item.Component {...props} />} />
          )
        })}
      </Router>
    </div>
  );
}

export default App;
