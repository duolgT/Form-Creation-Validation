// 1. Define the async function
async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Example API
  const dataContainer = document.getElementById('api-data');

  try {
    // 2. Fetch the data
    const response = await fetch(apiUrl);
    const users = await response.json();

    // 3. Clear any existing content (like "Loading user data...")
    dataContainer.innerHTML = '';

    // 4. Create a <ul> to hold user names
    const userList = document.createElement('ul');

    // 5. Loop through users and create <li> for each
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // 6. Append the full <ul> to the container
    dataContainer.appendChild(userList);

  } catch (error) {
    // 7. Error handling: clear container and show error message
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Fetch error:', error);
  }
}

// 8. Run fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
