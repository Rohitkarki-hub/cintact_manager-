import { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const contactData = { id: Math.random(), name, number: mobile, location };

    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert("please all the feild!");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setLocation("");
      setMobile("");
    }
  };

  return (
    <>
      <div className="simple adder">
        <h3>Contact Adder:</h3>
        <form onSubmit={onFormSubmitHandler}>
          <input
            type="text"
            value={name}
            placeholder="contact name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            value={mobile}
            placeholder="number"
            onChange={(e) => setMobile(e.target.value)}
          ></input>
          <input
            type="location"
            value={location}
            placeholder="locarion"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <br />
          <br />
          <button>Add contact</button>
        </form>
      </div>
    </>
  );
};

export default ContactAdder;
