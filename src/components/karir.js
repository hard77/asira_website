import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Karir extends React.Component
{
    state={
        modal:false,
        modalMarket:false,
        modalBusiness:false,
        modalProduct:false
    }
    showModal =()=>{
        this.setState({modal:!this.state.modal})
    }

    showModalMarketing = ()=>{
        this.setState({modalMarket:!this.state.modalMarket})
    }
    showModalBusiness =()=>{
        this.setState({modalBusiness:!this.state.modalBusiness})

    }
    showModalProduct=()=>{
        this.setState({modalProduct:!this.state.modalProduct})
    }
    
    render(){
        return(
            <div className="container">
                {/* ========================= QA =================================== */}

                    <Modal className="modal-lg" isOpen={this.state.modal} scrollable={true} >
                    <ModalHeader >Ayannah Solusi Nusantara - Software QA Manual Tester </ModalHeader>
                    <ModalBody>
                        <p>Job Duties & Responsibilities</p>
                        
                        <ul>
                            <li> Involved in creating test cases and do manual test</li>
                            <li> Involved in creating user guide if necessary</li>
                            <li> Do API testing using postman or similiar applications</li>
                            <li> Testing in different environments including web and mobile</li>
                            <li> Writing bug reports to Software development and business user teams </li>
                            <li> Presenting findings to Software development and business user teams</li>
                            <li> Communicating findings to technical and non-technical colleagues </li>
                        </ul>

                        <p>Qualifications</p>
                        
                        <ul>
                            <li> Knowledge in any programming language is a plus</li>
                            <li> Good oral and written Communicating Skills</li>
                            <li>Good analytical skills and keen attention to detail</li>
                            <li>A passion for technology, you might need to learn something new to make testing effective and efficient</li>
                            <li>Experience in Software development projects using Agile methodologies like Scrum is a plus</li>
                            <li>Fresh Graduate are welcome to apply, preferably with prior working experience</li>
                            <li>Ability to learn quickly in a fast-paced and agile environments</li>
                            <li>Self-starter and able to proactively solve problems and work without supervision</li>
                            <li>Must be a team player</li>
                            <li>Has good moral character</li>
                            <li>Fast-learner</li>
                        </ul>

                        Salary and Compoensation to be discussed during interview period<br/>
                       
                    </ModalBody>
                    <ModalFooter>
                    <Button color="secondary" onClick={this.showModal}>Close</Button>
                    </ModalFooter>
                    </Modal>

                {/* ========================= Marketing Associate =================================== */}
                    <Modal className="modal-lg" isOpen={this.state.modalMarket} scrollable={true} >
                    <ModalHeader >Ayannah Solusi Nusantara - Marketing Associate</ModalHeader>
                    <ModalBody>
                        <p>Job Duties & Responsibilities</p>
                        
                        <ul>
                            <li>Conducting market research</li>
                            <li>Supporting the marketing team</li>
                            <li>Reporting to marketing managers & directors</li>
                            <li>Monitoring customer bases and identifying new ones.</li>
                            <li>Preparing detailed reports on consumer behavior, competitors' activities, outcomes, and sales.</li>
                            <li>Designing market surveys & determining future trends</li>
                            <li>Communicating with customers, competitors and suppliers.</li>
                            <li>Developing strategies to improve market reach</li>
                            <li>Writing and proofreading press releases.</li>
                            <li>Helping to plan events, projects and campaigns.</li>
                            <li>Reporting on research findings.</li>
                            <li>Working with design team to create proposals and presentations.</li>
                            <li>Helping to run social media accounts.</li>
                            <li>Communicating with clients and maintaining good relations.</li>      
                        </ul>

                        <p>Qualifications</p>
                        
                        <ul>
                            <li> Good oral and written communication skills</li>
                            <li>Excellent people skills</li>
                            <li>Ability to learn quickly in a fast-paced and agile environment</li>
                            <li>Self-starter and able to proactively solve problems and work without supervision	</li>
                            <li>Must be a team player & fast learner</li>
                            <li>Proficiency with SEO/SEM campaigns</li>
                            <li>Excellent communication and presentation skills</li>
                            <li>Having experience working in the banking industry is a plus</li>

                        </ul>

                        Salary and Compoensation to be discussed during interview period<br/>
                       
                    </ModalBody>
                    <ModalFooter>
                    <Button color="secondary" onClick={this.showModalMarketing}>Close</Button>
                    </ModalFooter>
                    </Modal>

                      {/* ========================= BUSINESS DEVELOPMENT Associate =================================== */}
                      <Modal className="modal-lg" isOpen={this.state.modalBusiness} scrollable={true} >
                    <ModalHeader >Ayannah Solusi Nusantara - Business Development Associate</ModalHeader>
                    <ModalBody>
                        <p>Job Duties & Responsibilities</p>
                        
                        <ul>
                            <li>Find prospects and leads</li>
                            <li>Learn details about our products and services</li>
                            <li>Understand all the prospects needs, problems or wants</li>
                            <li>Explain how our solutions align with their pain points</li>
                            <li>Meet with potential clients and act as their consultant</li>
                            <li>Identify buyer/clients profiles</li>
                            <li>Investigate leads and find out about them as much as possible before contacting</li>
                            <li>Consult with sales and marketing team to ensure the efficiency</li>
                            <li>Track and monitor your work</li>
                            <li>Prepare and present reports when needed</li>
                            <li>Attend sales educational events and seminars</li>
                            <li>Stay up to date with the latest sales trends and best practices</li>
                            <li>Report to management team</li>
                        </ul>

                        <p>Qualifications</p>
                        
                        <ul>
                            <li>1-2 years of experience working as a Sales Executive or similar role</li>
                            <li>Proven record of successful deals closed</li>
                            <li>Good knowledge of telemarketing and digital marketing</li>
                            <li>Great command of MS Office </li>
                            <li>Sense of ownership and pride in your performance and its impact on company’s success</li>
                            <li>Critical thinker and problem-solving skills</li>
                            <li>Team player</li>
                            <li>Excellent leadership skills</li>
                            <li>Good time-management skills</li>
                            <li>Great interpersonal and communication skills</li>
                            <li>Degree in Business Administration or relevant field</li>
                        </ul>

                        Salary and Compoensation to be discussed during interview period<br/>
                       
                    </ModalBody>
                    <ModalFooter>
                    <Button color="secondary" onClick={this.showModalBusiness}>Close</Button>
                    </ModalFooter>
                    </Modal>

                      {/* ========================= Product Associate =================================== */}
                      <Modal className="modal-lg" isOpen={this.state.modalProduct} scrollable={true} >
                    <ModalHeader >Ayannah Solusi Nusantara - Product Associate</ModalHeader>
                    <ModalBody>
                        <p>Job Duties & Responsibilities</p>
                        
                        <ul>
                            
                        <li>Bachelor’s degree in engineering, computer science, software development, information technology or information systems or equivalent work experience</li>
                        <li>Working experience in Software Project/Product Management</li>
                        <li>Strong problem-solving skills and willingness to roll up one’s sleeves to get the job done</li>
                        <li>Proficient in Agile software development methodology</li>
                        <li>Skilled at working effectively with cross-functional teams</li>
                        <li>Ability to work under strict deadlines and prioritize work</li>
                        <li>Excellent communication and presentation skills and has a keen eye for detail</li>

                        </ul>

                        <p>Qualifications</p>
                        
                        <ul>
                        <li>Produce comprehensive and clear project management documents and plans</li>
                        <li>Translate product strategy into detailed requirements and prototypes</li>
                        <li>Coordinate the software development process</li>
                        <li>Drive product launches including working closely with internal teams to deliver quality products, services, or features on time and on budget</li>
                        <li>Keep all project stakeholders appropriately informed throughout the project lifecycle</li>
                        <li>Quickly identify and prioritize issues and actively monitor their resolution</li>
                        <li>Introduce and oversee any improvements, modifications, and enhancements to existing products and services</li>
                        <li>Perform all other tasks that the immediate supervisor may deem necessary in meeting the company’s strategic goals</li>

                        </ul>

                        Salary and Compoensation to be discussed during interview period<br/>
                       
                    </ModalBody>
                    <ModalFooter>
                    <Button color="secondary" onClick={this.showModalProduct}>Close</Button>
                    </ModalFooter>
                    </Modal>





                <div className="row" style={{marginTop:"10%"}}>
                    <h3>Our Available Positions</h3>
                </div>
                <div className="col col-md col-xs">
                <table className="table mt-2">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Job Title </th>
                        <th scope="col">Location</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Software QA Manual Tester </td>
                        <td>Jakarta Selatan</td>
                        <td>
                            <button type="button" className="ml-5 btn btn-secondary" onClick={this.showModal}  style={{width:"150px"}}>DETAIL</button>
                        </td>
                        </tr>
                  
                   
                        <tr>
                        <th scope="row">2</th>
                        <td>Marketing Associate </td>
                        <td>Jakarta Selatan</td>
                        <td>
                            <button type="button" className="ml-5 btn btn-secondary" onClick={this.showModalMarketing}  style={{width:"150px"}}>DETAIL</button>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">3</th>
                        <td>Business Development Associate </td>
                        <td>Jakarta Selatan</td>
                        <td>
                            <button type="button" className="ml-5 btn btn-secondary" onClick={this.showModalBusiness}  style={{width:"150px"}}>DETAIL</button>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">4</th>
                        <td>Product Associate </td>
                        <td>Jakarta Selatan</td>
                        <td>
                            <button type="button" className="ml-5 btn btn-secondary" onClick={this.showModalProduct}  style={{width:"150px"}}>DETAIL</button>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                <div className="row">
                    <div className="col col-md col-xs">
                        If you're interested to apply for this position, please send your resume to <b>asira.hrd@ayannah.com</b> 
                        <br></br>Subject Title:"Job Application - <b>[Positions], [Last Name], [First Name]</b>". 
                        <br></br>Kindly include an introduction/cover letter in your e-mail.
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Karir