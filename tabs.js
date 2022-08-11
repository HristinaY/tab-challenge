const tabsCotainer = document.getElementById("tabs");

tabsCotainer.addEventListener("click", (event) => {
  let activeTab = event.target;
  activeTab.classList.contains("tab-title")
    ? (activeTab = event.target)
    : activeTab.closest(".tab-title");

  const tabs = document.querySelectorAll(".tab-title");
  let windowWidth768 = window.matchMedia('(min-width: 768px)');

  if (windowWidth768.matches) {
    changeActiveTab()
  }
  else {
    if (activeTab.classList.contains("active")) {
      activeTab.classList.remove("active")
    }
    else {
      changeActiveTab()
    }
  }
  function changeActiveTab() {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    activeTab.classList.toggle("active");
  }
});


