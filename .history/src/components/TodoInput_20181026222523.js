import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'

export default const ContactForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>TODOリスト</h1>
        <label htmlFor="firstName">First Name</label>
        <Field name="name" component="input" type="text" placeholder="todoを入力してください" />
      </div>
      <div>
        <label htmlFor="lastName">内容</label>
        <Field name="description" component="textarea"  />
      </div>
      <Button>追加</Button>
    </form>
  )
}



