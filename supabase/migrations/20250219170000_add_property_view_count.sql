-- Add view_count to properties for real view tracking
ALTER TABLE properties ADD COLUMN IF NOT EXISTS view_count INTEGER DEFAULT 0;

-- RPC to atomically increment and return new count (callable by anon for public property views)
CREATE OR REPLACE FUNCTION increment_property_views(p_property_id BIGINT)
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_count INTEGER;
BEGIN
  UPDATE properties
  SET view_count = COALESCE(view_count, 0) + 1
  WHERE id = p_property_id
  RETURNING view_count INTO new_count;
  RETURN COALESCE(new_count, 0);
END;
$$;

-- Allow anon to call (for public property page views)
GRANT EXECUTE ON FUNCTION increment_property_views(BIGINT) TO anon;
GRANT EXECUTE ON FUNCTION increment_property_views(BIGINT) TO authenticated;
