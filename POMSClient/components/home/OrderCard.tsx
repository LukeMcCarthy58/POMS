import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import * as H from 'history';
import { NativeRouter, Switch, Route, Link } from 'react-router-native';
import { Button, DataTable, Text, Card, Title, Paragraph } from 'react-native-paper';

interface Props {
    description: string;
    supplier: string;
    history: H.History;
    quantity: number;
}
const OrderCard: React.FC<Props> = ({description, supplier, history, quantity}) => {
  return (
    <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
            <Title style={styles.cardContent}>{description}</Title>
            <Title style={styles.cardContent}>{'Supplier: ' + supplier}</Title>
            <Title style={styles.cardContent}>{quantity + ' items arrived'}</Title>
        </Card.Content>
        <Card.Content>
            <Button onPress={() => history.push("/orders")} contentStyle={{ height: 50 }} style={styles.button} mode="outlined">
                <Text style={{color:"white", fontSize: 15}}>Back to Orders</Text>
            </Button>
        </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    backgroundColor: '#12295d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginRight: 30
  },
  icon: {
    alignSelf: 'flex-start',
    marginLeft: 30,
  }, 
  card: {
    width: '50%',
    marginTop: 50,
  },
  button: {
    width: 200,
    backgroundColor: '#12295d',
    color: 'white',
    marginTop: 15,
    marginLeft: 15
  },
  cardContent: {
    alignItems: 'center',
  }
});
export default OrderCard;