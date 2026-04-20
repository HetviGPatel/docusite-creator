import { createFileRoute } from "@tanstack/react-router";
import { Radio } from "lucide-react";
import officeImg from "../assets/about-office.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/industries/media")({
  component: Page,
  head: () => ({ meta: [{ title: "Media & Communications — Jigisha Group" }] }),
});

function Page() {
  return (
    <DetailPage
      category="industries"
      title="Media & Communications"
      tagline="Integrated marketing, digital media, PR, events and industrial publishing"
      overview="Jigisha Group's media vertical delivers integrated marketing, digital production, PR, events, industrial publishing and brand strategy — including the In-News platform and an industry-focused magazine that connects manufacturers, infrastructure players and government stakeholders."
      heroImage={officeImg}
      Icon={Radio}
      stats={[{ value: "B2B", label: "Specialists" }, { value: "PR", label: "PAN-India" }, { value: "In-News", label: "Platform" }, { value: "Industrial", label: "Magazine" }]}
      offerings={[
        { title: "Integrated Marketing Campaigns", desc: "Strategy, creative, paid media, ABM and full-funnel B2B marketing for industrial and infrastructure brands." },
        { title: "Digital Media Production", desc: "Corporate films, factory documentaries, product videos, animations, drone shoots and explainer content." },
        { title: "Corporate Events Management", desc: "Conferences, exhibitions, factory openings, customer events, road shows and hybrid event production." },
        { title: "In-News Platform & Publishing", desc: "Industry news platform connecting manufacturers, government, buyers and policy stakeholders." },
        { title: "Corporate PR & Communications", desc: "Media relations, press releases, crisis communication, executive thought leadership and CXO branding." },
        { title: "Industrial Magazine Publication", desc: "Sector-focused print and digital magazine covering railways, defence, manufacturing and infrastructure." },
        { title: "Brand Identity & Design", desc: "Corporate identity, brand books, packaging, signage, exhibition stalls and creative design services." },
        { title: "Social Media Management", desc: "LinkedIn-led B2B social, content calendars, community management, influencer marketing and analytics." },
      ]}
      capabilities={["B2B marketing experts","Industrial sector knowledge","In-house studio","Drone & 4K production","PR networks","Digital ad platforms","SEO & content","CRM & marketing automation","Event production","Print & digital publishing","Translation services","Analytics & ROI reporting"]}
      whyUs={[
        { title: "Industrial DNA", desc: "We understand factories, projects, government — content that resonates with B2B buyers." },
        { title: "Owned Media", desc: "In-News and industrial magazine give clients sustained reach to qualified industry audiences." },
        { title: "Full-Stack Agency", desc: "Strategy to creative to media to PR to events — integrated under one accountable team." },
      ]}
    />
  );
}
