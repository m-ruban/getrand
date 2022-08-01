import React, { FC } from 'react';

import BasicHeader, { HeaderLine, HeaderTag, HeaderType } from 'gg-ukit/components/Header/BasicHeader';

const SectionHeader: FC<{ title: string; combineColor?: boolean }> = ({ title, combineColor = false }) => {
    return (
        <BasicHeader
            Tag={HeaderTag.H1}
            type={HeaderType.H2}
            line={HeaderLine.TertiaryDimmed}
            title={title}
            combineColor={combineColor}
        />
    );
};

export default SectionHeader;
