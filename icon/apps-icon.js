const html = (strings) => String.raw({ raw: strings });

const template = document.createElement("template");
template.innerHTML = html`
  <style>
    :host {
      --color: hsl(0 0% 0%);
      display: flex;
    }

    svg {
      color: var(--color);
    }
  </style>
  <svg
    viewBox="0 0 13 13"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <!-- row 1 -->
    <rect x="0" y="0" width="3" height="3" rx=".75" />
    <rect x="5" y="0" width="3" height="3" rx=".75" />
    <rect x="10" y="0" width="3" height="3" rx=".75" />

    <!-- row 2 -->
    <rect x="0" y="5" width="3" height="3" rx=".75" />
    <rect x="5" y="5" width="3" height="3" rx=".75" />
    <rect x="10" y="5" width="3" height="3" rx=".75" />

    <!-- row 3 -->
    <rect x="0" y="10" width="3" height="3" rx=".75" />
    <rect x="5" y="10" width="3" height="3" rx=".75" />
    <rect x="10" y="10" width="3" height="3" rx=".75" />
  </svg>
`;

export class AppsIcon extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    if (this.shadowRoot === null) throw new Error("shadowRoot is null");

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
