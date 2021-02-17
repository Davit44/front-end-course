class Button {
    constructor({ label, width = 100, height = 30 }) {
      const button = document.createElement("button");
      button.innerText = label;
      button.style.width = typeof width === "string" ? width : `${width}px`;
      button.style.height = typeof height === "string" ? height : `${height}px`;
      button.classList.add("btn-primary");
      this.label = label;
      this.width = width;
      this.height = height;
      this.button = button;
      button.addEventListener("mousemove", (e) => {
        button.style.setProperty("--x", `${e.offsetX}px`);
        button.style.setProperty("--y", `${e.offsetY}px`);
      });
    }
    insertTo(elOrSctr) {
      const parentElement =
        typeof elOrSctr === "string"
          ? document.querySelector(elOrSctr) /* selector */
          : elOrSctr; /* element */
      parentElement.append(this.button);
    }
  }
  const ToggleMode = new Button({
    width: 80,
    height: 30,
    label: "Add new button",
  });
  ToggleMode.insertTo(document.body);
  // ToggleMode.button.addEventListener("click", function () {
  //   const label = prompt("write the buuton label");
  //   const newButton = new Button({
  //     label,
  //     width: this.style.width,
  //     height: this.style.height,
  //   });
  //   newButton.insertTo(".btn-group");
  // });
  ToggleMode.button.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });