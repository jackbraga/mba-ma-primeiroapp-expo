import React from "react";
import { Text } from "react-native";

export default props => {
    const delta = props.max - props.min + 1;
    const aleatorio= parseInt(Math.random() * delta) + props.min;

    return ( 
            <Text>{aleatorio}</Text>
    )
}