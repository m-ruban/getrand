import React, { FC } from 'react';

import Paragraph from 'gg-ukit/components/Paragraph';
import Tooltip from 'gg-ukit/components/Tooltip';

interface TipExampleProp {
    title: string;
}

const Images: FC<TipExampleProp> = ({ title }) => {
    return (
        <div>
            {title}
            <Paragraph>
                Где-то влияние, великого отца ужасов, ощущается меньше, как в сериях Amnesia и Layers of Fear. А где-то
                можно найти лишь лавкрафтовские крохи, например, в первом
                <Tooltip view={<>Финальный босс игры - Шуб-Ниггурат, взят из произведений Лавкрафта</>}>Quake</Tooltip>.
                Но, если рассматривать конкретно жанр игровых ужасов, то получается довольно мемная картинка. Где-то
                Лавкрафта видно целиком, например, в Sinking City или в Call of Cthulhu.
            </Paragraph>
        </div>
    );
};

export default Images;
