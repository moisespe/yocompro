var app = new Vue({
    el: '#app',
    data: {
        buyer: true,
        provider: false,
        dispatch: false
    },
    methods: {
        vercomprador(){
            console.log('ver productos');
        }
    }
});