import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Header, ListItem, Button, Input} from 'react-native-elements';
import {Colors} from '../../Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';

function addContact(props) {
  const [imageFilePath, setimageFilePath] = useState('plus');
  const chooseFile = () => {
    var options = {
      title: 'Select Image',

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        console.log('ImagePicker data: ', response.data);
        console.log('ImagePicker uri: ', response.uri);
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        setimageFilePath(source);
        console.log('ImagePicker : ', imageFilePath);
      }
    });
  };
  return (
    <View>
      <Header
        centerComponent={{
          text: 'AddConatct',
          style: {color: Colors.white, fontWeight: 'bold'},
        }}
        rightComponent={{icon: 'done', color: Colors.white}}
      />
      <View style={styles.conatiner}>
        <Input
          labelStyle={styles.label}
          inputContainerStyle={styles.inputContainer}
          label="Name"
          value="Rinu"
        />
        <Input
          labelStyle={styles.label}
          inputContainerStyle={styles.inputDescriptionContainer}
          label="Description"
          value="Rheloo it is documentinu"
        />
        <View>
          <Text style={styles.Text}>Add Conatct</Text>
          {imageFilePath == 'plus' ? (
            <Button
              onPress={chooseFile}
              buttonStyle={{height: 100, width: 100, marginLeft: 8.0}}
              title=""
              titleStyle={{marginRight: 5}}
              icon={<Icon name="plus" size={50} color="white" />}
              iconContainerStyle={{backgroundColor: 'red', paddingLeft: 10}}
              iconRight
            />
          ) : (
            <Image
            source={{ uri: imageFilePath.uri }}
            style={{ width: 100, height: 100, marginLeft: 8.0}}
          />
          )}
        </View>
        <View>
          <Text style={styles.Text}>Add Document</Text>
          <Button
              onPress={chooseFile}
              buttonStyle={{height: 100, width: 100, marginLeft: 8.0}}
              title=""
              titleStyle={{marginRight: 5}}
              icon={<Icon name="plus" size={50} color="white" />}
              iconContainerStyle={{backgroundColor: 'red', paddingLeft: 10}}
              iconRight
            />
        
        </View>
      </View>
    </View>
  );
}

addContact.propTypes = {};

export default addContact;
const styles = StyleSheet.create({
  conatiner: {
    margin: 20,
  },
  label: {
    height: 30,
    fontSize: 17,
    color: Colors.black,
  },
  inputContainer: {
    borderRadius: 6,
    borderColor: Colors.grey,
    height: 45,
    borderWidth: 0.5,
    paddingLeft: 7.0,
  },
  inputDescriptionContainer: {
    borderRadius: 10,
    borderColor: Colors.grey,
    height: 90,
    borderWidth: 0.5,
    paddingLeft: 7.0,
    textAlignVertical: 'top',
    alignItems: 'flex-start',
  },
  Text: {
    height: 30,
    fontSize: 17,
    color: Colors.black,
    fontWeight: 'bold',
    marginLeft: 5.0,
    marginTop: 20,
  },
});
