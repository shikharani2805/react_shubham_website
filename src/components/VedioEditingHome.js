import React from 'react';
import '../App.css'; 
import '../CSS/VedioEditing.css'; 
import emailjs from 'emailjs-com';
import {Container,Row,Col,Form,Button,Card,Carousel} from 'react-bootstrap';
// import VedioEditing from "../static/VedioEditing.mp4";

const VedioEditingHome = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('vedioediting', 'template_y4jqfbu', e.target,
        'user_xU3YdOTkGLMoDXZQ1d2Oz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    return (
        <>
        <div>
        {/* <video className="vedioeditingvedio" autoplay loop muted >
            <source src={VedioEditing} type="video/mp4" />
        </video> */}

            <div className="bg-img11">
                <div className="container fontsizepadding">
                    <br />
                <h1 className="fontsize">The art of the vedio creation</h1>
                <p className="fontsize">Inspire customer imaginations through high-quality videos. 
                <br />Get our world-class support on video and 
                audio editing, <br />storyboarding and animations – all at an incomparably low cost.</p>
                </div> 
            </div>



{/* ==========================================second */}

        <div className="bg_second">
        <Container>
            <Row>
                <Col md={6}>
                    <div className="colpedding">
                    <p className="vedio_second_textcolor1">Editing Experts</p>
                     <h1 className="vedio_second_textcolor1">Video Editing Services</h1>
                     <p className="vedio_second_textcolor1">Video Caddy’s video editing service professionals deliver a 
                     lot more than post-production support. A leading video editing team in India believes in 
                     enabling its clients with seamless and profitable outsourcing experience. Video Caddy is 
                     a chosen partner for both large and small companies, filmmakers, documentary producers, 
                     news agencies as well as individual weddings videographers.</p>
                     <p className="vedio_second_textcolor1">ISO quality guaranteed video editing, audio editing, 
                     subtitling, animation, storyboard, more at a competitive pricing model. 
                     Contact us today and get custom pricing for your unique requirements!</p>
                    </div>

                    <div className="button_right_side"> 
                          
                        <Button className="button2nd3" variant="primary" type="submit">Contact Us</Button> &emsp;&emsp;
                    
                        <Button className="button2nd3" variant="primary" type="submit">Show Reel</Button>
                       
                    </div>
                </Col>
                {/* =================================================second column */}
                <Col md={6}>
                <div className="form_boarder">
                    <h4 className="fontsize2">GET A QUICK QUOTE</h4>
                    <Form onSubmit={sendEmail}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="text" placeholder="Full Name*" name="name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <br />

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Work Email*" name="email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <br />

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Control type="number" placeholder="Work Phone*" name="phone" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <br />

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Control className="formwidth" type="text" placeholder="Description*" name="description" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Button className="button buttonwidth" variant="primary" type="submit">
                            Start My Free Trial
                        </Button>
                        <a href="/">Privacy Policy</a>
                        
                    </Form>
                </div>
                </Col>
            </Row>
        </Container>
        </div>

{/* ========================================================================Third */}

   <div className="third_bg_color">
   <Container>
        <div className="vedio_third_padding">
        
        <h2 className="vedio_third_textcolor1">Professional Video Editing Services for Your Business</h2>
        <p>When you decide to outsource video editing services, our vast range of diversified offerings 
        allow us to match your specific needs. They include:</p>
        
        </div>
       <div>
        <Row className="vedio_third_row_padding"> 
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Vedio <br /> Clipping</Button>
            </Col>
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Corporate <br /> Vedios</Button>
            </Col>
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Film/movie <br /> re-editing</Button>
            </Col>
        </Row>

        <Row className="vedio_third_row_padding"> 
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Real estate <br /> Vedio Tour</Button>
            </Col>
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Vedio <br /> Brochures</Button>
            </Col>
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Holiday <br /> Vedio Editing</Button>
            </Col>
        </Row>

        <Row className="vedio_third_row_padding"> 
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Interview <br /> Vedio Editing</Button>
            </Col>
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Product <br /> Vedio Editing</Button>
            </Col>
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Wedding <br /> Vedio Editing</Button>
            </Col>
        </Row>

        <Row className="vedio_third_row_padding"> 
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Virtual Reallity <br /> Post-production</Button>
            </Col>
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Vedio <br /> stablilizing</Button>
            </Col>
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">360 Degree<br />  Vedio Editing</Button>
            </Col>
        </Row>

        <Row className="vedio_third_row_padding"> 
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Studied Vedio <br /> Summarization</Button>
            </Col>
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Sports <br /> vedio Editing</Button>
            </Col>
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Testimoniol <br /> Vedio Editing</Button>
            </Col>
        </Row>

        <Row className="vedio_third_row_padding"> 
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Vedio <br /> Tagging</Button>
            </Col>
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Sales Pitch <br /> Vedio Editing</Button>
            </Col>
            <Col sm={4}>
                <Button href="/#" className="vedio_third_button_icon vedio_third_buttonwidth" variant="info">Real Estate <br /> Vedio Editing</Button>
            </Col>
        </Row>
        </div>
    </Container>
   </div>
{/* =============================================================Four */}
<div className="vedio_four_card_padding">
    <Container>
        <Row>
            <Col>
                <Card border="primary" style={{ width: '20rem' }}>
                    <Card.Header><h2 className="vedio_four_card_textcolor">Audio Editing</h2></Card.Header>
                    <Card.Body>
                    <Card.Title className="vedio_four_card_textcolor2">Enhanced audio editing services</Card.Title>
                    <Card.Text>
                        The audio editing service from Video Caddy offers basic, advanced, and enhanced audio editing 
                        that maintains the originality of the audio without affecting the natural modulation and tone 
                        for professional and commercial use.
                    </Card.Text>
                    <Button variant="primary">Find Out More</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card border="primary" style={{ width: '20rem' }}>
                    <Card.Header><h2 className="vedio_four_card_textcolor">Storyboard</h2></Card.Header>
                    <Card.Body>
                    <Card.Title className="vedio_four_card_textcolor2">Everything has a story to tell</Card.Title>
                    <Card.Text>
                        Every incident of life has a story to tell. Video Caddy’s advanced storyboard 
                        service visualizes the script, creates simulating characters, and narrates the 
                        story with appropriate voiceovers to present it most professionally.
                    </Card.Text>
                    <br /><br /><Button variant="primary">Find Out More</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card border="primary" style={{ width: '20rem' }}>
                    <Card.Header><h2 className="vedio_four_card_textcolor">Animation</h2></Card.Header>
                    <Card.Body>
                    <Card.Title className="vedio_four_card_textcolor2">Advanced animation services</Card.Title>
                    <Card.Text>
                        Animation service is Video Caddy’s one of core offerings. Our animators absorb your 
                        ideas and develop an animated video that raises your audiences’ eyebrows. We are sure, 
                        our intimidating storyboard, metaphors, and designs will bring the best out of your business!
                    </Card.Text>
                    <br /><Button variant="primary">Find Out More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
</div>

{/* =============================================================================================fifth */}
<div className="vedio_fifth_bg">
    <Container>
        <h1 className="vedio_fifth_text_color">Vedio Editing Service Process</h1>
        <h5 className="vedio_fifth_text_padding">
            We guide through the process step-by-step. The steps are simple, and we are always there by your side to guide you through.
        </h5>

    <Row className="vedio_fift_flip_box">
        <Col>
        <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
            <h4>First Step</h4><br />
            <p>Customer Uploads the vedio file and brief</p>
            </div>
            <div class="flip-box-back">
            <h4>First Step</h4><br />
            <p>Customer Uploads the vedio file and brief</p>
            </div>
        </div>
        </div>
        </Col>

        <Col>
        <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
            <h4>Second Step</h4><br />
            <p>The video file is edited accordingly and uploaded</p>
            </div>
            <div class="flip-box-back">
            <h4>Second Step</h4><br />
            <p>The video file is edited accordingly and uploaded</p>
            </div>
        </div>
        </div>
        </Col>

        <Col>
        <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
            <h4>Third Step</h4><br />
            <p>Customer reviews the video file</p>
            </div>
            <div class="flip-box-back">
            <h4>Third Step</h4><br />
            <p>Customer reviews the video file</p>
            </div>
        </div>
        </div>
        </Col>

        <Col>
        <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
            <h4>Fourth Step</h4><br />
            <p>The file is uploaded for easy download</p>
            </div>
            <div class="flip-box-back">
            <h4>Fourth Step</h4><br />
            <p>The file is uploaded for easy download</p>
            </div>
        </div>
        </div>
        </Col>
        
    </Row>
        


    </Container>
</div>




        </div>
        </>
    )
}

export default VedioEditingHome;