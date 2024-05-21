"use client";
import { useState } from "react";
import FirstPage from "../components/first";
import Countdown from "../components/CountDown";
import QuranVerse from "../components/Quran";
import BrideGroom from "../components/BrideGroom";
import EventDetails from "../components/Event";
import MapEmbed from "../components/MapEmbed";
import GuestBookForm from "../components/GuestBook";
import Footer from "../components/Footer";

const weddingDate = "2024-12-31T00:00:00";

const Home = () => {
  const [invitationOpened, setInvitationOpened] = useState(false);

  const groom = {
    name: "Sayyid",
    photo:
      "https://cdn3d.iconscout.com/3d/premium/thumb/crown-2997231-2516269.png",
  };
  const bride = {
    name: "Sayyidah",
    photo:
      "https://static.vecteezy.com/system/resources/previews/011/307/183/original/crown-3d-illustration-rendering-png.png",
  };
  const eventDetails = {
    date: "31 May 2024, 10:00 AM",
    location: "Beautiful Wedding Venue, City, Country",
  };

  const handleFormSubmit = (form: { name: string; message: string }) => {
    console.log("Form submitted:", form);
  };

  return (
    <>
      {!invitationOpened ? (
        <FirstPage onOpenInvitation={() => setInvitationOpened(true)} />
      ) : (
        <div className="fade-in">
          <Countdown targetDate={weddingDate} />
          <QuranVerse />
          <BrideGroom groom={groom} bride={bride} />
          <EventDetails
            date={eventDetails.date}
            location={eventDetails.location}
          />
          <MapEmbed locationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5347409723718!2d107.57547870993425!3d-6.946069693025123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8b408e44239%3A0xca2c3cf32c0bf70a!2sKantor%20Urusan%20Agama%20(KUA)%20Babakan%20Ciparay!5e0!3m2!1sen!2sid!4v1716275234654!5m2!1sen!2sid" />
          <GuestBookForm onSubmit={handleFormSubmit} />
          <Footer />
        </div>
      )}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 1s ease-in;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
