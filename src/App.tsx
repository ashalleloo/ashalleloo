import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import athleteCornerCover from './assets/Athlete Corner Cover page.jpg'
import cteCover from './assets/CTE Cover apge.jpg'
import './App.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'About Concussions', to: '/about-concussions' },
  { label: 'About CTEs', to: '/about-ctes' },
  { label: 'Athlete Corner', to: '/athlete-corner' },
  { label: "Coach's Corner", to: '/responsibilities-for-coaches' },
  { label: 'More', to: '/more' },
]

const featureCards = [
  {
    title: 'About CTEs',
    slug: 'What is a CTE?',
    description:
      'CTE stands for Chronic Traumatic Encephalopathy. A CTE is a type of injury associated with repeated head injuries.',
    image: cteCover,
    to: '/about-ctes',
  },
  {
    title: 'Symptoms',
    slug: 'What are the Symptoms?',
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
    image: athleteCornerCover,
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
            In most cases, a single concussion will not lead to permanent damage after proper recovery. However, concussions are dangerous because of their effects. Symptoms of a concussion can pose safety concerns for everyday tasks such as cooking or driving due to difficulty concentrating or other symptoms. Although it is rare for the symptoms of one concussion to be severe enough to cause serious harm, concussions become more dangerous if multiple are sustained in a short period of time or if an individual experiences another concussion before fully recovering from the first. Experiencing multiple concussions could cause more severe symptoms that may pose a threat to one's health. Repeated concussions could lead to chronic traumatic encephalopathy..
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
          <h2>Responsibilities for Parents &amp; Guardians</h2>
          <p>
           Parents and guardians provide support before, during, and after a suspected concussion. They should watch for changes in symptoms or behaviour, communicate with the athlete and healthcare professionals, and make sure the athlete follows the recommended recovery and return-to-activity plan.
          </p>
        </section>

        <section className="responsibility-block secondary">
          <h2>Responsibilities for Coaches</h2>
          <p>
           As a coach, safety is always a top priority for athletes. A concussion can be an intimidating situation, but understanding how to recognize, manage, and navigate concussions before and after they occur can make dealing with concussions less challenging for everyone.
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
            'A concussion is a type of traumatic brain injury that can be caused by events such as car accidents, sports injuries, or falls. Concussions occur when the brain experiences rapid acceleration and deceleration. When you hit your head, the brain moves within the cerebrospinal fluid that normally cushions and protects it. However, in the case of a concussion, this rapid movement causes the brain to shift and deform inside the cranium. As a result, the brain’s soft and flexible composition becomes stressed and damaged by contact with the firm cranium. When this happens, the brain tissue and nerves can stretch and become damaged. What makes concussions different from injuries such as a broken bone is that MRIs, X-rays, or CT scans are unable to diagnose them. Instead, concussions often present themselves through changes in behavior. ',
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
            'CTE stands for Chronic Traumatic Encephalopathy. CTE is a type of injury associated with repeated head injuries. It is linked to experiencing numerous concussions. When your brain is injured during a traumatic brain injury (TBI), abnormal tau protein can begin to build up in the brain. As a result of suffering from numerous concussions, excessive tau protein accumulates. This excess tau can form tangles that build up inside brain cells, disrupting their function and eventually causing the cells to die. CTE can cause changes in behavior and can lead to mental health illnesses like depression.  ',
          ],
        },
        {
          heading: 'Prevention and Awareness',
          paragraphs: [
            'Recognizing symptoms early, seeking medical help, and following safe return-to-play protocols can help protect athletes from repeated trauma and reduce long-term risks. ',

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
            'As an athlete, your safety is your responsibility. When an injury occurs with an athlete, many things are done to ensure proper recovery, but when it comes to a concussion, this is not always the case. The problem is that often concussions will go unreported. There are many factors that influence this, but the most prevalent factors are the following:',
            'Athletes may not recognize the symptoms of a concussion',
            'Athletes may not want to be removed from play',
            'Athletes may not want to let down their team or coach',
            'Athletes may not want to be seen as weak',
            'Athletes may not be informed about the lont-term effects of concussions',
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
            'There are many symptoms of concussions, and these symptoms can vary depending on the severity of the concussion. However, if someone is suspected to have sustained a concussion, it should not be taken lightly. Common symptoms of concussions include the following:',
          'Confusion',
          'Headaches',
          'Dizziness',
          'Nausea',
          'Vomiting',
          'Sensitivity to light or noise',
          'Loss of memory',
          'Difficulty concentrating',
          'Irregular sleep patterns',
          'Blurred vision or double vision',
          'Mood changes or irritability',
          'Imbalance or loss of coordination',
          ],
        },
        {
          heading: 'When to Seek Help',
          paragraphs: [
            'If someone is suspected to have concussions or displays symptoms, it is important to stop activity and seek medical evaluation. A concussion should be ignored, even if the person is acting normal.',
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
          heading: 'Who are We?',
          paragraphs: [
            `Hi, my name is Ashalle, and I’m currently working on a project about concussions as part of the Quantum Leaps program at the Society for Canadian Women in Science and Technology (SCWIST). Through this project, I’m exploring the stigma around concussions and how that affects athletes. I love to play contact sports like rugby and box lacrosse. I noticed that in the sports that I play, there is a stigma around concussions. I often saw that my friends and teammates were poorly informed about concussions and that there was a stigma around concussions. I thought this was a terrible thing because my teammates and friends could put themselves in danger if they didn’t know the full effects of a concussion. When I got this opportunity to participate in Quantum Leaps, I decided that I wanted to do my project on concussions. I want this project to inform others about the dangers of concussions, but most of all, I want this project to help break down the stigma around concussions.`,
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
            'Coaches should ensure that athletes are educated about concussions. Many athletes lack knowledge about concussions, and it is rare for them to seek out this information on their own. Educating athletes about concussions helps them understand the potential risks and take steps to protect themselves. Furthermore, this breaks down the stigma around concussions and increases the likelihood of athletes seeking help if they are experiencing concussion-like symptoms.',
            'Coaches should implement concussion protocols and baseline testing, as these measures can help with concussion recovery and prevention. Concussion protocols can help identify concussions in athletes, and they ensure a safe return to play. Baseline testing can help identify changes following concussions and support the recovery process. These measures increase safety for athletes by providing clarity during the recovery process. ',
          ],
        },
        {
          heading: 'Creating a Safe Environment',
          paragraphs: [
            'A strong safety culture and a supportive environment among staff and athletes is very important to concussion safety. This environment allows athletes to feel comfortable and seek help when needed. It is also important to reassure athletes that seeking help for a concussion is the best thing to do. This discourages athletes from adopting a "macho mentality" and continuing to participate in their sport while suffering from a concussion.',
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
