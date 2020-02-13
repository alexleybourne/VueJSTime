new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue Pro',
        name: 'Alex L',
        url: 'https://www.alexleybourne.com/',
        classes: ['one', 'two'],
        wage: 10
    },
    methods: {
        greet(time){
            return `Hello there ${this.name}, good ${time}`
        },
        changeWage(amount){
            this.wage += amount
        }
    }
})