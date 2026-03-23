// @ts-nocheck
"use client";

import content from "../data/content.json";
import { MinimalNav } from "@/components/ui/minimal-nav";
import { HeroImageBg } from "@/components/ui/hero-image-bg";
import { StatsSection } from "@/components/ui/stats-section";
import { TestimonialMarquee } from "@/components/ui/testimonial-marquee";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceGrid } from "@/components/ui/service-grid";
import { FAQSection } from "@/components/ui/faq-section";
import { HoursTable } from "@/components/ui/hours-table";
import { MapEmbed } from "@/components/ui/map-embed";
import { BookingPrompt } from "@/components/ui/booking-prompt";
import { ContactSection } from "@/components/ui/contact-section";
import { FooterGradient } from "@/components/ui/footer-gradient";
import { Wrench, Cpu, Droplets, Settings, Thermometer, CircleDot } from "lucide-react";

export default function Page() {
  const serviceIcons = [
    <Wrench key="wrench" className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />,
    <Cpu key="cpu" className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />,
    <Droplets key="droplets" className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />,
    <Settings key="settings" className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />,
    <Thermometer key="thermometer" className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />,
    <CircleDot key="circle" className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />,
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <MinimalNav
        logo={
          <span className="text-lg font-bold">
            <span style={{ color: "var(--theme-accent)" }}>A&amp;R</span> Auto Repair
          </span>
        }
        items={[
          { label: "Services", href: "#services" },
          { label: "Reviews", href: "#reviews" },
          { label: "FAQ", href: "#faq" },
          { label: "Hours", href: "#hours" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaText="Call Now"
        ctaHref={"tel:" + content.contact.phone.replace(/[^0-9]/g, "")}
      />

      {/* HERO — full-bleed image background */}
      <HeroImageBg
        heading="Your Car Deserves the Best"
        subheading={content.hero.subheading}
        ctaText={content.hero.ctaText}
        ctaHref={content.hero.ctaLink}
        imageSrc={content.hero.imageSrc}
        overlayOpacity={0.6}
      />

      {/* STATS — trust signals right after hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <StatsSection
            stats={[
              { value: 5.0, suffix: " Stars", label: "Google Rating" },
              { value: 61, suffix: "+", label: "5-Star Reviews" },
              { value: 20, suffix: "+", label: "Years in Business" },
              { value: 100, suffix: "%", label: "Satisfaction Rate" },
            ]}
          />
        </div>
      </section>

      {/* TESTIMONIALS — scrolling marquee */}
      <section id="reviews" className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <SectionHeading
            label="Reviews"
            title="What Our Customers Say"
            subtitle="61 five-star reviews on Google — hear from real Burbank drivers who trust us with their vehicles."
          />
        </div>
        <TestimonialMarquee
          testimonials={content.reviews.map((r) => ({
            quote: r.text,
            author: r.name,
            rating: r.rating,
          }))}
        />
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Our Services"
            title="Complete Auto Care Under One Roof"
            subtitle="From routine maintenance to complex repairs, our ASE-certified technicians handle it all."
          />
          <ServiceGrid
            services={content.services.map((s, i) => ({
              title: s.title,
              description: s.description,
              price: s.price,
              icon: serviceIcons[i],
            }))}
            columns={3}
            variant="bordered"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="About Us"
            title={content.about.heading}
          />
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            {content.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <FAQSection
            items={content.faq}
            title="Common Questions"
            subtitle="Everything you need to know before your visit."
          />
        </div>
      </section>

      {/* HOURS + MAP side-by-side */}
      <section id="hours" className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Visit Us"
            title="Hours & Location"
            subtitle="Conveniently located on S Glenoaks Blvd in Burbank. Walk-ins welcome."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <HoursTable hours={content.contact.hours} />
            <MapEmbed query={content.contact.mapEmbedQuery} />
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <BookingPrompt
            heading="Ready to Get Your Car Fixed?"
            description="Call us today or stop by. No appointment needed for oil changes — and we offer free estimates on all repairs."
            phone={content.contact.phone}
            ctaText="Call (818) 848-8335"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Get in Touch"
            title="Contact Us"
          />
          <ContactSection
            phone={content.contact.phone}
            email={content.contact.email}
            address={content.contact.address}
          />
        </div>
      </section>

      {/* FOOTER */}
      <FooterGradient
        businessName={content.businessName}
        tagline={content.tagline}
        phone={content.contact.phone}
        email={content.contact.email}
        address={content.contact.address}
      />
    </main>
  );
}