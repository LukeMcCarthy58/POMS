import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:5000/api/orders').then(response => {
      console.log(response);
      setOrders(response.data);
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>List of orders</Text>
        {orders.map((order: any) => (
          <TouchableOpacity
              key = {order.orderId}
              style = {styles.container}
              >
              <Text style = {styles.text}>
                {order.description}
              </Text>
          </TouchableOpacity>
        ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 3,
    
  },
  text: {
    color: '#383838'
  }, 
  heading: {
    fontWeight: 'bold',
    fontSize: 20
  }
});
