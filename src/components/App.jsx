import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import Images from 'components/Images';
import Item from 'components/Item';
import Main from 'components/Main';
import TipExample from 'components/TipExample';

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
                                    <Item title="counter" />
                                </div>
                            )}
                        />
                        <Route path="/images" render={() => <Images title="images" />} />
                        <Route path="/tip" render={() => <TipExample title="tip" />} />
                        <Route render={() => <div>Miss</div>} />
                    </Switch>
                </>
            </ConnectedRouter>
        );
    }
}
