const { createClient } = require("@supabase/supabase-js");

// Memakai service_role key — HANYA di backend, jangan pernah expose ke frontend.
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    "[supabase] SUPABASE_URL / SUPABASE_SERVICE_KEY belum di-set di .env"
  );
}

const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

module.exports = supabase;
