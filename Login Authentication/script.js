let users = JSON.parse(localStorage.getItem('users')) || [];

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (users.find(user => user.username === username)) {
        document.getElementById('register-error').textContent = "User already exists!";
        return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('register-success').textContent = "Registration successful!";
    document.getElementById('register-username').value = '';
    document.getElementById('register-password').value = '';
    document.getElementById('register-error').textContent = '';
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('secured-page').style.display = 'block';
        document.getElementById('login-error').textContent = '';
    } else {
        document.getElementById('login-error').textContent = "Invalid username or password!";
    }
}

function logout() {
    document.getElementById('secured-page').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-success').textContent = '';
    document.getElementById('register-error').textContent = '';
}

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-error').textContent = '';
}
