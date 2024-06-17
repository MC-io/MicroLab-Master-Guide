document.addEventListener('DOMContentLoaded', function() {
    const tools = document.querySelectorAll('.tool');
    const infoBox = document.getElementById('info-box');
    // const toolInfo = document.getElementById('tool-info');

    const toolDetails = {
        microscope: "A microscope is an instrument used to see objects that are too small to be seen by the naked eye.",
        petri_dish: "A petri dish is a shallow cylindrical glass or plastic lidded dish used to culture cells.",
        pipette: "A pipette is a laboratory tool commonly used in microbiology to transport a measured volume of liquid."
        // Add more tool details as needed
    };

    tools.forEach((tool, index) => {
        tool.addEventListener('click', function() {
            const toolName = this.getAttribute('data-tool');
            // toolInfo.textContent = toolDetails[toolName];
            const modalID = "modal-".concat(toolName);
            modal = document.getElementById(modalID);
            modal.style.display = 'block';
            showPage(0, modalID);
        });
    });

});

const tools = ['sensibilidad','morfologia','bioquimica','tubos','placas']


// Get the modal element
var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
var spans = document.getElementsByClassName('close');
// Get all pages inside the modal
var currentPage = 0;
let currentModal = null;

// Function to show a specific page
function showPage(index, modalId) {
  const modalPageClass = modalId.concat('-page');
  var pages = document.getElementsByClassName(modalPageClass);
  // Hide all pages
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }
  // Show the requested page
  pages[index].style.display = 'block';
  currentModal = document.getElementById(modalId)
  currentPage = index;
}

// When the user clicks on <span> (X), close the modal

Array.from(spans).forEach(span => {
  span.onclick = function() {
    currentModal.style.display = 'none';
    currentPage = 0
    currentModal = null;
  };

});


// Optional: Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
  if (event.target == currentModal) {
    currentModal.style.display = 'none';
    currentModal = null;
    currentPage = 0
  }
};

// Handling navigation between pages
var nextButtons = document.getElementsByClassName('nextBtn');
var prevButtons = document.getElementsByClassName('prevBtn');

// Function to go to the next page
function nextPage(modalType) {
  const modalPageClass = 'modal-'.concat(modalType.concat('-page'));
  console.log(modalPageClass)
  var pages = document.getElementsByClassName(modalPageClass);
  if (currentPage < pages.length - 1) {
    showPage(currentPage + 1,'modal-'.concat(modalType));
  }
}

// Function to go to the previous page
function prevPage(modalType) {
  if (currentPage > 0) {
    showPage(currentPage - 1,'modal-'.concat(modalType));
  }
}

// Attach click events to navigation buttons
for (var i = 0; i < nextButtons.length; i++) {
  let modalType = nextButtons[i].getAttribute('modal-type');
  nextButtons[i].onclick = function () {
    nextPage(modalType);
  };
}

for (var i = 0; i < prevButtons.length; i++) {
  let modalType = prevButtons[i].getAttribute('modal-type');
  prevButtons[i].onclick = function () {
    prevPage(modalType);
  };
}

