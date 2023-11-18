export default function getAuth() {
    const userInfo = JSON.parse(localStorage.getItem('user'))
    return {
        auth: {username: userInfo.username, password: userInfo.password}
    }
}