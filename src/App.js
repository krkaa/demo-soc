import React, {Suspense, lazy} from 'react';
import './App.sass';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter, Switch, Redirect, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";
import Preloader from "./common/Preloader/Preloader";
import store from "./redux/redux-store";

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const LoginPage = lazy(() => import('./components/Login/Login'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initializing) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Route
                                path='/profile/:userId?'
                                render={() => <ProfileContainer/>}
                            />
                            <Route
                                path='/dialogs'
                                render={() => <DialogsContainer/>}
                            />

                            <Route
                                path='/users'
                                render={() => <UsersContainer/>}
                            />
                            <Route
                                path='/login'
                                render={() => <LoginPage/>}
                            />
                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            <Redirect exact from="/" to="/profile" />
                            <Route
                                path='*'
                                render={() => <div>404 NOT FOUND</div>}
                            />
                        </Switch>
                    </Suspense>
                </div>

            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    initializing: state.app.initializing
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default SocialApp;
