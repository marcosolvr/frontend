import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";

import styles from "./style";

export default class Descobrir extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    books: [
      {
        id: 1,
        url:
          "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Fellowship_of_the_Ring_cover.gif/220px-The_Fellowship_of_the_Ring_cover.gif",
        title: "Senhor dos Anéis e Tudo e Tals",
        author: "João Ricardo Rico dos Tolkiens"
      },
      {
        id: 2,
        url:
          "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Fellowship_of_the_Ring_cover.gif/220px-The_Fellowship_of_the_Ring_cover.gif",
        title: "Senhor dos Anéis e Tudo e Tals",
        author: "João Ricardo Rico dos Tolkiens"
      },
      {
        id: 3,
        url:
          "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        title: "Senhor dos Anéis e Tudo e Tals",
        author: "João Ricardo Rico dos Tolkiens"
      },
      {
        id: 4,
        url:
          "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Fellowship_of_the_Ring_cover.gif/220px-The_Fellowship_of_the_Ring_cover.gif",
        title: "Senhor dos Anéis e Tudo e Tals",
        author: "João Ricardo Rico dos Tolkiens"
      },
      {
        id: 5,
        url:
          "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        title: "Senhor dos Anéis e Tudo e Tals",
        author: "João Ricardo Rico dos Tolkiens"
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleScreen}>Recomendados</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.state.books}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.borderThumbBook}>
                <Image style={styles.thumbBook} source={{ uri: item.url }} />
              </View>
              <View style={styles.detailsBook}>
                <Text style={styles.detailsBookTitle}>{item.title}</Text>
                <Text style={styles.detailsBookAuthor}>{item.author}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
