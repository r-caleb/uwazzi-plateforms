import React from 'react'
import { Accordion, Button } from 'react-bootstrap';
import juridique from './assets/juridique.png';
import "./TextesLegaux.scss";


function TextesScreen() {
 return (
   <div>
     <img src={juridique} alt='Textes Legaux' className='center'
     width={260}
     height={160}
     />
     <h1>TEXTES LÉGAUX ÉLECTORAUX</h1>
       <Button variant="primary" size="sm">
         Télécharger
       </Button>{' '} <br/><br/>
     <Accordion defaultActiveKey="0">
     <Accordion.Item eventKey="0">
       <Accordion.Header>Article 1</Accordion.Header>
       <Accordion.Body>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         aliquip ex ea commodo consequat. Duis aute irure dolor in
         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
         culpa qui officia deserunt mollit anim id est laborum.
       </Accordion.Body>
     </Accordion.Item>
     <Accordion.Item eventKey="1">
       <Accordion.Header>Article 2</Accordion.Header>
       <Accordion.Body>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         aliquip ex ea commodo consequat. Duis aute irure dolor in
         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
         culpa qui officia deserunt mollit anim id est laborum.
       </Accordion.Body>
     </Accordion.Item>


     <Accordion.Item eventKey="3">
       <Accordion.Header>Article 3</Accordion.Header>
       <Accordion.Body>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         aliquip ex ea commodo consequat. Duis aute irure dolor in
         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
         culpa qui officia deserunt mollit anim id est laborum.
       </Accordion.Body>
     </Accordion.Item>
     <Accordion.Item eventKey="4">
       <Accordion.Header>Article 4</Accordion.Header>
       <Accordion.Body>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         aliquip ex ea commodo consequat. Duis aute irure dolor in
         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
         culpa qui officia deserunt mollit anim id est laborum.
       </Accordion.Body>
     </Accordion.Item>
     <Accordion.Item eventKey="5">
       <Accordion.Header>Article 5</Accordion.Header>
       <Accordion.Body>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         aliquip ex ea commodo consequat. Duis aute irure dolor in
         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
         culpa qui officia deserunt mollit anim id est laborum.
       </Accordion.Body>
     </Accordion.Item>
   </Accordion>
   </div>
 )
}


export default TextesScreen
