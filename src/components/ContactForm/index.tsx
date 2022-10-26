import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'

import { AiOutlineClose } from 'react-icons/ai'
import Button from '../Button'

import { ContactFormContainer, BlurContainer } from './styles'

interface IContactFormProps {
  onClose: () => void
}

interface IFormInputs extends Record<string, unknown> {
  fullName: string
  email: string
  message: string
}

const formSchema = yup
  .object({
    fullName: yup.string().required(),
    email: yup.string().required(),
    message: yup.string().required(),
  })
  .required()

const ContactForm: React.FC<IContactFormProps> = ({ onClose }) => {
  const [emailText, setEmailText] = useState<string>('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(formSchema),
  })

  const sendEmail = (formData: IFormInputs) => {
    // e.preventDefault()
    emailjs
      .send(
        'service_nntplnd',
        'template_rk4vxrw',
        formData,
        'YBCo3LFhyLOhmYRci'
      )
      .then(
        (result) => {
          setEmailText(result.text)
        },
        (error) => {
          setEmailText(error.text)
        }
      )
  }

  // const onSubmit = (data: IFormInputs) => console.log(data)

  return (
    <BlurContainer>
      <ContactFormContainer onSubmit={handleSubmit(sendEmail)}>
        <AiOutlineClose id="close" onClick={onClose} size={18} />
        <label htmlFor="fullName">Name</label>
        <input type="text" id="fullName" {...register('fullName')} />
        {errors.fullName && <p>Name is required</p>}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')} />
        {errors.email && <p>Email is required</p>}
        <label htmlFor="message">Message</label>
        <textarea rows={3} id="message" {...register('message')} />
        {errors.message && <p>Message is required</p>}
        <Button title="Send" secondary type="submit" />
        <p>{emailText}</p>
      </ContactFormContainer>
    </BlurContainer>
  )
}

export default ContactForm
