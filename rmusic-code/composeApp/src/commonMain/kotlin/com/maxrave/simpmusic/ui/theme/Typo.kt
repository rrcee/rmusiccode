package com.maxrave.simpmusic.ui.theme

import androidx.compose.material3.ColorScheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Typography
import androidx.compose.runtime.Composable
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp
import org.jetbrains.compose.resources.Font
import org.jetbrains.compose.resources.FontResource
import org.jetbrains.compose.resources.InternalResourceApi
import org.jetbrains.compose.resources.ResourceItem
import simpmusic.composeapp.generated.resources.Res

/**
 * Direct [FontResource] handles for the bundled Poppins faces.
 *
 * These mirror exactly what the compose-resources generator emits for `Res.font.*`; they exist
 * because this fork's generated-accessor wiring intermittently fails to surface freshly added
 * font entries to the Android compilation, while hand-built resources resolve everywhere.
 * The item paths must match the files under `composeResources/font/`.
 */
@OptIn(InternalResourceApi::class)
private fun poppinsFace(fileName: String): FontResource =
    FontResource(
        "font:$fileName",
        setOf(
            ResourceItem(
                setOf(),
                "composeResources/simpmusic.composeapp.generated.resources/font/$fileName.ttf",
                -1,
                -1,
            ),
        ),
    )

private val poppinsRegular by lazy { poppinsFace("poppins_regular") }
private val poppinsMedium by lazy { poppinsFace("poppins_medium") }
private val poppinsBold by lazy { poppinsFace("poppins_bold") }

/**
 * The app-wide text family. All three bundled Poppins faces are registered at their real weights
 * — previously only Medium was mapped, so every Bold/SemiBold style silently rendered at regular
 * weight and titles lost the weight contrast that makes a hierarchy read. Weights between anchors
 * (e.g. SemiBold) resolve to the nearest registered face instead of being dropped.
 */
@Composable
fun fontFamily(): FontFamily =
    FontFamily(
        Font(poppinsRegular, FontWeight.Normal, FontStyle.Normal),
        Font(poppinsMedium, FontWeight.Medium, FontStyle.Normal),
        Font(poppinsBold, FontWeight.Bold, FontStyle.Normal),
    )

/**
 * When true, [typo] keeps the original always-light text colors (pure white titles, #A8A8A8 body)
 * regardless of theme. Immersive screens drawn over dark artwork provide `true` so their text stays
 * readable at light theme. Everything else leaves it false and gets theme-aware colors.
 */
val LocalForceDarkText = staticCompositionLocalOf { false }

@Composable
fun typo(
    colorScheme: ColorScheme = MaterialTheme.colorScheme,
    forceDark: Boolean = LocalForceDarkText.current,
): Typography {
    val fontFamily = fontFamily()

    // Titles were pure white, everything else muted gray (#A8A8A8) in the old dark-only palette.
    // forceDark keeps that; otherwise both come from the scheme (theme-aware light/dark).
    val titleColor = if (forceDark) Color.White else colorScheme.onBackground
    val bodyColor = if (forceDark) Color(0xFFA8A8A8) else colorScheme.onSurfaceVariant

    val typo =
        Typography(
            /***
             * This typo().is use for the title of the Playlist, Artist, Song, Album, etc. in Home, Mood, Genre, Playlist, etc.
             *
             * Sizes and tracking follow the Apple Music type ramp (Title1 28 bold / Title2 22
             * bold / Title3 20 semibold / Headline 17 semibold / Body 17 regular) so section
             * headers and screen titles carry the same visual weight hierarchy as the reference
             * design. Negative tracking on the large titles matches Apple's tight display style.
             */
            titleSmall =
                TextStyle(
                    fontSize = 13.sp,
                    fontWeight = FontWeight.SemiBold,
                    fontFamily = fontFamily,
                    color = titleColor,
                ),
            titleMedium =
                TextStyle(
                    fontSize = 17.sp,
                    fontWeight = FontWeight.SemiBold,
                    letterSpacing = (-0.1).sp,
                    fontFamily = fontFamily,
                    color = titleColor,
                ),
            titleLarge =
                TextStyle(
                    fontSize = 28.sp,
                    fontWeight = FontWeight.Bold,
                    lineHeight = 34.sp,
                    letterSpacing = (-0.3).sp,
                    fontFamily = fontFamily,
                    color = titleColor,
                ),
            bodySmall =
                TextStyle(
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Normal,
                    fontFamily = fontFamily,
                    color = bodyColor,
                ),
            bodyMedium =
                TextStyle(
                    fontSize = 13.sp,
                    fontWeight = FontWeight.Normal,
                    fontFamily = fontFamily,
                    color = bodyColor,
                ),
            bodyLarge =
                TextStyle(
                    fontSize = 17.sp,
                    fontWeight = FontWeight.Normal,
                    fontFamily = fontFamily,
                    color = bodyColor,
                ),
            displayLarge =
                TextStyle(
                    fontSize = 20.sp,
                    fontWeight = FontWeight.Normal,
                    fontFamily = fontFamily,
                    color = bodyColor,
                ),
            headlineMedium =
                TextStyle(
                    fontSize = 20.sp,
                    fontWeight = FontWeight.SemiBold,
                    fontFamily = fontFamily,
                    color = bodyColor,
                ),
            headlineLarge =
                TextStyle(
                    fontSize = 22.sp,
                    fontWeight = FontWeight.Bold,
                    lineHeight = 28.sp,
                    letterSpacing = (-0.2).sp,
                    fontFamily = fontFamily,
                    color = bodyColor,
                ),
            labelMedium =
                TextStyle(
                    fontSize = 14.sp,
                    fontWeight = FontWeight.SemiBold,
                    fontFamily = fontFamily,
                    color = bodyColor,
                ),
            labelSmall =
                TextStyle(
                    fontSize = 14.sp,
                    fontWeight = FontWeight.SemiBold,
                    fontFamily = fontFamily,
                    color = bodyColor,
                ),
            // ...
        )
    return typo
}
