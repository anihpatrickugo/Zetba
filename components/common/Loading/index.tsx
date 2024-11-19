import React, {FC} from 'react';
import {Text, Modal, StyleSheet, View, Dimensions, ActivityIndicator} from 'react-native';
import { grayColor, lightGrayColor, primaryColor } from '../variables';
const {width, height} = Dimensions.get("screen")

type Props = {
  transparent?: boolean,
  text?: string
}

const Loading: FC<Props> = ({transparent, text}) => {
 

  return (
    <View style={styles.containner}>
      <ActivityIndicator size="large" color={primaryColor} /> 

      {text && <Text style={styles.loadingText}>{text}</Text>}

   </View>
  );
};

const styles = StyleSheet.create({
  containner: {
    backgroundColor: grayColor,
    position: 'absolute',
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },


  loadingText: {
    color: lightGrayColor,
    fontSize: 16,
    fontWeight: "500",
    marginTop: 16,
    fontFamily: 'Inter'
  }
});

export {Loading};