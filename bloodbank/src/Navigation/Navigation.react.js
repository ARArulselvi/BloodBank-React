import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Content from '../Content/Content.react';
import FetchDonor from '../FetchDonor/FetchDonor.react';
import AddDonor from '../AddDonor/AddDonor.react';
import Blog from '../Blog/Blog.react';


const Navigation = () => {

    return (
        <div >
            <main>
                <Switch>
                    <Route exact path="/" component={Content}></Route>
                    <Route path="/fetch" component={FetchDonor}></Route>
                    <Route path="/add" component={AddDonor}></Route>
                    <Route path="/blog" component={Blog}></Route>
                </Switch>
            </main>

        </div>
    );

}

export default Navigation;