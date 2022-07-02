import React, { FC, ReactNode } from 'react';

import 'components/Section/section.less';

const Section: FC<{ children: ReactNode }> = ({ children }) => {
    return <section className="section">{children}</section>;
};

export default Section;
