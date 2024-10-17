// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { increaseCount, decreaseCount } from './action';

// const CartItem = ({ product }) => {
//     console.log("product",product)
//   const dispatch = useDispatch();

//   const handleIncrease = () => {
//     dispatch(increaseCount(product.id));
//   };

//   const handleDecrease = () => {
//     if (product.count > 1) {
//       dispatch(decreaseCount(product.id));
//     }
//   };

//   return (
//     <View style={styles.card}>
//       <Text style={styles.productName}>{"nihal"}</Text>
//       <View style={styles.buttonGroup}>
//         <TouchableOpacity onPress={handleDecrease} style={styles.minusButton}>
//           <Text style={styles.buttonText}>-</Text>
//         </TouchableOpacity>
//         <Text style={styles.countText}>{12}</Text>
//         <TouchableOpacity onPress={handleIncrease} style={styles.plusButton}>
//           <Text style={styles.buttonText}>+</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default CartItem;

// const styles = StyleSheet.create({
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 15,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginVertical: 10,
//     borderRadius: 10,
//     backgroundColor:"red"
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   buttonGroup: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   minusButton: {
//     backgroundColor: '#ff7675',
//     padding: 10,
//     borderRadius: 5,
//   },
//   plusButton: {
//     backgroundColor: '#55efc4',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: 'white',
//   },
//   countText: {
//     fontSize: 18,
//     marginHorizontal: 15,
//   },
// });
