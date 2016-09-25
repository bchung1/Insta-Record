(function() {
    var config = {
        apiKey: "AIzaSyCbVOgsRXntXxz5Y73oehWRkz8_oKD7XVs",
        authDomain: "warc-d335d.firebaseapp.com",
        databaseURL: "https://warc-d335d.firebaseio.com",
        storageBucket: "warc-d335d.appspot.com",
        messagingSenderId: "1090986097926"
    };

    firebase.initializeApp(config);
    const ref = firebase.database().ref();
    ref.once("value")
        .then(function(snapshot) {
            $.ajax({
                type: "GET",
                url: "http://cd4e4a2d.ngrok.io/getID",
                success: function(data) {
                    var record = snapshot.child(data.id).val();
                    app.displayRecord(record);
                }
            });
        });
})();

var app = new Vue({
    el: '#app',
    data: {
        personal: {
            name: '',
            age: '',
            address: '',
            emergency_contact: ''
        },
        allergies: '',
        medications: ''
    },
    methods: {
        displayRecord: function(record) {
            this.allergies = record.allergies;
            this.medications = record.medications;
            this.personal.name = record.personal_info.name;
            this.personal.address = record.personal_info.address;
            this.personal.age = record.personal_info.age;
            this.personal.emergency_contact = record.personal_info.emergency_contact;
        }
    }
})
