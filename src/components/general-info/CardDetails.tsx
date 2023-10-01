import { Card, CardDescription, CardTitle } from '@/components/ui/card';

type CardDetails = {
  title: string;
  amount: string;
};

export function CardDetails({ title, amount }: CardDetails) {
  return (
    <Card className="m-4 h-48 flex-grow text-center flex flex-col justify-center items-center">
      <CardTitle className="mb-10"> {title} </CardTitle>
      <CardDescription> {amount} </CardDescription>
    </Card>
  );
}
