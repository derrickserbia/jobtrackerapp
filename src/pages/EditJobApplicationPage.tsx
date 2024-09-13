import JobApplicationForm from "../components/JobApplicationForm";
import { JobApplication } from "../models/JobApplication";

const initialJobApplication: JobApplication = {
  id: 10,
  jobTitle: "Senior Developer, Professional Services",
  companyName: "Adobe",
  applicationStatus: 2,
  dateAppliedString: "2024-07-12T00:00:00",
  jobDescription:
    "Our Company\nChanging the world through digital experiences is what Adobe’s all about. We give everyone—from emerging artists to global brands—everything they need to design and deliver exceptional digital experiences! We’re passionate about empowering people to create beautiful and powerful images, videos, and apps, and transform how companies interact with customers across every screen. \n\nWe’re on a mission to hire the very best and are committed to creating exceptional employee experiences where everyone is respected and has access to equal opportunity. We realize that new ideas can come from everywhere in the organization, and we know the next big idea could be yours!\n\nThe Opportunity \nThis is an exciting opportunity to be part of a growing team that provides consulting services for Adobe Digital Media solutions! The Adobe consulting team is responsible for providing experienced skills in implementing Adobe applications and integrating complementary Adobe enterprise solutions, and collaborating with clients' existing IT infrastructure.\n\nWe are looking for an experienced and dedicated Full Stack Developer who functions as the Adobe technical authority. Their responsibility is to not only know about the product's hidden intricacies but to truly understand the implications of every function, setting, & integration available. A Full Stack Developer might not know everything, but they know enough to hunt down what they don’t know and communicate it to the client.\n\nQualifications\nEducation:\n\n Bachelor's degree in Computer Science, Software Engineering, or a related field. A Master's degree is a plus.\nTechnical Skills:\n\nKnowledge of RESTful APIs for building scalable and efficient applications using Adobe Firefly Services, Adobe PDF Services, and other 3rd party APIs.\nProficiency in front-end technologies such as HTML5, CSS3, JavaScript (including frameworks like React, Angular, or Vue.js).\nStrong back-end development skills with languages like Java, Python, Ruby, Node.js, or C#.\nExperience with server-side technologies and frameworks (e.g., Spring, Express.js, Ruby on Rails).\nDatabase expertise, including SQL and NoSQL databases (e.g., MySQL, PostgreSQL, MongoDB).\nFamiliarity with containerization and orchestration tools like Docker and Kubernetes.\nVersion control using Git and collaboration platforms like GitHub or GitLab.\nUnderstanding of cloud computing platforms (e.g., AWS, Azure, Google Cloud) and serverless architectures.\nProficiency in DevOps practices, CI/CD pipelines, and infrastructure as code (e.g., Terraform, Ansible).\nSecurity awareness, including best practices for securing web applications and data.\nExperience with Generative AI is a plus\nProfessional Experience:\n\nProven track record of developing full-stack applications in a professional setting.\nDemonstrated expertise in delivering end-to-end solutions, from requirements gathering to deployment and maintenance.\nExperience with Agile and Scrum methodologies and the ability to work in cross-functional teams.\nPrior work on projects involving large-scale data processing, automation, and bulk operations is helpful.\nKnowledge of software development standard processes, including code reviews, testing (unit, integration, and automated testing), and documentation.\nExperience in architecting and designing scalable and resilient systems.\nSoft Skills:\n\nStrong communication and interpersonal skills to interact effectively with clients, project managers, and cross-functional teams.\nProblem-solving attitude with the ability to troubleshoot complex technical issues.\nAdaptability and a willingness to learn and stay updated with emerging technologies.\nProject management skills to manage time and priorities effectively.\nClient-focused and able to translate business requirements into technical solutions.\nTeam collaboration and the ability to mentor junior developers.\nPortfolio:\n\nA strong portfolio showcasing past projects and code samples that demonstrate your full-stack development skills.\nSpecial Considerations\nExperience & knowledge with Generative AI\nKnowledge of Adobe Document Cloud solutions\nKnowledge of Adobe Creative Cloud solutions\nKnowledge of Adobe Experience Cloud solutions\nOpportunity and affirmative action employer. We do not discriminate based on gender, race or color, ethnicity or national origin, age, disability, religion, sexual orientation, gender identity or expression, veteran status, or any other applicable characteristics protected by law. Learn more. \n\nAdobe aims to make Adobe.com accessible to any and all users. If you have a disability or special need that requires accommodation to navigate our website or complete the application process, email accommodations@adobe.com or call (408) 536-3015. \n\nAdobe values a free and open marketplace for all employees and has policies in place to ensure that we do not enter into illegal agreements with other companies to not recruit or hire each other’s employees.\n\nOur compensation reflects the cost of labor across several  U.S. geographic markets, and we pay differently based on those defined markets. The U.S. pay range for this position is $139,400 -- $235,700 annually. Pay within this range varies by work location and may also depend on job-related knowledge, skills, and experience. Your recruiter can share more about the specific salary range for the job location during the hiring process.",
  notes: "test",
  minSalary: 139400,
  maxSalary: 235700,
  postingUrl:
    "https://careers.adobe.com/us/en/job/R145578/Senior-Developer-Professional-Services",
  hiringTeam: "Adobe consulting team",
};

function EditJobApplicationPage() {
  const handleEdit = async (jobApplication: JobApplication) => {
    try {
      alert("edited");
    } catch (error) {
      alert("error");
    }
  };
  return (
    <JobApplicationForm
      formType="Edit"
      initialFormData={initialJobApplication}
      onSubmit={handleEdit}
    ></JobApplicationForm>
  );
}

export default EditJobApplicationPage;
