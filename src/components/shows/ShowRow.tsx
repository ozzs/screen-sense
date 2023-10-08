import { CalendarDays } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { TableCell, TableRow } from '../ui/table';
import { ShowProps } from './show-type';

export function ShowRow({ show }: { show: ShowProps }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <TableRow key={show.title} className="text-center">
          <TableCell className="w-1/5 font-medium">{show.title}</TableCell>
          <TableCell className="w-1/5">{show.status}</TableCell>
          <TableCell className="w-1/5">{show.network}</TableCell>
          <TableCell className="w-1/5">{show.year}</TableCell>
          <TableCell className="w-1/5">{show.rating}</TableCell>
        </TableRow>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">The React Framework created and maintained by @vercel.</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
              <span className="text-xs text-muted-foreground">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
