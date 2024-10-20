import {  TouchableOpacity, View } from "react-native";
import { useSession } from "./ctx"
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import * as UI from '@/components/common';
import {Ionicons, Feather} from '@expo/vector-icons';
import { primaryColor } from "@/components/common/variables";



export default function successScree() {
const { signIn } = useSession();
  const navigation = useNavigation();

  const handleLogin = () => {
    //Adicione sua lógica de login aqui
    signIn();
    //Antes de navegar, tenha certeza de que o usuário está autenticado
    router.replace("/");
  };

  

  return (
    <UI.Containner style={{justifyContent: "center", alignItems: "center"}}>

       <Feather name="check-circle" size={90} color={primaryColor}/>
       
       <View style={{width: "100%", marginVertical: 20, alignItems: "center"}}>
          <UI.CustomText size="lg" bold color="white" style={{marginBottom: 20}}>Congratulations</UI.CustomText>
          <UI.CustomText size="sm" color="white" style={{textAlign: "center"}}>
          Your account has been created 
          </UI.CustomText>
          <UI.CustomText size="sm" color="white" style={{textAlign: "center"}}>
           successfully.
          </UI.CustomText>
       </View>

       <View style={{flexDirection: 'row', marginBottom: 20, gap: 4, alignItems: "center"}}>
            <UI.CustomText size="sm" color={primaryColor} style={{textAlign: "center"}}>
                 Your wallet id is: 3rtgyte5...ftdsr
            </UI.CustomText>

            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="copy-outline" size={14} color={primaryColor} />
            </TouchableOpacity>

        </View>
     
        <UI.Button variant="coloured" onPress={handleLogin} style={{width: '100%', marginVertical: 36}} text="Continue"/>
       
    </UI.Containner>
  );
}


