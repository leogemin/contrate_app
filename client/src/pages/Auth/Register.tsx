import { FormProvider, useForm } from 'react-hook-form';
import { CustomTextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons';
import './Auth.scss';
import { Link } from 'react-router-dom';

export const Register = () => {
    const methods = useForm();

    return (
        <FormProvider {...methods}>
            <div className="auth-page">
                <div className="auth-card">
                    <h1 className="auth-card__title">Register</h1>
                    <form className="auth-card__form">
                        <CustomTextField name="name" placeholder="Name" icon={<PersonIcon />} />
                                <CustomTextField name="email" placeholder="Email" icon={<EnvelopeClosedIcon />} />
                                <CustomTextField name="password" placeholder="Password" icon={<LockClosedIcon />} />
                                <CustomTextField name="confirmPassword" placeholder="Confirm Password" icon={<LockClosedIcon />} />                        <Button>Register</Button>
                    </form>
                     <p className="auth-card__link">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </FormProvider>
    );
};
