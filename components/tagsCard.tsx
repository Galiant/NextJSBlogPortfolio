import { sortTagsByCount } from '@/lib/utils';
import { Tag } from './tag';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface TagsCardProps {
  tags: Record<string, number>;
}

export function TagsCard({ tags }: TagsCardProps) {
  const sortedTags = sortTagsByCount(tags);

  return (
    <Card className='col-span-12 row-start-3 h-fit'>
      <CardHeader>
        <CardTitle>Tags</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-wrap gap-2'>
        {sortedTags?.map((tag: string) => (
          <Tag tag={tag} key={tag} count={tags[tag]} />
        ))}
      </CardContent>
    </Card>
  );
}
