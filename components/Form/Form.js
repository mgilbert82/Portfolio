'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Lottie from 'lottie-react';
import emailAnimated from '../../public/assets/images/website/email-animated.json';
import styles from './Form.module.css';

const ContactForm = () => {
  //Variables
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //State
  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);
  //Method
  const onSubmitHandler = async (data) => {
    if (!isLoading) {
      setIsLoading(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      setIsLoading(false);

      if (!response.ok) {
        console.log('error');
      } else {
        console.log('OK');

        //set empty inputs
        reset();
        setIsSended(true);
        //Display success message
      }
    }
  };

  return (
    <div className='container'>
      {/* Animation */}
      <div className='grid grid-cols-2 gap-2'>
        <div>
          <Lottie animationData={emailAnimated} />
        </div>
        {/* Formulaire */}
        <div className='m-2'>
          <form
            className='grid grid-rows mx-auto'
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            {isSended && (
              <p>
                Votre message a bien été envoyé avec succès nous vous
                répondrons rapidement !
              </p>
            )}
            <div className='grid grid-cols-2 gap-2'>
              <input
                type='text'
                id='name'
                {...register('name', { required: true })}
                placeholder='votre prénom'
                className='bg-blue p-2 text-white rounded mb-2 placeholder:text-pink'
              />

              <input
                type='text'
                id='surname'
                {...register('surname', { required: true })}
                placeholder='votre nom'
                className='bg-blue p-2 text-white rounded mb-2 placeholder:text-pink'
              />
            </div>
            {errors.name && (
              <small className='m-2 text-yellow'>
                Vous avez oublié de saisir votre prénom
              </small>
            )}
            {errors.surname && (
              <small className='m-2 text-yellow'>
                Vous avez oublié de saisir votre nom
              </small>
            )}
            <input
              type='email'
              id='email'
              {...register('email', { required: true })}
              placeholder='votre adresse email'
              className='bg-blue p-2 text-white rounded mb-2 placeholder:text-pink'
            />
            {errors.email && (
              <small className='m-2 text-yellow'>
                Vous avez oublié de saisir votre email
              </small>
            )}
            <textarea
              id='content'
              {...register('content', { required: true })}
              cols='30'
              rows='8'
              className='bg-blue p-2 text-white rounded mb-4 placeholder:text-pink'
              placeholder='Bonjour ...
            '
            />
            {errors.content && (
              <small className='m-2 text-yellow'>
                Vous avez oublié de saisir votre message
              </small>
            )}
            {!isLoading && (
              <button
                className='p-2 mx-auto rounded-xl border-2 text-pink'
                type='submit'
              >
                Envoyer
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
