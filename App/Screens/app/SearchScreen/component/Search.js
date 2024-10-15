import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text, View, TouchableOpacity, TextInput } from 'react-native';
import CommonStyles from '../../../../Utils/CommonStyles';
import Styles from './Styles';
import Input from '../../../../Components/Input';
import Language from '../../../../Components/Language';


const Search = (props) => {
    return (
        <KeyboardAvoidingView style={CommonStyles.Container}>
            {props.screens ?
                <View>
                    <TouchableOpacity onPress={() => props.searchScreen()}
                        style={Styles.search}>
                        <TextInput
                            containerStyle={{ height: 70 }}
                            value={props.loginData.Search}
                            onChangeText={(val) => props.setLoginData({
                                ...props.loginData,
                                Search: val
                            })}
                            placeholder={Language.search}
                        />
                    </TouchableOpacity>
                    <ScrollView>
                        <Text style={{ textAlign: 'center' }}>Post </Text>
                        <Text style={{ textAlign: 'center' }}>Post </Text>
                        <Text style={{ textAlign: 'center' }}>Post </Text>
                    </ScrollView>
                </View>
                :
                <View>
                    <View style={{flex:1}}>
                        <View style={{ alignItems: 'center' }}>
                            <Input
                                containerStyle={{ height: 45 }}
                                value={props.loginData.Search}
                                onChangeText={(val) => props.setLoginData({
                                    ...props.loginData,
                                    Search: val
                                })}
                                placeholder={Language.search}
                            />
                            <Text>Second Screen</Text>
                        </View>
                    </View>

                </View>
            }
        </KeyboardAvoidingView>
    )
}
export default Search;