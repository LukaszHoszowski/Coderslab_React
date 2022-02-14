function Giphy(id) {
  const iframe = document.createElement("iframe");
  iframe.src = `https://giphy.com/embed/${id}`;
  iframe.width = "480";
  iframe.height = "270";
  iframe.frameBorder = "0";
  iframe.classList.add("giphy-embed");
  iframe.allowFullscreen = true;

  return iframe;
}

export default Giphy;