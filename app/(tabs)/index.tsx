import { Link } from "expo-router";
import { View ,Text} from "react-native";

export default function Homepage(){
    return(<View><Text>Hello world</Text>
    <Link href="/users/1"> Go to user 1</Link></View>)
}