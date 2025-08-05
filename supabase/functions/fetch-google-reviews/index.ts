import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const GOOGLE_PLACES_API_KEY = Deno.env.get('GOOGLE_PLACES_API_KEY')
    
    if (!GOOGLE_PLACES_API_KEY) {
      throw new Error('Google Places API key not configured')
    }

    // Your business place ID (extracted from the share link)
    const PLACE_ID = 'ChIJzSTbaMhP5ogRq9oQcJ5mCJc'
    
    // Fetch place details including reviews
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`
    )

    if (!response.ok) {
      throw new Error(`Google Places API error: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.status !== 'OK') {
      throw new Error(`Google Places API status: ${data.status}`)
    }

    const reviews = data.result?.reviews || []
    
    // Filter reviews with 4+ stars
    const goodReviews = reviews.filter((review: any) => review.rating >= 4)
    
    // Randomly select up to 3 reviews
    const shuffled = [...goodReviews].sort(() => Math.random() - 0.5)
    const selectedReviews = shuffled.slice(0, 3)
    
    // Format reviews for frontend
    const formattedReviews = selectedReviews.map((review: any, index: number) => ({
      id: `google-${review.time}-${index}`,
      name: review.author_name,
      photo: review.profile_photo_url || "/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png",
      platform: "Google",
      platformLogo: "G",
      date: new Date(review.time * 1000).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
      }),
      rating: review.rating,
      verified: true,
      text: review.text
    }))

    return new Response(
      JSON.stringify({
        success: true,
        reviews: formattedReviews,
        totalReviews: data.result?.user_ratings_total || 0,
        averageRating: data.result?.rating || 0
      }),
      {
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
      }
    )

  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
      }
    )
  }
})