import Link from "next/link";
import React from "react";
import { OutlinedButton } from "../../../common/Common.styled";
import { StyledContactMe } from "./Contact.styled";

const ContactMe = () => {
  return (
    <StyledContactMe>
      <div className="card">
        <h4>Contact me</h4>
        <h5>Interested in working together? Have any questions? Lets talk!</h5>
        <Link scroll={false} href="/contact-me">
          <OutlinedButton>Contact me</OutlinedButton>
        </Link>
      </div>
    </StyledContactMe>
  );
};

export default ContactMe;
