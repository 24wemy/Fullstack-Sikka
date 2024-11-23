from supabase import create_client, Client
from config.settings import SUPABASE_URL, SUPABASE_KEY

def get_supabase_client() -> Client:
    """Create and return Supabase client."""
    return create_client(SUPABASE_URL, SUPABASE_KEY)