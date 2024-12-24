export async function apiRequest(url, method, body, tgId) {

    const headers = new Headers();
    headers.append("accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("X-Auth-Token",  tgId ? `${tgId}` : `tg:844536969`);

    console.log(headers, 'response')

    console.log(tgId ? `${tgId}` : `tg:844536969`, 'headers')

    let session = await localStorage.getItem('session');

    if (session) {
        headers.append("X-Otp-Auth-Token",  `${session}`);
    }

    console.log(session, 'session')

    const options = {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
        redirect: 'follow',
        credentials: 'include'
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) {
            return {
                error: {
                    response: data
                }
            };
        }
        return {
            data
        };
    } catch (error) {
        return {
            error: {
                message: error.message || "Something went wrong",
                response: null // нет ответа от API
            }
        };
    }
}

export async function apiRequestFormData(url, method, body, tgId) {

    const headers = new Headers();
    // headers.append("accept", "application/json");
    // headers.append("Content-Type", "multipart/form-data");
    headers.append("X-Auth-Token",  tgId ? `${tgId}` : `tg:844536969`);

    const options = {
        method,
        headers,
        body: body,
        redirect: 'follow',
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) {
            return {
                error: {
                    response: data
                }
            };
        }
        return {
            data
        };
    } catch (error) {
        return {
            error: {
                message: error.message || "Something went wrong",
                response: null // нет ответа от API
            }
        };
    }
}

