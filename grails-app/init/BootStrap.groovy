import grails.security.Restaurant
import grails.security.Role
import grails.security.User
import grails.security.UserRole

class BootStrap {

  def init = { servletContext ->
    def admin = new User(username: 'admin', password: 'r00t!').save(flush: true, failOnError: true)
    def role = new Role(authority: 'ROLE_READ').save(flush: true, failOnError: true)
    new UserRole(user: admin, role: role).save(flush: true, failOnError: true)

    new Restaurant(name: 'Punch', city: 'Minneapolis', state: 'MN').save(flush: true, failOnError: true)
    new Restaurant(name: 'Smack Shack', city: 'Minneapolis', state: 'MN').save(flush: true, failOnError: true)
  }

  def destroy = {
  }
}
