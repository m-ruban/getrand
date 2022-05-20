import React from 'react';

import Item from 'components/Item';

import 'components/app.less';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="test">
                <Item title="test" />
            </div>
        );
    }
}
