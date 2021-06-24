import { Inter_200ExtraLight } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  },

  overlay: {
    backgroundColor: theme.colors.overlay,
    flex: 1
  },

  bar: {
    width: 39,
    height: Inter_200ExtraLight,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary30,
    alignSelf: 'center',
    marginTop: 13,
  }
})