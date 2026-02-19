-- Migration: Add listing_type and price_period for rental properties

-- Add listing_type column (sale | rent)
ALTER TABLE properties 
ADD COLUMN IF NOT EXISTS listing_type TEXT DEFAULT 'sale';

-- Add constraint for valid values
ALTER TABLE properties 
DROP CONSTRAINT IF EXISTS properties_listing_type_check;
ALTER TABLE properties 
ADD CONSTRAINT properties_listing_type_check 
CHECK (listing_type IN ('sale', 'rent'));

-- Add price_period for rentals (monthly | weekly | nightly)
ALTER TABLE properties 
ADD COLUMN IF NOT EXISTS price_period TEXT DEFAULT 'monthly';

-- Add constraint for valid values
ALTER TABLE properties 
DROP CONSTRAINT IF EXISTS properties_price_period_check;
ALTER TABLE properties 
ADD CONSTRAINT properties_price_period_check 
CHECK (price_period IS NULL OR price_period IN ('monthly', 'weekly', 'nightly'));

-- Set price_period to NULL for sale listings (cleaner)
UPDATE properties SET price_period = NULL WHERE listing_type = 'sale' OR listing_type IS NULL;

-- Ensure existing properties are marked as 'sale'
UPDATE properties SET listing_type = 'sale' WHERE listing_type IS NULL;

-- Create index for filtering by listing type
CREATE INDEX IF NOT EXISTS idx_properties_listing_type ON properties(listing_type);

-- Add comments
COMMENT ON COLUMN properties.listing_type IS 'sale or rent';
COMMENT ON COLUMN properties.price_period IS 'For rentals: monthly, weekly, or nightly';
