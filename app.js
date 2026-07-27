import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://czewaiboffnixobulgkb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6ZXdhaWJvZmZuaXhvYnVsZ2tiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUxNTU0OTksImV4cCI6MjEwMDczMTQ5OX0.b41hIj7kY1xgDClfHDC_EfO3jvY5OCcQ6kCSpcLav24";

const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById("signup").onclick = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Sign Up Successful!");
  }
};

document.getElementById("login").onclick = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Login Successful!");
  }
};
