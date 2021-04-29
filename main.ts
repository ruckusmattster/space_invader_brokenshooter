input.onButtonPressed(Button.A, function () {
	
})
input.onPinPressed(TouchPin.P1, function () {
    if (y_axis != 0) {
        led.unplot(player_x, y_axis)
        y_axis += -1
        led.plot(player_x, y_axis)
        basic.pause(625)
    }
})
let y_axis = 0
let player_x = 0
let x_axis = 2
player_x = 2
y_axis = 4
led.plot(x_axis, 4)
basic.forever(function () {
    while (input.isGesture(Gesture.TiltLeft)) {
        if (x_axis > 0) {
            led.unplot(x_axis, 4)
            x_axis += -1
            player_x += 1
            led.plot(x_axis, 4)
        }
        basic.pause(625)
    }
})
basic.forever(function () {
    while (input.isGesture(Gesture.TiltRight)) {
        if (x_axis < 4) {
            led.unplot(x_axis, 4)
            x_axis += 1
            player_x += 1
            led.plot(x_axis, 4)
        }
        basic.pause(625)
    }
})
