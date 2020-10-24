var player = {
    time: 10,
    hourglass: [],
    clock: [],
    chronometer: [],
    lastUpdate: Date.now()
}

var firstHourglass = {
    cost: 10,
    multi: 1,
    amount: 0,
    bought: 0,
    name: "⌛Hourglasses⌛"
}

player.hourglass.push(firstHourglass)