import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Modal from "react-modal";
import { MenuItem } from "@material-ui/core";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
    },
    display: "flex",
    justifyContent: "space-between",
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
  },
}));

const genders = ["male", "female"];

const activityLevels = ["1: Lazy", "2: Normal", "3: Active"];

const MyModal = (props) => {
  const classes = useStyles();

  const { showModal, closeModal, dogBreed, dogBreedId } = props;

  const [dogInfomation, setDogInfomation] = useState({
    birthday: "",
    breed: dogBreedId,
    gender: "male",
    activityLevel: activityLevels[2],
    weight: 0,
    bodyCondition: 0,
    specialNeeds: [],
    neutered: 0,
  });

  const handleClose = () => {
    closeModal(false);
  };

  const handleChange = (event) => {
    setDogInfomation({
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={showModal}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel='Example Modal'
        ariaHideApp={false}
      >
        <h1 style={{ textAlign: "center" }}>Please fill in the form</h1>
        <form>
          <div className={classes.root}>
            <div className={classes.inputWrapper}>
              <TextField
                label='Birthday'
                type='date'
                // defaultValue='2017-05-24'
                value={dogInfomation.birthday}
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
                  <MenuItem key={level} value={level}>
                    {level}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className={classes.inputWrapper}>
              <TextField
                select
                value={dogInfomation.condition}
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
              <TextField label='Weight' />
              <TextField label='Special Needs' />
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
          <div>
            <button onClick={handleClose}>Close</button>
            <button>Save</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default MyModal;
