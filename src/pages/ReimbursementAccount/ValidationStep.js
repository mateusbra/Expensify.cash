import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/styles';
import withLocalize, {withLocalizePropTypes} from '../../components/withLocalize';

import Button from '../../components/Button';
import HeaderWithCloseButton from '../../components/HeaderWithCloseButton';
import Navigation from '../../libs/Navigation/Navigation';
import TextInputWithLabel from '../../components/TextInputWithLabel';

const propTypes = {
    ...withLocalizePropTypes,
};

class ValidationStep extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amount1: 0,
        };
    }

    render() {
        return (
            <View style={[styles.flex1, styles.justifyContentBetween]}>
                <HeaderWithCloseButton
                    title="Validation Step"
                    onCloseButtonPress={Navigation.dismissModal}
                />
                <TextInputWithLabel
                    placeholder="1.01"
                    keyboardType="number-pad"
                    value={this.state.amount1}
                    onChangeText={amount1 => this.setState({amount1})}
                />
                <Button
                    success
                    text={this.props.translate('common.saveAndContinue')}
                    style={[styles.m5]}
                    onPress={this.submit}
                />
            </View>
        );
    }
}

ValidationStep.propTypes = propTypes;

export default withLocalize(ValidationStep);
