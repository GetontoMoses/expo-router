import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Users() {
    const {id} = useLocalSearchParams()
  return (
    <View>
      <Text> User page {id}</Text>
    </View>
  );
}
