import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';


function SignInForm() {
  return (
    <div>
        <h1 style={{
        "position": "absolute",
        "left": "50%",
        "top": "40%",
        "margin-left": "-150px",
        "margin-top": "-150px",
        }}>
        <Badge bg="primary">Авторизация</Badge>
        </h1>
     <Form style={{
        "position": "absolute",
        "left": "50%",
        "top": "50%",
        "margin-left": "-150px",
        "margin-top": "-150px",
        }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Введите Вашу электронную почту</Form.Label>
        <Form.Control type="email" placeholder="Ваш email..." />
        <Form.Text className="text-muted">
          Мы ни с кем не поделимся вашим электронным адресом
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Введите пароль</Form.Label>
        <Form.Control type="password" placeholder="Ваш пароль..." />
        <Form.Text className="text-muted">
          Ваш пароль должен содержать минимум 8 символов
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Запомнить меня" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
    </div>
  );
}

export default SignInForm;