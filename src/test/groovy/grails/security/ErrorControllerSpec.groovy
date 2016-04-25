package grails.security

import grails.converters.JSON
import grails.test.mixin.TestFor
import spock.lang.Specification

@TestFor(ErrorController)
class ErrorControllerSpec extends Specification {

  void 'returns proper internal server error'() {

    when:
    controller.internalServerError()
    def payload = JSON.parse(response.text)

    then:
    response.contentType == 'application/json;charset=UTF-8'
    response.status == 500
    payload == [error: 500, message: 'Internal server error']
  }

  void 'returns proper not found error'() {

    when:
    controller.notFound()
    def payload = JSON.parse(response.text)

    then:
    response.contentType == 'application/json;charset=UTF-8'
    response.status == 404
    payload == [error: 404, message: 'Not found']
  }

  void 'returns proper forbidden error'() {

    when:
    controller.forbidden()
    def payload = JSON.parse(response.text)

    then:
    response.contentType == 'application/json;charset=UTF-8'
    response.status == 403
    payload == [error: 403, message: 'Forbidden']
  }

  void 'returns proper unauthorized error'() {

    when:
    controller.unauthorized()
    def payload = JSON.parse(response.text)

    then:
    response.contentType == 'application/json;charset=UTF-8'
    response.status == 401
    payload == [error: 401, message: 'Unauthorized']
  }
}
