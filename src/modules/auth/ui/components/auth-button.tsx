import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
    return (
        <Button variant="outline" className="px-4 py-2 text-sm font-medium text-blue-500 hover:text-blue-500 border-blue-500/2 rounded-full shadown-none">
            <UserCircleIcon />
            Sign in
        </Button>
    )
}