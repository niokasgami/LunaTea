package mz.abstracts.sprites;

import mv.sprites.Sprite_Battler;

@:forward
@:forwardStatics
abstract SpriteBattler(Sprite_Battler) {
 public inline function raw(): Sprite_Battler {
  return this;
 }
}
