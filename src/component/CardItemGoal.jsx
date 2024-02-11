import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
} from "react-native";

function CardItemGoal({ item, index }) {
    return (
        item !== null && (
            <View style={styles.List}>
                <Text style={styles.h2}>{item.title} </Text>
            </View>
        )
    );
}

export default CardItemGoal;
const styles = StyleSheet.create({
    List: {
        backgroundColor: "blue",
        flex: 1,
        paddingVertical: 2,
        paddingHorizontal: 15,
    },
    h2: {
        fontSize: 25,
        color: "black",
        backgroundColor: "green",
    },
});
