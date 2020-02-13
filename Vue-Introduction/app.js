new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue Pro',
        name: 'Alex L',
        url: 'https://www.alexleybourne.com/',
        classes: ['one', 'two'],
        wage: 10,
        coords: {
            x: 0,
            y: 0
        },
        showName: true,
        showAge: true,
        items: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Roadster', 'CyberTruck'],
        cars: [
            {name: 'G Wagon', price: '150k', status: 'Rich'},
            {name: 'Jeep Wrangler', price: '40k', status: 'Middle Class'},
            {name: 'Range Rover', price: '60k', status: 'Upper Middle Class'},
            {name: 'Mazda CX7', price: '50k', status: 'Middle Class'}
        ]
    },
    methods: {
        greet(time){
            return `Hello there ${this.name}, good ${time}`
        },
        changeWage(amount){
            this.wage += amount
        },
        logEvent(e){
            console.log(e)
        },
        logCoords(e){
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },
        updateName(e){
            this.name = e.target.value
        },
        logMessage(){
            console.log('hello world')
        },
        toggleName(){
            this.showName = !this.showName
        },
        toggleAge(){
            this.showAge = !this.showAge
        }
    }
})