import React, { useState } from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { toast } from 'react-toastify';
import styles from './index.module.css'
import clsx from 'clsx';

export default function LoginPanel() {

    const INIT = 'INIT';
    const SUBMITTING = 'SUBMITTING';
    const SUCCESS = 'SUCCESS';

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [formState, setFormState] = useState(INIT);
    const [errorMessage, setErrorMessage] = useState('');

    const SignUpFormError = (errorMessage?: string) =>
        toast.error(errorMessage || 'Oops! Something went wrong, please try again');

    const isValidEmail = (email: string) => {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email,
        );
        // return true;
    };

    /**
     * Rate limit the number of submissions allowed
     * @returns {boolean} true if the form has been successfully submitted in the past minute
     */
    const hasRecentSubmission = () => {
        const time = new Date();
        const timestamp = time.valueOf();
        const previousTimestamp = localStorage.getItem('loops-form-timestamp');

        // Indicate if the last sign up was less than a minute ago
        if (
            previousTimestamp &&
            Number(previousTimestamp) + 60 * 1000 > timestamp
        ) {
            setErrorMessage('Too many signups, please try again in a little while');
            SignUpFormError(errorMessage);
            return true;
        }

        localStorage.setItem('loops-form-timestamp', timestamp.toString());
        return false;
    };

    const resetForm = () => {
        setEmail('');
        setFormState(INIT);
        setErrorMessage('');
    };

    const handleSubmit = (event: any) => {
        // Prevent the default form submission
        event.preventDefault();

        // boundary conditions for submission
        if (formState !== INIT) return;
        if (!isValidEmail(email)) {
            setErrorMessage('Please enter a valid email');
            SignUpFormError(errorMessage);
            return;
        }
        if (hasRecentSubmission()) return;
        setFormState(SUBMITTING);

        // build body
        const formBody = `userGroup=${encodeURIComponent(
            'Waitlist-Login',
        )}&email=${encodeURIComponent(email)}&firstName=${encodeURIComponent(
            firstName,
        )}&lastName=${encodeURIComponent(lastName)}`;

        // API request to add user to newsletter
        fetch(
            `https://app.loops.so/api/newsletter-form/cl7hzfqge458409jvsbqy93u9`,
            {
                method: 'POST',
                body: formBody,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            },
        )
            .then((res: any) => {
                if (res) {
                    resetForm();
                    setFormState(SUCCESS);
                } else {
                    setErrorMessage(res.statusText);
                    localStorage.setItem('loops-form-timestamp', '');
                    SignUpFormError(errorMessage);
                }
            })
            .catch((error) => {
                // check for cloudflare error
                if (error.message === 'Failed to fetch') {
                    setErrorMessage(
                        'Too many signups, please try again in a little while',
                    );
                    SignUpFormError(errorMessage);
                } else if (error.message) {
                    setErrorMessage(error.message);
                    SignUpFormError(errorMessage);
                }
                localStorage.setItem('loops-form-timestamp', '');
            });
    };
    const { siteConfig } = useDocusaurusContext();
    return (
        <section className={styles.background}>
            <div className='login-panel'>
                <div className={styles.loginPanel}>
                    <div className={styles.loginPanel__logo}>
                        <img
                            className={styles.logo}
                            src='img/openline.svg'
                            alt='Openline'
                            height={60}
                            width={170}
                        />
                    </div>

                    {formState === SUCCESS && (
                        <>
                            <div className='text-800 font-medium line-height-3 text-center py-8'>
                                Thanks for joining the waitlist - you should have a welcome
                                email in your inbox already!
                            </div>
                            <div className='pt-5 text-center'>
                                <a
                                    className='font-medium no-underline ml-2 text-blue-500 cursor-pointer text-sm'
                                    href='https://www.openline.ai'
                                >
                                    Head back to the Openline website!
                                </a>
                            </div>
                        </>
                    )}

                    {formState === INIT && (
                        <>
                            <form onSubmit={handleSubmit}>
                                <label
                                    htmlFor='firstName'
                                    className='block text-600 font-medium mb-2 text-sm'
                                >
                                    First Name
                                </label>
                                <input
                                    type='firstName'
                                    className='w-full mb-3'
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <br></br>
                                <label
                                    htmlFor='lastName'
                                    className='block text-600 font-medium mb-2 text-sm'
                                >
                                    Last Name
                                </label>
                                <input
                                    type='lastName'
                                    className='w-full mb-3'
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <br></br>
                                <label
                                    htmlFor='email'
                                    className='block text-600 font-medium mb-2 text-sm'
                                >
                                    Email
                                </label>
                                <input
                                    id='email'
                                    type='text'
                                    className='w-full mb-6'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <br></br>
                                <input
                                    type='submit'
                                    className={clsx('button button--primary', styles.button)}
                                    value='Join the Waitlist'
                                />
                            </form>
                            <div className={styles.oryInfoSection}>
                                <a href='/' style={{ color: '#9E9E9E', textDecoration: 'none' }}>
                                    Powered by
                                    <img
                                        src='img/openline_gray.svg'
                                        alt='Openline'
                                        height={30}
                                        width={30}
                                        style={{ verticalAlign: 'middle' }}
                                    />
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

