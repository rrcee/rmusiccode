package com.maxrave.simpmusic.ui.theme

import androidx.compose.foundation.shape.CornerBasedShape
import androidx.compose.foundation.shape.CornerSize
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Shapes
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Outline
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.pow
import kotlin.math.sin

/**
 * Apple-Music-aligned corner tokens (see the design spec's radius table). Components should read
 * these instead of inventing radii so the whole app shares one curvature scale.
 */
/** Album/playlist grid tiles and small artwork cards. */
val CornerArtworkGrid = 10.dp

/** Floating miniplayer capsule. */
val CornerMiniPlayer = 14.dp

/** Expanded hero artwork on the Now Playing sheet. */
val CornerArtworkPlayer = 20.dp

/** Top corners of modal sheets (queue, player). Applied per-surface, not globally. */
val CornerSheet = 38.dp

/** Full pill for primary action buttons (Play / Shuffle). */
val CornerPill = 100.dp

/**
 * An iOS-style continuous-curvature corner ("squircle") shape.
 *
 * A plain rounded rectangle meets its straight edges with a sudden curvature jump, which reads
 * as slightly "cheap" at large radii; iOS uses corners whose curvature ramps up gradually. Each
 * corner here is a superellipse quadrant |cos θ|^(2/n) instead of a circle quadrant: an exponent
 * n of 2 is exactly a circle and larger values push the mid-corner outward toward the physical
 * corner point. The footprint matches [RoundedCornerShape] of the same radius — edges still
 * start at exactly `radius` from each corner — so it is drop-in interchangeable.
 *
 * Subclasses [CornerBasedShape] so Material components can call their usual `.copy(...)`
 * against it; unequal-corner copies degrade gracefully to a circular [RoundedCornerShape],
 * since a single-exponent squircle is only defined for symmetric corners anyway.
 *
 * Sampled with straight line segments (16 per quadrant); at any realistic dp size the segments
 * sit far below one pixel, and this stays much cheaper than fitting cubic Béziers.
 */
class SmoothCornerShape(
    val radius: Dp,
    /** 0 renders identical to a circular corner; 1 is the strongest squircle bulge. */
    val smoothing: Float = 0.5f,
) : CornerBasedShape(
        CornerSize(radius),
        CornerSize(radius),
        CornerSize(radius),
        CornerSize(radius),
    ) {
    override fun createOutline(
        size: Size,
        topLeft: Float,
        topRight: Float,
        bottomRight: Float,
        bottomLeft: Float,
        layoutDirection: LayoutDirection,
    ): Outline {
        val r =
            topLeft
                .coerceIn(0f, minOf(size.width, size.height) / 2f)
        if (r <= 0f) return Outline.Rectangle(Rect(0f, 0f, size.width, size.height))

        // Exponent n: 2 == circle, up to 5 at full smoothing; the parametric power is 2/n.
        val exponent = 2.0 + smoothing.coerceIn(0f, 1f) * 3.0
        val p = 2.0 / exponent
        val w = size.width
        val h = size.height

        val path = Path()
        val steps = 16
        var started = false

        fun emit(
            x: Double,
            y: Double,
        ) {
            if (started) {
                path.lineTo(x.toFloat(), y.toFloat())
            } else {
                path.moveTo(x.toFloat(), y.toFloat())
                started = true
            }
        }

        // One clockwise pass around the rectangle: TL (left→top), TR (top→right),
        // BR (right→bottom), BL (bottom→left). Within each quadrant, u runs 1→0 along the
        // arriving edge axis and v runs 0→1 along the leaving one; raising the exponent pushes
        // the sampled midpoint out toward the physical corner — the whole trick.
        val quarterPi = PI / 2.0

        fun sample(
            cx: Double,
            cy: Double,
            sx: Double,
            sy: Double,
            arriveX: Boolean,
        ) {
            for (i in 0..steps) {
                val t = quarterPi * i / steps
                val u = (if (arriveX) cos(t) else sin(t)).pow(p)
                val v = (if (arriveX) sin(t) else cos(t)).pow(p)
                emit(cx + sx * r * u, cy + sy * r * v)
            }
        }

        sample(cx = r.toDouble(), cy = r.toDouble(), sx = -1.0, sy = -1.0, arriveX = true) // TL
        sample(cx = (w - r).toDouble(), cy = r.toDouble(), sx = 1.0, sy = -1.0, arriveX = false) // TR
        sample(cx = (w - r).toDouble(), cy = (h - r).toDouble(), sx = 1.0, sy = 1.0, arriveX = true) // BR
        sample(cx = r.toDouble(), cy = (h - r).toDouble(), sx = -1.0, sy = 1.0, arriveX = false) // BL
        path.close()

        return Outline.Generic(path)
    }

    override fun copy(
        topStart: CornerSize,
        topEnd: CornerSize,
        bottomEnd: CornerSize,
        bottomStart: CornerSize,
    ): CornerBasedShape =
        if (topStart == topEnd && topEnd == bottomEnd && bottomEnd == bottomStart &&
            topStart == CornerSize(radius)
        ) {
            SmoothCornerShape(radius, smoothing)
        } else {
            // Asymmetric request: hand back a plain rounded shape honouring the corners.
            RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart)
        }

    override fun equals(other: Any?): Boolean =
        other is SmoothCornerShape && other.radius == radius && other.smoothing == smoothing

    override fun hashCode(): Int = radius.hashCode() * 31 + smoothing.hashCode()
}

/**
 * The global M3 shape scale, nudged onto the Apple curvature ramp: artwork-scale containers get
 * the grid token, hero surfaces get the player token. Sheet corners stay at the Material default
 * on purpose — the 38dp sheet token is applied per-surface where a sheet actually wants it, since
 * raising the global extraLarge tier over-rounded every small popup menu too.
 */
fun appleShapes(): Shapes =
    Shapes(
        extraSmall = RoundedCornerShape(6.dp),
        small = RoundedCornerShape(CornerArtworkGrid),
        medium = RoundedCornerShape(CornerMiniPlayer),
        large = SmoothCornerShape(CornerArtworkPlayer),
        extraLarge = SmoothCornerShape(28.dp),
    )
