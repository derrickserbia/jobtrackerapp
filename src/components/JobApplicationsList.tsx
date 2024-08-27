import { Table } from "react-bootstrap";
import { JobApplicationListItem } from "../models/JobApplicationListItem";
import { Link } from "react-router-dom";
import { getApplicationStatusText } from "../models/ApplicationStatus";

const jobApplicationsFromApi = [
  {
    id: 10,
    jobTitle: "Senior Developer, Professional Services",
    companyName: "Adobe",
    status: 2,
    dateApplied: "2024-07-12T00:00:00",
    jobDescription:
      "Our Company\nChanging the world through digital experiences is what Adobe’s all about. We give everyone—from emerging artists to global brands—everything they need to design and deliver exceptional digital experiences! We’re passionate about empowering people to create beautiful and powerful images, videos, and apps, and transform how companies interact with customers across every screen. \n\nWe’re on a mission to hire the very best and are committed to creating exceptional employee experiences where everyone is respected and has access to equal opportunity. We realize that new ideas can come from everywhere in the organization, and we know the next big idea could be yours!\n\nThe Opportunity \nThis is an exciting opportunity to be part of a growing team that provides consulting services for Adobe Digital Media solutions! The Adobe consulting team is responsible for providing experienced skills in implementing Adobe applications and integrating complementary Adobe enterprise solutions, and collaborating with clients' existing IT infrastructure.\n\nWe are looking for an experienced and dedicated Full Stack Developer who functions as the Adobe technical authority. Their responsibility is to not only know about the product's hidden intricacies but to truly understand the implications of every function, setting, & integration available. A Full Stack Developer might not know everything, but they know enough to hunt down what they don’t know and communicate it to the client.\n\nQualifications\nEducation:\n\n Bachelor's degree in Computer Science, Software Engineering, or a related field. A Master's degree is a plus.\nTechnical Skills:\n\nKnowledge of RESTful APIs for building scalable and efficient applications using Adobe Firefly Services, Adobe PDF Services, and other 3rd party APIs.\nProficiency in front-end technologies such as HTML5, CSS3, JavaScript (including frameworks like React, Angular, or Vue.js).\nStrong back-end development skills with languages like Java, Python, Ruby, Node.js, or C#.\nExperience with server-side technologies and frameworks (e.g., Spring, Express.js, Ruby on Rails).\nDatabase expertise, including SQL and NoSQL databases (e.g., MySQL, PostgreSQL, MongoDB).\nFamiliarity with containerization and orchestration tools like Docker and Kubernetes.\nVersion control using Git and collaboration platforms like GitHub or GitLab.\nUnderstanding of cloud computing platforms (e.g., AWS, Azure, Google Cloud) and serverless architectures.\nProficiency in DevOps practices, CI/CD pipelines, and infrastructure as code (e.g., Terraform, Ansible).\nSecurity awareness, including best practices for securing web applications and data.\nExperience with Generative AI is a plus\nProfessional Experience:\n\nProven track record of developing full-stack applications in a professional setting.\nDemonstrated expertise in delivering end-to-end solutions, from requirements gathering to deployment and maintenance.\nExperience with Agile and Scrum methodologies and the ability to work in cross-functional teams.\nPrior work on projects involving large-scale data processing, automation, and bulk operations is helpful.\nKnowledge of software development standard processes, including code reviews, testing (unit, integration, and automated testing), and documentation.\nExperience in architecting and designing scalable and resilient systems.\nSoft Skills:\n\nStrong communication and interpersonal skills to interact effectively with clients, project managers, and cross-functional teams.\nProblem-solving attitude with the ability to troubleshoot complex technical issues.\nAdaptability and a willingness to learn and stay updated with emerging technologies.\nProject management skills to manage time and priorities effectively.\nClient-focused and able to translate business requirements into technical solutions.\nTeam collaboration and the ability to mentor junior developers.\nPortfolio:\n\nA strong portfolio showcasing past projects and code samples that demonstrate your full-stack development skills.\nSpecial Considerations\nExperience & knowledge with Generative AI\nKnowledge of Adobe Document Cloud solutions\nKnowledge of Adobe Creative Cloud solutions\nKnowledge of Adobe Experience Cloud solutions\nOpportunity and affirmative action employer. We do not discriminate based on gender, race or color, ethnicity or national origin, age, disability, religion, sexual orientation, gender identity or expression, veteran status, or any other applicable characteristics protected by law. Learn more. \n\nAdobe aims to make Adobe.com accessible to any and all users. If you have a disability or special need that requires accommodation to navigate our website or complete the application process, email accommodations@adobe.com or call (408) 536-3015. \n\nAdobe values a free and open marketplace for all employees and has policies in place to ensure that we do not enter into illegal agreements with other companies to not recruit or hire each other’s employees.\n\nOur compensation reflects the cost of labor across several  U.S. geographic markets, and we pay differently based on those defined markets. The U.S. pay range for this position is $139,400 -- $235,700 annually. Pay within this range varies by work location and may also depend on job-related knowledge, skills, and experience. Your recruiter can share more about the specific salary range for the job location during the hiring process.",
    notes: "test",
    minSalary: 139400,
    maxSalary: 235700,
    postingUrl:
      "https://careers.adobe.com/us/en/job/R145578/Senior-Developer-Professional-Services",
    hiringTeam: "Adobe consulting team",
    techStack: [],
  },
  {
    id: 44,
    jobTitle: "Senior Software Engineer, Backend (Identity Decisioning)",
    companyName: "Affirm",
    status: 0,
    dateApplied: "2024-07-13T04:32:32.964",
    jobDescription:
      'Affirm is reinventing credit to make it more honest and friendly, giving consumers the flexibility to buy now and pay later without any hidden fees or compounding interest.\n\nWe are looking for a Senior Software Engineer to join the Identity Decisioning team, responsible for building backend systems that validates consumer identity in all of Affirm’s products by satisfying regulatory protocols like KYC. The team partners closely with Product, Compliance, Auth, Fraud, and other engineering teams to deliver honest and transparent financial products that help consumers make their purchasing decisions. As we scale the company to be a cornerstone of all e-commerce and offline retail, it is an exciting time to join the team which sits at the core of this mission. \n\nWhat You’ll Do\nCollaborate with other Software Engineers to design, maintain, and evolve existing architecture that grows the business and unlocks new product initiatives. \nDrive detailed project definition, design, technical specification, cross-functional alignment, task breakdown, and delivery. \nProactively raise any issues or improvement opportunities in our product, technology, or business processes and contribute ideas to deliver them.\nProvide technical leadership to ensure the delivery of reliable, scalable, and performant technical solutions\nBuild teams by mentoring other engineers, informing and influencing hiring decisions, and building an inclusive team environment\nProvide input into planning our product, codebase, infrastructure, team goals, and roadmap.\nWhat We Look For\nThis position requires either equivalent practical experience or a Bachelor’s degree in a related field\n4+ years of experience designing, building, launching, and maintaining complex systems\nFamiliarity with Python ecosystem - Flask, Mypy, Pytest, etc.\nStrong cross-team communication and collaboration skills\nA leader, team builder, and mentor\nPassionate about Affirm\'s Mission: "Deliver Honest Financial Products that improve lives"\nExperience in Risk Engineering domain\nBase Pay Grade - N\nEquity Grade - 8\n\nEmployees new to Affirm typically come in at the start of the pay range. Affirm focuses on providing a simple and transparent pay structure which is based on a variety of factors, including location, experience and job-related skills.\n\nBase pay is part of a total compensation package that may include equity rewards, monthly stipends for health, wellness and tech spending, and benefits (including 100% subsidized medical coverage, dental and vision for you and your dependents.)\n\nUSA base pay range (CA, WA, NY, NJ, CT) per year: $190,000 - $240,000\n\nUSA base pay range (all other U.S. states) per year: $169,000 - $219,000\n\n',
    notes: "",
    minSalary: 169000,
    maxSalary: 219000,
    postingUrl: "https://boards.greenhouse.io/affirm/jobs/6015238003",
    hiringTeam: null,
    techStack: [],
  },
  {
    id: 45,
    jobTitle: "Software Engineer II, Backend (Qualifications)",
    companyName: "Affirm",
    status: 0,
    dateApplied: "2024-07-14T00:00:00",
    jobDescription:
      "Affirm is reinventing credit to make it more honest and friendly, giving consumers the flexibility to buy now and pay later without any hidden fees or compounding interest.\n\nAffirm’s mission is to build honest financial products to improve user’s lives. We are seeking a Software Engineer to build parts of Affirm's backend Qualification platform which allows users to know their spending power across all merchants for each of Affirm's products. You will investigate, spec, design, and implement systems to power our synchronous user-initiated and offline proactive prequalification system. Your technical leadership will have a high impact on the future growth of Affirm, as we aim to provide honest financial products throughout the world!\n\nWhat You’ll Do\n\nWork with technical leaders in the team to design and implement insightful forward-looking approaches that go beyond the direct team and solve large open-ended problems.\n\nCollaborate with engineers within the Qualifications team and across other product and credit engineering teams to build a scalable backend that powers all pre-qualifications across Affirm.\n\nTake ownership over parts of the Qualifications system.\n\nWrite high-quality code that can be easily understood and leveraged by others.\n\nReview others’ work and provide constructive feedback in order to maintain high and consistent quality standards across teams.\n\nConduct technical evaluations to inform and influence the hiring decisions.\n\nWhat we Look For\n\n2+ years of experience as a Software Engineer.\n\nEager to learn new things and have a growth mindset.\n\nFluency in backend development.\n\nFamiliarity with Python, AWS, and Kubernetes is a plus.\n\nPrior experience designing, building, launching, and maintaining consumer scale products.\n\nStrong cross-team communication and collaboration skills.\n\nExperienced at synthesizing complex business, product, and technical requirements to consistently produce high quality system designs and software.\n\nHumble and authentic leadership which places the needs of others first and helps people develop and perform as highly as possible.\n\nExperience scaling systems in a service oriented architecture.\n\nHumility and self-awareness to understand and navigate the unknown.\n\n\nPay Grade - L\n\nEquity Grade - USA 6\n\nEmployees new to Affirm typically come in at the start of the pay range. Affirm focuses on providing a simple and transparent pay structure which is based on a variety of factors, including location, experience and job-related skills.\n\nBase pay is part of a total compensation package that may include equity rewards, monthly stipends for health, wellness and tech spending, and benefits (including 100% subsidized medical coverage, dental and vision for you and your dependents.)\n\nUSA base pay range (CA, WA, NY, NJ, CT) per year: $160,000 - $210,000\nUSA base pay range (all other U.S. states) per year: $142,000 - $192,000\n",
    notes: "",
    minSalary: 142000,
    maxSalary: 192000,
    postingUrl: "https://boards.greenhouse.io/affirm/jobs/6032715003",
    hiringTeam: null,
    techStack: [],
  },
  {
    id: 46,
    jobTitle:
      "Senior Software Engineer, Backend (Loan Originations & Reporting)",
    companyName: "Affirm",
    status: 0,
    dateApplied: "2024-07-08T04:37:37",
    jobDescription:
      "Affirm is reinventing credit to make it more honest and friendly, giving consumers the flexibility to buy now and pay later without any hidden fees or compounding interest.\n\nThe Loan Origination and Reporting team (LOR) is responsible for the creation of all loans with Affirm. We make reliable, scalable systems that can handle loan requests from our continually growing customer base. Our team's main users include the bank partners who originate our loans, and other engineering teams that use our services. In the future, we will be extending our reach to countries outside the U.S., signing on new customers, new merchants, and new bank partners along the way.\n\nWhat You’ll Do\n\nDesign, code, and maintain services that enable the origination of hundreds of millions of dollars worth of loans and can scale to meet our growing demand\nBuild batch processes and integrate data pipelines to automate data sourcing and reporting workflows\nMentor junior teammates, review their code, and help them learn the skills and methodologies needed to become outstanding engineers\nWork with technical and non-technical business partners to discuss project plans and status\nContinually look for ways to improve both LOR systems and Affirm Engineering as a whole\nWhat We Look For\n\nThis position requires either equivalent practical experience or a Bachelor’s degree in a related field\n4+ years of experience as a software engineer with leadership exposure and experience mentoring junior engineers\nPassion for technology and solving problems with software\nProficiency and experience in back-end development and distributed systems (our tech stack includes Python, Spark, Kubernetes, MySQL, and AWS)\nProficient in backend data processing and batch processing\nStrong cross-team communication and collaboration skills\nPrior experience with SOA and event-driven systems a plus\nBase Pay Grade - N\nEquity Grade - 8\n\nEmployees new to Affirm typically come in at the start of the pay range. Affirm focuses on providing a simple and transparent pay structure which is based on a variety of factors, including location, experience and job-related skills.\n\nBase pay is part of a total compensation package that may include equity rewards, monthly stipends for health, wellness and tech spending, and benefits (including 100% subsidized medical coverage, dental and vision for you and your dependents.)\n\nUSA base pay range (CA, WA, NY, NJ, CT) per year: $190,000 - $240,000\n\nUSA base pay range (all other U.S. states) per year: $169,000 - $219,000",
    notes: "",
    minSalary: 169000,
    maxSalary: 219000,
    postingUrl: "https://boards.greenhouse.io/affirm/jobs/5958220003",
    hiringTeam: null,
    techStack: [],
  },
  {
    id: 48,
    jobTitle: "Senior .NET Software Engineer - equal back end and front end",
    companyName: "Johnson Controls",
    status: 2,
    dateApplied: "2024-07-08T04:40:45",
    jobDescription:
      "https://jobs.johnsoncontrols.com/job/20341286/senior-net-software-engineer-equal-back-end-and-front-end-remote-raleigh-nc/\nBuild your best future with the Johnson Controls team!\n\nFM:Systems, now a part of Johnson Controls (JCI), provides workplace management technology and solutions that enable facility and real estate teams to identify, plan and deliver the ideal workplace for every employee. Our broad solutions portfolio of software and hardware, specializing in space management and optimization, assets and maintenance, strategic real estate planning, resource scheduling, as well as projects and sustainability, empowers our clients to gain insight into how their facility space is performing, how they enhance efficiency and crate an employee-centric workplace.\n\nAs a global leader in smart, healthy, and sustainable buildings, our mission is to reimagine the performance of buildings to serve people, places, and the planet.  Join a winning team that enables you to build your best future! Our teams are uniquely positioned to support a multitude of industries across the globe. You will have the opportunity to develop yourself through significant work projects and learning opportunities. We strive to provide our employees with an experience, focused on supporting their physical, financial, and emotional wellbeing. Become a member of the Johnson Controls family and thrive in an empowering company culture where your voice and ideas will be heard – your next great opportunity is just a few clicks away! \n\nWhat we offer:\n\nCompetitive salary \n\nPaid vacation/holidays/sick time \n\nComprehensive benefits package including 401K, medical, dental, and vision care. \n\nOn the job/cross training opportunities \n\nEncouraging and collaborative team environment \n\nDedication to safety through our Zero Harm policy \n\nCheck us out:  A Day in a Life at Johnson Controls\n\n​\n\nWhat you will do:\n\nFM:Systems is looking for a Senior .NET Software Engineer – Front end and Back end with a strong background developing and maintaining enterprise web applications to join our Product Engineering team.  This role is a senior level position for a very experienced .NET engineer. This person will play a crucial role enhancing and maintaining our web applications as a technology leader as well as expanding our technology teams’ capabilities.  The senior software engineering position will require someone who enjoys being a technical leader within a team to bridge product needs to technical solutions.  You should be passionate about building the right solutions right and be comfortable working in a dynamic environment where flexibility and communication is essential.  This is a great opportunity for you to join a growing team that encourages creativity, teamwork, professional growth, and advancement.\n\nHow you will do it:\n\nWork as a lead developer to deliver the right product functionality from UI to middleware/API to database.\n\nCode in VB, C#, React and other languages to enhance and maintain our web application.  Our application is a mix of C# and VB.\n\nActively participate in our evaluation and long-term implementation of technology enhancements.\n\nContribute substantially to the architecture and design of our applications that enable implementation of solid solutions.\n\nWork with the team to ensure appropriate SDLC processes are followed. \n\nEnsure quality, performance, usability, and maintainability are built into our solutions at the right balance.\n\nWork with other technical leaders to ensure consistency across our applications and development processes.\n\nCommunicate and coordinate effectively as a technical delivery leader within the team, across our technology teams, and with our business partners to deliver on top priorities!\n\nMentor other engineers, encouraging engineering best practices, demonstrating how to create effective designs and write maintainable, reusable code.\n\nCollaborate with UX experts to evolve our SaaS applications.\n\n​\n\nWhat we look for:\n\nBachelor’s degree in a computer related degree program or equivalent work experience.\n\n8+ years of professional Software Engineering experience.\n\n8+ years of experience developing in the .NET framework with ASP.NET MVC, ASP.NET, and Web API.\n\n8+ years of C# and/or VB programming experience.  While most coding will be in VB, we will consider candidates that do not have prior VB.NET experience.\n\n5+ years of MS SQL experience and ability to demonstrate strength with stored procedures, queries, tuning and debugging.\n\nExperience developing JavaScript, CSS, and HTML with a solid understanding of at least one JavaScript framework.\n\nStrong experience with implementing unit tests.\n\nExperience building and tuning RESTful APIs.\n\nExperience producing designs to represent solutions to product and customer needs.\n\nExperience with deployment methodologies such as CI/CD and Octopus.\n\nA history of successfully implementing software development patterns and best practices such as dependency injection.\n\nAbility to successfully interface with business stakeholders and engineers to deliver the right solution that balances product, quality, technical, and timeline requirements.\n\nAbility to translate technical requirements into elegant code solutions.\n\nPassion for mentoring junior engineers to produce elegant, maintainable technology deliverables.\n\nExcellent written and verbal communication skills.\n\nA self-starter with an acute sense of ownership and the ability, passion, creativity, and confidence to independently problem solve and produce results.\n\nStrong history of moving quality to the left including extensive unit testing experience. \n\nExperience working with Agile development practices.\n\n​\n\nDesired Skills\n\n.NET Core development experience.\n\nWorking knowledge of API authorization and authentication protocols such as OAuth2 and OpenID Connect.\n\nExperience building and consuming micro-frontend components.\n\nExperience with React and responsive frameworks.\n\nFamiliarity with modern test tools, technologies, and analytics.\n\nExperience using Git or GitHub.\n\nExperience with Jira or similar tools.\n\nExperience with Octopus and other modern dev-ops tools.\n\nAWS deployment and hosting experience.\n\nApplications are accepted on an ongoing basis.",
    notes: "",
    minSalary: 0,
    maxSalary: 0,
    postingUrl: null,
    hiringTeam: null,
    techStack: [],
  },
  {
    id: 49,
    jobTitle: "Sr. Software Engineer - Supply Chain Platform",
    companyName: "Publix",
    status: 2,
    dateApplied: "2024-07-09T04:45:51",
    jobDescription: "",
    notes: "",
    minSalary: 0,
    maxSalary: 0,
    postingUrl: null,
    hiringTeam: null,
    techStack: [],
  },
  {
    id: 50,
    jobTitle: "Senior Software Engineer - Retail Fresh Delivery",
    companyName: "Publix",
    status: 2,
    dateApplied: "2024-07-09T04:45:51",
    jobDescription: "",
    notes: "",
    minSalary: 0,
    maxSalary: 0,
    postingUrl: null,
    hiringTeam: null,
    techStack: [],
  },
];

function JobApplicationsList() {
  const mapJobApplicationListItem = (
    jobApplicationFromApi: any
  ): JobApplicationListItem => {
    const output: JobApplicationListItem = {
      id: jobApplicationFromApi.id,
      jobTitle: jobApplicationFromApi.jobTitle,
      companyName: jobApplicationFromApi.companyName,
      applicationStatusString: getApplicationStatusText(
        jobApplicationFromApi.status
      ),
      dateAppliedString: jobApplicationFromApi.dateApplied.slice(0, 10),
      minSalary: jobApplicationFromApi.minSalary,
      maxSalary: jobApplicationFromApi.maxSalary,
    };
    return output;
  };
  const jobApplications = jobApplicationsFromApi.map((jobApplication) =>
    mapJobApplicationListItem(jobApplication)
  );
  return (
    <Table striped hover borderless size="sm">
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Company Name</th>
          <th>Application Status</th>
          <th className="d-none d-lg-table-cell">Date Applied</th>
          <th className="d-none d-lg-table-cell">Min Salary</th>
          <th className="d-none d-lg-table-cell">Max Salary</th>
        </tr>
      </thead>
      <tbody>
        {jobApplications.map((jobApplication) => (
          <tr key={jobApplication.id}>
            <td width="40%">
              <Link to={`/jobapplications/${jobApplication.id}`}>
                {jobApplication.jobTitle}
              </Link>
            </td>
            <td>{jobApplication.companyName}</td>
            <td>{jobApplication.applicationStatusString}</td>
            <td className="d-none d-lg-table-cell">
              {jobApplication.dateAppliedString}
            </td>
            <td className="d-none d-lg-table-cell">
              {jobApplication.minSalary}
            </td>
            <td className="d-none d-lg-table-cell">
              {jobApplication.maxSalary}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default JobApplicationsList;
