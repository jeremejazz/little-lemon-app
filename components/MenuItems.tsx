import React from "react";

import { View, Text, ScrollView, FlatList, StyleSheet, ListRenderItem } from "react-native";

const menuItemsToDisplay = [
  { name: "Hummus1", price: "$5.00", id: "1A" },
  { name: "Moutabal", price: "$5.00", id: "2B" },
  { name: "Falafel", price: "$7.50", id: "3C" },
  { name: "Marinated Olives", price: "$5.00", id: "4D" },
  { name: "Kofta", price: "$5.00", id: "5E" },
  { name: "Eggplant Salad", price: "$8.50", id: "6F" },
  { name: "Lentil Burger", price: "$10.00", id: "7G" },
  { name: "Smoked Salmon", price: "$14.00", id: "8H" },
  { name: "Kofta Burger", price: "$11.00", id: "9I" },
  { name: "Turkish Kebab", price: "$15.50", id: "10J" },
  { name: "Fries", price: "$3.00", id: "11K" },
  { name: "Buttered Rice", price: "$3.00", id: "12L" },
  { name: "Bread Sticks", price: "$3.00", id: "13M" },
  { name: "Pita Pocket", price: "$3.00", id: "14N" },
  { name: "Lentil Soup", price: "$3.75", id: "15O" },
  { name: "Greek Salad", price: "$6.00", id: "16Q" },
  { name: "Rice Pilaf", price: "$4.00", id: "17R" },
  { name: "Baklava", price: "$3.00", id: "18S" },
  { name: "Tartufo", price: "$3.00", id: "19T" },
  { name: "Tiramisu", price: "$5.00", id: "20U" },
  { name: "Panna Cotta", price: "$5.00", id: "21V" },
];

const Item = (item: { name: string; price: string; id?: string }) => {
  return (
    <View style={itemStyles.container}>
      <View style={[itemStyles.common, itemStyles.nameColumnContainer]}>
        <Text style={itemStyles.textStyle}>{item.name}</Text>
      </View>
      <View style={[itemStyles.common, itemStyles.priceColumnContainer]}>
        <Text style={[itemStyles.textStyle, itemStyles.priceColumnText]}>{item.price}</Text>
      </View>
    </View>
  );
};

const MenuItems = () => {
  const renderItem = ({ item }: {item: {name:string, price: string}}) => <Item name={item.name} price={item.price} />;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={menuItemsToDisplay}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const itemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  common:{
      padding: 20
  },
  textStyle:{
      color: "#F4CE14",
      fontSize: 20
  },
  nameColumnContainer: {
      flex: 0.75
  },
  priceColumnContainer:{
      flex: 0.25,
      paddingRight: 20
      
  },
  priceColumnText:{
    textAlign: 'right',
  }
});

export default MenuItems;
