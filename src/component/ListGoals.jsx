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
import { useGetListGoalsQuery, useGetOneGoalQuery } from "../app/services/listGoalsServices";
import { List } from 'react-native-paper';
import { Foundation,MaterialCommunityIcons } from '@expo/vector-icons';
import { useGetListToDoQuery } from "../app/services/listToDoServices";

const ListGoals = () => {
    const { data: listGoalsData, isLoading: listGoalsLoading, error: listGoalsError } = useGetListGoalsQuery();
const { data: oneGoalData, isLoading: oneGoalLoading, error: oneGoalError } = useGetOneGoalQuery();
    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);
    const {data:ListToDO, isLoading, error} =useGetListToDoQuery()

    const arrayListGoalsData = !listGoalsLoading && Object.values(listGoalsData) 
   //const toDoList=["G-1"]
  // const arrayListToDO= !isLoading && Object.values(ListToDO)
   //console.log(arrayListToDO)
   const filterTasksForListToDo = (toDoList)=> Object.values(ListToDO) .filter((element) => toDoList.includes(element.id))

    return (
        <><View style={styles.itemList}>
            <List.Section >
                {!listGoalsLoading && !isLoading && 
                <FlatList
                    data={arrayListGoalsData}
                    keyExtractor={(item, id) => id}
                    renderItem={({ item, index }) => (
                        <List.Accordion
                            title={item.title}
                            left={props =>console.log(props) }>
                           {/* *informacion de otras opciones mas abajos    */}
                           {item.toDoList &&<FlatList
                            data={filterTasksForListToDo(item.toDoList)}
                            keyExtractor={(item, id) => id}
                            renderItem={({ item, index }) => (
                                <List.Item left={props =>  <MaterialCommunityIcons {...props} name="format-list-text" size={20} color="#747bff"  /> } title={item.title} titleStyle={{color:"black", }}                     />
                            )}
                             />}
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
    text:{
        color:"#213547"
    }
});
{/*
 {item.toDoList &&(filterTasksForListToDo(item.toDoList).map((element) => <List.Item key={element.id} title={element.title} />))}
 {item.toDoList &&console.log(ListToDO.filter((element) => item.toDoList.includes(element.id)))}
 <List.Item title={item.toDoList?item.toDoList[0].title:"First item"} />
                            
*/}