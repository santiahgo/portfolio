import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export const EmailForm = () => {
	const [startTime] = useState(Date.now());
	const [buttonDisabled, setButtonDisabled] = useState(false);

	const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
	const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
	const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

	const notify = (type: 'success' | 'error', message: string) => {
		toast[type](message, {
			position: 'bottom-left',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			draggable: false,
			progress: undefined,
			theme: 'dark', // needs to change based on website theme
		});
	};

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			subject: '',
			name: '',
			message: '',
		},
	});

	const onSubmit = (data: any) => {
		const duration = Date.now() - startTime;
		if (duration < 5000) return; // preventing spam

		const templateParams = {
			subject: data.subject,
			name: data.name,
			message: data.message,
		};

		emailjs
			.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
			.then(() => {
				notify('success', 'Email sent successfully!');
				setButtonDisabled(true);
				reset();
			})
			.catch(err => {
				notify('error', 'Something went wrong!');
				console.error(err);
			});

		setTimeout(() => setButtonDisabled(false), 5000);
	};

	return (
		<div className="bg-card-background mx-auto w-full rounded p-4 sm:p-6">
			<h2 className="text-primary-text mb-4 text-xl font-semibold sm:text-2xl">Contact Me</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-4"
				autoComplete="off"
			>
				<div className="flex flex-col">
					<label
						htmlFor="subject"
						className="text-primary-text mb-1 text-sm sm:text-base"
					>
						Subject
					</label>
					<input
						type="text"
						className="border-secondary-text text-primary-text focus:border-hover w-full rounded border p-1 text-sm outline-none sm:text-base"
						{...register('subject', { required: 'PLease enter a subject...' })}
						placeholder="Networking"
					/>
					{errors.subject && (
						<p className="mt-1 text-sm text-red-500">Please provide a subject...</p>
					)}
				</div>

				<div className="flex flex-col">
					<label htmlFor="name" className="text-primary-text mb-1 text-sm sm:text-base">
						Full Name
					</label>
					<input
						type="text"
						className="border-secondary-text text-primary-text focus:border-hover w-full rounded border p-1 text-sm outline-none sm:text-base"
						{...register('name', { required: 'Please enter your name...' })}
						placeholder="John Doe"
					/>
					{errors.name && (
						<p className="mt-1 text-sm text-red-500">Please provide your name...</p>
					)}
				</div>

				<div className="flex flex-col">
					<label
						htmlFor="message"
						className="text-primary-text mb-1 text-sm sm:text-base"
					>
						Message (max 100 characters)
					</label>
					<textarea
						{...register('message', { required: 'PLease provide details...' })}
						placeholder="I would love to connect with you!"
						className="border-secondary-text text-primary-text focus:border-hover w-full rounded border p-1 text-sm outline-none sm:text-base"
						rows={5}
						maxLength={100}
					/>
					{errors.message && (
						<p className="mt-1 text-sm text-red-500">Please provide a message...</p>
					)}
				</div>
				<button
					type="submit"
					className="border-hover text-hover hover:bg-hover hover:text-background dark:hover:text-primary-text w-full rounded border py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:cursor-pointer disabled:cursor-not-allowed sm:text-base"
					disabled={buttonDisabled}
				>
					{buttonDisabled ? 'Please wait...' : 'Send'}
				</button>
			</form>
		</div>
	);
};
