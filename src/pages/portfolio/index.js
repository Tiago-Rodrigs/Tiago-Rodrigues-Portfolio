import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header'
import loja from '../../assets/online-store.jpg';
import dog from '../../assets/dog-search.jpg';
import startup from '../../assets/startup.jpg';
import wedding from '../../assets/wedding.JPG';
import emailTemplate from '../../assets/email template.jpg';
import './portfolio.css';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="portfolio-container">

                    <Link to="/">
                        <h1 className="portfolio-title">Portfolio</h1>
                    </Link>
                    <Link to="about">
                        <h1 className="about-title">Service</h1>
                    </Link>

                    <br />

                    <div className="ball-container">
                        <div className="ball"></div>
                        <hr />
                    </div>

                    <br />
                    <br />
                    <br />
                    <div className="image-container">


                        <div className="image-portfolio">
                            <div className="link-website">
                                <a href="https://this-is-a-wedding-demo.netlify.app/index.html" target="_blank" >SEE WEBSITE</a>
                                <Link to="/contact?msg=Wedding">REQUEST QUOTE</Link>
                            </div>
                            <img src={wedding} />
                        </div>

                        <div className="image-portfolio">
                            <div className="link-website">
                                <a href="https://www.figma.com/file/n71kIcyf0Axl8tILcXM07R/Softunit" target="_blank" >SEE DESIGN</a>
                                <Link to="/contact?msg=Startup">REQUEST QUOTE</Link>
                            </div>
                            <img src={startup} />
                        </div>

                        <div className="image-portfolio">
                            <div className="link-website">
                                <a href="https://www.figma.com/file/VljQOUwgcAdO4xMw4SqyoP/Sua-promocao-clt-Manuel?node-id=0%3A1" target="_blank"  >SEE DESIGN</a>
                                <Link to="/contact?msg=Store">REQUEST QUOTE</Link>
                            </div>
                            <img src={loja} />
                        </div>

                        <div className="image-portfolio">
                            <div className="link-website">
                                <a href="https://www.figma.com/file/Wb3Xt8bofbgdgG3RMQvMO0/Untitled?node-id=5%3A7" target="_blank" >SEE DESIGN</a>
                                <Link to="/contact?msg=Dog">REQUEST QUOTE</Link>
                                
                            </div>
                            <img src={dog} />
                        </div>


                        <div className="image-portfolio">
                            <div className="link-website">
                                <a href="https://www.figma.com/file/HGiDPPPFA7ikn7OTNbVzd4/email-template?node-id=0%3A1" target="_blank" >SEE DESIGN</a>
                                <Link to="/contact?msg=Dog">REQUEST QUOTE</Link>
                                
                            </div>
                            <img src={emailTemplate} />
                        </div>







                    </div>

                </div>
            </div>
        );
    }
}

export default Portfolio;