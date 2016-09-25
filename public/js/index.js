new Vue({
    el: '#app',
    data: {
        id: ''
    },
    methods: {
        searchProfile: function() {
            var patientID = this.id;
            console.log(patientID)
            $.ajax({
                type: "POST",
                url: "http://cd4e4a2d.ngrok.io/postID",
                data: {
                    "id": patientID
                },
                success: function(url) {
                    window.location = url.redirect;
                }
            });
        }
    }
})
