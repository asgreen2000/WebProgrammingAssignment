import React from "react";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<h1 style={{
				color: "white",
				textAlign: "center",
				marginTop: "-50px"
			}}>
				My Web Site
			</h1>
			<Container>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Aim</FooterLink>
						<FooterLink href="#">Vision</FooterLink>
						<FooterLink href="#">Testimonials</FooterLink>
					</Column>
					<Column>
						<Heading>Products</Heading>
						<FooterLink href="#">Product</FooterLink>
						<FooterLink href="#">Product</FooterLink>
						<FooterLink href="#">Product</FooterLink>
						<FooterLink href="#">Product</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">Uttar Pradesh</FooterLink>
						<FooterLink href="#">Ahemdabad</FooterLink>
						<FooterLink href="#">Indore</FooterLink>
						<FooterLink href="#">Mumbai</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span style={{ marginLeft: "10px" }}>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span style={{ marginLeft: "10px" }}>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span style={{ marginLeft: "10px" }}>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span style={{ marginLeft: "10px" }}>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</Container>
			<div className="row justify-content-center">
				<div className="col-4">
					<input type="text" className="form-control" placeholder="Enter your email" />

				</div>
				<div className="col-2" >
					<button style={{width:'100%', padding:'5px'}}>Subscribe</button>
				</div>
			</div>
		</Box>
	);
};
export default Footer;
