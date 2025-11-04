import { FormProvider, useForm } from 'react-hook-form';
import { CustomTextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import './MyProfile.scss';

export const MyProfile = () => {
    const methods = useForm({
        defaultValues: {
            name: 'John Doe',
            email: 'john.doe@example.com',
        }
    });

    return (
        <FormProvider {...methods}>
            <div className="my-profile">
                <h1>My Profile</h1>
                <form className="profile-form">
                    <CustomTextField name="name" placeholder="Name" />
                            <CustomTextField name="email" placeholder="Email" />                    <Button>Save</Button>
                </form>
            </div>
        </FormProvider>
    );
};
