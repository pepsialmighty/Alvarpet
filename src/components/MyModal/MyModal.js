import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from 'react-modal';
import { MenuItem, Button } from '@material-ui/core';
import axios from 'axios';

import { BASE_URL } from '../../utils/paths';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  buttons: {
    display: 'flex',
    minWidth: 240,
    justifyContent: 'space-around',
  },
}));

const genders = ['male', 'female'];

const activityLevels = [
  {
    id: 1,
    status: 'Lazy',
  },
  {
    id: 2,
    status: 'Normal',
  },
  {
    id: 3,
    status: 'Active',
  },
];

const MyModal = (props) => {
  const classes = useStyles();

  const { showModal, closeModal, dogBreed, dogBreedId, needs } = props;

  const [dogInfomation, setDogInfomation] = useState({
    birthday: '2015-12-01',
    breed: dogBreedId,
    gender: 'male',
    activityLevel: activityLevels[2],
    weight: 0,
    bodyCondition: 1,
    specialNeeds: [],
    neutered: 0,
  });
  const [specialNeeedOptions, setSpecialNeeedOptions] = useState([]);
  const [dogFetchedData, setDogFetchedData] = useState(null);

  const handleClose = () => {
    closeModal(false);
  };

  const handleChange = (event) => {
    if (event.target.name === 'specialNeeds') {
      setSpecialNeeedOptions([...specialNeeedOptions, event.target.value]);
    }
    setDogInfomation({
      ...dogInfomation,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      const value = dogInfomation.specialNeeds.map((val) => {
        return `"${val}"`;
      });
      const url = `${BASE_URL}?breed=${dogBreedId}&gender=${dogInfomation.gender}&birthday=${dogInfomation.birthday}&activityLevel=${dogInfomation.activityLevel}&weight=${dogInfomation.weight}&bodyCondition=${dogInfomation.bodyCondition}&specialNeeds=[${value}]&neutered=${dogInfomation.neutered}`;
      const { data } = await axios.get(url);
      setDogFetchedData(data);
    };
    fetchData();
    console.log('jiji');
  };

  useEffect(() => {
    setDogInfomation({ ...dogInfomation, specialNeeds: specialNeeedOptions });
  }, [specialNeeedOptions]);

  return (
    <div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel='Example Modal'
        ariaHideApp={false}
      >
        <h1 style={{ textAlign: 'center' }}>Please fill in the form</h1>
        <form onSubmit={handleSubmit}>
          <div className={classes.root}>
            <div className={classes.inputWrapper}>
              <TextField
                id='date'
                label='Birthday'
                type='date'
                name='birthday'
                value={dogInfomation.birthday}
                onChange={handleChange}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              ></TextField>
              <TextField value={dogBreed} label='Breed'></TextField>
              <TextField
                select
                value={dogInfomation.gender}
                onChange={handleChange}
                name='gender'
                label='Gender'
              >
                {genders.map((gender) => (
                  <MenuItem key={gender} value={gender}>
                    {gender}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                value={dogInfomation.activityLevel}
                onChange={handleChange}
                name='activityLevel'
                label='Activity Level'
              >
                {activityLevels.map((level) => (
                  <MenuItem key={level.id} value={level.id}>
                    {level.id}:{level.status}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className={classes.inputWrapper}>
              <TextField
                select
                value={dogInfomation.bodyCondition}
                onChange={handleChange}
                name='bodyCondition'
                label='Body Condition'
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((condition) => (
                  <MenuItem key={condition} value={condition}>
                    {condition}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                value={dogInfomation.weight}
                onChange={handleChange}
                name='weight'
                label='Weight'
              />
              <TextField
                select
                value={dogInfomation.specialNeeds}
                helperText={specialNeeedOptions}
                onChange={handleChange}
                name='specialNeeds'
                label='Special Needs'
              >
                {needs.map((need) => (
                  <MenuItem key={need.key} value={need.name}>
                    {need.title}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                value={dogInfomation.neutered}
                onChange={handleChange}
                name='neutered'
                label='Neutered'
              >
                {[0, 1].map((neuter) => (
                  <MenuItem key={neuter} value={neuter}>
                    {neuter}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div className={classes.buttons}>
            <Button variant='contained' onClick={handleClose}>
              Close
            </Button>
            <Button variant='contained' type='submit'>
              Save
            </Button>
            {dogFetchedData && (
              <Link
                to={{
                  pathname: '/purchase',
                  state: {
                    dogFetchedData,
                  },
                }}
                style={{ textDecoration: 'none' }}
              >
                <Button variant='contained'>Continue buying</Button>
              </Link>
            )}
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default MyModal;
