var app = new Vue({
    el: "#app",
    data:{
        ideas: ideas
    },
    methods:{
        randomize(){
            this.ideas.genre = genre[Math.floor(Math.random()*genre.length)]
        }
    }
})