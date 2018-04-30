new Vue({
        el: '#exercise',
        data: {
            value: '',
        },
        methods: {
            myAlert() {
                alert('Hi');
            },
            setValue(event) {
                this.value = event.target.value;
            },
        },
    });