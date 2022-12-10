import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
export default function ConfirmPassword() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is mendatory')
      .min(3, 'Password must be at 3 char long'),
    confirmPwd: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4))
    return false
  }
  return (
    <div className="container mt-5">
      <h2>React Confirm Password Validation Example</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
        <input
            placeholder='First Name'
            name="firstName"
            type="firstName"
            {...register('firstName')}
            className={`form-control ${errors.fistName ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.firtName?.message}</div>
          </div>
          <div className="form-group">
           <input
            placeholder='Last Name'
            name="lastName"
            type="lastName"
            {...register('lastName')}
            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
          />
          </div>
          <div className="form-group">
           <input
            placeholder='Phone Number'
            name="phoneNumber"
            type="number"
            {...register('phoneNumber')}
            className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
          />
          </div>
          <div className="form-group">
           <input
            placeholder='Email'
            name="email"
            type="email"
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}

          />
          </div>
          <div className="form-group">
          <input
            placeholder='Password'
            name="password"
            type="password"
            pattern="[a-z0-5]{8,}" 
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group">
        
          <input
          placeholder='Confirm Password'
            name="confirmPwd"
            type="password"
            {...register('confirmPwd')}
            className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}