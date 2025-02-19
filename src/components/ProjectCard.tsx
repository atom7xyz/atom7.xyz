import './ProjectCard.css';
import LanguageTag from './LanguageTag';

interface ProjectCardProps {
  title: string;
  href: string;
  languages: string[];
  description: string;
  bgImage?: string;
  bgColor?: string;
}

const ProjectCard = ({ title, href, languages, description, bgImage, bgColor = '#2d2d2d' }: ProjectCardProps) => {
  const cardStyle = {
    backgroundColor: bgColor
  };

  const handleClick = () => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project-card" style={cardStyle} onClick={handleClick}>
      {bgImage && (
        <img src={bgImage} alt={`${title} background`} className="project-bg" />
      )}
      <div className="project-overlay" />
      <div className="project-content">
        <div>
          <h3 className="project-title">{title}</h3>
          <div className="languages">
            {languages.map(lang => (
              <LanguageTag key={lang} language={lang} />
            ))}
          </div>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard; 