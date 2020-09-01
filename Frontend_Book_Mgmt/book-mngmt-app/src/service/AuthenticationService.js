
class AuthenticationService {

    registerSuccessfulLogin(username){
        //store the data in sessionStorage of browser
        sessionStorage.setItem('TEST', username)
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('TEST')
        if (user === null) return false
        return true
    }

    logout() {
        sessionStorage.removeItem('TEST');
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('TEST')
        if (user === null) return ''
        return user
    }
    
}

export default new AuthenticationService()