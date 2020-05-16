import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import SocialMediaHeader from "../../../components/SocialMedia/General/SocialMediaHeader";
import PiarButton from "../../../components/SocialMedia/General/PiarButton";
import PiusSearchBar from "../../../components/SocialMedia/Search/PiusSearchBar";
import UserSearchCard from "../../../components/SocialMedia/Search/UserSearchCard"; 
import { FlatList } from "react-native-gesture-handler";
import { baseDeDados } from "../../../utilities/baseDeDados";
import { count } from "../../../utilities/constants";

function SearchTab({navigation}) {
    let [searchText, changeSearchText] = useState('');
    let [usersList, changeUsersList] = useState([]);

    function searchUsers(searchTerm) {
        var allResults = [];

        if (searchTerm.length == 0) return allResults;
    
        var sortedUsuarioDatas = baseDeDados.data;
    
        sortedUsuarioDatas.sort((a,b) => a.infoUsuario.nome > b.infoUsuario.nome ? 1 : -1);
    
        sortedUsuarioDatas.forEach(function(usuarioData){
            if (count(usuarioData.infoUsuario.nome, searchTerm) > 0 || count(usuarioData.infoUsuario.username, searchTerm) > 0) {
                allResults.push(usuarioData.infoUsuario.username);
            }
        });
        
        return allResults;
    }

    function reloadSearchTab(newValue) {
        changeSearchText(newValue);

        const usersSearchList = searchUsers(newValue);

        changeUsersList(usersSearchList);
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <SocialMediaHeader navigation={navigation} />
            <View style={{
                flex: 1, 
                backgroundColor: "#fff",
                alignItems: 'center',
            }}>
                <PiusSearchBar 
                    value={searchText}
                    onChange={reloadSearchTab} 
                    style={{
                        marginHorizontal: 10,
                    }}
                    onPressClear={() => {
                        reloadSearchTab('');
                    }}
                />
                {
                    usersList.length > 0
                    ? <FlatList
                        style={{
                            flex: 1, 
                            alignSelf: 'stretch',
                        }}
                        keyExtractor={(element) => {return element}}
                        data={usersList} 
                        renderItem={({ item }) => {
                            return (
                                <UserSearchCard 
                                    username={item}
                                />
                            );
                        }}
                    />
                    : <View style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontSize: 18,
                            color: '#666'
                        }}>
                            Tente buscar por pessoas no PiuPiuwer
                        </Text>
                    </View>
                }
            </View>
            <PiarButton navigation={navigation} />
        </SafeAreaView>
    );
};

export default SearchTab;