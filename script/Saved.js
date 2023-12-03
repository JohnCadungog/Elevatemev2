let cardCounter = 1;

function deleteCard(containerId, cardId) {
    var cardElement = document.getElementById(containerId).querySelector('#' + cardId);
    if (cardElement) {
        cardElement.remove();
    }
}

function createCard(containerId, id, text) {
    // Create card elements
    var card = document.createElement("div");
    card.className = "card";
    card.id = id;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    var cardText = document.createElement("div");
    cardText.className = "card-text";
    cardText.contentEditable = true;
    cardText.textContent = text;

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        deleteCard(containerId, id);
    };

    // Append elements to the card
    card.appendChild(checkbox);
    card.appendChild(cardText);
    card.appendChild(deleteButton);

    // Append the card to the cards container
    var cardsContainer = document.getElementById(containerId);
    cardsContainer.appendChild(card);
}

function editCard(containerId, cardId) {
    // Get the current card text
    const currentText = document.getElementById(cardId).getElementsByClassName('card-text')[0].innerText;

    // Set the initial value of the modal input
    document.getElementById('editCardText').value = currentText;

    // Show the edit card modal
    document.getElementById('editCardModal').style.display = 'block';
}

function closeEditCardModal() {
  
    document.getElementById('editCardModal').style.display = 'none';
}

function confirmEditCard() {
    // Get the edited text from the input field
    var editedText = document.getElementById('editCardText').value;

    // Update the card text with the edited text
    var containerId = document.getElementById('editCardModal').dataset.containerId;
    var cardId = 'card1';  // Replace 'card1' with the actual card ID
    var cardTextElement = document.getElementById(containerId).querySelector('#' + cardId + ' .card-text');
    
    if (cardTextElement) {
        cardTextElement.innerText = editedText;
    }

    //server Logic, Update it here?
   
    closeEditCardModal();
}
function showEditCardModal(containerId) {
    var modal = document.getElementById('editCardModal');
    modal.style.display = 'block';
    modal.dataset.containerId = containerId;
    var currentCardText = getCurrentCardText(); // Define a function to get the current card text
    document.getElementById('editCardText').value = currentCardText;
}

function getCurrentCardText() {
    // For example, you can get the first card's text in the container
    var containerId = document.getElementById('editCardModal').dataset.containerId;
    var firstCardText = document.getElementById(containerId).getElementsByClassName('card-text')[0].innerText;
    return firstCardText;
}

function closeAddCardModal() {
    var modal = document.getElementById('addCardModal');
    modal.style.display = 'none';
}

function confirmAddCard() {
    var modal = document.getElementById('addCardModal');
    var containerId = modal.dataset.containerId;
    var newCardText = document.getElementById('newCardText').value;

    // Add the new card
    createCard(containerId, 'newCard', newCardText);

    // Close the modal
    closeAddCardModal();
}

function showAddCardModal(containerId) {
    var modal = document.getElementById('addCardModal');
    modal.style.display = 'block';
    modal.dataset.containerId = containerId;
}
// Additional functions or modifications can be added as needed
 