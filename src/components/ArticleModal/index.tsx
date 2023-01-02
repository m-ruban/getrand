import React, { FC, ReactNode, useState } from 'react';

import Stack from 'gg-ukit/components/Icon/Stack';
import Modal from 'gg-ukit/components/Modal';

import 'components/ArticleModal/articleModal.less';

const ArticleModal: FC<{ children: ReactNode; trigger: string }> = ({ children, trigger }) => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <>
            <span
                className="article-modal-trigger"
                onClick={() => {
                    setShow(!show);
                }}
            >
                {trigger}
            </span>{' '}
            <span className="article-modal-icon">
                <Stack scale={1} color="#738697" />
            </span>
            <Modal
                visible={show}
                onClose={() => {
                    setShow(!show);
                }}
            >
                {children}
            </Modal>
        </>
    );
};

export default ArticleModal;
