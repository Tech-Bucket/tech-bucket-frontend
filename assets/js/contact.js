const ShowMsg = (message) => {
	Toastify({
		text: message || 'This is a toast',
		duration: 3000,
		close: true,
		gravity: 'bottom', // `top` or `bottom`
		position: 'left', // `left`, `center` or `right`
		stopOnFocus: false,
		style: {
			background: 'white',
			color: 'black',
		},
	}).showToast();
};

const ShowSuccess = (message) => {
	Toastify({
		text: message || 'This is a toast',
		duration: 3000,
		close: true,
		gravity: 'bottom', // `top` or `bottom`
		position: 'left', // `left`, `center` or `right`
		stopOnFocus: false,
		style: {
			background: '#bff747',
			color: 'black',
		},
	}).showToast();
};

const ShowError = (message) => {
	Toastify({
		text: message || 'This is a toast',
		duration: 3000,
		close: true,
		gravity: 'bottom', // `top` or `bottom`
		position: 'left', // `left`, `center` or `right`
		stopOnFocus: false,
		style: {
			background: '#ff8080',
			color: 'white',
		},
	}).showToast();
};

function validateAndSubmitForm(event) {
	event.preventDefault();

	const name =
		document.getElementById('name').value;
	const email =
		document.getElementById('email').value;
	const phone =
		document.getElementById('phone').value;
	const message =
		document.getElementById('message').value;
	const category =
		document.getElementById('category').value ||
		'General';

	// Validation
	if (!name || !email || !phone || !message) {
		ShowError('All fields are required');
		return;
	}

	if (name.length < 1 || name.length > 50) {
		ShowError('Invalid name format');
		return;
	}

	if (
		!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
			email
		)
	) {
		ShowError('Invalid email format');
		return;
	}

	if (
		(phone.length < 10 || phone.length > 13) &&
		!/^\d+$/.test(phone)
	) {
		ShowError('Invalid phone number format');
		return;
	}

	if (message.length < 10) {
		ShowError(
			'Message should be at least 10 characters long'
		);
		return;
	}

	if (category == 'Choose') {
		ShowError('Please select a category');
		return;
	}

	// Process the form data
	console.log('Form data:', {
		name,
		email,
		phone,
		message,
	});

	ShowMsg('Sending Message');

	const data = {
		name,
		email,
		phone,
		message,
		category,
	};

	const options = {
		method: 'POST',
		url: 'https://tech-bucket-mail-api.vercel.app/',
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify(data),
	};

	axios(options)
		.then((response) => {
			if (response.data.status == 'ok') {
				ShowSuccess('Message sent successfully');
				document.getElementById('name').value = '';
				document.getElementById('email').value = '';
				document.getElementById('phone').value = '';
				document.getElementById('message').value = '';
			}
		})
		.catch(function (error) {
			console.log(error);
			ShowError('Failed to send message');
		});
}
