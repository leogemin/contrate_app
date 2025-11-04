import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { CustomTextField } from '../../components/TextField/TextField';
import { FormProvider, useForm } from 'react-hook-form';
import './Home.scss';

export const Home = () => {
    const methods = useForm();

    return (
        <FormProvider {...methods}>
            <div className="home">
                <h1 className="home__logo">Contrate</h1>
                <div className="home__searchbar">
                    <CustomTextField name="search" placeholder="Search..." icon={<MagnifyingGlassIcon />} />
                </div>
            </div>
        </FormProvider>
    );
};
