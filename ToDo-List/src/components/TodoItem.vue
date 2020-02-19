<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
        <p>
        <input type="checkbox" v-on:change="markComplete"/>
        {{todo.title}}
        <button class="del" @click="$emit('del-todo', todo.id)" >X</button>
        </p>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todo"],
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed
        }
    }
}
</script>

<style scoped>
    
    .todo-item {
        background: #c5e9ff;
        padding: 10px;
        border-bottom: 1px #3ca7e9 dotted;
        color: #2d2d2d;
        transition: 0.3s;
    }

    .is-complete {
        text-decoration: line-through;
        color: #454545;
        background: #b2eec3;
    }

    .del {
        background: #60606080;
        position: relative;
        color: #fff;
        border: none;
        padding: 7px 10px;
        border-radius: 100%;
        cursor: pointer;
        float: right;
        bottom: 3px;
        transition: 0.2s;
        
    }

    .del:hover {
        transform: scale(1.1);
    }

</style>