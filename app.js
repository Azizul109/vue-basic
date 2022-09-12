let app = new Vue ({
    el: '#app',
    data: {
        name: 'Easy learning',
        age: 24
    },
    methods: {
        MyName(){
            return 'Easy learning methods'
        },
        MyAge(){
            return `${this.age}`
        },
        MyPrice(dollar){
            return `My price is ${dollar}`
        }
    }
})