import React, { FC } from 'react';

import { getTrl } from 'lang/trls';

import 'components/Tip/tip.less';

interface TipProps {
    label?: string;
}

const Tip: FC<TipProps> = ({ label = getTrl('tipBoostyLabel') }) => (
    <div className="tip">
        <p className="tip__description">{getTrl('tipDescription')}</p>
        <div className="tip__buttons">
            <a
                className="tip__button"
                href="https://boosty.to/gamespirit.org/donate"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="tip__icon" aria-hidden="true" />
                <span className="tip__label">{label}</span>
            </a>
            <a
                className="tip__button tip__button_yoomoney"
                href="https://yoomoney.ru/fundraise/1LGUP355041.261113"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="tip__icon tip__icon_yoomoney" aria-hidden="true" />
                <span className="tip__label">{getTrl('tipYoomoneyLabel')}</span>
            </a>
        </div>
    </div>
);

export default Tip;
