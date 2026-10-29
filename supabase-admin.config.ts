import { Command } from "lucide-react";
import { Config } from "./types/supabase-admin";

export const SUPABASE_ADMIN_CONFIG: Config = {
  auth: {
    isAdminCallback: async (user, supabase) => {
      if (!user) return false;

      // Confere na tabela 'profiles' se o id do usuário tem isAdmin: true
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("isAdmin")
        .eq("id", user.id)
        .single();

      if (error || !profile) {
        await supabase.auth.signOut();
        return false;
      }

      const isAdmin = profile.isAdmin === true;
      
      if (!isAdmin) {
        await supabase.auth.signOut();
      }

      return isAdmin;
    }
  },
  general: {
    panelTitle: "Painel Geral",
    panelSubtitle: "Todas as Tabelas",
    icon: Command,
    itemsPerPage: 50
  }
};
