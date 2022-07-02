import React, { FC } from 'react';
import rsr from 'react-string-replace';

import ComponentMap from 'components/TreeElement/ComponentMap';

export interface TreeElement {
    component: string;
    props: Record<string, never>;
    render: string;
    children: TreeElement[];
}

interface TreeElementProps {
    treeElement: TreeElement;
}

const TreeElement: FC<TreeElementProps> = ({ treeElement }) => {
    const { component, props, render, children } = treeElement;
    const Component = ComponentMap[component];
    if (!Component) {
        // eslint-disable-next-line no-console
        console.log('cant find component', component, treeElement);
        return null;
    }
    return (
        <Component {...props}>
            {rsr(render, /#COMPONENT_(\d+)#/g, (child) => {
                const treeChildElement = children[Number(child) - 1];
                if (!treeChildElement) {
                    // eslint-disable-next-line no-console
                    console.log('cant find child', treeElement, child);
                    return null;
                }
                return <TreeElement key={child} treeElement={treeChildElement} />;
            })}
        </Component>
    );
};

export default TreeElement;
