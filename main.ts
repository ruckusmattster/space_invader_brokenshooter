// shooting
input.onPinPressed(TouchPin.P1, function () {
    missile_y = 3
    missile_x = player_x
    for (let index = 0; index < 4; index++) {
        led.plot(missile_x, missile_y)
        basic.pause(150)
        led.unplot(missile_x, missile_y)
        missile_y += -1
    }
})
// startup
let missile_x = 0
let missile_y = 0
let player_x = 0
player_x = 2
led.plot(player_x, 4)
let alien_x = 0
let alien_y = 0
let _true = 1
// move left
basic.forever(function () {
    while (input.isGesture(Gesture.TiltLeft)) {
        if (player_x > 0) {
            led.unplot(player_x, 4)
            player_x += -1
            led.plot(player_x, 4)
        }
        basic.pause(200)
    }
})
// move right
basic.forever(function () {
    while (input.isGesture(Gesture.TiltRight)) {
        if (player_x < 4) {
            led.unplot(player_x, 4)
            player_x += 1
            led.plot(player_x, 4)
        }
        basic.pause(200)
    }
})
// move left
basic.forever(function () {
    if (_true <= 1) {
        for (let index = 0; index < 4; index++) {
            led.plot(alien_x, alien_y)
            basic.pause(500)
            led.unplot(alien_x, alien_y)
            alien_x += 1
        }
        for (let index = 0; index < 4; index++) {
            led.plot(alien_x, alien_y)
            basic.pause(500)
            led.unplot(alien_x, alien_y)
            alien_x += -1
        }
    }
})
