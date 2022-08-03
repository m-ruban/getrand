import React, { FC } from 'react';

import 'components/Like/like.less';

const widget = `<script type="text/javascript">VK.Widgets.Like("vk_like", {type: "button", height: 30});</script>`;

const Like: FC = () => {
    return (
        <div className="like">
            <div id="vk_like" dangerouslySetInnerHTML={{ __html: widget }} />
        </div>
    );
};

export default Like;
