import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Collapse from 'gg-ukit/components/Collapse';
import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';

import { RootStore } from 'models/reducers';

import 'pages/FAQ/faq-list.less';

const FAQList: FC = () => {
    const faqList = useSelector((state: RootStore) => state.faq);
    return (
        <>
            <H2 title="Вопрос и ответ" line={HeaderLine.TertiaryDimmed} combineColor />
            <div>
                {faqList.map(({ question, answer }) => {
                    return (
                        <div key={question} className="faq-list-item">
                            <Collapse title={question}>
                                <div className="faq-list-item-content" dangerouslySetInnerHTML={{ __html: answer }} />
                            </Collapse>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default FAQList;
