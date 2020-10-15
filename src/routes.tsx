import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/landing'
import OrphanesgeMap from './pages/Orphanagesmap';
import Orphanege from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing} />
                <Route path='/app' component={OrphanesgeMap} />

                <Route path='/orphanages/create' component={CreateOrphanage} />
                <Route path='/orphanages/:id' component={Orphanege} />
            </Switch>
        
        </BrowserRouter>

    );
}

export default Routes;