import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootStore } from 'models/reducers';

import 'components/Description/description.less';

const Description: FC = () => {
    const description = useSelector((state: RootStore) => state.metaTags.seo_descr);
    if (!description) {
        return null;
    }
    return <div className="description-section" dangerouslySetInnerHTML={{ __html: description }} />;
};

export default Description;
