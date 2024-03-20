import React from "react";
import Image from "next/image";
import images from "../../components/assets/index";

const About = () => {
  return (
    <>
      <div className="px-14 py-4 grid place-content-center place-items-center ">
        <div className="m-8 p-4">
          <h1 className="text-black tracking-widest font-semibold text-4xl uppercase">
            About
          </h1>
        </div>
        <div className="p-8 text-xl shadow-md shadow-black m-4 w-[80%] h-full rounded-3xl">
          <h2 className="tracking-wide">
            At <span className="bg-[#b5179e] text-white">Nectarlite</span>, we
            are passionate about empowering individuals with the skills and
            knowledge they need to thrive in the ever-evolving landscape of
            technology. Founded with a vision to bridge the gap between ambition
            and expertise, we are committed to providing high-quality education
            and training in programming languages to students, professionals,
            and enthusiasts worldwide.
          </h2>
          <br />
          <h2 className="text-2xl font-bold ">Our Mission:</h2>
          <div>
            <h1>
              Our mission is to democratize access to technology education and
              equip learners with the practical skills and theoretical
              understanding necessary to succeed in the digital age. We believe
              that everyone, regardless of their background or experience,
              should have the opportunity to learn and excel in programming
              languages.
            </h1>
          </div>
          <br />
          <h2 className="text-2xl font-bold ">What we offer:</h2>
          <div>
            <h1>
              At Nectarlite, we offer comprehensive courses, workshops, and
              resources covering a wide range of programming languages, from
              foundational languages like Python and JavaScript to specialized
              languages like Solidity for blockchain development. Our curriculum
              is designed by industry experts and educators who bring real-world
              experience and expertise to the learning process.
            </h1>
          </div>
          <br />
          <h2 className="text-2xl font-bold  ">Why choose Nectarlite:</h2>
          <div className=" space-y-4 ml-12">
            <div className="">
              <h1 className="text-xl font-semibold">Expert Instructors:</h1>
              <h2>
                {" "}
                Learn from experienced instructors who are passionate about
                teaching and dedicated to helping you achieve your goals.
              </h2>
            </div>
            <div className="">
              <h1 className="text-xl font-semibold">Hands-on Learning:</h1>
              <h2>
                Gain practical, hands-on experience through projects, exercises,
                and real-world applications that reinforce your understanding of
                programming concepts.
              </h2>
            </div>
            <div className="">
              <h1 className="text-xl font-semibold">Flexibility: </h1>
              <h2>
                Access our courses anytime, anywhere, and learn at your own pace
                with our flexible online learning platform.
              </h2>
            </div>
            <div className="">
              <h1 className="text-xl font-semibold">Community Support:</h1>
              <h2>
                {" "}
                Join a vibrant community of learners and mentors who are eager
                to collaborate, share knowledge, and support each others growth.
              </h2>
            </div>
            <div className="">
              <h1 className="text-xl font-semibold">Career Opportunities:</h1>
              <h2>
                {" "}
                Whether you are looking to start a career in tech, advance your
                current role, or pursue entrepreneurial ventures, our courses
                provide you with the skills and credentials to succeed.
              </h2>
            </div>
            <div className="">
              <h1 className="text-xl font-semibold">
                Our Commitment to Excellence:
              </h1>
              <h2>
                At TechEdu, we are committed to excellence in education. We
                continuously update and improve our curriculum to keep pace with
                industry trends and technological advancements. Our goal is not
                just to teach you programming languages but to empower you with
                the tools and confidence to innovate, problem-solve, and make a
                meaningful impact in the world.
              </h2>
            </div>
          </div>
          <br />
          <h2 className="text-2xl font-bold ">Join Us:</h2>
          <div>
            <h1>
              Ready to embark on your journey to mastering programming
              languages? Join us at TechEdu and unlock your full potential in
              the exciting and dynamic field of technology. Whether you are a
              beginner or an experienced programmer, theres always something new
              to learn and discover with Nectarlite.
            </h1>
          </div>
          <br />
          <div className="w-full text-center text-xl">
            <h1>
              Welcome to Nectarlite Technology - ...Leading Technology to the
              future.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
