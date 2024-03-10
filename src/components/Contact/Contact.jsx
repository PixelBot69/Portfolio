import React from "react";

function Contact() {
  return (
    <div>
      <div className="container mx-auto my-20 w-[61.66%] md:w-[33.33%] rounded-lg border-[#DD7B6A] bg-white">
        <div className="p-5 space-y-5 shadow-xl">
          <h4 className="text-center text-3xl text-[#DD7B6A]">Contact Us</h4>
          <form action="https://api.web3forms.com/submit" method="POST">
            <div className="grid grid-cols-2 gap-5">
              <input type="hidden" name="access_key" value="be3de564-c384-4713-aa45-4fef07fc1b25" />
              <input
                type="text"
                name="first_name"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-[#DD7B6A]"
                placeholder="First Name"
              />
              <input
                type="text"
                name="last_name"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-[#DD7B6A]"
                placeholder="Last Name"
              />
              <input
                type="email"
                name="email"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-[#DD7B6A] col-span-2"
                placeholder="Email"
              />
              <input
                type="tel"
                name="phone"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-[#DD7B6A] col-span-2"
                placeholder="Phone"
              />
              <textarea
                name="message"
                cols="10"
                rows="5"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-[#DD7B6A] col-span-2"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send Message"
              className="focus:outline-none mt-5 bg-[#DD7B6A] px-4 py-2 text-white font-bold w-full"
            />
          </form>
        </div>
      </div>
      <div className="flex p-[1rem] bg-[#DD7B6A]">
        <span className="flex m-[auto] text-white">Made by aryan kun</span>
      </div>
    </div>
  );
}

export default Contact;
