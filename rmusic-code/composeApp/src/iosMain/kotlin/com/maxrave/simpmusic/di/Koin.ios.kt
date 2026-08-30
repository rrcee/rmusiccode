package com.maxrave.simpmusic.di

import com.maxrave.data.di.loader.loadAllModules
import org.koin.core.context.startKoin

fun initKoin() {
    startKoin {
        loadAllModules()
        modules(viewModelModule)
    }
}
