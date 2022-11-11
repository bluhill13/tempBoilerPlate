import React from 'react';
import { messages } from './loginForm.i18n';
import { Container, Row, Col, Form } from 'react-bootstrap';
import styled from 'styled-components';
import LocaleContext from '../../../context/LocaleContext';
import { FieldError } from '../../../components/formcomponents/FormHelpers';
import { OrangeButton } from '../../../components/formcomponents/AdeccoButtons';
import { PasswordWithReveal } from '../../../components/formcomponents/passwordReveal/PasswordWithReveal';

// Fordi Jumbotron ikke virket etter oppgradering
const JamboTron = styled.div`
	padding: 2rem 1rem;
	margin-bottom: 2rem;
	background-color: #e9ecef;
	border-radius: 0.3rem;
`;

interface LoginFormProps {
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
	submitHandler: React.FormEventHandler<HTMLFormElement>;
	submitGlemtPassordHandler: (e: any) => void;
	hasError: (field: string) => boolean;
	authError: string;
	username: string;
	password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
	handleChange,
	submitHandler,
	hasError,
	authError,
	username,
}) => {
	const locale = React.useContext(LocaleContext);
	const { EmailCap, EmailErr, PassCap, PassErr, SubButCap } = messages[locale];

	return (
		<>
			{/* 
      {(hasError("email") || hasError("password") || (authError)) && (
          <Alert variant="danger">
            {(authError) ? <span>Kunne ikke logge på med brukerid og passord oppgitt. </span> : ""}
            {FormNotValidErr}
        </Alert>
      )}
      */}

			<JamboTron style={{ maxWidth: '1000px' }}>
				<Container fluid="md"></Container>
				<Form onSubmit={submitHandler}>
					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={2}>
							{EmailCap}
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								className="col-md2"
								type="email"
								placeholder=""
								name="email"
								value={username}
								onChange={handleChange}
							/>
							{hasError('email') && <FieldError>{EmailErr}</FieldError>}
						</Col>
					</Form.Group>
					&nbsp;
					<Form.Group as={Row} controlId="formHorizontalPassword">
						<Form.Label column sm={2}>
							{PassCap}
						</Form.Label>
						<Col sm={10}>
							<PasswordWithReveal handleChange={handleChange} />
							{hasError('password') && <FieldError>{PassErr}</FieldError>}
						</Col>
					</Form.Group>
					&nbsp;
					<Form.Group as={Row}>
						<Col sm={{ span: 10, offset: 2 }}>
							<OrangeButton type="submit"> {SubButCap}</OrangeButton>&nbsp;
							<OrangeButton>Glemt passord</OrangeButton>
						</Col>
					</Form.Group>
				</Form>
			</JamboTron>
		</>
	);
};

export default LoginForm;
