import { TableCell, TableRow } from '../ui/table';
import { ShowProps } from './show-type';

export function ShowRow({ show }: { show: ShowProps }) {
  return (
    <TableRow key={show.title} className="text-center">
      <TableCell className="w-1/5 font-medium">{show.title}</TableCell>
      <TableCell className="w-1/5">{show.status}</TableCell>
      <TableCell className="w-1/5">{show.network}</TableCell>
      <TableCell className="w-1/5">{show.year}</TableCell>
      <TableCell className="w-1/5">{show.rating}</TableCell>
    </TableRow>
  );
}
