package rm.sprites;

import rm.types.LunaTea.BalloonId;
import rm.core.Sprite;

/**
 * -----------------------------------------------------------------------------
 * Sprite_Balloon
 *
 * The sprite for displaying a balloon icon.
 */
@:expose("Sprite_Balloon")
@:native("Sprite_Balloon")
@:build(macros.BuildMacroTools.buildDynamicFunctions())
@:build(macros.BuildMacroTools.buildPublicPrivateFields())
#if compileMV
extern class Sprite_Balloon extends Sprite_Base {
#else
extern class Sprite_Balloon extends Sprite {
#end
private var _balloonId: BalloonId; // TODO: Create Balloon ID abstract
private var _duration: Float;
public function initMembers(): Void;
public function loadBitmap(): Void;
public function setup(balloonId: BalloonId): Void;

/**
 * Updates the balloon sprite.
 *
 * @memberof Sprite_Balloon
 */
public function update(): Void;

/**
 * Updates the balloon sprite frame.
 *
 * @memberof Sprite_Balloon
 */
public function updateFrame(): Void;

/**
 * Returns the speed of the balloon animation.
 *
 * @returns {number}
 * @memberof Sprite_Balloon
 */
public function speed(): Float;

/**
 * Returns the wait time.
 *
 * @returns {number}
 * @memberof Sprite_Balloon
 */
public function waitTime(): Float;

/**
 * Returns the frame index of the balloon animation.
 *
 * @returns {number}
 * @memberof Sprite_Balloon
 */
public function frameIndex(): Float;

/**
 * Returns true if the balloon animation is playing.
 *
 * @returns {boolean}
 * @memberof Sprite_Balloon
 */
public function isPlaying(): Bool;
}
