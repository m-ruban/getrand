import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import Item from 'components/Item';
import Main from 'components/Main';

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
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <div className="test">
                                    <Main title="root" />
                                </div>
                            )}
                        />
                        <Route
                            path="/counter"
                            render={() => (
                                <div className="test">
                                    <Item title="test" />
                                </div>
                            )}
                        />
                        <Route render={() => <div>Miss</div>} />
                    </Switch>
                </>
            </ConnectedRouter>
        );
    }
}
