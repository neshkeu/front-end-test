import React from 'react'
import useForm from "./useForm"
import validate from "./validateInfo"
import "./Contact.css"
const FormSendMail = ({ submitForm }) => {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <div className='form-content'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    Imate pohvalu, pitanje ili reklamaciju? <br></br>
                    Pošaljite nam poruku!
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Ime i prezime:</label>
                    <input
                        className='form-input'
                        type='text'
                        name='name'
                        placeholder='Unesite ime i prezime'
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Email:</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Unesite e-mail adresu'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Poruka:</label>
                    <textarea className='form-input'
                        type='text'
                        name='message'
                        placeholder='Unesite poruku..' cols='30' rows='60'
                        value={values.message}
                        onChange={handleChange}
                    ></textarea>

                    {errors.message && <p>{errors.message}</p>}
                </div>
                <button className='form-input-btn' type='submit'>
                    Pošalji
            </button>
            </form>
        </div>
    );
};

export default FormSendMail;