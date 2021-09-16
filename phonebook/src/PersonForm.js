import React from 'react';

const PersonForm = ({ newName, newNumber, handleSubmit, handleAddName, handleAddNumber }) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					Name: <input value={newName} onChange={handleAddName} />
				</div>
				<div>
					Number: <input value={newNumber} onChange={handleAddNumber} />
				</div>
				<div>
					<button>add</button>
				</div>
			</form>
		</div>
	);
};

export default PersonForm;
