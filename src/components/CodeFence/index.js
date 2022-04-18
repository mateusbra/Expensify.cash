import React from 'react';
import {ScrollView} from 'react-native';
import codeFencePropTypes from './codeFencePropTypes';
//import { PanGestureHandler } from 'react-native-gesture-handler';
class CodeFence extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const TDefaultRenderer = this.props.TDefaultRenderer;
        return (
            <ScrollView horizontal>
                <TDefaultRenderer
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...this.props.defaultRendererProps}
                />
            </ScrollView>
        );
    }
}
CodeFence.propTypes = codeFencePropTypes;
CodeFence.displayName = 'CodeFence';
export default CodeFence;
