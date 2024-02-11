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
import { List } from 'react-native-paper';
import { Foundation } from '@expo/vector-icons';

const ListGoals = () => {
    const { data: listGoals, isLoading, error } = useGetListGoalsQuery()

    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
        <><View style={styles.itemList}>
            <List.Section >
                {!isLoading && <FlatList
                    data={listGoals}
                    keyExtractor={(item, id) => id}
                    renderItem={({ item, index }) => (
                        <List.Accordion
                            title={item.title}
                            left={props => <Foundation name="target" size={24} color="black" {...props} /> }>
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                        </List.Accordion>
                    )}
                />}              
            </List.Section>

            {/*!isLoading && (
                    <FlatList
                        data={listGoals}
                        keyExtractor={(item, id) => id}
                        renderItem={({ item, index }) => (
                            <CardItemGoal item={item} index={index} />
                        )}
                    />
                        )*/}
        </View>
        </>
    );
};

export default ListGoals;
const styles = StyleSheet.create({
    itemList: {
        flex: 1,
        width: "100%",
    },
});