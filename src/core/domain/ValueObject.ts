export abstract class ValueObject<T> {
	protected readonly props: T;

	constructor(props: T) {
		this.props = Object.freeze(props);
	}
}
