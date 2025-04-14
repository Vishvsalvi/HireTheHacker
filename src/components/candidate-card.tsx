"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ChevronDown, ChevronUp, Star, StarOff } from "lucide-react"

export default function CandidateCard({ candidate }) {
  const [expanded, setExpanded] = useState(false)
  const [shortlisted, setShortlisted] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)
  const toggleShortlisted = () => setShortlisted(!shortlisted)

  // Helper function to get color based on match percentage
  const getMatchColor = (matchPercentage) => {
    if (matchPercentage >= 90) return "bg-green-500"
    if (matchPercentage >= 80) return "bg-green-400"
    if (matchPercentage >= 70) return "bg-yellow-400"
    return "bg-red-400"
  }

  return (
    <Card className="overflow-hidden">
      <div className={`h-1.5 ${getMatchColor(candidate.match)}`} />
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex items-start gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 rounded-full overflow-hidden">
              <Image src={candidate.photo || "/placeholder.svg"} alt={candidate.name} fill className="object-cover" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold truncate">{candidate.name}</h3>
                  <p className="text-gray-500">{candidate.title}</p>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1.5" />
                    <span className="font-bold">{candidate.match}%</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex flex-wrap gap-1.5">
                {candidate.skills.slice(0, 5).map((skill, index) => (
                  <Badge key={index} variant="secondary" className="font-normal">
                    {skill}
                  </Badge>
                ))}
                {candidate.skills.length > 5 && (
                  <Badge variant="outline" className="font-normal">
                    +{candidate.skills.length - 5} more
                  </Badge>
                )}
              </div>

              <div className="mt-3 flex items-center text-sm text-gray-500 gap-4">
                <div>{candidate.experience} experience</div>
                <div>{candidate.education}</div>
              </div>
            </div>
          </div>

          {expanded && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              {candidate.exceptional.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Exceptional Abilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {candidate.exceptional.map((ability, index) => (
                      <Badge key={index} className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        {ability}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-sm font-medium mb-2">Highlights</h4>
                <ul className="space-y-1">
                  {candidate.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between bg-gray-50 px-4 py-2 border-t border-gray-100">
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700" onClick={toggleExpanded}>
            {expanded ? (
              <>
                <ChevronUp className="h-4 w-4 mr-1" />
                Less details
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-1" />
                More details
              </>
            )}
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className={shortlisted ? "text-yellow-500" : "text-gray-500"}
              onClick={toggleShortlisted}
            >
              {shortlisted ? (
                <>
                  <Star className="h-4 w-4 mr-1 fill-yellow-500" />
                  Shortlisted
                </>
              ) : (
                <>
                  <StarOff className="h-4 w-4 mr-1" />
                  Shortlist
                </>
              )}
            </Button>
            <Button className="bg-blue-700 hover:bg-blue-600 text-white" size="sm">View Profile</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

