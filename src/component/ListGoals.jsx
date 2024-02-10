import { useState, useEffect } from "react";

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
} from "react-native";
import { useGetListToDoQuery } from "../app/services/listToDoServices";

const ListGoals = () => {
    const { data: listToDo, isLoading, error } = useGetListToDoQuery()
    { !isLoading && console.log(listToDo) }

    return (
        <>
            <View style={styles.itemList}>
                {!isLoading && (
                    <FlatList
                        data={listToDo}
                        keyExtractor={(item, id) => id}
                        renderItem={({ item, index }) => (
                            item  !== null && <View style={styles.List}>
                                <Text style={styles.h2}>{item.title
                                } </Text>
                            </View>
                        )}
                    />
                )}
            </View>
        </>
    );
};

export default ListGoals;
const styles = StyleSheet.create({
    itemList: {
        backgroundColor: "red",
        height: 300, 
    },
    List: {
        backgroundColor: "blue",
        height: 50, 
    },
    h2: {
        fontSize: 25,
        marginBottom: 2,
        color: "black",
        backgroundColor: "green",
    },
});