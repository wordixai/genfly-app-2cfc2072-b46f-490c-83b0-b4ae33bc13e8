import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ReactNode } from "react";

interface NavCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  url: string;
  color: string;
  hoverInfo?: string;
}

export function NavCard({ title, description, icon, url, color, hoverInfo }: NavCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className={`h-2 ${color}`} />
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="text-2xl">{icon}</div>
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Content can be added here if needed */}
      </CardContent>
      <CardFooter className="flex justify-between">
        {hoverInfo ? (
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="ghost" size="sm">Info</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <p className="text-sm">{hoverInfo}</p>
            </HoverCardContent>
          </HoverCard>
        ) : <div></div>}
        <Button asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">Visit</a>
        </Button>
      </CardFooter>
    </Card>
  );
}