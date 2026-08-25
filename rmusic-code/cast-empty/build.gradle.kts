import org.jetbrains.kotlin.gradle.dsl.JvmTarget

plugins {
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.android.kotlin.multiplatform.library)
    alias(libs.plugins.compose.compiler)
}

kotlin {
    jvmToolchain(21)
    
    android {
        namespace = "org.simpmusic.cast"
        compileSdk = 37
        minSdk = 26
    }
    
    jvm {
    }
    
    sourceSets {
        commonMain {
            dependencies {
                implementation(projects.common)
                implementation(projects.domain)
                // Compose UI is required for the CastIconButton stub composable
                implementation(libs.compose.ui)
                implementation(libs.compose.material3.lib)
            }
        }
        androidMain {
            dependencies {
                implementation(libs.core.ktx)
                implementation(libs.appcompat)
                // media3-common is required for wrapWithCastPlayer signature on Android
                implementation(libs.media3.common)
            }
        }
        jvmMain {
            dependencies {
            }
        }
    }
}
