import { FormProvider, useForm } from 'react-hook-form';
import { CustomTextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons';
import './Auth.scss';
import { Link } from 'react-router-dom';

export const Login = () => {
    const methods = useForm();

    return (
        <FormProvider {...methods}>
            <div className="auth-page">
                <div className="auth-card">
                    <h1 className="auth-card__title">Login</h1>
                    <form className="auth-card__form">
                        <CustomTextField name="email" placeholder="Email" icon={<EnvelopeClosedIcon />} />
                                <CustomTextField name="password" placeholder="Password" icon={<LockClosedIcon />} />                        <Button>Login</Button>
                    </form>
                    <p className="auth-card__link">
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </FormProvider>
    );
};
