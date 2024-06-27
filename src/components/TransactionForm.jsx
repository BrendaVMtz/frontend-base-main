
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const TransactionForm = () => {
//   const [task, setTask] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (task.trim()) {
//       setTask('');
//     }
//   };

  return (
    <form /*onSubmit={handleSubmit}*/ style={{ marginBottom: '20px' }}>
      <TextField
        label="Enter Task"
        variant="outlined"
        fullWidth
        style={{ marginRight: '10px' }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Task
      </Button>
    </form>
  );
};

export default TransactionForm;
