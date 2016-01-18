import {Container, Navigator} from "../Viewer";
import {IUI} from "../UI";

export class CoverUI implements IUI {
    private container: Container;
    private navigator: Navigator;
    private coverContainer: HTMLElement;

    constructor(container: Container, navigator: Navigator) {
        this.container = container;
        this.navigator = navigator;

        let coverContainer: HTMLElement = document.createElement("div");
        coverContainer.className = "Cover";
        this.coverContainer = coverContainer;
        this.container.element.appendChild(this.coverContainer);

        let button: HTMLElement = this.createButton("mapillary-js");
        this.coverContainer.appendChild(button);

        console.log(this.coverContainer);
    }

    public activate(): void {
        console.log("CoverUI activated");
        return;
    }

    public deactivate(): void {
        return;
    }

    private activateAllUIs (): void {
        console.log("All other UIs activated, CoverUI DOM node deleted");
        this.coverContainer.parentNode.removeChild(this.coverContainer);
    }

    private createButton (text: string): HTMLElement {
        let button: HTMLElement = document.createElement("button");
        button.className = "CoverButton";
        button.innerText = text;
        button.addEventListener("click", () => {
            this.activateAllUIs();
        });
        return button;
    }
}

export default CoverUI;