microIoT.microIoT_initDisplay()
microIoT.microIoT_ledBlank(PIN.P15)
microIoT.microIoT_setIndexColor(PIN.P15, 0, 4, 0x00ff00)
microIoT.microIoT_clear()
microIoT.microIoT_showUserNumber(0, 0)
microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
basic.pause(500)
microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
basic.pause(500)
microIoT.microIoT_ServoRun(microIoT.aServos.S1, 180)
basic.pause(500)
let water_mo = pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
    microIoT.microIoT_showUserNumber(0, Math.idiv(pins.analogReadPin(AnalogPin.P0), 0))
    basic.pause(500)
})
