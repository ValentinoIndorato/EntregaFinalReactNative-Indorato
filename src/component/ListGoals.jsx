import { useState, useEffect } from "react";

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
} from "react-native";
import CardItemGoal from "./CardItemGoal";
import { useGetListGoalsQuery } from "../app/services/listGoalsServices";

const ListGoals = () => {
    const { data: listGoals, isLoading, error } = useGetListGoalsQuery()
    { !isLoading && console.log(listGoals) }

    return (
        <>
            <View style={styles.itemList}>
                {!isLoading && (
                    <FlatList
                        data={listGoals}
                        keyExtractor={(item, id) => id}
                        renderItem={({ item, index }) => (
                            <CardItemGoal item={item} index={index} />
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
        flex: 1,
        width:"100%",
    },    
});