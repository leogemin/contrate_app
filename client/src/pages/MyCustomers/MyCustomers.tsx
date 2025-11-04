import { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import './MyCustomers.scss';
import { Link } from 'react-router-dom';

const customers = [
    {
        id: 1,
        name: 'John Doe',
        processes: [
            { id: 1, name: 'Process A', status: 'In Progress' },
            { id: 2, name: 'Process B', status: 'Completed' },
        ],
    },
    {
        id: 2,
        name: 'Jane Smith',
        processes: [
            { id: 3, name: 'Process C', status: 'Open' },
        ],
    },
];

export const MyCustomers = () => {
    const [openCustomerId, setOpenCustomerId] = useState<number | null>(null);

    const toggleCustomer = (id: number) => {
        setOpenCustomerId(openCustomerId === id ? null : id);
    };

    return (
        <div className="my-customers">
            <h1>My Customers</h1>
            <div className="customer-list">
                {customers.map((customer) => (
                    <div key={customer.id} className="customer-item">
                        <div className="customer-item__header" onClick={() => toggleCustomer(customer.id)}>
                            <span>{customer.name}</span>
                            {openCustomerId === customer.id ? <ChevronDownIcon /> : <ChevronRightIcon />}
                        </div>
                        {openCustomerId === customer.id && (
                            <div className="customer-item__processes">
                                {customer.processes.map((process) => (
                                    <Link to={`/process/${process.id}`} key={process.id} className="process-link">
                                        <span>{process.name}</span>
                                        <span>{process.status}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
