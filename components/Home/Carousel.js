import React from 'react'
import { Text, ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';
import { RFValue } from "react-native-responsive-fontsize";

export default function Carousel(props) {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator style={styles.Carousel} >
            <TouchableOpacity style={[styles.PlayingCard, styles.defaultCard]} onPress={() => props.navigation.navigate('LockScreen')}>
                <Svg id="Layer_1" style={styles.svg} fill="#fff" data-name="Layer 1" viewBox="0 0 511 511"><Path class="cls-1" d="M75.53 212.37l39.25 30.81a10 10 0 0 0 15.43-4.18l18.59-46.31a10 10 0 0 0-3.1-11.57l-39.25-30.81A10 10 0 0 0 91 154.49L72.43 200.8a10 10 0 0 0 3.1 11.57zm29.06-38.09l22.9 18-10.84 27-22.9-18z" /><Path class="cls-1" d="M473.83 62.23L245.41 1a30 30 0 0 0-36.67 21.2l-16 59.56-153.58 41.16A30 30 0 0 0 18 159.59l28.42 106.09a10 10 0 0 0 19.28-5.17L37.27 154.43a10 10 0 0 1 7.06-12.22L186.82 104l-66.29 247.41a30 30 0 0 0 21.17 36.67l189.49 50.78-193.48 51.84a10 10 0 0 1-12.23-7.06l-39.12-146a10 10 0 1 0-19.28 5.17l39.12 146A29.91 29.91 0 0 0 142.87 510l226.88-60.79.37.1a30 30 0 0 0 36.67-21.17l59.1-220.58a10 10 0 1 0-19.28-5.17l-59.1 220.58a10 10 0 0 1-12.22 7.03l-2.84-.76-225.58-60.44a10 10 0 0 1-7.06-12.22L228 27.36a10 10 0 0 1 12.22-7.06l228.42 61.2a10 10 0 0 1 7.06 12.22l-8.44 31.52a10 10 0 1 0 19.28 5.17L495 98.9a30 30 0 0 0-21.17-36.67z" /><Path class="cls-1" d="M278.68 274.81a21.42 21.42 0 0 0 13.09 10 21.82 21.82 0 0 0 5.64.75 21.4 21.4 0 0 0 10.72-2.89l50.14-29a44.72 44.72 0 0 0-36.4-81.19 44.73 44.73 0 0 0-72.14 52.11zm-14.14-78.91a24.8 24.8 0 0 1 23.88-18.36 25 25 0 0 1 6.45.85 24.6 24.6 0 0 1 15 11.54 10 10 0 0 0 13.63 3.65 24.76 24.76 0 1 1 24.76 42.88l-50.14 29a1.64 1.64 0 0 1-2.18-.58l-29-50.14a24.6 24.6 0 0 1-2.4-18.84zM266.09 128a16.3 16.3 0 0 0 12.44-1.63l27.8-16.05a29.24 29.24 0 0 0-21.08-53.85 29.24 29.24 0 0 0-45.17 36.13l16.05 27.8a16.29 16.29 0 0 0 9.96 7.6zm-5.33-58.09a9.28 9.28 0 0 1 12.67 3.4A10 10 0 0 0 287.07 77a9.28 9.28 0 0 1 9.28 16.07l-24.72 14.27-14.27-24.72a9.29 9.29 0 0 1 3.4-12.67zM319.45 389.41a16.29 16.29 0 0 0 10 7.63 16.58 16.58 0 0 0 4.28.57 16.3 16.3 0 0 0 8.16-2.2l27.8-16.05a29.25 29.25 0 0 0-21.08-53.86 29.25 29.25 0 0 0-45.18 36.11zm.31-44.82a9.28 9.28 0 0 1 17-2.24 10 10 0 0 0 13.63 3.65 9.28 9.28 0 0 1 9.28 16.07L335 376.35l-14.27-24.72a9.22 9.22 0 0 1-.97-7.04zM469.16 156.75a10 10 0 1 0 7.06 12.25 10 10 0 0 0-7.06-12.25zM76 299.09a10 10 0 1 0-7 12.22 10 10 0 0 0 7-12.23z" /></Svg>

                <Text style={styles.title}>Lock Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.BeerCard, styles.defaultCard]}>
                <Svg style={styles.svg} fill="#fff" id="Capa_1" data-name="Capa 1" viewBox="0 0 512 512"><Path class="cls-1" d="M286 451.29a10 10 0 1 0 10 10 10 10 0 0 0-10-10zM145.5 200.29a10 10 0 0 0-10 10v191a10 10 0 0 0 20 0v-191a10 10 0 0 0-10-10zM225.5 200.29a10 10 0 0 0-10 10v191a10 10 0 0 0 20 0v-191a10 10 0 0 0-10-10z" /><Path class="cls-1" d="M426.5 161h-50v-30.26a49.83 49.83 0 0 0-19.06-88.57 50.55 50.55 0 0 0-28.7 2.06A50.08 50.08 0 0 0 286.5 21a49.34 49.34 0 0 0-18.85 3.71A89.48 89.48 0 0 0 131 40.58c-52.3-2.89-95.5 38.58-95.5 89.71v120c0 16.54 13.68 30 30.5 30a30 30 0 0 0 10.5-1.89V462a50.06 50.06 0 0 0 50 50h200a50.06 50.06 0 0 0 50-50v-30h50a50.06 50.06 0 0 0 50-50V211a50.06 50.06 0 0 0-50-50zm-70 291H326a10 10 0 1 0 0 19.9h28.79A30.14 30.14 0 0 1 326.5 492h-200a30 30 0 0 1-28.28-20H246a10 10 0 1 0 0-20H96.5V179.51A69.43 69.43 0 0 0 148.64 141a7.41 7.41 0 0 1 5.31 2.08 60 60 0 0 0 85.18-1.08 3.3 3.3 0 0 1 2.37-1c15.57 0 25.75 3.32 30.28 9.88 3.73 5.4 3.73 12.91 3.72 18.95v40.46a30 30 0 0 0 20 28.28v162.72a10 10 0 1 0 20 0V238.57a30 30 0 0 0 20-28.28v-70.46a53.06 53.06 0 0 0 21 0zM330 116.95a10 10 0 0 0-14.53 8.91v84.43a10 10 0 0 1-20 0v-40.45c0-7.88 0-19.78-7.26-30.32C279.76 127.23 264 121 241.5 121a23.39 23.39 0 0 0-16.75 7.1 40 40 0 0 1-56.79.71 27.39 27.39 0 0 0-19.32-7.81 20.09 20.09 0 0 0-17.95 11.2 49.56 49.56 0 0 1-44.28 28.09 10 10 0 0 0-9.92 10v79.52c-.35 5.89-4.93 10.47-10.5 10.47s-10.5-4.58-10.5-10v-120c0-38.6 31.58-69.85 70.41-69.85a71.33 71.33 0 0 1 9.1.57 10 10 0 0 0 10-5 69.59 69.59 0 0 1 113.19-12.36A10 10 0 0 0 271 45.42 29 29 0 0 1 286.5 41a30 30 0 0 1 28.31 20.06 10 10 0 0 0 15 5 30 30 0 0 1 45.87 17.85c5.71 25.26-20.19 45.99-45.68 33.04zM376.5 221h40v151h-40zm80 161a30 30 0 0 1-30 30h-50v-20h50a10 10 0 0 0 10-10V211a10 10 0 0 0-10-10h-50v-20h50a30 30 0 0 1 30 30z" /></Svg>
                <Text style={styles.title}>Beer</Text>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>New</Text>
                    <View style={styles.borderEffect}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.BreakScreenCard, styles.defaultCard]}>
                <Svg style={styles.svg} fill="#fff" id="Layer_1" data-name="Layer 1" viewBox="0 0 512 512"><Path class="cls-1" d="M206 40a10 10 0 1 0 10 10 10 10 0 0 0-10-10z" /><Path class="cls-1" d="M126 0a30 30 0 0 0-30 30v452a30 30 0 0 0 30 30h260a30 30 0 0 0 30-30V30a30 30 0 0 0-30-30zm270 412H282.7l22.11-41.28a10 10 0 0 0-.24-9.87L283.66 326l20.91-34.86a10 10 0 1 0-17.15-10.29L272 306.56 247.66 266l56.91-94.86a10 10 0 0 0 .18-10L270.95 100H396zM248.1 100l36.36 65.8-18.91 31.5-17.9-26.85a10 10 0 1 0-16.65 11.1l23.16 34.73-26.74 44.57a10 10 0 0 0 0 10.29l57.08 95.14L260 412H116V100zM386 492H126a10 10 0 0 1-10-10v-50h280v50a10 10 0 0 1-10 10zm10-462v50H116V30a10 10 0 0 1 10-10h260a10 10 0 0 1 10 10z" /><Path class="cls-1" d="M286 452h-60a10 10 0 0 0 0 20h60a10 10 0 0 0 0-20zM306 40h-60a10 10 0 0 0 0 20h60a10 10 0 0 0 0-20z" /></Svg>
                <Text style={styles.title}>Broken Screen</Text>

            </TouchableOpacity>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    Carousel: {
        marginBottom: hp('5.16%')
    },
    svg: {
        width: '100%',
        height: 70
    },
    defaultCard: {
        paddingTop: hp('6%'),
        paddingBottom: hp('6%'),
        width: wp('37.5%'),
        marginRight: 30,
        borderRadius: 15,
        justifyContent: 'flex-start',
       

    },
    PlayingCard: {
        backgroundColor: '#3A9FF0',

    },
    BeerCard: {
        backgroundColor: '#E85472',
        position: 'relative'
    },
    badge: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 11,
        right:0,
        paddingHorizontal:25,
        paddingVertical: 1,
        position: 'absolute',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 6,

    },
    borderEffect: {
        width: 10,
        height:'120%',
        left: -4,
        top: -3,
        backgroundColor: '#E85472',
        transform: [ { rotateZ: '203deg' }],
        position: 'absolute',
        


    
    },
    badgeText: {
        fontSize: 16,
        fontFamily: 'roboto-regular',

    },
    BreakScreenCard: {
        backgroundColor: '#EB4B48',

    },
    title: {
        fontSize: RFValue('16'),
        textAlign: 'center',
        fontFamily: 'roboto-regular',
        color: '#fff',
        marginTop: 10
    }
})