// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.

// PLAN:
// Check if the forge has at least 30 heat.
// If it does, use 30 heat and make one sword.
// If it does not, keep the heat and sword count the same.
// Show a message explaining what happened.
// Update the forge display.

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.
const $forge = document.querySelector("#forge");
const $heatValue = document.querySelector("#heat-value");
const $swordCount = document.querySelector("#sword-count");
const $forgeStatus = document.querySelector("#forge-status");
const $forgeImage = document.querySelector("#forge-image");
const $actionMessage = document.querySelector("#action-message");

// 2. Create the two state variables: heat and swords made.
let forgeHeat = 20;
let swordsMade = 0;

// 3. Write getForgeStatus(heatValue). Return the correct status string.
function getForgeStatus(heatValue) {
  if (heatValue < 30) {
    return "Too cold";
  } else if (heatValue < 70) {
    return "Ready to forge";
  } else {
    return "Roaring fire";
  }
}

// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.
function updateForge() {
  $heatValue.textContent = forgeHeat;
  $swordCount.textContent = swordsMade;

  const status = getForgeStatus(forgeHeat);
  $forgeStatus.textContent = status;

  $forge.classList.remove("is-cold", "is-ready", "is-roaring");

  if (status === "Too cold") {
    $forge.classList.add("is-cold");
    $forgeImage.src = "assets/forge-cold.svg";
    $forgeImage.alt = "A stone forge with dark coals and no flames";
  } else if (status === "Ready to forge") {
    $forge.classList.add("is-ready");
    $forgeImage.src = "assets/forge-ready.svg";
    $forgeImage.alt = "A stone forge with a small orange fire";
  } else {
    $forge.classList.add("is-roaring");
    $forgeImage.src = "assets/forge-roaring.svg";
    $forgeImage.alt = "A stone forge with tall bright flames and sparks";
  }
}

// 5. Write resetForge(). Restore the state, message, and display.
function resetForge() {
  forgeHeat = 20;
  swordsMade = 0;

  $actionMessage.textContent = "Welcome to the forge. Add heat to begin.";

  updateForge();
}

// 6. Write heatForge(amount). Add heat, cap it, and update the page.
function heatForge(amount) {
  forgeHeat += amount;

  if (forgeHeat > 100) {
    forgeHeat = 100;
  }

  $actionMessage.textContent =
    `Heating complete. The forge is at ${forgeHeat} heat.`;

  updateForge();
}

// 7. Write makeSword(). Handle both success and insufficient heat.
function makeSword() {
  if (forgeHeat >= 30) {
    forgeHeat -= 30;
    swordsMade += 1;

    $actionMessage.textContent = "Sword crafted successfully.";
  } else {
    $actionMessage.textContent =
      "Not enough heat. Add more heat to make a sword.";
  }

  updateForge();
}
// 8. Call resetForge() once to start the game.
resetForge();
// Use the tests in ASSIGNMENT.md to check your work.
