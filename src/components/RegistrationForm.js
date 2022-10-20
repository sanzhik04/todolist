import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';

export default function RegistrationForm() {

  return (
    <div>
    <h1 style={{
    "position": "absolute",
    "left": "50%",
    "top": "40%",
    "margin-left": "-150px",
    "margin-top": "-250px",
    }}>
    <Badge bg="primary">Регистрация</Badge>
    </h1>
    <Form  style={{
        "position": "absolute",
        "left": "50%",
        "top": "50%",
        "margin-left": "-150px",
        "margin-top": "-250px",
    }}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" >
          <Form.Label>Имя</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Имя"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" >
          <Form.Label>Фамилия</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Фамилия"
          />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Электронная почта</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Ваш email..."
            />
          </InputGroup>
        </Form.Group>
        </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="text" placeholder="Ваш пароль..." required />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Повторно введите пароль</Form.Label>
          <Form.Control type="text" placeholder="Ваш пароль..." required />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Номер телефона</Form.Label>
          <Form.Control type="text" placeholder="Ваш номер телефона..." required />
        </Form.Group>
      </Row>
      <Button type="submit">Зарегистрироваться</Button>
    </Form>
    </div>
  );
}

