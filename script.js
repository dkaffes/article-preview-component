const shareContentWrap = document.querySelector(".share-content-wrapper");
const shareButton = document.querySelector(".share-btn");

shareButton.addEventListener("click", () => {
  shareContentWrap.classList.toggle("hidden");
  shareContentWrap.classList.toggle("open");
  shareButton.classList.toggle("share-btn-bg");

  // accessibility improvement
  const isExpanded = shareButton.getAttribute("aria-expanded") === "true";
  if (isExpanded) shareButton.setAttribute("aria-expanded", "false");
  else shareButton.setAttribute("aria-expanded", "true");
});
