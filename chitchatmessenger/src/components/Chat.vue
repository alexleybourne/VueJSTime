<template>
    <div class="chat container">
        <div class="logo-div">
            <img src="../assets/ChitChatLogo.svg" alt="chit chat logo" height="100px" >
            <h2 class="center blue-text">Chit Chat</h2>
        </div>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>

                    <li v-for="message in messages" :key="message.id" :class="{ 'your-message' : name == message.name}">

                        <span class="blue-text">{{ message.name }}: </span>
                        <span class="grey-text text-darken-3">{{ message.content }}</span>
                        <span class="grey-text time">{{ message.timestamp }}</span>

                    </li>
                    
                </ul>
                <div class="card-action">
                    <NewMessage :name="name" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data() {
        return {
            messages: []
        }
    },
    created(){
        let ref = db.collection('messages').orderBy('timestamp')
             
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll')
                    })
                }
            })
        })
    }
}
</script>

<style>
    .chat h2{
        font-size: 2.6em;
        margin-bottom: 40px;
    }

    .chat span {
        font-size: 1.4em;
    }

    .chat .time {
        display: block;
        font-size: 0.8em;
    }

    .messages {
        max-height: 400px;
        overflow: auto;
    }

    .messages::-webkit-scrollbar {
        width: 3px;
    }

    .messages::-webkit-scrollbar-track {
        background: #ddd;
    }

    .messages::-webkit-scrollbar-thumb {
        background: #aaa;
    }

    .logo-div {
        display: flex;
        justify-content: center;
        margin-top: 10vh;
    }

    .your-message {
        text-align: right;
        margin-right: 10px;
    }

</style>