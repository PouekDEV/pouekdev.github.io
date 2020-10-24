function gameLoop(that){
    let diff = (Date.now() - that.player.lastUpdate)/1000
    that.player.time += that.player.hourglass[0].amount * that.player.hourglass[0].multi * diff

    that.player.lastUpdate = Date.now()
}