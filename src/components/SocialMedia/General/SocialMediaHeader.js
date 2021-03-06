import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AllIcons from "../../General/AllIcons";
import { IconType } from "../../../utilities/constants";

function SocialMediaHeader({ navigation, showBackButton }) {
    return (
        <View 
            style={{
                alignSelf: 'stretch', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                flexDirection: 'row',
                borderBottomColor: '#ddd',
                borderBottomWidth: 1,
                backgroundColor: "#fff",
                height: 52,
            }}
        >
            {
                !showBackButton 
                ? <TouchableOpacity onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    });
                }}>
                    <Text style={styles.logout}>
                        Logout
                    </Text>
                </TouchableOpacity>
                : <TouchableOpacity 
                    style={styles.logout} 
                    onPress={() => navigation.goBack()}
                >
                    <AllIcons 
                        iconType={IconType.Ionicons}
                        name="ios-arrow-back"
                        size={30}
                        color="#FF0800"
                    />
                </TouchableOpacity>
            }
            <Image 
                style={{
                    width: 50, 
                    height: 50, 
                    marginVertical: 1,
                }} 
                source={
                    require('../../../../assets/logo.jpg')
                } 
            />
            {
                !showBackButton 
                ? <View onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    });
                }}>
                    <Text style={{...styles.logout, color: 'transparent'}}>
                        Logout
                    </Text>
                </View>
                : <View style={{...styles.logout, opacity: 0.0}}>
                    <AllIcons 
                        iconType={IconType.Ionicons}
                        name="ios-arrow-back"
                        size={30}
                        color="#FF0800"
                    />
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    logout: {
        color: "#FF0800",
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingRight: 15,
    }
});

export default SocialMediaHeader;