import {Col, ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import React from "react";

export const RenderText = ({required, input, matchError, label, validationid, placeholder, className, type, name, labelSize = 2, meta: {touched, error}}, disabled) => (
    <FormGroup>
        <Col componentClass={ControlLabel} sm={labelSize}>
            {label}
        </Col>
        <Col sm={12 - labelSize}>
            <FormControl className={className} type={type}
                         placeholder={placeholder || label} {...input}/>
            {touched && error && <span className="react-field-error">{error}</span>}

        </Col>
    </FormGroup>

);
