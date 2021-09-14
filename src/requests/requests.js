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
    return response;
};

//Devices
export async function httpGetDevices() {
    const response = await fetch(`${API_URL}/devices`);
    return await response.json();
};

//Notify
export async function httpPostNotify(notifyData) {
    const token = window.localStorage.getItem('token');
    const {name, email, repoUrl, message} = notifyData;
    const response = await fetch(`${API_URL}/notify`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: name,
            email: email,
            repoUrl: repoUrl,
            message: message
        })
    });

    return response;
};