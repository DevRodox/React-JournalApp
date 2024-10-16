import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Google, TryRounded } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';


const formData = {
    email: '',
    password: '',
    displayName: ''
};

const formValidations = {
    email: [ (value) => value.includes('@') , 'El correo debe de tener un @'],
    password: [ (value) => value.length >= 6 , 'El password debe de tener mas de 6 letras'],
    displayName : [ (value) => value.length >= 1 , 'El nombre es obligatorio'],
};

export const RegisterPage = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { formState, displayName ,email, password, onInputChange,
            isFormValid, displayNameValid,emailValid, passwordValid
    } = useForm( formData, formValidations );

    const onSubmit = ( event )=> {
        event.preventDefault();
        setFormSubmitted(true);
        console.log( formState );
    };

    return(
        <AuthLayout title='Crear Cuenta'>
            <h1>FormValid: {isFormValid ? 'Valido' : 'Incorrecto' }</h1>
                <form onSubmit={ onSubmit }>

                    <Grid container>

                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField 
                                label='Nombre Completo' 
                                type='text' 
                                placeholder='Nombre Completo'
                                fullWidth
                                name='displayName'
                                value={ displayName }
                                onChange={ onInputChange }
                                error={ !!displayNameValid && formSubmitted }
                                helperText={ displayNameValid }
                            />
                        </Grid>

                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField 
                                label='Correo' 
                                type='email' 
                                placeholder='correo@google.com'
                                fullWidth
                                name='email'
                                value={ email }
                                onChange={ onInputChange }
                                error={ !!emailValid && formSubmitted }
                                helperText={ emailValid }
                            />
                        </Grid>

                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField 
                                label='Contraseña' 
                                type='password' 
                                placeholder='Contraseña'
                                fullWidth
                                name='password'
                                value={ password }
                                onChange={ onInputChange }
                                error={ !!passwordValid && formSubmitted }
                                helperText={ passwordValid }
                            />
                        </Grid>

                        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={ 12 }>
                                <Button type='submit' variant='contained' fullWidth>
                                    Crear Cuenta
                                </Button>
                            </Grid>

                            <Grid container direction='row' justifyContent='end' sx={{ mt: 1 }}>
                                <Typography sx={{ mr: 1 }} >Ya tienes cuenta?</Typography>
                                <Link  component={ RouterLink } color='inherit' to='/auth/login'>
                                    Ingresar
                                </Link>
                            </Grid>

                        </Grid>

                    </Grid>

                </form>
        </AuthLayout>
    );
};