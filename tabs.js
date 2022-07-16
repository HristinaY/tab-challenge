const tabsCotainer = document.getElementById("tabs");

tabsCotainer.addEventListener("click", (event) => {
  let activeTab = event.target;
  activeTab.classList.contains("tab-title")
    ? (activeTab = event.target)
    : activeTab.closest(".tab-title");

  const tabs = document.querySelectorAll(".tab-title");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  activeTab.classList.toggle("active");
});
