/**
 * State Design Pattern is a behavioral design pattern that allows an object to change its behavior when its internal
 * state changes.
 */
interface LightState {
	switchState(lightSwitch: LightSwitch): void;
}

class OnState implements LightState {
	public switchState(lightSwitch: LightSwitch): void {
		console.log('Light state is On. Turning Off ...');
		lightSwitch.setState(new OffState());
	}
}

class OffState implements LightState {
	public switchState(lightSwitch: LightSwitch): void {
		console.log('Light state is Off. Turning On ...');
		lightSwitch.setState(new OnState());
	}
}

class LightSwitch {
	constructor(private state: LightState) {}

	public setState(state: LightState): void {
		this.state = state;
	}

	public press(): void {
		this.state.switchState(this);
	}
}

// client code
const lightSwitch = new LightSwitch(new OffState());
lightSwitch.press();
lightSwitch.press();

/**
 * when to use
 *
 * 1. Large conditionals or switch-case statements based on object state
 * 2. State transitions are complex or error-prone
 * 3. State-specific behavior is spread out throughout your code
 * 4. Code is hard to extend with new states
 */
