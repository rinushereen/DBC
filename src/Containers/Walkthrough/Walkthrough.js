import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import PaginationView from '../Walkthrough/PaginationView';
import DotedView from './DotedView';
import {Button, List, ListItem} from 'react-native-elements';

const data = [
  {id: 1, name: 'Mike', city: 'philps', state: 'New York1'},
  {id: 2, name: 'Steve', city: 'Square', state: 'Chicago2'},
  {id: 3, name: 'Jhon', city: 'market', state: 'New York3'},
];

function Walkthrough(props) {
  const scrollRef = React.useRef(null);

  const [index, setindex] = useState(0);

  useEffect(() => {
    if (index == data.length - 1) {
      props.navigation.navigate('tabbar');
    }
  });
  const handleScroll = event => {
    let xOffset = event.nativeEvent.contentOffset.x;
    let contentWidth = event.nativeEvent.contentSize.width;
    let value = contentWidth / xOffset;

    console.log(data.length / value);
    setindex(data.length / value);
  };
  const onPress = () => {
    scrollRef.scrollTo({x: 1, y: 0, animated: true});
  };
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.scrollView}
        horizontal={true}
        pagingEnabled={true}
        bounces={false}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}>
        {data.map(singledata => (
          <PaginationView title={singledata.state} />
        ))}
      </ScrollView>
      <View style={styles.buttonView}>
        <DotedView selected={index} count={data} />
        <Button
          buttonStyle={styles.buttoncontainer}
          title="Next"
          onPress={onPress}
        />
      </View>
    </View>
  );
}

Walkthrough.propTypes = {};

export default Walkthrough;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  scrollviewContainer: {
    // flex: 0.7,
  },
  scrollView: {
    width: Dimensions.get('window').width * data.length,
    backgroundColor: 'green',
  },
  buttoncontainer: {
    backgroundColor: 'red',
    width: 250,
    height: 50,
    borderRadius: 10,
  },
  buttonView: {
    marginTop: -100,
    alignItems: 'center',
  },
});
