interface WorkExperienceProps {
  timeInterval: string;
  position: string;
  company: string;
  description: string;
}

export function WorkExperience({
  timeInterval,
  position,
  company,
  description,
}: WorkExperienceProps) {
  return (
    <div className='text-lg leading-8 py-2'>
      <p className='mt-8'>{timeInterval}</p>
      <p className='mt-4'>
        <span className='font-bold'>{position}</span>, {company}
      </p>
      <p className='mt-4'>{description}</p>
    </div>
  );
}
