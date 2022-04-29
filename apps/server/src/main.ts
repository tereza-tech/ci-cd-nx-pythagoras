import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  //const x = res.sendFile(__dirname + '/assets/confluence.svg');
  res.send({
    Message: 'Welcome to server!',
    Target: 'Project Pythagoras',
    Year: 2022,
    Resources:
    { Confluence: 'https://digipedia.dq.skoda.vwg/pages/viewpage.action?spaceKey=SOMET&title=Pythagoras+project',
      Jira: 'https://jira.dq.skoda.vwg/secure/RapidBoard.jspa?rapidView=178&projectKey=EXS&view=planning&selectedIssue=EXS-1&issueLimit=100',
      GitLab: 'https://gitlab.dq.skoda.vwg/somet/example-scrum-project',
      Jenkins: 'https://jenkins.dq.skoda.vwg/job/SOMET/job/Example%20Scrum%20Project/'
    }
  });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
