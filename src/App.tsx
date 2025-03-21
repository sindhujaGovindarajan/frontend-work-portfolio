import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { ProjectData } from "./types";
import styled from "styled-components";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// import { FaFileDownload } from "@react-icons/all-files/fa/FaFileDownload";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import { FaSkype } from "@react-icons/all-files/fa/FaSkype";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import Theme from "./components/Theme";
import Role from "./components/Role";
import ProjectCard from "./components/ProjectCard";
import SortByYear from "./components/SortByYear";
import Button from "./components/Button";
import ComingSoon from "./components/ComingSoon";
import SvgSiteLogo from "./assets/SvgSiteLogo";

const allProjectData: ProjectData[] = [
  // {

  //   title: "Northwestern Mutual",

  //   tenure: "Jun 2024 - Jul 2024",

  //   responsibilities: [

  //     "Architecting and defining the Front-end framework to solve complex designs and interactions.",

  //     "Discussing with microservices team and consume the integration modules using Web Services API.",

  //   ],

  //   techStackUsed: ["React Js", "Redux", "RTL"],

  //   employerName: "HCL Technologies Ltd, Tamil Nadu, India",

  // },

  {
    title: "Applied Materials Canada Inc.",

    tenure: "Jul 2021 - Present",

    responsibilities: [
      "Architecting and defining the Front-end framework to solve complex designs and interactions.",

      "Discussing with microservices team and consume the integration modules using Web Services API.",

      "Collaborating with peer vendor’s & architecture team and business end to understand the requirements and build web enhancements for seamless functioning of the application.",

      "Develop extensive web D3 dashboards on React applications with responsive grid and flex model using React Bootstrap.",

      "Collaborate with peer organizations, quality assurance and end users.",

      "Produce cutting-edge, full-fledged faster application using React & D3 for huge data visualization.",

      "Conducting UI performance testing and ensuring the reliable web page functioning to meet the client's market functional requirements.",

      "Integrating external a grid framework, Ag-Grid, as a solution for graphical and data representation.",

      "Troubleshooting code level problems quickly and efficiently.",

      "Transfer knowledge and share reusable code with internal peer organizational teams.",

      "Responsible to raise Change requests, engage in TRM calls, get the CRs approved and deploy code accordingly and close the change tasks after production testing is successful.",

      "Once in production, continuously service and support the application and work on feature addition as per customer requirement proposal.",

      "Manage, distribute and control source code and its version through BitBucket adhering CI/CD.",

      "Helping business and architecture teams with choice of technical products, as well as helping team members with the technical challenges of creating and maintaining comprehensive project documentation.",

      "Mentoring resources providing them technical support and responsible for their deliveries.",
    ],

    techStackUsed: [
      "React Js",

      "Redux Toolkit",

      "D3",

      "ES6",

      "Typescript",

      "Javascript",

      "Bootstrap",

      "Material-UI",

      "Ag-Grid",

      "Microfrontends",

      "HTML5",

      "CSS3",

      "JSON",

      "BitBucket",

      "GIT",

      "JIRA",

      "Jenkins",

      "OCP",

      "Docker",

      "Storybook",
    ],

    employerName: "HCL Canada Inc., Toronto, Canada",
  },

  {
    title: "Hootsuite - Amplify MS-Teams App",

    tenure: "Feb 2021 - May 2021",

    responsibilities: [
      "Developing technical solution and fully functional interface for Hootsuite’s employees and clients to safely share content—extending social reach.",

      "Proactively communicate with client and off-shore teams on a daily-basis and requirement gathering focusing on delivering customer value.",

      "Architecting and defining the Front-end framework to solve complex designs and interactions.",

      "Discussing and consuming the integration modules using AWS and MS-Teams API.",

      "Collaborating with the client’s architecture team and business end to understand the requirements and build web enhancements for seamless functioning of the application.",

      "Develop extensive cross-platform application with responsive grid and flex model using Material-UI and Fluent-UI design.",
    ],

    techStackUsed: [
      "React Js",

      "ES6",

      "JSX",

      "Material UI",

      "Fluent UI",

      "Microsoft Teams API",

      "HTML5",

      "CSS3",

      "JSON",

      "Heroku",

      "GIT",

      "JIRA",
    ],

    employerName: "HCL Technologies Ltd, Tamil Nadu, India",
  },

  {
    title: "Broadcom Avago",

    tenure: "May 2020 - Jan 2021",

    responsibilities: [
      "Developing technical solution and fully functional interface for Broadcom’s Licensing and Product Usage.",

      "Proactively communicate with client and off-shore teams on a daily-basis and requirement gathering focusing on delivering customer value.",

      "Use Atlassian products such as JIRA for project and issue tracking.",

      "Architecting and defining the Front-end framework to solve complex designs and interactions.",

      "Discussing with microservices team and consume the integration modules using Apollo GraphQL Web Services API exposed.",

      "Collaborating with Broadcom’s architecture team and business end to understand the requirements and build web enhancements for seamless functioning of the application.",

      "Develop extensive web applications with responsive grid and flex model using Material-UI design.",

      "Collaborate with peer organizations, quality assurance and end users.",

      "Produce cutting-edge, full-fledged faster application using React & Material-UI for interface pages and interact with back-end for data communication with Apollo Client GraphQL APIs.",

      "Conducting UI performance testing and ensuring the reliable web page functioning to meet the client's market functional requirements.",

      "Integrating external a grid framework, Ag-Grid, as a solution for graphical and data representation.",

      "Troubleshooting code level problems quickly and efficiently.",

      "Transfer knowledge and share reusable code with internal peer organizational teams.",

      "Responsible to raise Change requests, engage in TRM calls, get the CRs approved and deploy code accordingly and close the change tasks after production testing is successful.",

      "Once in production, continuously service and support the application and work on feature addition as per customer requirement proposal.",

      "Manage, distribute and control source code and its version through Git and Gerrit adhering CI/CD.",

      "Helping business and architecture teams with choice of technical products, as well as helping team members with the technical challenges of creating and maintaining comprehensive project documentation.",

      "Mentoring resources providing them technical support and responsible for their deliveries.",
    ],

    techStackUsed: [
      "React Js",

      "ES6",

      "Typescript",

      "Material-UI",

      "Apollo Client GraphQL",

      "Ag-Grid",

      "HTML5",

      "CSS3",

      "JSON",

      "GIT",

      "Gerrit",

      "JIRA",
    ],

    employerName: "HCL Technologies Ltd, Tamil Nadu, India",
  },

  {
    title: "Broadcom CA",

    tenure: "Feb 2020 - Apr 2020",

    responsibilities: [
      "Coordinating with client business, offshore teams and stakeholders and propose web solutions that improves conformity with customer requirements.",

      "Quickly create a timeline of the plans, update priorities as they change, visualize dependencies, and promptly communicate the status of work to stakeholders.",

      "Involve in development and integration of complete web application front-end with peer products.",

      "Deliver and support applications following DevOps workflow.",

      "Foreseeing possible productive issues and accordingly plan web code basis, implement product and support during maintenance stages.",

      "Iteratively add more features and maintain it with flexible and scalable coding.",

      "Extend and rewrite legacy codebase with novel development methodologies, technologies, and frameworks.",

      "Put forth solutions and accordingly develop simple UI platform that is also highly customizable and reusable components.",

      "Review and validate code for code standards and discipline.",

      "Manage, distribute and control source code and its version through Git and Gerrit adhering CI/CD.",

      "Use Rally as a project management tool used to track each phase of the development iterations and releases.",

      "Map and resolve defects pertaining to the user stories according to Agile Sprint plan.",
    ],

    techStackUsed: [
      "React",

      "ES6",

      "Typescript",

      "Material-UI",

      "Apollo Client GraphQL",

      "Tslint",

      "Eslint",

      "Prettier",

      "HTML5",

      "CSS3",

      "JSON",

      "GitHub",

      "Rally Software",
    ],

    employerName: "HCL Technologies Ltd, Tamil Nadu, India",
  },

  {
    title: "Broadcom AIOps Sustenance",

    tenure: "Jan 2020 - Feb 2020",

    responsibilities: [
      "Involve in client communication and requirement gathering.",

      "Involve in defining milestones and timelines according to feature requirements.",

      "Work closely with peer organization teams for intricate details on interface development & API integration and feature improvisation.",

      "Devise development strategy, integration strategy, release management and quality checks",

      "Using GitHub for version control, coding standard evaluation, review of coding.",

      "Using Jest for unit-testing application as a part of production.",

      "Sprint demos, retros, feedback loop and process improvements",

      "Involve in design and coding standard evaluations.",
    ],

    techStackUsed: [
      "React Js",

      "ES6",

      "Typescript",

      "Material-UI",

      "Apollo Client GraphQL",

      "Tslint",

      "Eslint",

      "Prettier",

      "HTML5",

      "CSS3",

      "JSON",

      "GitHub",

      "Rally",
    ],

    employerName: "HCL Technologies Ltd, Tamil Nadu, India",
  },

  {
    title: "xorkee (a key routing PKI product)",

    tenure: "Oct 2018 to Sep 2019",

    responsibilities: [
      "Involve in recursive discussions on planning of the architecture and requirement gathering of the product proposed.",

      "Plan on the timelines and milestones definition.",

      "Created rapid prototypes for the product’s interfaces to be used as a blueprint for content, POC & technical development. Responsible for developing banking and shopping UI to demonstrate the working logic of the project.",

      "Responsible for front-end system for Web, Mobile (Android, iOS) and Windows software of the product, which were exhibited in GISEC 2019 meet, shooting company’s shares by 16% in over 5 trades.",

      "Integrated Secure Authentications across products viz 2FA, OTP, Certificate Based Authentication, client JWT authentication, TEE.",

      "Full-stack performance - Design, debug and integrate front-end and server-end applications using Node.js for server with databases CouchDB and MySQL.",

      "Mentor and assist Junior developers providing knowledge transfer.",

      "Research and deconstruct programmatic issues to root out its source technical glitches.",

      "Propose latest technology usage to provide efficient software solutions and implemented enhancements to significantly improvise software functionality and speed, allowing reusability and code maintainability.",

      "Oversaw the complete lifecycle of web development of the company’s six other primary digital products.",
    ],

    techStackUsed: [
      "React JS",

      "Redux",

      "Redux Thunk",

      "REST API",

      "Typescript",

      "JSON",

      "JavaScript",

      "HTML5",

      "CSS3",

      "Node.js",

      "AJAX",

      "CouchDB",

      "MySQL",
    ],

    employerName: "Odyssey Technologies Limited, Tamil Nadu, India",
  },

  {
    title: "Argus (internal HRA product)",

    tenure: "Jun 2015 - Sep 2019",

    responsibilities: [
      "Responsible for the entire UI planning, construction and front-end development of an internal product for Employees’ Record management, Human Resources Information Systems (HRIS), Organizational development logs, Enterprise Resource Planning, Event Registration & Accounting.",

      "Responsible for UI integration with back-end APIs.",

      "Test, maintain and add features as required pertaining to the application.",
    ],

    techStackUsed: [
      "HTML",

      "CSS",

      "JavaScript (ES6)",

      "JSON",

      "AJAX",

      "REST API",
    ],

    employerName: "Odyssey Technologies Limited, Tamil Nadu, India",
  },

  {
    title: "Thunderbird mail client extension",

    tenure: "Jan 2018 - Sep 2018",

    responsibilities: [
      "To encrypt mails for security, researched on and developed POCs.",

      "Developed Thunderbird mail client extension to digitally encrypt, sign mails and verify mails’ signature using JavaScript and XUL.",
    ],

    techStackUsed: ["XUL", "JS", "CSS"],

    employerName: "Odyssey Technologies Limited, Tamil Nadu, India",
  },

  {
    title: "Clocktix, Certrust (Time Stamping Server products)",

    tenure: "July 2017 - Dec 2017",

    responsibilities: [
      "Write standard-based markup and CSS, foster collaboration between engineering & design teams.",

      "Help team to create and maintain a style guide for UI components and responsive front-end markup.",

      "Involve in application architecture development discussions.",

      "Discuss with back-end team on web inputs needed and decide on APIs to be integrated.",

      "Develop prototypes for POCs depending on analyzed application objectives.",

      "Create UI templates, widgets, components (graphs, alerts, etc.).",

      "Identify and design the prototype of dashboard possible for log analysis.",

      "Creating highly customized reporting components by reusing charting APIs I created during last project.",

      "Help team during implementation phase.",

      "Real-time data retrieval from ERLANG and preparing client-side data to display in charts and grids using web sockets.",

      "Maintenance of the application once deployed, testing and fixing bugs when raised.",

      "Provide solutions for click-jacking, cross-site scripting attacks.",
    ],

    techStackUsed: ["JavaScript", "HTML5", "CSS3", "SVG", "REST API", "JSON"],

    employerName: "Odyssey Technologies Limited, Tamil Nadu, India",
  },

  {
    title: "Epic (data aggregation product)",

    tenure: "Feb 2017 - July 2017",

    responsibilities: [
      "Maintain existing code and provided feature enhancements as per customer requirements bridging between multiple teams.",

      "Debug, deconstruct and resolve programmatic issues reported live.",

      "Optimize code where and when required and manage multiple code versions and releases.",

      "Manage Mobile application of the product, fixing minor bugs reported and managed the old code base.",

      "Revamp mobile UI using XML, in synchronization with the wireframes designed and subject it to multiple device test cases.",

      "Involve in bug fixing with the web-client team during the application stabilization.",
    ],

    techStackUsed: [
      "jQuery",

      "CSS",

      "HTML",

      "SVG",

      "Java",

      "XML",

      "Android Studio",
    ],

    employerName: "Odyssey Technologies Limited, Tamil Nadu, India",
  },

  {
    title: "Certrix (Digital Certification Authority product)",

    tenure: "Aug 2015 - Jan 2017",

    responsibilities: [
      "Associate in product meeting iterations, understand application requirements and estimate the time, needed for the development, testing and deployment.",

      "Bridge the gap between designers and back-end developers.",

      "Individual contributor in reconstructing the web interface and functioning of the digital application.",

      "Developed reusable UI components such as Alerts, Buttons, Checkbox, Time picker, Date picker, Loaders, Radio buttons, SVG icons.",

      "To present dynamic bulk data on UI, created from scratch and implemented, animatable SVG bar, line graphs and pie charts and utilized them on dashboard.",

      "Responsible for web page construction and integration with APIs.",

      "Rigorously test pages across browsers for compatibility & proactively fix any usability issues encountered.",

      "Co-ordinate with the QA team for product testing and debugging.",

      "Maintain, modify, test and deploy existing digital product interfaces according to customer change requests.",
    ],

    techStackUsed: ["JavaScript", "CSS3", "HTML5", "SVG", "REST API", "JSON"],

    employerName: "Odyssey Technologies Limited, Tamil Nadu, India",
  },

  {
    title:
      "Crypta (Identity linkage management & data repository product), Altasigna",

    tenure: "Aug 2015 - Jan 2017",

    responsibilities: [
      "Co-ordinate with teams on product architecture and design.",

      "Interpret application requirement and communicate with designers for wireframes and plan on UI architecture.",

      "Develop, test and maintain user interface pages integrated with REST APIs.",

      "When required, propose alterations to the architecture to better the product solution.",

      "To further the performance of the application, implement memory optimization techniques.",

      "Manage application in feature enhancements and version maintenance.",
    ],

    techStackUsed: ["JavaScript", "CSS3", "HTML5", "SVG", "REST API", "JSON"],

    employerName: "Odyssey Technologies Limited, Tamil Nadu, India",
  },
];

const Container = styled.div`
  padding-bottom: 20;

  max-width: 1200px;

  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  position: sticky;

  top: 0;

  left: 0;

  justify-content: center;

  background-color: white;

  z-index: 100;

  transition: all 0.3s ease-in-out;
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, white, white);
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  // border-bottom: 2px dashed transparent;

  display: flex;

  align-items: center;

  margin-bottom: clamp(10px, 2vw, 20px);

  padding-top: clamp(10px, 2vw, 20px);

  /* This removes any space gaps between flex items */

  > * {
    flex-shrink: 0;
  }

  &.sticky {
    border-image-source: linear-gradient(
      to left,
      white,
      ${(props) => props.theme.secondary.main},
      ${(props) => props.theme.primary.main},
      ${(props) => props.theme.secondary.main},
      white
    );
    // border-bottom-color: ${(props) => props.theme.primary.main};
  }
`;

const Header = styled.h1`
  margin: 0;

  padding: 0;

  color: ${(props) => props.theme.secondary.main};

  font-size: clamp(1.3rem, 2.2vw, 1.8rem);

  line-height: 1.2;

  // font-weight: 500;

  // display: flex;

  // flex-direction: row;

  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 2vw, 1.6rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.1rem, 1.8vw, 1.4rem);
  }
`;

const ProjectCount = styled.p`
  text-align: center;

  font-size: 1.1rem;

  color: ${(props) => props.theme.color};

  margin-bottom: 20px;
`;

const ContactContainer = styled.div`
  display: flex;

  justify-content: center;

  align-items: center;

  margin-bottom: 20px;

  flex-wrap: wrap;
`;

const ContactChip = styled.a`
  display: flex;

  align-items: center;

  padding: 8px 12px;

  margin: 5px;

  border-radius: 20px;

  text-decoration: none;

  font-size: 0.9rem;

  transition: background-color 0.3s ease;

  background-color: ${(props) => props.theme.chipBackground};

  color: ${(props) => props.theme.color};

  &:hover {
    background-color: ${(props) => props.theme.chipHover};
  }

  span {
    margin-left: 5px;
  }
`;

const FilterContainer = styled.div`
  display: flex;

  align-items: center;

  margin-bottom: 20px;

  column-gap: 10px;
`;

const SearchInput = styled.input`
  padding: 10px 15px;

  border: 1px solid #ccc;

  border-radius: 4px;

  margin-left: 10px;

  flex-grow: 1;
`;

const MasonryGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  grid-gap: 20px;

  grid-auto-rows: min-content;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MasonryItem = styled.div`
  grid-row: span 1;
`;

const ScrollToTopButton = styled.button`
  position: fixed;

  bottom: 20px;

  right: 20px;

  background-color: ${(props) => props.theme.secondary.main};

  color: white;

  padding: 12px 15px;

  border: none;

  border-radius: 50%;

  cursor: pointer;

  opacity: 0;

  transition: opacity 0.3s ease;

  z-index: 10;

  &.show {
    opacity: 1;
  }
`;

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [sortBy, setSortBy] = useState<string>("all");

  const [isSticky, setIsSticky] = useState(false);

  const inputRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (inputRef.current) {
      const canvas = await html2canvas(inputRef.current);

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF();

      const imgProps = pdf.getImageProperties(imgData);

      const pdfWidth = pdf.internal.pageSize.getWidth();

      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      pdf.save("Portfolio: Sindhuja Govindarajan.pdf");
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },

    []
  );

  const filteredProjects = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    let filtered = allProjectData;

    if (lowerSearchTerm) {
      filtered = filtered.filter((project) => {
        return (
          project.title.toLowerCase().includes(lowerSearchTerm) ||
          project.employerName.toLowerCase().includes(lowerSearchTerm) ||
          project.techStackUsed.some((tech) =>
            tech.toLowerCase().includes(lowerSearchTerm)
          ) ||
          project.responsibilities.some((resp) =>
            resp.toLowerCase().includes(lowerSearchTerm)
          )
        );
      });
    }

    // Sorting logic

    if (sortBy !== "all") {
      const currentDate = new Date();

      let filterDate: Date;

      if (sortBy === "lastMonth") {
        filterDate = new Date(
          currentDate.getFullYear(),

          currentDate.getMonth() - 1,

          currentDate.getDate()
        );
      } else if (sortBy === "last6Months") {
        filterDate = new Date(
          currentDate.getFullYear(),

          currentDate.getMonth() - 6,

          currentDate.getDate()
        );
      } else if (sortBy === "lastYear") {
        filterDate = new Date(
          currentDate.getFullYear() - 1,

          currentDate.getMonth(),

          currentDate.getDate()
        );
      } else if (sortBy === "last2Years") {
        filterDate = new Date(
          currentDate.getFullYear() - 2,

          currentDate.getMonth(),

          currentDate.getDate()
        );
      } else if (sortBy === "olderThan2Years") {
        filterDate = new Date(
          currentDate.getFullYear() - 2,

          currentDate.getMonth(),

          currentDate.getDate()
        );
      } else {
        return filtered;
      }

      filtered = filtered.filter((project) => {
        // Extract start and end years from tenure

        const [startDate, endDate] = project.tenure

          .split(" - ")

          .map((dateStr) => {
            if (dateStr.includes("Present")) {
              return new Date();
            } else {
              const [month, year] = dateStr.trim().split(" ");

              return new Date(
                parseInt(year, 10),

                new Date(`${month} 1`).getMonth(),

                1
              );
            }
          });

        if (sortBy === "olderThan2Years") {
          // For "olderThan2Years", check if the end date is older than 2 years

          return endDate < filterDate;
        } else {
          // For other options, check if either start or end date is within the filter range

          return startDate >= filterDate || (endDate && endDate >= filterDate);
        }
      });
    }

    return filtered;
  }, [searchTerm, sortBy]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Theme>
      <Container>
        <ComingSoon message="Stay Tuned! Updates Launching Soon..." />

        <div ref={inputRef}>
          <HeaderContainer className={isSticky ? "sticky" : ""}>
            {/* <HeaderContainer> */}

            <SvgSiteLogo />

            <Header>indhu</Header>
          </HeaderContainer>
          <Role title="{ Front End Developer }" />
          <ContactContainer>
            <ContactChip>
              <FaMapMarkerAlt />

              <span>Toronto, ON, Canada</span>
            </ContactChip>

            <ContactChip href="mailto:srin2258@gmail.com">
              <FaEnvelope />

              {/* <span>srin2258@gmail.com</span> */}
            </ContactChip>

            <ContactChip
              href="https://github.com/sindhujaGovindarajan"
              target="_blank"
            >
              <FaGithub />

              {/* <span>My Skype</span> */}
            </ContactChip>

            <ContactChip
              href="https://www.linkedin.com/in/sindhujagovindarajan/"
              target="_blank"
            >
              <FaLinkedin />

              {/* <span>My LinkedIn</span> */}
            </ContactChip>

            {/* <Button label="Portfolio" onClick={downloadPDF} title="Download">

              <FaFileDownload />

            </Button> */}
          </ContactContainer>
          <ProjectCount>
            {filteredProjects.length < allProjectData.length &&
              `${filteredProjects.length} of `}{" "}
            {allProjectData.length} projects
          </ProjectCount>{" "}
          <FilterContainer>
            <SortByYear sortBy={sortBy} setSortBy={setSortBy} />

            <SearchInput
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </FilterContainer>
          <MasonryGrid>
            {filteredProjects.map((project, index) => (
              <MasonryItem key={index}>
                <ProjectCard {...project} searchTerm={searchTerm} />
              </MasonryItem>
            ))}
          </MasonryGrid>
        </div>

        <ScrollToTopButton
          onClick={scrollToTop}
          className={isSticky ? "show" : ""} // Conditionally show the button
        >
          <FaArrowUp />
        </ScrollToTopButton>
      </Container>
    </Theme>
  );
};

export default App;
