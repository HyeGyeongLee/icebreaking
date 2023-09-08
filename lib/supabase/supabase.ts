import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

if (!supabaseUrl) throw new Error('supabaseUrl is required.')
if (!supabaseAnonKey) throw new Error('supabaseKey is required.')

export default supabase;