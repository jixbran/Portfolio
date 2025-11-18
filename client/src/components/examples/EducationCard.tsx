import { EducationCard } from '../EducationCard';

export default function EducationCardExample() {
  return (
    <div className="max-w-3xl">
      <EducationCard
        institution="K J College of Engineering & Management Research"
        degree="Bachelor of Engineering in Computer Engineering"
        duration="2022 - 2026"
        location="Pune"
      />
    </div>
  );
}
