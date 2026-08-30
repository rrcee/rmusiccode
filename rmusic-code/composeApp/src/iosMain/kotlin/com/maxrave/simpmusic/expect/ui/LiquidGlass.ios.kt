package com.maxrave.simpmusic.expect.ui

import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember

import platform.CoreMotion.CMMotionManager
import platform.Foundation.NSOperationQueue
import androidx.compose.runtime.DisposableEffect

@Composable
actual fun rememberDeviceTilt(): State<Pair<Float, Float>> {
    val tiltState = remember { mutableStateOf(Pair(0f, 0f)) }
    
    DisposableEffect(Unit) {
        val motionManager = CMMotionManager()
        if (motionManager.isDeviceMotionAvailable()) {
            motionManager.deviceMotionUpdateInterval = 1.0 / 60.0
            motionManager.startDeviceMotionUpdatesToQueue(NSOperationQueue.mainQueue) { motion, error ->
                if (motion != null) {
                    // Extract pitch and roll for liquid glass tilt effect
                    val pitch = motion.attitude.pitch.toFloat()
                    val roll = motion.attitude.roll.toFloat()
                    tiltState.value = Pair(pitch, roll)
                }
            }
        }
        
        onDispose {
            motionManager.stopDeviceMotionUpdates()
        }
    }
    
    return tiltState
}
