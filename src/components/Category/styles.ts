import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 106,
    backgroundColor: theme.colors.secondary40,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 7,
  },
  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 15,
  },
  check: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.secondary100,
    alignSelf: "flex-end",
    marginRight: 7,
  },
  checkd: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.secondary100,
    alignSelf: "flex-end",
    marginRight: 7,
  },
});
