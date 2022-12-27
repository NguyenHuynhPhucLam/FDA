import {Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import BackButton from '../../components/BackButton';
import {styles} from './styles';
import {IMG_Fishwith, IMG_Instruction, IMG_VeggieTomato} from './images';
import CartItem from './components/CartItem';
import CustomButton from '../../components/CustomButton';
import SCREEN_NAME from '../../constants/screens';

const CartScreen = props => {
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };
  const onTransitToDelivery = () => {
    navigation.navigate(SCREEN_NAME.DELIVERY);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <BackButton onPress={onBack} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.cart}>Cart</Text>
        </View>
      </View>
      <Image
        source={IMG_Instruction}
        style={styles.instruction}
        resizeMode="contain"
      />
      <View style={styles.itemsContainer}>
        <CartItem
          name="Veggie tomato mix"
          food={IMG_VeggieTomato}
          price="$1900"
          amount="1"
          style={styles.item}
        />
        <CartItem
          name="Fishwith mix orange..."
          food={IMG_Fishwith}
          price="$1900"
          amount="1"
          style={styles.item}
        />
        <CartItem
          name="Veggie tomato mix"
          food={IMG_VeggieTomato}
          price="$1900"
          amount="1"
          style={styles.item}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton type="secondary" onPress={onTransitToDelivery}>
          Complete order
        </CustomButton>
      </View>
    </ScrollView>
  );
};

export default CartScreen;
