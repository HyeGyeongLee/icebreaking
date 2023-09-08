import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_REACT_APP_SUPABASE_URL as string;
const supabaseAnonKey = process.env.VITE_REACT_APP_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

if (!supabaseUrl) throw new Error('supabaseUrl is required.')
if (!supabaseAnonKey) throw new Error('supabaseKey is required.')

export default supabase;