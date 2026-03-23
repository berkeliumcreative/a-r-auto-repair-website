// @ts-nocheck
"use client";

import content from "../data/content.json";
import { MinimalNav } from "@/components/ui/minimal-nav";
import { GalleryStrip } from "@/components/ui/gallery-strip";
import { ServiceList } from "@/components/ui/service-list";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HoursTable } from "@/components/ui/hours-table";
import { MapEmbed } from "@/components/ui/map-embed";
import { CTABanner } from "@/components/ui/cta-banner";
import { FooterColumns } from "@/components/ui/footer-columns";
import { ExperienceBadge } from "@/components/ui/experience-badge";
import { TrustBadges } from "@/components/ui/trust-badges";
import { PhoneCTA } from "@/components/ui/phone-cta";
import { DiagonalSection } from "@/components/ui/diagonal-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Wrench, ShieldCheck, Clock, Star, Phone, MapPin } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <MinimalNav
        logo={<span><span style={{ color: "var(--theme-accent)" }}>A&R</span> Auto Repair</span>}
        items={[
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Reviews", href: "#reviews" },
          { label: "Hours", href: "#hours" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaText="Call Now"
        ctaHref={"tel:" + content.contact.phone.replace(/[^0-9]/g, "")}
      />

      {/* HERO — inline build, NO hero component import (Framer Motion breaks on deploy) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={content.hero.imageSrc}
            alt="A & R Auto Repair"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <div className="animate-hero-fade-in">
            <span
              className="mb-6 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={{ backgroundColor: "var(--theme-accent)", color: "#0a0a0a" }}
            >
              5.0 ★ — 61 Reviews on Google
            </span>
          </div>
          <h1 className="animate-hero-fade-in text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {content.hero.heading}
          </h1>
          <p className="animate-hero-fade-in-delayed mt-6 text-lg text-white/80 md:text-xl max-w-2xl mx-auto">
            {content.hero.subheading}
          </p>
          <div className="animate-hero-fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={"tel:" + content.contact.phone.replace(/[^0-9]/g, "")}
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--theme-accent)", color: "#0a0a0a" }}
            >
              <Phone className="h-5 w-5" />
              Call (818) 848-8335
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP — parallax scrolling images */}
      <section className="py-4 bg-card overflow-hidden">
        <GalleryStrip
          images={[
            ...content.gallery.images,
            ...content.gallery.images,
            ...content.gallery.images,
            ...content.gallery.images,
          ]}
          direction="left"
        />
      </section>

      {/* TRUST BADGES */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <TrustBadges
            badges={[
              { icon: <ShieldCheck className="h-5 w-5" style={{ color: "var(--theme-accent)" }} />, text: "ASE Certified" },
              { icon: <Star className="h-5 w-5" style={{ color: "var(--theme-accent)" }} />, text: "5-Star Rated" },
              { icon: <Clock className="h-5 w-5" style={{ color: "var(--theme-accent)" }} />, text: "Same-Day Service" },
              { icon: <Wrench className="h-5 w-5" style={{ color: "var(--theme-accent)" }} />, text: "All Makes & Models" },
            ]}
          />
        </div>
      </section>

      {/* ABOUT — Zigzag left-right editorial layout */}
      <section id="about" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: image + badge */}
            <div className="relative">
              <img
                src={content.hero.imageSrc}
                alt="A & R Auto Repair shop"
                className="rounded-2xl w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -right-4 md:-right-6">
                <ExperienceBadge years={15} label="Years Serving Burbank" className="bg-background shadow-xl" />
              </div>
            </div>
            {/* Right: text */}
            <div>
              <span
                className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{ backgroundColor: "var(--theme-accent)", color: "#0a0a0a" }}
              >
                About Us
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{content.about.heading}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {content.about.description}
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {content.about.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <ShieldCheck className="h-4 w-4 flex-shrink-0" style={{ color: "var(--theme-accent)" }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGONAL DIVIDER → SERVICES */}
      <DiagonalSection bgColor="var(--card)">
        <section id="services" className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center mb-12">
              <span
                className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{ backgroundColor: "var(--theme-accent)", color: "#0a0a0a" }}
              >
                What We Do
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
              <p className="mt-3 text-muted-foreground">Comprehensive auto repair — from routine maintenance to complex rebuilds.</p>
            </div>
            <ServiceList services={content.services} />
            <div className="mt-10 text-center">
              <PhoneCTA phone={content.contact.phone} text="Have a question? Call us" variant="button" />
            </div>
          </div>
        </section>
      </DiagonalSection>

      {/* REVIEWS — Infinite Moving Cards (zigzag visual: full-width scrolling strip) */}
      <section id="reviews" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center mb-8">
          <span
            className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
            style={{ backgroundColor: "var(--theme-accent)", color: "#0a0a0a" }}
          >
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What Our Customers Say</h2>
          <p className="mt-3 text-muted-foreground">61 five-star reviews and counting.</p>
        </div>
        <InfiniteMovingCards
          items={content.reviews.map((r) => ({
            quote: r.text,
            name: r.name,
            title: "Google Review ★★★★★",
          }))}
          direction="left"
          speed="slow"
          pauseOnHover
        />
      </section>

      {/* HOURS + MAP — side by side zigzag layout */}
      <section id="hours" className="py-20 md:py-28 bg-card">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Hours */}
            <div>
              <span
                className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{ backgroundColor: "var(--theme-accent)", color: "#0a0a0a" }}
              >
                Hours
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">When We Are Open</h2>
              <HoursTable hours={content.hours} />
              <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" style={{ color: "var(--theme-accent)" }} />
                {content.contact.address}
              </div>
            </div>
            {/* Right: Map */}
            <div className="pt-0 md:pt-12">
              <MapEmbed query={content.contact.mapEmbedQuery} height={380} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="contact" className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <CTABanner
            heading="Ready to Get Your Car Fixed?"
            subheading="Call us today for honest diagnostics and a free estimate. No appointment needed for most services."
            ctaText="Call (818) 848-8335"
            ctaHref={"tel:" + content.contact.phone.replace(/[^0-9]/g, "")}
            variant="gradient"
          />
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <ContactSection
            phone={content.contact.phone}
            email={content.contact.email}
            address={content.contact.address}
          />
        </div>
      </section>

      {/* FOOTER */}
      <FooterColumns
        businessName={content.businessName}
        description="Burbank's trusted auto repair shop. ASE-certified technicians, transparent pricing, and 5-star service."
        columns={[
          {
            title: "Services",
            links: [
              { label: "Brake Repair", href: "#services" },
              { label: "Engine Diagnostics", href: "#services" },
              { label: "Oil Changes", href: "#services" },
              { label: "Transmission", href: "#services" },
            ],
          },
          {
            title: "Quick Links",
            links: [
              { label: "About Us", href: "#about" },
              { label: "Reviews", href: "#reviews" },
              { label: "Hours & Location", href: "#hours" },
              { label: "Contact", href: "#contact" },
            ],
          },
          {
            title: "Contact",
            links: [
              { label: "(818) 848-8335", href: "tel:8188488335" },
              { label: "835 S Glenoaks Blvd", href: "#hours" },
              { label: "Burbank, CA 91502", href: "#hours" },
            ],
          },
        ]}
      />
    </main>
  );
}