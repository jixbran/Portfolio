import { SkillCard } from '../SkillCard';
import { Brain } from 'lucide-react';

export default function SkillCardExample() {
  return (
    <div className="max-w-md">
      <SkillCard
        title="ML Frameworks"
        icon={Brain}
        skills={[
          { name: 'PyTorch', level: 95 },
          { name: 'TensorFlow', level: 90 },
          { name: 'Scikit-learn', level: 85 },
        ]}
      />
    </div>
  );
}
