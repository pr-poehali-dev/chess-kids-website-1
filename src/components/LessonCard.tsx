import { FC } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface LessonCardProps {
  title: string;
  description: string;
  level: 'начинающий' | 'средний' | 'продвинутый';
  imageUrl: string;
  lessonId: string;
}

const LessonCard: FC<LessonCardProps> = ({
  title,
  description,
  level,
  imageUrl,
  lessonId
}) => {
  const levelColor = {
    'начинающий': 'bg-green-500',
    'средний': 'bg-yellow-500',
    'продвинутый': 'bg-red-500'
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img 
          src={imageUrl || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <Badge className={`absolute top-2 right-2 ${levelColor[level]}`}>
          {level}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-chess-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Link to={`/lessons/${lessonId}`} className="w-full">
          <Button 
            variant="default" 
            className="w-full bg-chess-secondary hover:bg-chess-primary transition-colors"
          >
            Начать урок
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LessonCard;
