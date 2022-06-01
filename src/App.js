
import './App.css';
import Card from './components/Card/Card';
import { H1, H3, P, Span, Number } from './components/Typography/Typography';
import ModeBtn from './components/ModeBtn/ModeBtn';
import Nav from './components/Nav/Nav';
import { Div, Row, Section } from './components/Grid/Grid';
import data from "./data/data.json";

function App() {

  return (
    <div className="App">
      <Section>
        <Nav>
          <Div>
            <H1>Social Media Dashboard</H1>
            <P>Total Followers: <Span>23,004</Span></P>
          </Div>
          <Div>
            <Row>
            <P>Dark Mode</P>
            <ModeBtn></ModeBtn>
            </Row>
          </Div>
        </Nav>
        <Row>
          <Card big>
              <Row>
                <Span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg></Span>
                <P>{data[0].facebook.user}</P>
              </Row>
                <Number>{data[0].facebook.followers}</Number>
                <H3>Followers</H3>
                <Row>
                  <Span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg></Span>
                  <P>{data[0].facebook.num} Today</P>
                </Row> 
          </Card>
        </Row>
        <H1>Overview - Today</H1>
          <Row>
          <Card>
          <Row>
            <P>Page Views</P>
            <Span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg></Span>
          </Row>
            <Row>
              <H1>87</H1>
              <Row><Span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg></Span><P>3%</P></Row>
            </Row>
          </Card>
        </Row>
      </Section>
    </div>
  );
}

export default App;
