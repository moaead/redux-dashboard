import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Alert, Button, Col, Row} from "react-bootstrap";
import {RenderText} from "../../../layout/InputComponents";
import {required, validEmail} from "../../../utils/validations";

const LoginForm = props => {
    const {handleSubmit, error} = props;
    return (
        <form onSubmit={handleSubmit} className="form-horizontal">
            <Row>
                <Col md={10} mdPush={2}>
                    {error && <Alert bsStyle="danger">
                        {error}
                    </Alert>}
                </Col>
            </Row>
            <div>
                <Field name="email" component={RenderText} type="email"
                       labelSize={2}
                       validate={[required, validEmail]}
                       label="Email"/>
                <Field name="password" component={RenderText} type="password"
                       labelSize={2}
                       validate={[required]}
                       label="Password"/>
                <Row>
                    <Col md={6} mdPush={2}>
                        <Button type="submit">Login</Button>
                    </Col>
                </Row>

            </div>
        </form>
    )
};

export default reduxForm({
    form: 'login'
})(LoginForm)
