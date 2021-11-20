let list: number[] = []
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
serial.writeLine("temperature, light, acceleration, direction")
basic.forever(function () {
    serial.writeNumbers([
    input.temperature(),
    input.lightLevel(),
    input.acceleration(Dimension.Strength),
    input.compassHeading()
    ])
    serial.writeLine("")
    list = [
    input.temperature(),
    input.lightLevel(),
    input.acceleration(Dimension.Strength),
    input.compassHeading()
    ]
    for (let index = 0; index <= list[index]; index++) {
        basic.showNumber(list[index])
        basic.showString(",")
    }
})
