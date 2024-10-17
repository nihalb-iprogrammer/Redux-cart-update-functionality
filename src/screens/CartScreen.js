
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setProductCount } from './action'; // Import action to update product count
import { manageCount } from './dispatcher';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Get the navigation object
  const products = useSelector((state) => state.cartReducer.products); // Get products from the state
  const productCount = useSelector((state) => state.cartReducer.productCount); // Get product counts from the state
  const selectedProducts = products.filter(product => productCount[product.id] > 0).map(product => product.id);

  useEffect(() => {
    dispatch(manageCount());
  }, [dispatch]);

  const handleAddToCart = (productId) => {
    dispatch(setProductCount(productId, 1)); // Dispatch count for the specific product
  };
  const handleRemoveFromCart = (productId) => {
    dispatch(setProductCount(productId, 0)); // Update the product count to 0
  };
  const handleIncreaseQuantity = (productId) => {
    const currentCount = productCount[productId] || 1;
    dispatch(setProductCount(productId, currentCount + 1)); // Increase quantity by 1
  };

  const handleDecreaseQuantity = (productId) => {
    const currentCount = productCount[productId] || 1;
    if (currentCount > 0) {
      dispatch(setProductCount(productId, currentCount - 1)); // Decrease quantity by 1
    }
  };

  const handleCartIconClick = () => {
    console.log("Navigating to CartDetails", selectedProducts);
    navigation.navigate('CartDetails', { selectedProducts });
  };

  const renderProduct = ({ item }) => {
    const isSelected = selectedProducts.includes(item.id);
    const quantity = productCount[item.id] || 0;
    const totalPrice = (item.price * quantity).toFixed(2);
    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.productImage} />
        <View style={styles.cardContent}>
          <Text style={styles.productName}>{item.name}</Text>

          <View style={styles.quantityContainer}>
            {isSelected && (
              <>
                <TouchableOpacity style={styles.quantityButton} onPress={() => handleDecreaseQuantity(item.id)}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity style={styles.quantityButton} onPress={() => handleIncreaseQuantity(item.id)}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </>
            )}
          </View>

          <Text style={styles.productPrice}>Price: ${totalPrice == 0 ? item.price : totalPrice}</Text>

          <View style={styles.buttonContainer}>
            {isSelected ? (
              <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveFromCart(item.id)}>
                <Text style={[styles.buttonText, { color: "black" }]}>Remove from Cart</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(item.id)}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cartIconContainer} onPress={handleCartIconClick}>
        <Image source={require('../assets/shopping-cart.png')} style={styles.cartIcon} />
        {selectedProducts.length > 0 && (
          <View style={styles.redDot}>
            <Text style={styles.dotText}>{selectedProducts.length}</Text>
          </View>
        )}
      </TouchableOpacity>
      <Text />
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 10,
    backgroundColor: "#B6D0E2"
  },
  card: {
    width: '100%',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 110,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginRight: 20,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  quantityButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    width: 30,
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#FF0000',
    borderRadius: 20,
    padding: 10,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
    borderColor: "black",
    borderWidth: 1
  },
  removeButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    borderColor: "black",
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14

  },
  cartIconContainer: {
    alignSelf: 'flex-end',
    position: 'relative',
    top: 10,
    right: 10,
  },
  cartIcon: {
    width: 40,
    height: 40,
  },
  redDot: {
    position: 'absolute',
    top: -8,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    // marginTop: 2,
  },
});

export default CartScreen;
