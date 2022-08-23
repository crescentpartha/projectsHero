import React from 'react';
import { Accordion } from 'react-bootstrap';

const About = () => {
    return (
        <div className='d-flex flex-wrap flex-sm-wrap flex-md-wrap flex-lg-nowrap flex-xl-nowrap flex-xxl-nowrap align-items-center justify-content-center gap-5 m-5 pb-5'>
            <div className='flex-grow-1 w-100'>
                <h2 className='my-3'>How trivago Works</h2>
                <div className='w-100'>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is the difference between trivago and a booking site? </Accordion.Header>
                            <Accordion.Body>
                                <div className='text-start'>
                                    <p><b>trivago is a metasearch engine that compares accommodation prices and offers provided to us by many different booking sites</b> globally, including online travel agencies (OTAs), accommodation chains and independent hotels. This means that while users decide on trivago which hotel best suits their needs, the booking process itself is completed through the booking sites, which are linked to our website. You can find out more about how our site works <span className='text-primary'>here</span>.</p>
                                    <p><b>Meanwhile, a booking site or Online Travel Agency (OTA) is a web-based marketplace that allows consumers to research and book travel products and services,</b> including hotels, flights, cars, cruises, activities and more, directly with travel suppliers.</p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What is trivago? </Accordion.Header>
                            <Accordion.Body>
                                <div className='text-start'>
                                    <p><b>We are a metasearch engine that compares accommodation prices and offers provided to us by many different online booking sites.</b> We compare and display different offers from many booking sites, and they pay us a fee if a user clicks on their specific deal. We are not a party to any booking agreement between you and the site or accommodation you book with. We do not collect any payments for your stay and are not liable for the services offered by the booking site and the accommodation provider.</p>
                                    <p>trivago works with many booking sites worldwide, including online travel agencies, as well as accommodation chains and independent hotels. In total, trivago's sites cover more than 2.5 million hotels and other types of accommodations across approximately 190 countries. </p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is trivago Book &amp; Go ? </Accordion.Header>
                            <Accordion.Body>
                                <div className='text-start'>
                                    <p><b>With trivago Book &amp; Go we provide services throughout the booking process by enabling you to select a room and facilitate the reservation between you and selected booking sites and accommodation providers.</b> With trivago Book &amp; Go we promote offers for accommodation in cooperation with selected partners who operate online booking sites. We believe that through our trusted brand and the services of trivago Book &amp; Go, we can learn and give you a better and more consistent overview of all the information you need when considering booking a deal.</p>
                                    <p>We collect a fixed percentage fee from those selected partners for any bookings that you ultimately make. Please note that we are not a party to any booking agreement between you and our selected partners who operate the online booking sites. We do not collect any payments from you for your stay. Any hotel product or service booked, and after-booking support is provided by one of our selected partners. We always aim to clearly inform you about who our selected partner is, before clicking on “Confirm booking” on the checkout page.</p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How does trivago determine its guest ratings? </Accordion.Header>
                            <Accordion.Body>
                                <div className='text-start'>
                                    <p>We scan many available guest review and rating sources across the web on a daily basis. <b>We aggregate these reviews and ratings, and convert them using our Rating Index</b> that ranges from 0 to 10 (10 is the highest possible rating). You can find more details in relation to accommodation-specific ratings by clicking on the accommodation's guest rating score.</p>
                                    <hr />
                                    <p>For further information relating to our rating system, please <span className='text-primary'>see here</span>.</p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>More about trivago as a company </Accordion.Header>
                            <Accordion.Body>
                                <div className='text-start'>
                                    <p>Expedia, Inc. owns the majority of shares in trivago. For further information in relation to our company, please <span className='text-primary'>see here</span>.</p>
                                    <p>For trivago's postal address and email address, <span className='text-primary'>see here</span>.</p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Our complaints handling procedures </Accordion.Header>
                            <Accordion.Body>
                                <div className='text-start'>
                                    <p>If you have an issue and require assistance, we recommend checking out our <span className='text-primary'>FAQs</span>. Here, you should hopefully be able to find the answer to your question.</p>
                                    <p>Alternatively, <b>if you would like to submit a complaint or require additional assistance, click on the</b> <span className='text-primary'>contact form link</span>. On the contact form, select the issue/request that best suits your needs, fill out all necessary information fields, then click "Submit". We will then revert to you shortly.</p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className='border border-secondary border-opacity-25 rounded p-3 text-start w-50'>
                <p>trivago helps you compare prices, but the booking and payment are managed by the booking site. Therefore, trivago cannot manage or cancel your reservation, but we'll do our best to bring you into contact with the booking site, as their customer service teams are in the best position to answer all booking-related questions.</p>
            </div>
        </div>
    );
};

export default About;