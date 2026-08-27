import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Concussions', to: '/about-concussions' },
  { label: 'About CTEs', to: '/about-ctes' },
  { label: 'Athlete Corner', to: '/athlete-corner' },
  { label: 'More', to: '/more' },
]

const featureCards = [
  {
    title: 'About CTEs',
    slug: 'What is a CTE?',
    description:
      'CTE stands for Chronic Traumatic Encephalopathy. A CTE is a type of injury associated with repeated head injuries.',
    image:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80',
    to: '/about-ctes',
  },
  {
    title: 'Symptoms',
    slug: 'What are the Symtoms?',
    description:
      'There are many symptoms for concussions and these symptoms can vary depending on severity of the concussion.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80',
    to: '/symptoms',
  },
  {
    title: 'About Concussion',
    slug: 'What is a Concussion?',
    description:
      'A concussion is a type of traumatic brain injury that can be caused by events such as car accidents, sports injuries, or falls.',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
    to: '/about-concussions',
  },
  {
    title: 'Athlete Corner',
    slug: 'What can Athletes do?',
    description:
      'As an athlete your safety is your responsibility. When injury occurs with an athlete, many things are done to ensure proper recovery.',
    image:
      'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80',
    to: '/athlete-corner',
  },
]

function SiteHeader() {
  return (
    <header className="topbar">
      <nav className="main-nav" aria-label="Main navigation">
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                aria-label={item.label}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Link to="/" className="brand" aria-label="The Invisible Injury home">
        THE INVISIBLE INJURY
      </Link>
    </header>
  )
}

function PageTemplate({
  title,
  intro,
  sections,
}: {
  title: string
  intro?: string
  sections: Array<{ heading: string; paragraphs: string[] }>
}) {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main className="info-page">
        <section className="info-hero">
          <p className="eyebrow">The Invisible Injury</p>
          <h1>{title}</h1>
          {intro ? <p className="lead">{intro}</p> : null}
        </section>

        {sections.map((section) => (
          <section key={section.heading} className="info-section">
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </main>
    </div>
  )
}

function HomePage() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main className="page-content">
        <section className="hero-section">
          <div className="headline-stack" aria-label="The Invisible Injury headline">
            <span>THE</span>
            <span>INVISIBLE</span>
            <span>INJURY</span>
          </div>

          <div className="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
              alt="Athlete training"
            />
          </div>
        </section>

        <section className="mission-panel">
          <div className="mission-visual" aria-hidden="true">
            <div className="mission-badge">MISSION</div>
          </div>

          <div className="mission-copy">
            <h2>Our Mission</h2>
            <p>
              Our mission is to educate others about the dangers of concussion. Doing
              this will help break down the stigma of concussion in the sports world
              and eventually lead to safer sports.
            </p>
            <Link to="/about-us">Learn More</Link>
          </div>
        </section>

        <section className="danger-panel">
          <h2>Why are Concussion Dangerous?</h2>
          <p>
            In most cases, a single concussion will not lead to permanent damage after
            proper recovery. However, concussions are dangerous because of their
            effects. Although it is rare for the symptoms of one concussion to be
            severe enough to cause serious harm, concussions become more dangerous if
            multiple are sustained in a short period of time or if an individual
            experiences another concussion before fully recovering from the first.
            Experiencing multiple concussions could cause more severe symptoms that may
            pose a threat to one's health. Repeated concussions could lead to chronic
            traumatic encephalopathy.
          </p>

          <div className="feature-grid" aria-label="Concussion education links">
            {featureCards.map((card) => (
              <Link to={card.to} key={card.title} className="feature-card-link">
                <article className="feature-card">
                  <img src={card.image} alt={card.title} />
                  <div className="card-copy">
                    <h3>{card.title}</h3>
                    <h4>{card.slug}</h4>
                    <p>{card.description}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className="responsibility-block">
          <h2>Responsibilities for Parents &amp; Gurdians</h2>
          <p>
            Parents and guardians provide support before, during, and after a
            suspected concussion. They should watch for changes in symptoms or
            behaviour, communicate with the athlete and healthcare professionals, and
            make sure the athlete follows the recommended recovery and return-to-activity plan.
          </p>
        </section>

        <section className="responsibility-block secondary">
          <h2>Responsibilities for Coaches</h2>
          <p>
            As a coach, safety is always a top priority for athletes. A concussion
            can be an intimidating situation, but understanding how to recognize,
            manage, and navigate concussions before and after they occur can make
            dealing with concussions less challenging for everyone.
          </p>
          <Link to="/responsibilities-for-coaches">Learn More</Link>
        </section>
      </main>
    </div>
  )
}

function AboutConcussionsPage() {
  return (
    <PageTemplate
      title="About Concussions"
      intro="A concussion is a type of traumatic brain injury that can be caused by events such as car accidents, sports injuries, or falls."
      sections={[
        {
          heading: 'What Is a Concussion?',
          paragraphs: [
            'A concussion is a mild traumatic brain injury caused by a blow or jolt to the head or body. It can disrupt normal brain function and may affect thinking, memory, mood, and coordination.',
            'Symptoms can appear immediately or take hours or even days to emerge. Common signs include headaches, dizziness, confusion, nausea, sensitivity to light, and difficulty concentrating.',
          ],
        },
        {
          heading: 'Why It Matters',
          paragraphs: [
            'Even a seemingly minor concussion deserves attention. Ignoring symptoms or returning to activity too soon can worsen recovery and increase the risk of additional injuries.',
            'Proper rest, medical assessment, and gradual return-to-play or return-to-learning plans are important steps toward safe recovery.',
          ],
        },
      ]}
    />
  )
}

function AboutCTEsPage() {
  return (
    <PageTemplate
      title="About CTEs"
      intro="CTE stands for Chronic Traumatic Encephalopathy, a serious condition linked to repeated head injuries."
      sections={[
        {
          heading: 'What Is CTE?',
          paragraphs: [
            'Chronic Traumatic Encephalopathy is a brain disorder associated with repeated traumatic brain injuries. It is most commonly discussed in the context of contact sports and repeated blows to the head.',
            'The condition can lead to long-term changes in thinking, mood, and behavior. Symptoms may include memory problems, mood swings, irritability, depression, and in severe cases, cognitive decline.',
          ],
        },
        {
          heading: 'Prevention and Awareness',
          paragraphs: [
            'Raising awareness is critical. Recognizing symptoms early, seeking medical evaluation, and protecting athletes from repeated trauma can reduce risk and help prevent long-term damage.',
            'Safe play, trained coaches, and informed families and athletes are key parts of prevention.',
          ],
        },
      ]}
    />
  )
}

function AthleteCornerPage() {
  return (
    <PageTemplate
      title="Athlete Corner"
      intro="As an athlete, your safety is your responsibility. Understanding concussion symptoms and recovery steps can help protect your future."
      sections={[
        {
          heading: 'What Can Athletes Do?',
          paragraphs: [
            'Athletes should report symptoms early and never ignore signs such as dizziness, headaches, confusion, nausea, or feeling foggy. Being honest about how you feel is a sign of strength, not weakness.',
            'If you suspect a concussion, remove yourself from play and seek medical guidance before returning to sport. Recovery should be gradual and supervised when needed.',
          ],
        },
        {
          heading: 'Safe Return to Play',
          paragraphs: [
            'A proper return-to-play plan includes rest, symptom monitoring, and a gradual return to physical activity only after medical clearance. Taking this step protects both your health and your long-term performance.',
          ],
        },
      ]}
    />
  )
}

function SymptomsPage() {
  return (
    <PageTemplate
      title="Symptoms"
      intro="There are many symptoms of concussion, and they can vary depending on the severity of the injury."
      sections={[
        {
          heading: 'Common Symptoms',
          paragraphs: [
            'Symptoms of concussion may include headache, dizziness, nausea, trouble concentrating, blurry vision, fatigue, and feeling unusually sensitive to light or sound.',
            'Some people also report changes in mood, irritability, sleep problems, or trouble remembering what happened before or after the injury.',
          ],
        },
        {
          heading: 'When to Seek Help',
          paragraphs: [
            'If you or someone else has a possible concussion, it is important to stop activity and seek medical evaluation. A concussion should never be ignored, even if the person appears to be acting normally.',
          ],
        },
      ]}
    />
  )
}

function AboutUsPage() {
  return (
    <PageTemplate
      title="About Us"
      intro="Our mission is to educate others about the dangers of concussion and help break down the stigma surrounding brain injuries in sports."
      sections={[
        {
          heading: 'Our Mission',
          paragraphs: [
            'We believe education is the first step toward safer sports and healthier communities. By learning about concussion risks, athletes, parents, coaches, and guardians can make more informed decisions.',
            'This education helps reduce stigma, improve recognition, and support recovery for anyone who has experienced a concussion.',
            'Concussions can affect a person physically, mentally, and emotionally. Early recognition and informed care can make a major difference in recovery outcomes and long-term health.',
          ],
        },
       
      ]}
    />
  )
}

function ResponsibilitiesForCoachesPage() {
  return (
    <PageTemplate
      title="Responsibilities for Coaches"
      intro="As a coach, safety is always a top priority for athletes. A concussion can be a stressful situation, but understanding the steps to take can make a difference."
      sections={[
        {
          heading: 'What Coaches Should Do',
          paragraphs: [
            'Coaches should educate athletes and families about concussion signs, ensure appropriate safety practices, and encourage reporting symptoms immediately.',
            'When a suspected concussion occurs, the athlete should be removed from play, monitored, and referred for medical evaluation before returning to action.',
          ],
        },
        {
          heading: 'Creating a Safe Environment',
          paragraphs: [
            'A strong safety culture starts with clear communication, proper training, and a focus on recovery over pressure to return too soon. Coaches are critical in helping athletes prioritize health and long-term well-being.',
          ],
        },
      ]}
    />
  )
}

function MorePage() {
  return (
    <PageTemplate
      title="More Resources"
      intro="Additional resources and information to help families, athletes, and coaches better understand concussion safety."
      sections={[
        {
          heading: 'Learn More',
          paragraphs: [
            'This section brings together the key ideas behind concussion education: awareness, prevention, and safe recovery.',
            'Visit the other pages to learn more about the risks of concussion, symptoms, athlete responsibilities, and coach guidance.',
          ],
        },
      ]}
    />
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-concussions" element={<AboutConcussionsPage />} />
        <Route path="/about-ctes" element={<AboutCTEsPage />} />
        <Route path="/athlete-corner" element={<AthleteCornerPage />} />
        <Route path="/symptoms" element={<SymptomsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/responsibilities-for-coaches" element={<ResponsibilitiesForCoachesPage />} />
        <Route path="/more" element={<MorePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
