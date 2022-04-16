import React from 'react';
import _ from 'underscore';
import htmlRendererPropTypes from './htmlRendererPropTypes';
import CodeFence from '../../CodeFence';

const PreRenderer = (props) => {
    const defaultRendererProps = _.omit(props, ['TDefaultRenderer']);

    return (
        <CodeFence
            TDefaultRenderer={props.TDefaultRenderer}
            defaultRendererProps={defaultRendererProps}
            key={props.key}
        />
    );
};

PreRenderer.propTypes = htmlRendererPropTypes;
PreRenderer.displayName = 'PreRenderer';

export default PreRenderer;
