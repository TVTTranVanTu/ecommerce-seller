import './App.css';
import './scss/main.scss';
import router from './router';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/sideBar/SideBar';
import SellerLogin from './pages/SellerLogin';
import { useSelector } from 'react-redux';
import FormInfo from './pages/FormInfo';

function App() {
  const showContentMenus = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} />;
      });
    }
    return <Switch>{result}</Switch>;
  };

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;
  return (
    <Router>
      {
        userInfo ? (
          <div>
            <Header />
            <div className="app-container">
              <SideBar />
              <div className="page-container has-siderbar">
                <div className="page-content-wrapper">
                  {showContentMenus(router)}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Route
              path='/form-info'
              exact
              component={FormInfo} />
            <SellerLogin />

          </div>
        )
      }

    </Router>
  );
}

export default App;
