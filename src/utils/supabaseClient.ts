// supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

interface supabaseType {
  supabaseUrl: string;
  supabaseKey: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
let supabase;
console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key:", supabaseKey);

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or key.");
}

supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
