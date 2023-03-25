import React, { useEffect, useState } from "react";
import "./candidatScreen.scss";
// import { Container, Row, Col, Table } from "react-bootstrap";
import { MdArrowBack } from "react-icons/md";
// import avatar from "../home/assets/rc.jpg";
import { useNavigate, useParams } from "react-router-dom";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  // MDBBtn,
  // MDBBreadcrumb,
  // MDBBreadcrumbItem,
  // MDBProgress,
  // MDBProgressBar,
  // MDBIcon,
  // MDBListGroup,
  // MDBListGroupItem
} from 'mdb-react-ui-kit';

const OneCandidatScreen = () => {
  const [candidat, setCandidat] = useState([]);
  const nom = useParams();
  const navigateTo = useNavigate();
  const handleClick = () => {
    navigateTo("/candidat/lists");
  };
  let candidate = nom.nom.slice(0, -1);

  useEffect(() => {
    fetch(
      `https://www.de-vie.com/processus_E_api/api/list_candidat?filtre=Tous&search=${candidate}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCandidat(data.data[0]);
      });
  }, [candidate]);
  return (
    <>
      <div className="back">
        <MdArrowBack size={26} onClick={handleClick} />
        <span onClick={handleClick}>Retour sur la liste des candidats</span>
      </div>

      <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={`http://elektion.de-vie.com/web/assets/images/PhotoCandidats/${candidat.photoCandidat}`}
                  alt="candidat"
                  className="rounded-circle"
                  style={{ 
                    width: '130px', 
                    height: '130px', 
                    borderRadius : '50%',
                    objectFit: 'cover',
                    marginBottom: '0.5rem'
                  }}
                  fluid />
                <p className="text-muted mb-1 name">{candidat.nom}</p>
                <p className="text-muted mb-4">{candidat.parti_politique}
                <img
              src={`http://elektion.de-vie.com/web/assets/images/logoParti/${candidat.logo_parti}`}
              alt="parti_politique"
              className="parti"
              style={{
                width: '40px',
                height: '40px',
                objectFit: 'cover',
                padding: '5px'
              }}
            />
                </p>
           
                <div className="d-flex justify-content-center mb-2">
                <p className="text-muted mb-1">{candidat.scrutin}</p>
                </div>
              </MDBCardBody>
            </MDBCard>

            {/* <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard> */}
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Numero</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{candidat.numeroCandidat}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Sexe</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{candidat.sexe}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Circonscription</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{candidat.circonscription}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Province</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{candidat.province}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Fondateur du parti</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{candidat.fondateur_parti}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Études</span></MDBCardText>
                    <MDBCardText className="mb-4"> Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</MDBCardText>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol> 

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Formations</span> </MDBCardText>
                    <MDBCardText className="mb-4"> Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</MDBCardText>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br/> 

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Éxperiences professionnelles</span></MDBCardText>
                    <MDBCardText className="mb-4"> Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</MDBCardText>

                   
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>


              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Compétences</span> </MDBCardText>
                    <MDBCardText className="mb-4"> Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</MDBCardText>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </> 
  );
};
export default OneCandidatScreen;
