import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import Link from 'gg-ukit/components/Link';
import Paragraph from 'gg-ukit/components/Paragraph';

import { host } from 'modules/links';

import ArticleDivider from 'components/ArticleDivider';
import ColumnContainer from 'components/ColumnContainer';
import SectionHeader from 'components/SectionHeader';

import { getTrl } from 'lang/trls';

import 'pages/About/about.less';

const Team: FC = () => {
    return (
        <>
            <SectionHeader title={getTrl('teamTitle')} combineColor />
            <ColumnContainer>
                <div className="human">
                    <Column l={3} m={3} s={2} xs={4}>
                        <div className="human-logo-wrapper">
                            <img className="human-logo" src={`${host}/image/icon/rb.jpg`} alt="rb032960" />
                        </div>
                    </Column>
                    <Column l={5} m={5} s={4} xs={4}>
                        <Paragraph>{getTrl('teamMemberName')}</Paragraph>
                        <Paragraph>{getTrl('teamDeveloperDescription')}</Paragraph>
                        <Paragraph>
                            <Link href="/users/DolanDuck/">{getTrl('articles')}</Link>
                        </Paragraph>
                    </Column>
                </div>
                <ArticleDivider />
                <div className="human">
                    <Column l={3} m={3} s={2} xs={4}>
                        <div className="human-logo-wrapper">
                            <img className="human-logo" src={`${host}/image/icon/gg.jpg`} alt="godlike_goblin" />
                        </div>
                    </Column>
                    <Column l={5} m={5} s={4} xs={4}>
                        <Paragraph>{getTrl('teamMemberName')}</Paragraph>
                        <Paragraph>{getTrl('teamWriterDescription')}</Paragraph>
                        <Paragraph>
                            <Link href="/users/Godlike_Goblin/">{getTrl('articles')}</Link>
                        </Paragraph>
                    </Column>
                </div>
            </ColumnContainer>
            <Paragraph>{getTrl('teamRecruitmentNote')}</Paragraph>
            <Paragraph>
                {getTrl('teamContactIntro')}{' '}
                <Link href="mailto:gamespirit.org@gmail.com">gamespirit.org@gmail.com</Link>{' '}
                {getTrl('teamContactSubject')}
            </Paragraph>
        </>
    );
};

export default Team;
