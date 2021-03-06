import { StyleSheet } from "react-native";
import { metrics, fonts, colors } from "../../constants/Index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.padding
  },
  titleScreen: {
    fontSize: fonts.bigger,
    marginBottom: 20
  },
  messageBooksEmpty: {
    fontSize: fonts.regular,
    textAlign: "center",
    marginTop: 40,
    color: colors.dark
  },
  booksListTite: {
    fontSize: fonts.big,
    fontWeight: "bold",
    marginVertical: 20
  },
  borderThumbBook: {
    marginRight: 10,
    overflow: "hidden",
    width: 128,
    height: 190,
    borderRadius: 10
  },
  thumbBook: {
    position: "absolute",
    width: 128,
    height: 190,
    borderRadius: 10
  },
  detailsBookTitle: {
    width: 128,
    fontSize: 16,
    color: colors.primary,
    fontWeight: "bold"
  },
  detailsBookAuthor: {
    width: 128,
    fontSize: 14,
    color: "#999"
  }
});

export default styles;
