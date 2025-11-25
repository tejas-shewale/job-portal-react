import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col justify-center items-center gradient-title text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter py-4">
          Find Your Dream Job{" "}
          <span className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            And Get Your First Job{" "}
            <img
              src="JobLogo.png"
              alt="logo"
              className="h-14 sm:h-20 md:h-28 lg:h-32 mt-2 sm:mt-0"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-base sm:text-xl px-4">
          Explore thousands of job listings or find the perfect candidate with
          our user-friendly job portal.
        </p>
      </section>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
        {/* button  */}
        <Link to={"/jobs"} className="w-full sm:w-auto">
          <Button variant="blue" size="xl" className="w-full sm:w-auto">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"} className="w-full sm:w-auto">
          <Button variant="destructive" size="xl" className="w-full sm:w-auto">
            Post a Job
          </Button>
        </Link>
      </div>

      {/* carousel */}
      <Carousel 
        plugins={[Autoplay({ delay: 2000 })]} 
        className="w-full py-10"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map((company) => {
            return (
              <CarouselItem key={company.id} className="basis-1/3 sm:basis-1/4 lg:basis-1/6">
                <img
                  className="h-9 sm:h-12 object-contain"
                  src={company.path}
                  alt={company.name}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* banner */}
      <img 
        src="bannerJobPortal.jpeg" 
        alt="banner" 
        className="w-full h-auto rounded-lg px-4 sm:px-0" 
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {/* card */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center font-bold text-xl sm:text-2xl">
              For Job Seekers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center sm:text-left">
            Search and apply for jobs, create a profile, and get job alerts
            tailored to your preferences.
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center font-bold text-xl sm:text-2xl">
              For Employers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center sm:text-left">
            Post job openings, manage applications, and find the right
            candidates for your company.
          </CardContent>
        </Card>
      </section>

      {/* accordion */}
      <Accordion type="single" collapsible className="px-4">
        {faqs.map((faq, index) => {
          return (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </main>
  );
};

export default LandingPage;