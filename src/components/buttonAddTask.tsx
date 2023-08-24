import React from 'react';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function ButtonAddTask() {
  return <IconButton icon={props => <Icon name="eye" {...props} />} />
}