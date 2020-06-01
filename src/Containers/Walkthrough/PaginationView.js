import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Dimensions} from 'react-native';
import DotedView from './DotedView';

function PaginationView(props) {
  return (
    <View>
      <View
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{props.title}</Text>
      </View>
    </View>
  );
}

export default PaginationView;
