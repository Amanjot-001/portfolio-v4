import React from "react";
import styled from "styled-components";
import config from "../../config";

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
	return (
		<StyledContactSection id="contact">
			<h2 className="numbered-heading overline">What's Next?</h2>

			<h2 className="title">Get In Touch</h2>

			<p>
				I'm open to exploring new opportunities, so feel free to reach out if you have something in mind or just want to connect. My inbox is always open, and I'll do my best to get back to you!
			</p>

			<a className="email-link" href={`mailto: ${config.email}`}>
				Say Hello
			</a>
		</StyledContactSection>
	)
}

export default Contact;
