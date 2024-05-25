"use client";
import { useState, useEffect } from "react";
import FirstPage from "../components/first";
import Countdown from "../components/CountDown";
import QuranVerse from "../components/Quran";
import BrideGroom from "../components/BrideGroom";
import EventDetails from "../components/Event";
import MapEmbed from "../components/MapEmbed";
import GuestBookForm from "../components/GuestBook";
import Footer from "../components/Footer";
import StickyButton from "@/components/StickyButton";

const weddingDate = "2024-12-31T00:00:00";

const Home = () => {
  const [invitationOpened, setInvitationOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const audio = document.getElementById(
      "background-audio"
    ) as HTMLAudioElement;
    if (audio) {
      audio.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const audio = document.getElementById(
      "background-audio"
    ) as HTMLAudioElement;
    if (audio && invitationOpened) {
      audio.play();
    }
  }, [invitationOpened]);

  return (
    <>
      <audio id="background-audio" loop>
        <source src="/sound.mp3" type="audio/mp3" />
        <track></track>
        Your browser does not support the audio element.
      </audio>
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
          <MapEmbed locationUrl="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d988.2457150548342!2d110.3842222!3d-7.7916389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDcnMjkuOSJTIDExMMKwMjMnMDMuMiJF!5e0!3m2!1sen!2sid!4v1716669748743!5m2!1sen!2sid" />
          <GuestBookForm onSubmit={handleFormSubmit} />
          <Footer />
        </div>
      )}
      <StickyButton isMuted={isMuted} toggleMute={toggleMute} />
      <style>{`
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
