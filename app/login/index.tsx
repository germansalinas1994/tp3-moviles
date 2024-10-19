import React from "react";
import { View, Text, Pressable, Dimensions, StyleSheet, Image } from "react-native";
import Colors from "../../constants/Colors";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";

// Obtenemos las dimensiones de la pantalla
const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
    const insets = useSafeAreaInsets();

    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <View style={styles.content}>
          {/* Ajustamos la imagen para que no ocupe tanto espacio */}
          <Image
            source={require("../../assets/images/habitos.png")}
            style={styles.image}
            resizeMode="contain"
          />
          
          <Text style={styles.title}>¿Listo para gestionar tus hábitos?</Text>
          <Text style={styles.subtitle}>
            Comienza ahora a mejorar tus hábitos diarios y alcanzar tus objetivos.
          </Text>
  
          {/* Ajustamos el margen para que el botón se vea correctamente */}
          <Link href="/(tabs)/find" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Comenzar</Text>
            </Pressable>
          </Link>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background.paper,
    },
    content: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between", //con space-between, el contenido se distribuye de manera uniforme en el contenedor, con un espacio entre ellos.
      paddingHorizontal: width * 0.05,
      paddingVertical: height * 0.05, 
    },
    image: {
      width: width * 1,  
      height: height * 0.3, 
    },
    title: {
      fontFamily: "outfit-Bold",
      fontSize: width * 0.08,
      textAlign: "center",
      color: Colors.text.primary,
    },
    subtitle: {
      fontFamily: "outfit",
      fontSize: width * 0.05,
      textAlign: "center",
      color: Colors.text.primary,
      marginBottom: height * 0.02, 
    },
    button: {
      marginTop: height * 0.02, 
      paddingVertical: height * 0.02,
      paddingHorizontal: width * 0.1,
      backgroundColor: Colors.secondary.main,
      borderRadius: 20,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 5,
    },
    buttonText: {
      fontFamily: "outfit-Medium",
      fontSize: width * 0.05,
      textAlign: "center",
      color: Colors.text.white,
    },
  });
  