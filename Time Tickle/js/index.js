var app = new Vue({
    el: "#app",
    data:{
        player: player
    },
    methods:{
        buynextGenerator(i){
            if (1 > this.player.time) return
            this.player.time -= 1
            this.player.hourglass[+{cost: 10,multi: 1,amount: 0,bought: 0,name: "⌛Hourglasses⌛"}]
        },
        buyHourglassGenerator(i){
            let g = this.player.hourglass[i]
            if (g.cost > this.player.time) return
            this.player.time -= g.cost
            this.player.hourglass[i].cost *= 1 + (i+1)*0.25
            this.player.hourglass[i].amount += 1
            this.player.hourglass[i].bought += 1
        },
        buyClockGenerator(i){
            let g = this.player.clock[i]
            if (g.cost > this.player.time) return
            this.player.time -= g.cost
            this.player.clock[i].cost *= 1 + (i+1)*0.25
            this.player.clock[i].amount += 1
            this.player.clock[i].bought += 1
        },
        buyChronometerGenerator(i){
            let g = this.player.chronometer[i]
            if (g.cost > this.player.time) return
            this.player.time -= g.cost
            this.player.chronometer[i].cost *= 1 + (i+1)*0.25
            this.player.chronometer[i].amount += 1
            this.player.chronometer[i].bought += 1
        },
        format(amount){
            return format(amount)
        },
        gameLoop(){
            gameLoop(this)
        }
    },
    mounted(){
        setInterval(this.gameLoop, 50)
    }
})