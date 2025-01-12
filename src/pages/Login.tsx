import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { View } from "../common/components";
import { useSelectedTheme } from "../common/hooks";
import supabaseClient from "../lib/supabase";

const LogIn = () => {
  const { isDarkModeActive } = useSelectedTheme();
  const theme = isDarkModeActive ? "dark" : "light";

  return (
    <View>
      <div>
        <Auth
          supabaseClient={supabaseClient}
          appearance={{
            theme: ThemeSupa,
          }}
          theme={theme}
          providers={[]}
        />
      </div>
    </View>
  );
};

export default LogIn;
