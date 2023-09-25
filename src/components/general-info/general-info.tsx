import { getUserStats } from '../../../pages/api/trakt';
import { CardDetails } from './card-details';

export function GeneralInfo() {
  // const userStats = await getUserStats('ozzs');

  return (
    <div className="flex justify-evenly items-stretch">
      <CardDetails title="Movies" amount={0} />
      <CardDetails title="Shows" amount={0} />
      <CardDetails title="Seasons" amount={0} />
      <CardDetails title="Episodes" amount={0} />
    </div>
  );
}
