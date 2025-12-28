import WorkHero from '../../components/WorkHero/WorkHero';
import WorkDetail from '../../components/WorkDetail/WorkDetail';
import './WorkPage.css';

const WorkPage = ({ onOpenLightbox }) => {
  const kromMedia = [
    {
      id: 'krom-overview',
      title: 'Project overview',
      summary: 'Extension layout and accessibility controls.',
      tone: 'rose',
      wide: true
    },
    {
      id: 'krom-research',
      title: 'Research snapshot',
      summary: 'ADHD pain points and focus triggers.',
      tone: 'cream'
    },
    {
      id: 'krom-ui',
      title: 'UI flow prototype',
      summary: 'Focus mode, readability toggles, and settings.',
      tone: 'peach'
    }
  ];

  const philipsMedia = [
    {
      id: 'philips-journey',
      title: 'Onboarding journey map',
      summary: 'Patient and clinician steps aligned.',
      tone: 'rose',
      wide: true
    },
    {
      id: 'philips-flow',
      title: 'Flow states',
      summary: 'Setup guidance and education touchpoints.',
      tone: 'cream'
    },
    {
      id: 'philips-ui',
      title: 'Interface details',
      summary: 'Calm UI patterns for connected care.',
      tone: 'peach'
    }
  ];

  return (
    <main id="main" className="page work-page">
      <WorkHero />
      <WorkDetail
        id="studio-krom"
        eyebrow="Case study"
        title="Digital Accessibility - Studio Krom"
        lead="Designed and built an accessibility-focused Chrome extension for ADHD users, owning UX, UI, and front-end execution."
        metaItems={[
          { label: 'Role', value: 'UX + UI + Front-End' },
          { label: 'Focus', value: 'Accessibility Chrome extension' },
          { label: 'Tools', value: 'Figma, React, Chrome extensions' },
          { label: 'Timeline', value: '2025' }
        ]}
        mediaItems={kromMedia}
        challenge="ADHD users needed quick control over distractions and readability without adding more UI noise."
        approachItems={[
          'Researched ADHD accessibility needs and daily pain points.',
          'Mapped tasks and flows, then designed wireframes and UI.',
          'Built a functional React extension to validate the concept.'
        ]}
        outcome="Delivered a working prototype with documentation and testing notes to support future iterations."
        delay="60ms"
        sectionClassName="section-white"
        onOpenLightbox={onOpenLightbox}
      />
      <WorkDetail
        id="philips"
        eyebrow="Internship"
        title="Philips Connected Care"
        lead="Onboarding and education flows for a connected care concept, translating clinical workflows into calm, accessible steps."
        note="Selected details are intentionally high-level."
        metaItems={[
          { label: 'Role', value: 'UX Design Intern' },
          { label: 'Focus', value: 'Onboarding and service flows' },
          { label: 'Tools', value: 'Figma, FigJam, accessibility checks' },
          { label: 'Timeline', value: '2024' }
        ]}
        mediaItems={philipsMedia}
        challenge="Aligning patient and clinician needs while keeping setup steps clear, safe, and easy to follow."
        approachItems={[
          'Mapped journeys for both patient and clinical workflows.',
          'Designed accessible flows with clear states and guidance.',
          'Collaborated with stakeholders to validate the concept.'
        ]}
        outcome="Delivered onboarding concepts, flow documentation, and usability insights for pilot direction."
        delay="120ms"
        sectionClassName="section-rose"
        onOpenLightbox={onOpenLightbox}
      />
    </main>
  );
};

export default WorkPage;
