import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {Header, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function Home(props) {
  const list = [
    {
      name: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
    },
    {
      name: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
    },
    {
      name: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
    },
    {
      name: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
    },
    {
      name: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
    },
  ];
  const tappedFloatButton = () => {
    props.navigation.navigate('addContact');
  };
  return (
    <View>
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'Home', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
      <FlatList
        data={list}
        renderItem={({item}) => (
          <ListItem
            roundAvatar
            title={item.name}
            subtitle={item.subtitle}
            leftAvatar={
              <Image
                source={require('../../Assets/placeholder.jpeg')}
                style={styles.avatar}
              />
            }
            bottomDivider
          />
        )}
        keyExtractor={item => item.id}
      />
      <Button
        buttonStyle={styles.button}
        icon={<Icon name="plus" size={25} color="white" />}
        containerStyle={styles.buttonContainer}
        onPress={tappedFloatButton}
      />
    </View>
  );
}

Home.propTypes = {};

export default Home;
const styles = StyleSheet.create({
  avatar: {
    width: 35,
    height: 35,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    right: 0,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 5, //IOS
    elevation: 2, // Android
  },
  buttonContainer: {
    alignItems: 'flex-end',
    bottom: 25,
    marginRight: 10,
  },
});
