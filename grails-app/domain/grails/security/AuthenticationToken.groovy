package grails.security

class AuthenticationToken {

    String tokenValue
    String username

    static mapping = {
        version false
    }
}
