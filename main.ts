function FindLineClose () {
    while (sensors.color2.light(LightIntensityMode.Reflected) < 80) {
        motors.largeAD.run(-20)
    }
    music.playTone(262, music.beat(BeatFraction.Half))
    while (sensors.color2.light(LightIntensityMode.Reflected) > 20) {
        motors.largeAD.run(-20)
    }
    motors.largeAD.stop()
}
FindLineClose()
