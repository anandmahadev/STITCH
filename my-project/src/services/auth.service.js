export function login(email, password) {
    return Promise.resolve({
        token: "demo-token",
        email,
        hasPassword: Boolean(password)
    });
}