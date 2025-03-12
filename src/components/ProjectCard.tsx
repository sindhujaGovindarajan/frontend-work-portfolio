import React, { useState } from "react";
import styled from "styled-components";

interface ProjectCardProps {
  title: string;
  tenure: string;
  responsibilities: string[];
  techStackUsed: string[];
  employerName: string;
  searchTerm: string;
}

const Card = styled.div<{ expanded: boolean }>`
  border: 2px solid ${({ color }) => color}; /* Use the color prop for border */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${({ color }) => color}; /* Use the color prop for title */
    margin-bottom: 10px;
  }
  border: 1px solid #e0e0e0;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, max-height 0.3s ease;
  overflow: hidden;
  max-height: "auto"; /* Remove rigid height */
  cursor: pointer;
`;

const Title = styled.h3`
  margin-bottom: 6px;
  color: #333;
  font-size: 1.1rem;
`;

const Detail = styled.p`
  margin-bottom: 3px;
  color: #555;
  font-size: 0.95rem;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 16px;
  margin-bottom: 8px;
`;

const ListItem = styled.li`
  color: #666;
  line-height: 1.5;
  font-size: 0.85rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const TechChip = styled.span`
  background-color: #f0f8ff;
  padding: 4px 8px;
  margin: 2px;
  border-radius: 12px;
  color: ${(props) => props.theme.secondary.main};
  font-size: 0.8rem;
`;

const FadeEffect = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background: linear-gradient(to bottom, transparent, white);
  }
`;

const highlightSearchTerm = (text: string, searchTerm: string) => {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.replace(
    regex,
    '<span style="background-color: yellow;">$1</span>'
  );
};

const ProjectCard: React.FC<ProjectCardProps> = React.memo(
  ({
    title,
    tenure,
    responsibilities,
    techStackUsed,
    employerName,
    searchTerm,
  }) => {
    const [expanded, setExpanded] = useState(false);

    const handleCardClick = () => {
      setExpanded(!expanded);
    };

    return (
      <Card expanded={expanded} onClick={handleCardClick}>
        <Title
          dangerouslySetInnerHTML={{
            __html: highlightSearchTerm(title, searchTerm),
          }}
        />
        <Detail
          dangerouslySetInnerHTML={{
            __html: highlightSearchTerm(
              `<strong>Employer:</strong> ${employerName}`,
              searchTerm
            ),
          }}
        />
        <Detail
          dangerouslySetInnerHTML={{
            __html: highlightSearchTerm(
              `<strong>Tenure:</strong> ${tenure}`,
              searchTerm
            ),
          }}
        />
        <div>
          <strong>Responsibilities:</strong>
          <List>
            {responsibilities.map((responsibility, index) => {
              if (!expanded && index >= 2) {
                return null;
              }
              return (
                <ListItem
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: highlightSearchTerm(responsibility, searchTerm),
                  }}
                />
              );
            })}
            {!expanded && responsibilities.length > 2 && <FadeEffect />}
          </List>
        </div>
        <div>
          <strong>Tech Stack Used:</strong>
          <TechStack>
            {techStackUsed.map((tech, index) => (
              <TechChip
                key={index}
                dangerouslySetInnerHTML={{
                  __html: highlightSearchTerm(tech, searchTerm),
                }}
              />
            ))}
          </TechStack>
        </div>
      </Card>
    );
  }
);

export default ProjectCard;
