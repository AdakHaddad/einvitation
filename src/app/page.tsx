"use client";
import { useState, useEffect } from "react";
import FirstPage from "../components/first";
import Countdown from "../components/CountDown";
import QuranVerse from "../components/Quran";
import EventDetails from "../components/Event";
import MapEmbed from "../components/MapEmbed";

import StickyButton from "@/components/StickyButton";

const weddingDate = "2024-05-26T19:20:00";

const Home = () => {
  const [invitationOpened, setInvitationOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const eventDetails = {
    date: "Ahad 26 Mei 2024, Ba'da Isya",
    location: "Kediaman Sayyid Muhsin Assegaf, Baciro, Yogyakarta",
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
        <div className="fade-in ">
          <img
            src="https://png.pngtree.com/png-vector/20230206/ourmid/pngtree-mosque-ramadan-kareem-islamic-frame-transparent-background-arabesuqe-style-png-image_6584837.png"
            alt="Kubah"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <Countdown targetDate={weddingDate} />
          <div className="text-center mt-20 ">
            <h1 className="text-4xl font-bold ">Hadirilah Undangan</h1>
            <h2 className="text-3xl font-semibold">Majelis Pembacaan Maulid</h2>
          </div>
          <QuranVerse />
          <EventDetails
            date={eventDetails.date}
            location={eventDetails.location}
          />
          <MapEmbed locationUrl="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d988.2457150548342!2d110.3842222!3d-7.7916389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDcnMjkuOSJTIDExMMKwMjMnMDMuMiJF!5e0!3m2!1sen!2sid!4v1716669748743!5m2!1sen!2sid" />
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
