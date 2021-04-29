import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Chip } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MySlider from '../../components/MySlider/MySlider';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      fontSize: 16,
      marginBottom: 4,
    },
    picture: {
      overflow: 'hidden',
    },
    breedData: {
      '& > p': { marginBottom: 4 },
      fontSize: 14,
      marginLeft: 8,
      display: 'flex',
      flexDirection: 'column',
      marginTop: 4,
    },
    chip: {
      margin: 8,
    },
    text: {
      fontSize: 12,
    },
  }),
);

const Purchase = (props) => {
  const classes = useStyles();
  const { dogFetchedData } = props.location.state;
  const [dataFromProp, setDataFromProp] = useState(null);

  const handleClick = () => {};

  useEffect(() => {
    setDataFromProp(dogFetchedData);
  }, []);

  return (
    <div className={classes.root}>
      {dataFromProp ? (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Here are some information about your beloved Doggo</h1>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Breed data:
              <div className={classes.breedData}>
                <p>ID: {dataFromProp.breedData.id}</p>
                <p>Name: {dataFromProp.breedData.name}</p>
                <p>
                  Male:{' '}
                  <ul>
                    <li>Max weight: {dataFromProp.breedData.male.maxWeight}</li>
                    <li>
                      Average weight: {dataFromProp.breedData.male.avgWeight}
                    </li>
                    <li>Min weight: {dataFromProp.breedData.male.minWeight}</li>
                  </ul>
                </p>
                <p>
                  Female:{' '}
                  <ul>
                    <li>
                      Max weight: {dataFromProp.breedData.female.maxWeight}
                    </li>
                    <li>
                      Average weight: {dataFromProp.breedData.female.avgWeight}
                    </li>
                    <li>
                      Min weight: {dataFromProp.breedData.female.minWeight}
                    </li>
                  </ul>
                </p>
              </div>
            </Paper>
            <Paper className={classes.paper}>
              Gender: {dataFromProp.gender}
            </Paper>
            <Paper className={classes.paper}>
              Age in month: {dataFromProp.ageInMonths}
            </Paper>
            <Paper className={classes.paper}>
              Age in year: {dataFromProp.ageInYears}
            </Paper>
            <Paper className={classes.paper}>
              Activity level: {dataFromProp.activityLevel}
            </Paper>
            <Paper className={classes.paper}>
              Grams food per day: {dataFromProp.gramsFoodPerDay} kg
            </Paper>
            <Paper className={classes.paper}>
              KCAL: {dataFromProp.kcal} kg
            </Paper>
            <Paper className={classes.paper}>
              Metabolic weight: {dataFromProp.metabolicWeight} kg
            </Paper>
            <Paper className={classes.paper}>
              Neutered: {dataFromProp.neutered} kg
            </Paper>
          </Grid>
          <Grid item xs={6} className={classes.picture}>
            <img
              style={{ width: '100%' }}
              src='https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit'
              alt='doggo'
            />
          </Grid>

          <Grid item xs={12}>
            <h2>
              Best product for your buddy based on our calculation and your
              special requirements
            </h2>
          </Grid>
          <Grid item xs={6} className={classes.picture}>
            <img
              style={{ width: '100%' }}
              src='https://images.unsplash.com/photo-1612956331286-cec478562654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE5NjQ0MjY2&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit'
              alt='dogfood'
            />
            <div className={classes.chip}>
              Special needs:{' '}
              {dataFromProp.specialNeeds.map((need, i) => (
                <Chip key={i} label={need} onClick={handleClick} />
              ))}
            </div>
            <div className='btn-group '>
              <button
                className='btn btn-secondary btn-lg dropdown-toggle'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Prices
              </button>
              <ul
                className='dropdown-menu'
                style={{ overflowY: 'scroll', height: 120 }}
              >
                {dataFromProp.product.prices.map((price, i) => (
                  <li key={i} style={{ cursor: 'pointer' }}>
                    {price.kg} kg: {price.euro}€
                    <hr className='dropdown-divider'></hr>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              {dataFromProp.product.title}
            </Paper>
            <Paper className={classes.paper}>
              Description: {dataFromProp.product.description}
            </Paper>
            <Paper className={classes.paper}>
              Type: {dataFromProp.product.type}
            </Paper>
            <Paper className={classes.paper} component={'div'}>
              Nutrition:
              <ul>
                {dataFromProp.product.nutritionLists.map((nutri, i) => (
                  <li key={i}>
                    {nutri.title}
                    <p style={{ fontSize: 12 }}>{nutri.list}</p>
                  </li>
                ))}
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <h1>Other related product</h1>
          </Grid>
          <Grid item xs={6}>
            <MySlider />
          </Grid>
          <Grid item xs={6}>
            {dataFromProp.alternativeProducts.map((product) => (
              <Accordion key={product.id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography className={classes.heading}>
                    {product.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {product.nutritionLists.map((nutrition, i) => (
                      <li key={i}>{nutrition.list}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      ) : (
        <h1>Please go back</h1>
      )}
    </div>
  );
};

export default Purchase;
