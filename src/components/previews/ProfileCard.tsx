import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const ProfileCard: React.FC = () => {
  return (
    <Card className="w-full bg-cyan-950/60 min-w-[250px] border border-cyan-900/60 shadow-lg">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold text-cyan-400">John Doe</h2>
            <p className="text-xs  text-orange-400">Software Engineer</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-cyan-200">
          Passionate about building scalable and user-friendly applications.
        </p>
      </CardContent>
      <CardFooter>
        <Button
          variant={"default"}
          className="bg-orange-800!  text-orange-50 text-sm! rounded! hover:bg-orange-700!  "
        >
          Follow
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
