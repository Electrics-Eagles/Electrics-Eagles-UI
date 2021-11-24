class Logo extends HTMLElement { // (1)
  connectedCallback() {
    this.innerHTML = `<img src="./logo.svg"></img> `
  }

}

customElements.define("logo-img", Logo); 


