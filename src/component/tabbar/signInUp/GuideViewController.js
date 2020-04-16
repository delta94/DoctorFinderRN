import React, {Component} from 'react'
import {
    FlatList,
    View,
    StyleSheet,
    Platform,
    Alert,
    DeviceEventEmitter,
    NativeModules,
    Animated,
    Linking,
    ScrollView,
    AppState, TouchableOpacity, Image, Text, RefreshControl
} from 'react-native'
import {Colors} from '../../utils/Styles';
import {NaviBarHeight, ScreenDimensions} from '../../utils/Dimensions';
import {PLATFORM} from '../../utils/CustomEnums';
import {Navigation} from 'react-native-navigation';
import {BaseNavigatorOptions} from '../../BaseComponents/BaseNavigatorOptions';

export default class GuideViewController extends Component{
    static options(passProps) {
        return {
            statusBar: {
                visible: true,
                style: 'light'
            },
            topBar: {
                visible: false,
                background: {
                    color: Colors.theme,
                },
                noBorder: true,
                drawBehind: false,
                leftButtonColor: Colors.theme,
                rightButtonColor: Colors.theme,
                title: {
                    color: Colors.white,
                    fontWeight: 'bold',
                    fontSize: 16,
                },
                backButton: {
                    color: Colors.white,
                    title: ''
                },
            },
        }
    }

    componentDidMount(): void {

    }

    renderDismissLeftButton() {
        return(
            <TouchableOpacity style={{
                position: 'absolute',
                left: 20,
                top: NaviBarHeight.height,
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
            }} onPress={() => {
                Navigation.dismissModal(this.props.componentId);
            }}>
                <Image style={{tintColor: Colors.theme,  width: 20,
                    height: 20,}} source={require('../../../resource/image/base/cancel.png')} />
            </TouchableOpacity>
        )
    }

    modalToLogInPage() {
        Navigation.showModal({
            stack: {
                children: [{
                    component: {
                        name: 'LogInViewController',
                        passProps: {

                        },
                        options: {
                            topBar: {
                                visible: false
                            }
                        }
                    }
                }]
            }
        });
    }

    modalSignUpPage() {
        Navigation.showModal({
            stack: {
                children: [{
                    component: {
                        name: 'SignUpViewController',
                        passProps: {

                        },
                        options: {
                            topBar: {
                                visible: false
                            }
                        }
                    }
                }]
            }
        });
    }

    render() {
        let buttonWidth = (ScreenDimensions.width - 40 - 16)/2.0
        let buttonHeight = ScreenDimensions.width*(50.0/375)
        return(
            <View style={{flex: 1, backgroundColor: Colors.white,
                alignItems: 'center', justifyContent: 'space-between'
            }}>
                <Text style={{fontSize: 32, fontWeight: 'bold',
                    color: Colors.lightBlack, marginTop: ScreenDimensions.height*0.312
                }}>Doctor Finder</Text>

                <View style={{width: ScreenDimensions.width, flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'space-between', paddingLeft: 25,
                    marginBottom: PLATFORM.isIPhoneX ? 34 : 20,
                    paddingHorizontal: 20,
                }}>
                    <TouchableOpacity onPress={() => {
                        this.modalSignUpPage()
                    }} style={{width: buttonWidth,
                        height: buttonHeight, justifyContent: 'center', alignItems: 'center',
                        backgroundColor: Colors.theme, borderRadius: 4,
                    }}>
                        <Text style={{fontSize: 18, color: Colors.white, fontWeight: 'bold'}}>{'Create account'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.modalToLogInPage()
                    }} style={{width: buttonWidth,
                        height: buttonHeight, justifyContent: 'center', alignItems: 'center',
                        backgroundColor: Colors.theme, borderRadius: 4,
                    }}>
                        <Text style={{fontSize: 18, color: Colors.white, fontWeight: 'bold'}}>{'Sign in'}</Text>
                    </TouchableOpacity>
                </View>

                {this.renderDismissLeftButton()}
            </View>
        )
    }
}
