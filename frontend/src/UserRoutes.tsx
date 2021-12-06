import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Test = () => {
    return (
        <div className="container">
            사용자 페이지!
        <Link to="/use/test1">
                <button>첫번째 페이지!</button>
            </Link>
            <Link to="/use/test2">
                <button>두번째 페이지!</button>
            </Link>
        </div>
    );
};
const Test1 = () => {
    return <div className="container">첫번째!</div>;
};
const Test2 = () => {
    return <div className="container">두번째!</div>;
};


const Rounter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/use" component={Test} />
                <Route exact path="/use/test1" component={Test1} />
                <Route exact path="/use/Test2" component={Test2} />
            </Switch>
        </Router>
    );
};

export default Rounter;
