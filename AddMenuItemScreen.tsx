import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MenuItem } from '../types'; 
import { Picker } from '@react-native-picker/picker'; 

type AddMenuItemScreenProps = {
  route: {
    params: {
      setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
    };
  };
  navigation: any;
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
};

const AddMenuItemScreen: React.FC<AddMenuItemScreenProps> = ({ route, navigation }) => {
  const { setMenuItems } = route.params;
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [course, setCourse] = useState<'Starter' | 'Main' | 'Dessert'>('Starter');
  const [price, setPrice] = useState<string>('');

  const addItem = () => {
    if (!name || !description || !price) {
      alert("Please fill all fields.");
      return;
    }

    const newItem: MenuItem = { name, description, course, price: parseFloat(price) };
    setMenuItems((prevItems) => [...prevItems, newItem]);
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Menu Item</Text>

      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        placeholder="Enter dish name"
        onChangeText={setName}
        value={name}
        style={styles.input}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        placeholder="Enter description"
        onChangeText={setDescription}
        value={description}
        style={styles.input}
      />

      <Text style={styles.label}>Course</Text>
      <Picker
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <Text style={styles.label}>Price</Text>
      <TextInput
        placeholder="Enter price"
        keyboardType="numeric"
        onChangeText={setPrice}
        value={price}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddMenuItemScreen;
