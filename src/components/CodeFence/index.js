import React from 'react';
import {ScrollView} from 'react-native';
import codeFencePropTypes from './codeFencePropTypes';

class CodeFence extends React.Component {
    constructor(props) {
        super(props);

        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        this.scrollViewRef.addEventListener('wheel', this.onScroll);
    }

    componentWillUnmount() {
        this.scrollViewRef.removeEventListener('wheel', this.onScroll);
    }

    onScroll(e) {
        this.scrollViewRef.scrollLeft += e.deltaX;
    }

    render() {
        const TDefaultRenderer = this.props.TDefaultRenderer;
        return (
            <ScrollView ref={el => this.scrollViewRef = el} horizontal>
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
