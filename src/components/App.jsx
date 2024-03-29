import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import routes from 'modules/routes';

import 'gg-ukit/styles/fonts.less';
import 'gg-ukit/styles/defaults.less';
import 'components/app.less';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // eslint-disable-next-line react/prop-types
            <ConnectedRouter history={this.props.history}>
                <>
                    <Switch>
                        {routes.map(({ path, exact, component }) => {
                            return <Route key={path} path={path} exact={exact} render={component} />;
                        })}
                    </Switch>
                </>
            </ConnectedRouter>
        );
    }
}
