import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyModal from '../MyModal/MyModal';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    minHeight: 240,
    maxHeight: 300,
  },
  title: {
    minHeight: 30,
  },
});

export default function MyCard({ dog, needs }) {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image='https://images.unsplash.com/photo-1543466835-00a7907e9de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit'
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom
              variant='h5'
              component='h2'
            >
              {dog.name}
            </Typography>
            <div style={{ display: 'flex' }}>
              <div>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Male
                </Typography>
                <ul>
                  <li>Min weight:{dog.male.minWeight}</li>
                  <li>Average weight:{dog.male.avgWeight}</li>
                  <li>Max weight:{dog.male.maxWeight}</li>
                </ul>
              </div>

              <div>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Female
                </Typography>
                <ul>
                  <li>Min weight:{dog.female.minWeight}</li>
                  <li>Average weight:{dog.female.avgWeight}</li>
                  <li>Max weight:{dog.female.maxWeight}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary' onClick={showModal}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <MyModal
        showModal={show}
        closeModal={closeModal}
        dogBreed={dog.name}
        dogBreedId={dog.id}
        needs={needs}
      />
    </div>
  );
}
