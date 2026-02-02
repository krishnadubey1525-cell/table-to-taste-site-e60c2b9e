import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://nxtisahhvfsyjeqlrmxw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Nldf1I8dNkhCJ51asC__Xg_SuSs27oZ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
