// Generated by Haxe 4.1.3
/**Document this comment for testing
 * Kinitta.js
 */
;(function ($hx_exports, $global) { "use strict";
class Lambda {
	static fold(it,f,first) {
		let x = $getIterator(it);
		while(x.hasNext()) first = f(x.next(),first);
		return first;
	}
}
class Main {
	static main() {
		// @"Build Date: 2020-09-07 21:39:11"@ ;
		
//=============================================================================
// @"Kiniitta"@
//=============================================================================
      ;
		/*:
     @"@author Kino\n    @plugindesc This plugin allows you to use Haxe in your RPGMakerMV code.\n    @param haxeVersion"@
   */;
		// @"This is a test of the watcher"@ ;
		let sceneTitleStart = Scene_Base.prototype["start"] ;
		Scene_Base.prototype["start"] = function() {
			let self = this;
			sceneTitleStart.call(self);
			_$LTGlobals_$.$gameVariables.setValue(1,3);
			Window.Haxe = "Version 4.2.0";
			console.log("src/Main.hx:28:","Running Console Log From Haxe Added haxe Version");
		};
		let abc = [1,2,3,4,5,10];
		Lambda.fold(abc,function(x,result) {
			result = x * 2;
			return result;
		},0);
		let result = new Array(abc.length);
		let _g = 0;
		let _g1 = abc.length;
		while(_g < _g1) {
			let i = _g++;
			result[i] = abc[i] * 2;
		}
		Window_Base.prototype.update = function() {
			let self = this;
			self.update();
			self.hide();
		};
		(function(self) {
			self.update = function() {
				self.hide();
			};
			self.standardBackOpacity = function() {
				return 3;
			};
		})(Window_Base.prototype);
	}
}
class haxe_iterators_ArrayIterator {
	constructor(array) {
		this.current = 0;
		this.array = array;
	}
	hasNext() {
		return this.current < this.array.length;
	}
	next() {
		return this.array[this.current++];
	}
}
class _$LTGlobals_$ {
}
class utils_Fn {
	static proto(obj) {
		return obj.prototype;
	}
	static updateProto(obj,fn) {
		return (fn)(obj.prototype);
	}
	static updateEntity(obj,fn) {
		return (fn)(obj);
	}
}
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
Main.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, {});
