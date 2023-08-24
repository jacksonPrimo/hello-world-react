import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type TaskProps = {
	name: string,
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 14
	},
	title: {
		fontSize: 16,
		color: '#000'
	}
})

const Task = (props: TaskProps)=> {
	const [ checked, setChecked ] = useState(true)
	return (
		<TouchableOpacity style={styles.container} onLongPress={()=>setChecked(!checked)}>
			<Text style={styles.title}>{props.name}</Text>			
			<IconComponentProvider IconComponent={MaterialCommunityIcons}>
				<Icon name={checked ? "check" : "home"} size={24}></Icon>
			</IconComponentProvider>
		</TouchableOpacity>
	)
}

export default Task