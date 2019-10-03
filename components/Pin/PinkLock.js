import React, { Component } from 'react'
import PinView from 'react-native-pin-view';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

export default class PinkLock extends Component {
    state = {
        loaded: false,
        color: '#fff'
    }

    checkFamily = (name, value) => {
        console.log(value);
        switch (value) {
            case '01':
                return name + 'of' + 'clubs';
            case '02':
                return name + 'of' + 'hearts';
            case '03':
                return name + 'of' + 'spades';
            case '04':
                return name + 'of' + 'diamonds';
            default:
                return false

        }
    }
    wrongResult = (clear) => {
        this.props.changeText();
        clear();
        this.setState({ color: '#EE273E' })
    }
    checkCard = (val, clear, name) => {
        const result = this.checkFamily(name, val)
        if (!result) {
            this.wrongResult(clear);
        } else {
            this.props.navigation.navigate('Card', { name: result });
        }
    }
    checkPink = (val, clear) => {
        //console.log( parseInt(val[0] + val[1])  >=2);


        switch (val[0] + val[1]) {
            case '01':
                this.checkCard(val[2] + val[3], clear, 'ace');
                break;
            case '02':
                this.checkCard(val[2] + val[3], clear, '2');
                break;
            case '03':
                this.checkCard(val[2] + val[3], clear, '3');
                break;
            case '04':
                this.checkCard(val[2] + val[3], clear, '4');
                break;
            case '05':
                this.checkCard(val[2] + val[3], clear, '5');
                break;
            case '06':
                this.checkCard(val[2] + val[3], clear, '6');
                break;
            case '07':
                this.checkCard(val[2] + val[3], clear, '7');
                break;
            case '08':
                this.checkCard(val[2] + val[3], clear, '8');
                break;
            case '09':
                this.checkCard(val[2] + val[3], clear, '9');
                break;
            case '10':
                this.checkCard(val[2] + val[3], clear, '10');
                break;
            case '11':
                this.checkCard(val[2] + val[3], clear, 'jack');
                break;
            case '12':
                this.checkCard(val[2] + val[3], clear, 'queen');
                break;
            case '13':
                this.checkCard(val[2] + val[3], clear, 'king');
                break;
            default:
                this.wrongResult(clear);

                break;
        }


    }
    render() {
        return (
            <PinView
                onComplete={this.checkPink}
                pinLength={4}
                keyboardViewTextStyle={{ fontFamily: 'roboto-light', fontSize: RFValue(10), letterSpacing: 4 }}
                buttonBgColor={`rgba(255, 255, 255, 0)`}
                buttonTextColor="#fff"
                inputActiveBgColor="#fff"
                inputBgColor="rgba(255, 255, 255, 0)"
                inputViewStyle={{ borderWidth: 1, borderColor: this.state.color, width: 20, height: 20, marginLeft: 11, marginRight: 11 }}
                inputBgOpacity={2}
                keyboardViewStyle={{ marginHorizontal: wp('4.16%') }}

            />
        )
    }
}


