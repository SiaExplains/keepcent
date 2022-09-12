import Layout from '../src/components/Layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="page-about container">
        <div className="title">About our small team</div>
        <div className="member">
          <div>UX Designer: Sheida Mohassesy</div>
          <p>
            I pay great attention to User Interface design, User Experience design and team work. I
            am a good learner and hard-working person. I constantly look for new ways to enhance my
            skills and knowledge in design. Have a strong art education, years of experience working
            individually and in the cross-functional teams with real-world business experience. I am
            fast learner, positive, stress-resistant and highly organized.
          </p>
          <div className="tags">
            <span className="tag">Figma</span>
            <span className="tag">Adobe XD</span>
            <span className="tag">Logo Design</span>
            <span className="tag">Typography</span>
            <span className="tag">Product Design</span>
          </div>
        </div>
        <div className="member">
          <div>Software Developer: Siavash Ghanbari</div>
          <p>
            Programming since my fourteens. That's what I really love to do! Experienced Web
            application developer with more than +13 years of software development experience with
            competency in frontend and backend development. Proficient problem-solver with proven
            analytical skills to deliver high-quality applications. A results-oriented achiever with
            multi-tasking skills and experience in team collaboration. I’d like to design & develop
            a part of the future.
          </p>
          <div className="tags">
            <span className="tag">Nodejs</span>
            <span className="tag">Reactjs</span>
            <span className="tag">Javascript</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Expressjs</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
