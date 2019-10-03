import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import FlipCard from 'react-native-flip-card'
import { RFValue } from "react-native-responsive-fontsize";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class CardScreen extends React.Component {


  

  


    render() {
        const { name } = this.props.navigation.state.params;
        console.log(this.props)
        return (
            <View style={styles.container}>
                {/* <Text style={styles.title}>Magic Card</Text> */}
                <ImageBackground style={styles.container}

                    resizeMode='cover'
                    source={require('../assets/images/iphonebg.jpg')}>
                    <View style={[styles.container, styles.overlay]}>
                        <FlipCard flip={false} useNativeDriver={true} flipVertical={true} style={{ display: 'flex' }} >
                            {/* Face Side */}
                            <View style={styles.cardContainer}>
                                <Image resizeMode="contain" source={require('./../assets/images/backcard.png')} style={styles.card} />
                            </View>
                            {/* Back Side */}

                            <View style={styles.cardContainer}>
                                {/* Ace cards */}
                                {name === 'aceofclubs' && (<Image resizeMode="contain" source={require('./../assets/images/aceofclubs.jpg')} style={styles.card} />)}
                                {name === 'aceofdiamonds' && (<Image resizeMode="contain" source={require('./../assets/images/aceofdiamonds.png')} style={styles.card} />)}
                                {name === 'aceofspades' && (<Image resizeMode="contain" source={require('./../assets/images/aceofspades.png')} style={styles.card} />)}
                                {name === 'aceofhearts' && (<Image resizeMode="contain" source={require('./../assets/images/aceofhearts.png')} style={styles.card} />)}



                                {/* 2 cards */}
                                {name === '2ofclubs' && (<Image resizeMode="contain" source={require('./../assets/images/2ofclubs.png')} style={styles.card} />)}
                                {name === '2ofdiamonds' && (<Image resizeMode="contain" source={require('./../assets/images/2ofdiamonds.png')} style={styles.card} />)}
                                {name === '2ofspades' && (<Image resizeMode="contain" source={require('./../assets/images/2ofspades.png')} style={styles.card} />)}
                                {name === '2ofhearts' && (<Image resizeMode="contain" source={require('./../assets/images/2ofhearts.png')} style={styles.card} />)}

                                {/* 3 cards */}
                                {name === '3ofclubs' && (<Image resizeMode="contain" source={require('./../assets/images/3ofclubs.png')} style={styles.card} />)}
                                {name === '3ofdiamonds' && (<Image resizeMode="contain" source={require('./../assets/images/3ofdiamonds.png')} style={styles.card} />)}
                                {name === '3ofspades' && (<Image resizeMode="contain" source={require('./../assets/images/3ofspades.png')} style={styles.card} />)}
                                {name === '3ofhearts' && (<Image resizeMode="contain" source={require('./../assets/images/3ofhearts.png')} style={styles.card} />)}

                                {/* 4 cards */}
                                {name === '4ofclubs' && (<Image resizeMode="contain" source={require('./../assets/images/4ofclubs.png')} style={styles.card} />)}
                                {name === '4ofdiamonds' && (<Image resizeMode="contain" source={require('./../assets/images/4ofdiamonds.png')} style={styles.card} />)}
                                {name === '4ofspades' && (<Image resizeMode="contain" source={require('./../assets/images/4ofspades.png')} style={styles.card} />)}
                                {name === '4ofhearts' && (<Image resizeMode="contain" source={require('./../assets/images/4ofhearts.png')} style={styles.card} />)}


                                {/* 5 cards */}
                                {name === '5ofclubs' && (<Image resizeMode="contain" source={require('./../assets/images/5ofclubs.png')} style={styles.card} />)}
                                {name === '5ofdiamonds' && (<Image resizeMode="contain" source={require('./../assets/images/5ofdiamonds.png')} style={styles.card} />)}
                                {name === '5ofspades' && (<Image resizeMode="contain" source={require('./../assets/images/5ofspades.png')} style={styles.card} />)}
                                {name === '5ofhearts' && (<Image resizeMode="contain" source={require('./../assets/images/5ofhearts.png')} style={styles.card} />)}

                                {/* 6 cards */}
                                {name === '6ofclubs' && (<Image resizeMode="contain" source={require('./../assets/images/6ofclubs.png')} style={styles.card} />)}
                                {name === '6ofdiamonds' && (<Image resizeMode="contain" source={require('./../assets/images/6ofdiamonds.png')} style={styles.card} />)}
                                {name === '6ofspades' && (<Image resizeMode="contain" source={require('./../assets/images/6ofspades.png')} style={styles.card} />)}
                                {name === '6ofhearts' && (<Image resizeMode="contain" source={require('./../assets/images/6ofhearts.png')} style={styles.card} />)}

                                {/* 7 cards */}
                                {name === '7ofclubs' && (<Image resizeMode="contain" source={require('./../assets/images/7ofclubs.png')} style={styles.card} />)}
                                {name === '7ofdiamonds' && (<Image resizeMode="contain" source={require('./../assets/images/7ofdiamonds.png')} style={styles.card} />)}
                                {name === '7ofspades' && (<Image resizeMode="contain" source={require('./../assets/images/7ofspades.png')} style={styles.card} />)}
                                {name === '7ofhearts' && (<Image resizeMode="contain" source={require('./../assets/images/7ofhearts.png')} style={styles.card} />)}

                                {/* 8 cards */}

                                {name === '8ofclubs' && (<Image resizeMode="contain" source={require('./../assets/images/8ofclubs.png')} style={styles.card} />)}
                                {name === '8ofdiamonds' && (<Image resizeMode="contain" source={require('./../assets/images/8ofdiamonds.png')} style={styles.card} />)}
                                {name === '8ofspades' && (<Image resizeMode="contain" source={require('./../assets/images/8ofspades.png')} style={styles.card} />)}
                                {name === '8ofhearts' && (<Image resizeMode="contain" source={require('./../assets/images/8ofhearts.png')} style={styles.card} />)}

                                {/* 9 cards */}
                                {name === '9ofclubs' && (<Image resizeMode="contain" source={require('./../assets/images/9ofclubs.png')} style={styles.card} />)}
                                {name === '9ofdiamonds' && (<Image resizeMode="contain" source={require('./../assets/images/9ofdiamonds.png')} style={styles.card} />)}
                                {name === '9ofspades' && (<Image resizeMode="contain" source={require('./../assets/images/9ofspades.png')} style={styles.card} />)}
                                {name === '9ofhearts' && (<Image resizeMode="contain" source={require('./../assets/images/9ofhearts.png')} style={styles.card} />)}

                                {/* 10 cards */}

                                {name === '10ofclubs' && (<Image resizeMode="contain" source={require('./../assets/images/10ofclubs.png')} style={styles.card} />)}
                                {name === '10ofdiamonds' && (<Image resizeMode="contain" source={require('./../assets/images/10ofdiamonds.png')} style={styles.card} />)}
                                {name === '10ofspades' && (<Image resizeMode="contain" source={require('./../assets/images/10ofspades.png')} style={styles.card} />)}
                                {name === '10ofhearts' && (<Image resizeMode="contain" source={require('./../assets/images/10ofhearts.png')} style={styles.card} />)}
                                {/* king cards */}

                                {name === 'kingofclubs' && (<Image resizeMode="contain" source={require('./../assets/images/kingofclubs.png')} style={styles.card} />)}
                                {name === 'kingofdiamonds' && (<Image resizeMode="contain" source={require('./../assets/images/kingofdiamonds.png')} style={styles.card} />)}
                                {name === 'kingofspades' && (<Image resizeMode="contain" source={require('./../assets/images/kingofspades.png')} style={styles.card} />)}
                                {name === 'kingofhearts' && (<Image resizeMode="contain" source={require('./../assets/images/kingofhearts.png')} style={styles.card} />)}

                                {/* jack of cards */}
                                {name === 'jackofclubs' && (<Image resizeMode="contain" source={require('./../assets/images/jackofclubs.png')} style={styles.card} />)}
                                {name === 'jackofdiamonds' && (<Image resizeMode="contain" source={require('./../assets/images/jackofdiamonds.png')} style={styles.card} />)}
                                {name === 'jackofspades' && (<Image resizeMode="contain" source={require('./../assets/images/jackofspades.png')} style={styles.card} />)}
                                {name === 'jackofhearts' && (<Image resizeMode="contain" source={require('./../assets/images/jackofhearts.png')} style={styles.card} />)}

                                {/* king of cards */}
                                {name === 'queenofclubs' && (<Image resizeMode="contain" source={require('./../assets/images/queenofclubs.png')} style={styles.card} />)}
                                {name === 'queenofdiamonds' && (<Image resizeMode="contain" source={require('./../assets/images/queenofdiamonds.png')} style={styles.card} />)}
                                {name === 'queenofspades' && (<Image resizeMode="contain" source={require('./../assets/images/queenofspades.png')} style={styles.card} />)}
                                {name === 'queenofhearts' && (<Image resizeMode="contain" source={require('./../assets/images/queenofhearts.png')} style={styles.card} />)}
                            </View>
                        </FlipCard>
                    </View>
                </ImageBackground>
                {/* <Text style={styles.tapText}>Tap Tap !!!</Text> */}
            </View>
        )
    }
}
CardScreen.navigationOptions = {
    header: null,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',

    },

    overlay: {
        backgroundColor: 'rgba(216,12,45,0.54)'

    },
    cardContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        height: '60%',
        borderRadius: 20
    },
    title: {
        fontSize: RFValue('24'),
        color: '#000000',
        textTransform: 'capitalize',
        fontFamily: 'roboto-regular',
        letterSpacing: 2,
        textAlign: 'center',
        marginTop: hp('9.04%'),

    },
    tapText: {
        fontSize: RFValue('32'),
        color: '#000000',
        textTransform: 'capitalize',
        fontFamily: 'roboto-regular',
        letterSpacing: 2,
        textAlign: 'center',
        textAlignVertical: 'bottom',
        marginBottom: hp('10.04%'),

    }
});