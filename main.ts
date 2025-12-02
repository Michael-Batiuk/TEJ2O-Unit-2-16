/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Batiuk
 * Created on: Dec 2025
 * This program simulates Radios
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
radio.setGroup(11)

// variables
let sonarDistance = sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.Centimeters)

// if statment
  
    if (sonarDistance <= 10) {
        radio.sendString ("Too Close")
    }
