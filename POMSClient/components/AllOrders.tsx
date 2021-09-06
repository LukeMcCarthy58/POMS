import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Order } from '../models/order';
import { DataTable } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { NativeRouter, Switch, Route, Link } from 'react-router-native';
interface Props {
  query: string;
}
const AllOrders: React.FC<Props> = ({query}) => {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    axios
      .get<Order[]>('http://localhost:5000/api/orders/')
      .then(response => {
          setOrders(response.data);
      })
  }, [])
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Description</DataTable.Title>
          <DataTable.Title>Supplier</DataTable.Title>
          <DataTable.Title>Quantity</DataTable.Title>
          <DataTable.Title>Ordered</DataTable.Title>
          <DataTable.Title>Arrived</DataTable.Title>
          <DataTable.Title>Actions</DataTable.Title>
        </DataTable.Header>
        {orders.filter(order => (order['description'].toLowerCase().includes(query.toLowerCase()))).map(filtered => 
          (
          <DataTable.Row key={filtered.orderId}>
              <DataTable.Cell>{filtered.description}</DataTable.Cell>
              <DataTable.Cell>{filtered.supplier}</DataTable.Cell>
              <DataTable.Cell>{filtered.quantity}</DataTable.Cell>
              <DataTable.Cell>{filtered.ordered 
                ? <Icon
                    name='check'
                    type='font-awesome'
                    color='green'/> 
                : <Icon
                    name='times'
                    type='font-awesome'
                    color='red'
                    onPress={() => console.log('Mark as ordered: ' + filtered.orderId)}/>}
              </DataTable.Cell>
              <DataTable.Cell>{filtered.arrived
                ? <Icon
                    name='check'
                    type='font-awesome'
                    color='green'/> 
                : <Icon
                    name='times'
                    type='font-awesome'
                    color='red'
                    onPress={() => console.log('Mark as arrived: ' + filtered.orderId)}/>}
              </DataTable.Cell>
              <DataTable.Cell>
              <Link to={"/orders/" + filtered.orderId} underlayColor="#e8e7e3" key={filtered.orderId}>
              <Icon
                name='eye'
                type='font-awesome'
                />
              </Link>
              </DataTable.Cell>
          </DataTable.Row>
        )
      )}
      </DataTable>
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
export default AllOrders;