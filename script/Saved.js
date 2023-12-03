let cardCounter = 1;

const deleteCard = (containerId, cardId) => {
    const cardElement = document.getElementById(containerId).querySelector('#' + cardId);
    if (cardElement) {
        cardElement.remove();
    }
}

const createCard = (containerId, id, text) => {
    // Create card elements
    const card = document.createElement("div");
    card.className = "card";
    card.id = id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    const cardText = document.createElement("div");
    cardText.className = "card-text";
    cardText.contentEditable = true;
    cardText.textContent = text;

    const deleteButton = document.createElement("button");
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
    const cardsContainer = document.getElementById(containerId);
    cardsContainer.appendChild(card);
}

const editCard = (containerId, cardId) => {
    // Get the current card text
    const currentText = document.getElementById(cardId).getElementsByClassName('card-text')[0].innerText;

    // Set the initial value of the modal input
    document.getElementById('editCardText').value = currentText;

    // Show the edit card modal
    document.getElementById('editCardModal').style.display = 'block';
}

const closeEditCardModal = () => {
  
    document.getElementById('editCardModal').style.display = 'none';
}

const confirmEditCard = () => {
    // Get the edited text from the input field
    const editedText = document.getElementById('editCardText').value;

    // Update the card text with the edited text
    const containerId = document.getElementById('editCardModal').dataset.containerId;
    const cardId = 'card1';  // Replace 'card1' with the actual card ID
    const cardTextElement = document.getElementById(containerId).querySelector('#' + cardId + ' .card-text');
    
    if (cardTextElement) {
        cardTextElement.innerText = editedText;
    }

    //server Logic, Update it here?
   
    closeEditCardModal();
}
const showEditCardModal = (containerId) => {
    const modal = document.getElementById('editCardModal');
    modal.style.display = 'block';
    modal.dataset.containerId = containerId;
    const currentCardText = getCurrentCardText(); // Define a function to get the current card text
    document.getElementById('editCardText').value = currentCardText;
}

const getCurrentCardText = () => {
    // For example, you can get the first card's text in the container
    const containerId = document.getElementById('editCardModal').dataset.containerId;
    const firstCardText = document.getElementById(containerId).getElementsByClassName('card-text')[0].innerText;
    return firstCardText;
}

const closeAddCardModal = () => {
    const modal = document.getElementById('addCardModal');
    modal.style.display = 'none';
}

const confirmAddCard = () => {
    const modal = document.getElementById('addCardModal');
    const containerId = modal.dataset.containerId;
    const newCardText = document.getElementById('newCardText').value;

    // Add the new card
    createCard(containerId, 'newCard', newCardText);

    // Close the modal
    closeAddCardModal();
}

const showAddCardModal = (containerId) => {
    const modal = document.getElementById('addCardModal');
    modal.style.display = 'block';
    modal.dataset.containerId = containerId;
}
// Additional functions or modifications can be added as needed
 