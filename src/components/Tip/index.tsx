import React, { FC } from 'react';
import { getLanguage } from 'lang/language';

import { getTrl } from 'lang/trls';

import 'components/Tip/tip.less';

const Tip: FC = () => (
    <div className="tip">
        <p className="tip__description">{getTrl('tipDescription')}</p>
        <div className={'tip__buttons'}>
            {getLanguage() === 'ru' ? (
                <>
                    <a
                        className="tip__button"
                        href="https://boosty.to/gamespirit.org/donate"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="tip__icon" aria-hidden="true" />
                        <span className="tip__label">{getTrl('tipBoostyLabel')}</span>
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
                </>
            ) : (
                <a
                    className="tip__button tip__button_other-lang"
                    href="https://ko-fi.com/gamespiritorg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="tip__icon tip__icon_kofi" aria-hidden="true" />
                    <span className="tip__label">{getTrl('tipKofiLabel')}</span>
                </a>
            )}
        </div>
    </div>
);

export default Tip;
