import { View, StyleSheet } from "react-native";
import { useSession } from "../../ctx";
import * as UI from "@/components/common"
import Feather from '@expo/vector-icons/Feather';
import { danger } from "@/components/common/variables";


export default function TabOneScreen() {
  const { signOut, session } = useSession();
  return (
    <UI.Containner>
      <View style={styles.header}>


        {/* bell */}
        <View style={styles.bellContainner}>
          <View style={styles.notification}/>
           <Feather name="bell" size={16} color="white" />
        </View>

      </View>
    </UI.Containner>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",

  },

  bellContainner: {
    width: 28, 
    height: 28, 
    justifyContent: "center", 
    alignItems: "center", 
    borderWidth: 1,
    borderRadius: 4, 
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(0, 0, 0, 0.25)"
  },

  notification: {
    position: 'absolute', 
    top: 2, 
    right: 2, 
    width: 7, 
    height: 7, 
    borderRadius: 4, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: danger
  }
});
