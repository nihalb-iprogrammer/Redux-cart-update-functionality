import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setProductCount } from './action'; 

const CartDetails = () => {
  const products = useSelector(state => state.cartReducer.products);
  const productCount = useSelector(state => state.cartReducer.productCount);
  const dispatch = useDispatch();
  const currentProducts = products.filter(product => productCount[product.id] > 0);

  const incrementQuantity = (productId) => {
    const currentCount = productCount[productId] || 1;
    dispatch(setProductCount(productId, currentCount + 1));
  };

  const decrementQuantity = (productId) => {
    const currentCount = productCount[productId] || 1;
    if (currentCount > 1) {
      dispatch(setProductCount(productId, currentCount - 1));
    }
  };

  const removeProduct = (productId) => {
    dispatch(setProductCount(productId, 0)); 
  };
  const renderProduct = ({ item }) => {
    const currentQuantity = productCount[item.id] || 1; 
    const totalPrice = (item.price * currentQuantity).toFixed(2); 

    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.priceText}>${totalPrice}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => decrementQuantity(item.id)}
              style={styles.quantityButton}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{currentQuantity}</Text>

            <TouchableOpacity
              onPress={() => incrementQuantity(item.id)}
              style={styles.quantityButton}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Remove button to remove the product */}
        <TouchableOpacity
          onPress={() => removeProduct(item.id)}  
          style={{ padding: 5, alignItems: "center", justifyContent: "space-between", backgroundColor: "red", borderRadius: 20 }}
        >
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={currentProducts}  
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#B6D0E2",
  },
  card: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 3,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
  },
  quantityButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    paddingHorizontal: 10,
  },
});

export default CartDetails;
