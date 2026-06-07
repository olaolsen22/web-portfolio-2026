import { Badge } from '@/components/ui/badge';
import { techStackSkills } from '@/content/techStackSkills';

export const TechStackStatic = () => (
  <ul className="flex flex-wrap gap-2 list-none">
    {techStackSkills.map((skill) => (
      <li key={skill}>
        <Badge variant="stack" className="uppercase">
          {skill}
        </Badge>
      </li>
    ))}
  </ul>
);
