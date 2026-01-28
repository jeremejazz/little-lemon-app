import { StyleSheet, Text, View } from 'react-native';
import MenuItems from './components/MenuItems';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function App() {
  return (
  <>
    <SafeAreaProvider>
    <View  style={{flex:1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#333333',
          }}>
          <LittleLemonHeader />
          <MenuItems />
        </View>
        <View  style={{ backgroundColor: '#333333'  }}>
          <LittleLemonFooter />
        </View>
      </View>
      </SafeAreaProvider>
    </>
  );
}

 