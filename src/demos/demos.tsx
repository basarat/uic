import { render } from 'eze';

render({
  outputDir: __dirname + '/../../public',
  repoUrl: 'https://github.com/basarat/uic',
  title: 'UIC Styleguide',
}, async eze => {
  eze.md(`
  # Welcome to the Styleguide
  Hope you enjoy the documentation.
  `);

  eze.md(`
  # Buttons
  ## FlatButton
  `);
});
