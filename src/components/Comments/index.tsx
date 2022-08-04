import React, { FC, memo } from 'react';

import 'components/Comments/comments.less';

const widget = `<script type="text/javascript">VK.Widgets.Comments("vk_comments", {limit: 5, attach: "*"});</script>`;

const Comments: FC = () => {
    return (
        <div className="comments">
            <div id="vk_comments" dangerouslySetInnerHTML={{ __html: widget }} />
        </div>
    );
};

export default memo(Comments);
