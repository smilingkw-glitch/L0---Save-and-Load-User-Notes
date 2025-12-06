// Get references to textarea and all three buttons
var notesArea = document.getElementById("notes-area");
var saveBtn = document.getElementById("save-btn");
var loadBtn = document.getElementById("load-btn");
var clearBtn = document.getElementById("clear-btn");

// Define a key name to use in localStorage
var NOTES_KEY = "userNotes";

// ---------------- On page load: load existing notes if present ----------------
window.addEventListener("load", function () {
  // Check if there are saved notes in localStorage
  var savedNotes = localStorage.getItem(NOTES_KEY);

  // If notes exist (not null), put them into the textarea
  if (savedNotes !== null) {
    notesArea.value = savedNotes;
  }
});

// ---------------- Save Notes button logic ----------------
saveBtn.addEventListener("click", function () {
  // Get current value from the textarea and trim extra spaces
  var notesText = notesArea.value.trim();

  // Validation: Do not save if the textarea is empty
  if (notesText === "") {
    alert("Please write some notes before saving.");
    return; // Stop the function here
  }

  // Save the notes into localStorage with setItem
  localStorage.setItem(NOTES_KEY, notesText);

  alert("Notes saved successfully!");
});

// ---------------- Load Notes button logic ----------------
loadBtn.addEventListener("click", function () {
  // Get notes from localStorage using the same key
  var savedNotes = localStorage.getItem(NOTES_KEY);

  if (savedNotes === null) {
    // If nothing is stored, inform the user
    alert("No saved notes found.");
  } else {
    // Put the saved notes back into the textarea
    notesArea.value = savedNotes;
  }
});

// ---------------- Clear Notes button logic ----------------
clearBtn.addEventListener("click", function () {
  // Remove the saved notes from localStorage
  localStorage.removeItem(NOTES_KEY);

  // Also clear the textarea on the page
  notesArea.value = "";

  alert("Notes cleared.");
});
