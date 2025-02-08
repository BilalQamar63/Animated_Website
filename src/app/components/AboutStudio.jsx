import React from "react";
import Office from "@/public/19.jpg";
import Image from "next/image";
import { Phone, MapPin, Mail, Clock } from "lucide-react"; // Importing icons

const AboutStudio = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-center ">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={Office}
                    alt="Office Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Text Content */}
            <div className="relative text-center px-6 mt-3">
                <h1 className="text-6xl font-thin text-[#9b5fb3] uppercase">About Studio</h1>
                <h2 className="text-2xl mt-4 text-white font-thin uppercase">Our Head Offices</h2>
            </div>

            {/* Icons & Details Section */}
            <div className="relative text-white py-12 px-6 mt-20 w-full flex flex-wrap justify-center gap-10 bg-white bg-opacity-10">
                {/* Phone */}
                <div className="flex flex-col items-center text-center">
                    <Phone size={50} className="text-[#9b5fb3] mb-3" />
                    <h3 className="text-lg font-thin uppercase">Phone</h3>
                    <p className="text-white font-thin ">
                        Phone: +1 916-875-2235 <br />
                        Mobile: +1 916-875-2235 <br />
                        Fax: +1 916-875-2235</p>
                </div>

                {/* Address */}
                <div className="flex flex-col items-center text-center">
                    <MapPin size={50} className="text-[#9b5fb3] mb-3" />
                    <h3 className="text-lg font-thin uppercase">Address</h3>
                    <p className="text-white font-thin">
                        908 New Hampshire Avenue <br />
                        Northwest #100, Washington, <br /> DC
                        20037, United States</p>
                </div>

                {/* Contact Email */}
                <div className="flex flex-col items-center text-center">
                    <Mail size={50} className="text-[#9b5fb3] mb-3" />
                    <h3 className="text-lg font-thin uppercase">Contacts</h3>
                    <p className="text-white font-thin">
                        info@thegem.com <br />
                        thegem@domain.com <br />
                        www.thegemagency.com</p>
                </div>

                {/* Working Hours */}
                <div className="flex flex-col items-center text-center">
                    <Clock size={50} className="text-[#9b5fb3] mb-3" />
                    <h3 className="text-lg font-thin uppercase">Working Hours</h3>
                    <p className="text-white font-thin">
                        Monday-Friday: 9:00 – 18:00 <br />
                        Saturday: 11:00 – 17:00 <br />
                        Sunday: Closed</p>
                </div>
            </div>

        </div>
    );
};

export default AboutStudio;
