import React from 'react';
import { Grid, Typography, ListItem, Container, } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item>
          <Typography>© 2020 - Leonardo Jardim Ribeiro</Typography>
        </Grid>
        <Grid item>
          <ListItem button component="a" href="https://github.com/LeonardoJRibeiro/LeonardoJRibeiro.github.io" target="_blank">
            <Grid container justify="center" alignItems="center" spacing={1}>
              <Grid item>
                <GitHubIcon />
              </Grid>
              <Grid item>
                <Typography>Ver o código fonte desse página.</Typography>
              </Grid>
            </Grid>
          </ListItem>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;