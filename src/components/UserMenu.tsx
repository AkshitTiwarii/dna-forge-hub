import { User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/user-context';
import { supabase } from '@/lib/supabase';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserMenu = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  if (!user) {
    return (
      <>
        <Link to="/signup">
          <Button 
            variant="ghost" 
            className="nav-button bg-black/30 border border-purple-500/30 hover:border-purple-500/50 hover:bg-black/40"
          >
            Join Now
          </Button>
        </Link>
        <Link to="/login">
          <Button 
            variant="default" 
            className="nav-button bg-purple-500 hover:bg-purple-600"
          >
            Login
          </Button>
        </Link>
      </>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="nav-button bg-black/30 border border-purple-500/30 hover:border-purple-500/50 hover:bg-black/40"
        >
          <User className="w-4 h-4 mr-2" />
          {user.email}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
