
import { Button } from "react-bootstrap";
//images
import huddleIllustration from "../assests/images/illustration-mockups.svg";
import huddleIcon from "../assests/images/logo.svg";

const Huddle = () => {
  return (
    <div className="huddle">
      <header className="huddle-header">
        <img src={huddleIcon} alt="Huddle Logo" className="huddle-logo" />
      </header>

      <main className="huddle-main">
        <div className="illustration">
          <img src={huddleIllustration} alt="Mockup Illustration" />
        </div>
        <div className="text-section">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
            Create connections with your users as you engage in genuine discussion.
          </p>
          <Button className="register-btn">Register</Button>
        </div>
      </main>
    </div>
  );
};

export default Huddle;
