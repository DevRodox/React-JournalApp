import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';


const formData = {
    email: 'rodrigo@gmail.com',
    password: '123456',
    displayName: 'Rodrigo Mtz'
};

const formValidations = {
    email: [ (value) => value.includes('@') , 'El correo debe de tener un @'],
    password: [ (value) => value.length >= 6 , 'El password debe de tener mas de 6 letras'],
    displayName : [ (value) => value.length >= 1 , 'El nombre es obligatorio'],
};

export const RegisterPage = () => {

    const { formState, displayName ,email, password, onInputChange,
            isFormValid, displayNameValid,emailValid, passwordValid
    } = useForm( formData, formValidations );

    console.log( displayNameValid );

    const onSubmit = ( event )=> {
        event.preventDefault();
        console.log( formState );
    };

    return(
        <AuthLayout title='Crear Cuenta'>
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
                                error={ !displayNameValid }
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