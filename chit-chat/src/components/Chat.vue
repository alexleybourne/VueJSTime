<template>
    <div class="chat container">
        <h2 class="center blue-text">Chit Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages">
                    <li>
                        <span class="blue-text">Name</span>
                        <span class="grey-text text-darken-3">Message</span>
                        <span class="grey-text time">Time</span>
                    </li>
                </ul>
                <div class="card-action">
                    <input type="text">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Chat',
    props: ['name'],
    data() {
        return {
            
        }
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
        font-size: 1em;
    }
</style>