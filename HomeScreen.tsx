import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { MenuItem } from '../types'; 
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  AddMenuItem: { setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>> };
  FilterScreen: { menuItems: MenuItem[] };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  subheading: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
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
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  removeButton: {
    color: 'red',
    marginTop: 10,
    fontWeight: 'bold',
  },
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, menuItems, setMenuItems }) => {
  const [filteredMenuItems, setFilteredMenuItems] = useState<MenuItem[]>(menuItems);

  useEffect(() => {
    setFilteredMenuItems(menuItems);
  }, [menuItems]);

  const getAveragePrice = (course: string) => {
    const filteredItems = filteredMenuItems.filter(item => item.course === course);
    const total = filteredItems.reduce((acc, item) => acc + item.price, 0);
    return filteredItems.length > 0 ? (total / filteredItems.length).toFixed(2) : 'N/A';
  };

  const removeItem = (index: number) => {
    setMenuItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Menu</Text>
      <Text style={styles.subheading}>Total items: {filteredMenuItems.length}</Text>
      <Text style={styles.subheading}>Average Price per Course:</Text>
      <Text>Starters: ${getAveragePrice('Starter')}</Text>
      <Text>Main Courses: ${getAveragePrice('Main')}</Text>
      <Text>Desserts: ${getAveragePrice('Dessert')}</Text>

      <FlatList
        data={filteredMenuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>Course: {item.course}</Text>
            <Text>Price: ${item.price.toFixed(2)}</Text>

            <TouchableOpacity onPress={() => removeItem(index)}>
              <Text style={styles.removeButton}>Remove Item</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddMenuItem', { setMenuItems })}
      >
        <Text style={styles.buttonText}>Add New Menu Item</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FilterScreen', { menuItems })}
      >
        <Text style={styles.buttonText}>Filter by Course</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
