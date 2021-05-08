export const setCookie = (cookie: string, value: string): void => {
    document.cookie = `${cookie}=${value}`;
};

export const getCookie = (cookie: string): string | null => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split('=');
        if (key === cookie) {
            return value;
        }
    }
    return null;
};
