import {Row} from 'antd';
import { Field, Form, Formik, FormikProps } from 'formik';
import React from 'react'

const CustomEditor = () => {
  return (
    <Row>
      <textarea className="my-custom-input"></textarea>
    </Row>
  )
}

export default CustomEditor