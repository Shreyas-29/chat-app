import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity, Dimensions } from "react-native";
import bots from "../services/bots";
import { useNavigation } from "@react-navigation/native";

const Home = () => {

  const [botData, setBotData] = useState();
  const [selectedBot, setSelectedBot] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    setBotData(bots);
    setSelectedBot(bots[0]);
  }, []);

  const onBotChange = (id) => {
    const bot = bots.find((b) => b.id === id);
    setSelectedBot(bot);
  }

  return (
    <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", paddingTop: 40 }}>

      <Text style={[{ color: selectedBot?.primary }, { fontSize: 30, }]}>
        Hello,
      </Text>
      <Text style={[{ color: selectedBot?.primary }, { fontSize: 30, fontWeight: 'bold' }]}>
        I am {selectedBot?.name}
      </Text>
      <Image
        source={{ uri: selectedBot?.image }}
        style={{ width: 150, height: 150, marginTop: 20 }}
      />
      <Text style={{ marginTop: 30, fontSize: 24, textAlign: "center" }}>
        How I can help you?
      </Text>

      <View style={{
        marginTop: 20, backgroundColor: '#F5F5F5',
        alignItems: 'center',
        height: 110, padding: 10
        , borderRadius: 12
      }}>
        <FlatList
          data={botData}
          horizontal={true}
          renderItem={({ item }) => item.id != selectedBot.id && (
            <TouchableOpacity style={{ margin: 15 }}
              onPress={() =>
                onBotChange(item.id)
              }
            >
              <Image source={{ uri: item.image }} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
          )}
        />
        <Text style={{ marginTop: 5, fontSize: 17, color: '#B0B0B0' }}>
          Choose Your Fav ChatBuddy
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("chat", { bot: selectedBot })}
        style={[
          { backgroundColor: selectedBot?.primary },
          { marginTop: 20, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 12, alignItems: "center", width: Dimensions.get('screen').width * 0.6 }
        ]}>
        <Text style={{ fontSize: 16, color: "#fff", fontWeight: "500" }}>
          Let's Chat
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
