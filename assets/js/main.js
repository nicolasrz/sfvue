import Vue from 'vue';
import MyCard from './MyCard';
import MyCount from './MyCount';
import Bus from './Bus.js';

new Vue({
    delimiters: ['${', '}'],
    el: '#app',
    data() {
        return {
            isActive: false,
            contacts: [],
            firstname: '',
            lastname: '',
            description: ''
        }
    },
    mounted() {
        Bus.$on('delete-contact', index => {
            this.contacts.splice(index, 1);
        });
    },
    methods: {
        addContact() {
            const contact = {
                firstname: this.firstname,
                lastname: this.lastname,
                description: this.description
            };
            this.contacts = [...this.contacts, contact];

        },
        onClickContact(i) {
            this.isActive = true;
            Bus.$emit("send-contact", this.contacts[i], i);
        }
    },
    components: { MyCard, MyCount }
});
