import { useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import getBardApi from '../services/globalapi';

const Chat = () => {

    const CHAT_BOT_FACE = 'https://res.cloudinary.com/dknvsbuyy/image/upload/v1685678135/chat_1_c7eda483e3.png'

    const bots = {
        "id": 1,
        "image": "https://res.cloudinary.com/dknvsbuyy/image/upload/v1685678135/chat_1_c7eda483e3.png",
        "name": "Noyi",
        "primary": "#FFC107",
        "secondary": "",
    };

    const params = useRoute().params;

    const [bot, setBot] = useState();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setBot(params?.bot);
        setMessages([
            {
                _id: 1,
                text: `Hi! I'm ${params?.bot?.name}, here to help.`,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: params?.bot?.image,
                }
            }
        ])
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));

        setLoading(true);
        if (messages[0].text) {
            getBardRes(messages[0].text);
        }
    }, []);

    const getBardRes = (message) => {
        getBardApi(message).then(resp => {
            if (resp.data.resp[1].content) {
                const chatAIResp = {
                    _id: Math.random() * (9999999 - 1),
                    text: resp.data.resp[1].content,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: params?.bot.image,
                    }
                };

                setMessages(previousMessages => GiftedChat.append(previousMessages, chatAIResp));
                setLoading(false);
            } else {
                setLoading(false);
                const chatAIResp = {
                    _id: Math.random() * (9999999 - 1),
                    text: "I'm not sure what you mean.",
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: params?.bot.image,
                    }
                };

            }
        })
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <GiftedChat
                messages={messages}
                isTyping={loading}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Chat;
