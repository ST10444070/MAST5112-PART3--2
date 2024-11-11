import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { MenuItem } from '../types'; 
import { Picker } from '@react-native-picker/picker'; 

type FilterScreenProps = {
  route: {
    params: {
      menuItems: MenuItem[];
    };
  };
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
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  listItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,  
  },
};

const FilterScreen: React.FC<FilterScreenProps> = ({ route }) => {
  const { menuItems } = route.params;

  const [selectedCourse, setSelectedCourse] = useState<'Starter' | 'Main' | 'Dessert'>('Starter');

  const filteredItems = menuItems.filter((item) => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Filter by Course</Text>

      <Picker
        selectedValue={selectedCourse}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

     
      <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.name} - ${item.price.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FilterScreen;
