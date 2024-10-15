import React, { useState } from 'react';
import Language from '../Language';


const [modalVisible, setModalVisible] = useState(false)
const languageData = [
    {
        id: 1,
        lngtxt: "Hindi",
    },
    {
        id: 2,
        lngtxt: "English",
    },
    {
        id: 3,
        lngtxt: "French",
    },
    {
        id: 4,
        lngtxt: "Germany",
    },
    {
        id: 5,
        lngtxt: "Dutch",
    },
    {
        id: 6,
        lngtxt: "Arabic",
    },
    {
        id: 7,
        lngtxt: "Haryanwi",
    },

];

const renderItem = ({ item }) => (
    <View style={{ margin: 7, flexDirection: 'row', borderBottomWidth: 0.5, justifyContent: 'space-between' }}>
        <Text>
            {item.lngtxt}
        </Text>
        <Image style={{ width: 20, height: 20 }}
            source={require('../../Assets/Logo.png')} />
    </View>
);

<Modal
    animationType="slide"
    visible={modalVisible}
    onRequestClose={() => {
        setModalVisible(false);
    }}>
    <View style={{ flex: 1, }}>
        <View style={{ flexDirection: 'row', margin: 15 }}>
            <View style={{ flex: 5.5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, fontFamily: FONT_FAMILY_RETINA }}>{Language.language}</Text>
            </View>
            <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{ flex: 0.5, }}>
                <Image
                    style={{ width: 28, height: 28 }}
                    source={require('../../Assets/cancel.png')}
                />
            </TouchableOpacity>
            <View>
            </View>
        </View>

        <TouchableOpacity style={{
            flex: 1,
            margin: 5,
            borderBottomWidth: 0.3,
            borderBottomColor: 'red',
            padding: 8,
            marginRight: 18
        }}>
            <View
                style={{ marginLeft: 10, padding: 5 }}>
                <FlatList
                    data={languageData}
                    renderItem={(item) => renderItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </TouchableOpacity>

    </View>
</Modal>