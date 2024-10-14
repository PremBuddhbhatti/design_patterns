interface Tool {
	onMouseDown(): void;

	onMouseUp(): void;
}

class SelectionTool implements Tool {
	onMouseDown(): void {
		console.log('Selection rectangle started.');
	}

	onMouseUp(): void {
		console.log('Selection rectangle drawn.');
	}
}

class BrushTool implements Tool {
	onMouseDown(): void {
		console.log('Brush stroke started.');
	}

	onMouseUp(): void {
		console.log('Brush stroke drawn.');
	}
}

class EraserTool implements Tool {
	onMouseDown(): void {
		console.log('Eraser started.');
	}

	onMouseUp(): void {
		console.log('Erased.');
	}
}

class Canvas {
	private tool: Tool;

	constructor(tool: Tool) {
		this.tool = tool;
	}

	setTool(tool: Tool) {
		this.tool = tool;
	}

	onMouseDown() {
		this.tool.onMouseDown();
	}

	onMouseUp() {
		this.tool.onMouseUp();
	}
}

// Usage
let canvas = new Canvas(new SelectionTool());
canvas.onMouseDown(); // Selection rectangle started.
canvas.onMouseUp(); // Selection rectangle drawn.

canvas.setTool(new BrushTool());
canvas.onMouseDown(); // Brush stroke started.
canvas.onMouseUp(); // Brush stroke drawn.

canvas.setTool(new EraserTool());
canvas.onMouseDown(); // Eraser started.
canvas.onMouseUp(); // Erased.
