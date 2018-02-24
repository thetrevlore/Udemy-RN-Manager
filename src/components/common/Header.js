// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';


//Make a component
const Header = (props) => {
  // Don't have to do this. instead you could just say
  // <View style={styles.viewStyle}> and omit this next line altogether.
  // It's just object destructuring.
  const { textStyle, viewStyle } = styles;


  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { wdith: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export { Header };
