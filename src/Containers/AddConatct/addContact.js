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
import DocumentPicker from 'react-native-document-picker';
import {log} from 'react-native-reanimated';

function addContact(props) {
  const [imageFilePath, setimageFilePath] = useState({
    image: 'plus',
    imageName: '',
  });
  const [documentFilePath, setdocumentFilePath] = useState(false);
  const [documentFileName, setdocumentFileName] = useState('');

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
        console.log('ImagePicker data: ', response);
        console.log('ImagePicker uri: ', response.uri);
        console.log('ImagePicker uri66666666: ', response.fileName);
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        setimageFilePath({image: source, imageName: response.fileName});

        console.log('ImagePicker : ', imageFilePath.image);
      }
    });
  };

  const selectOneFile = async selectionType => {
    try {
      const res = await DocumentPicker.pick({
        type:
          selectionType === 'image'
            ? [DocumentPicker.types.images]
            : [DocumentPicker.types.pdf],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );

      var temp = new Array();
      var temp1 = new Array();
      // this will return an array with strings "1", "2", etc.
      //

      temp = res.name.split('_');
      if (temp.length === 3) {
        temp1 = temp[2].split('.');
      }
      if (
        temp.length === 3 &&
        temp[0] === 'Dbc' &&
        temp[1].length === 6 &&
        temp1.length === 2
      ) {
        if (selectionType === 'image') {
          if (temp1[0] === 'image') {
            setimageFilePath({image: res.uri, imageName: res.name});
          } else {
            alert('this is not correct format');
          }
          console.log('@@@@@@@@@@@', temp.length);
          console.log('@@@@@@@@@@@', temp[1].length);
          console.log('@@@@@@@@@@@', temp1);
        } else {
          if (temp1[0] === 'pdf') {
            setdocumentFilePath(true);
            setdocumentFileName(res.name);
          } else {
            alert('this is not correct format');
          }
        }
      } else {
        alert('this is not correct format');
      }
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
      } else {
        //For Unknown Error

        throw err;
      }
    }
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
          {imageFilePath.image == 'plus' ? (
            <Button
              onPress={() => selectOneFile('image')}
              buttonStyle={{height: 100, width: 100, marginLeft: 8.0}}
              title=""
              titleStyle={{marginRight: 5}}
              icon={<Icon name="plus" size={50} color="white" />}
              iconContainerStyle={{backgroundColor: 'red', paddingLeft: 10}}
              iconRight
            />
          ) : (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{uri: imageFilePath.image}}
                style={{width: 100, height: 100, marginLeft: 8.0}}
              />
              <Text
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginLeft: 10.0,
                }}>
                {imageFilePath.imageName}
              </Text>
            </View>
          )}
        </View>
        <View>
          <Text style={styles.Text}>Add Document</Text>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Button
            onPress={() => selectOneFile('pdf')}
            buttonStyle={{height: 100, width: 100, marginLeft: 8.0}}
            title=""
            titleStyle={{marginRight: 5}}
            icon={
              <Icon
                name={documentFilePath ? 'file' : 'plus'}
                size={50}
                color="white"
              />
            }
            iconContainerStyle={{backgroundColor: 'red', paddingLeft: 10}}
            iconRight
          />
          {documentFilePath && (
            <Text
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginLeft: 10.0,
              }}>
              {documentFileName}
            </Text>
          )}
          </View>
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
    height: 45,
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
