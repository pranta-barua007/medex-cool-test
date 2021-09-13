const API_URL = 'http://35.201.2.209:8000';

// Login 
export async function httpLogin(email, password) {
    const response = await fetch(`${API_URL}/login`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        }
    );
    return await response.text();
};

//Devices
export async function httpGetDevices() {
    const response = await fetch(`${API_URL}/devices`);
    return await response.json();
};