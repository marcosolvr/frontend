import React from "react";
import {
  AsyncStorage,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  ScrollView
} from "react-native";

import styles from "./style";

export default class Livros extends React.Component {
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
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerScreenLivros}>
            <Text style={styles.titleScreen}>Meus Livros</Text>
            <TouchableOpacity style={styles.adicionarButton} onPress={() => {}}>
              <Text style={styles.adicionarButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.inputPesquisar}
            placeholder="Pesquisar nos meus livros"
            autoCapitalize="none"
          />

          <View style={styles.booksList}>
            <Text style={styles.booksListTite}>Lendo</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={this.state.books}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {}}>
                  <View style={styles.borderThumbBook}>
                    <Image
                      style={styles.thumbBook}
                      source={{ uri: item.url }}
                    />
                  </View>
                  <View style={styles.detailsBook}>
                    <Text style={styles.detailsBookTitle}>{item.title}</Text>
                    <Text style={styles.detailsBookAuthor}>{item.author}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />

            <Text style={styles.booksListTite}>Lendo</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={this.state.books}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {}}>
                  <View style={styles.borderThumbBook}>
                    <Image
                      style={styles.thumbBook}
                      source={{ uri: item.url }}
                    />
                  </View>
                  <View style={styles.detailsBook}>
                    <Text style={styles.detailsBookTitle}>{item.title}</Text>
                    <Text style={styles.detailsBookAuthor}>{item.author}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />

            <Text style={styles.booksListTite}>Lendo</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={this.state.books}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {}}>
                  <View style={styles.borderThumbBook}>
                    <Image
                      style={styles.thumbBook}
                      source={{ uri: item.url }}
                    />
                  </View>
                  <View style={styles.detailsBook}>
                    <Text style={styles.detailsBookTitle}>{item.title}</Text>
                    <Text style={styles.detailsBookAuthor}>{item.author}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
