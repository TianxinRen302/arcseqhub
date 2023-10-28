function openTab(event, tabId) {
  // Hide all tab content
  var tabContent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove 'active' class from all tab buttons
  var tabButtons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace(" active", "");
  }

  // Show the selected tab content
  document.getElementById(tabId).style.display = "block";

  // Add 'active' class to the clicked tab button
  event.currentTarget.className += " active";
}

function fillValues_locus() {
  // document.getElementById("option1").checked = true;
  // document.getElementById("option2").checked = true;
  document.getElementById("GenomeChoice").selectedIndex = 2;
  document.getElementById("Chrom num").value = "1";
  document.getElementById("Start").value = "51800000";
  document.getElementById("End").value = "52090000";

}

function fillValues_gene() {
  // document.getElementById("option1_").checked = true;
  // document.getElementById("option2_").checked = true;
  document.getElementById("GenomeChoice_").selectedIndex = 2;
  document.getElementById("Gene Refseq").value = "CALR4P";

}

// 当用户点击 div 时，打开弹窗
function wait() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  setTimeout(function() {
    popup.classList.toggle("show");
  }, 10000);
}
