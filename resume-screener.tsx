"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Upload, CheckCircle, XCircle } from "lucide-react"

// Sample candidate data for demonstration
const SAMPLE_CANDIDATES = [
  {
    id: 1,
    name: "Alex Johnson",
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    experience: "5 years",
    education: "BS Computer Science",
    match: 92,
  },
  {
    id: 2,
    name: "Sam Wilson",
    skills: ["JavaScript", "React", "CSS", "MongoDB"],
    experience: "3 years",
    education: "MS Information Technology",
    match: 78,
  },
  {
    id: 3,
    name: "Taylor Smith",
    skills: ["Python", "Django", "SQL", "Docker"],
    experience: "4 years",
    education: "BS Software Engineering",
    match: 65,
  },
]

export default function ResumeScreener() {
  // State to track if screening has been performed
  const [hasScreened, setHasScreened] = useState(false)
  // State to store job requirements
  const [requirements, setRequirements] = useState("")
  // State to store the screened candidates
  const [candidates, setCandidates] = useState([])

  // Function to handle resume screening
  const handleScreenResumes = () => {
    // In a real app, this would process the uploaded resumes against requirements
    // For this demo, we'll just use our sample data
    setCandidates(SAMPLE_CANDIDATES)
    setHasScreened(true)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Requirements Input Section */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="mb-6">
            <Label htmlFor="requirements" className="text-lg font-medium mb-2 block">
              Job Requirements
            </Label>
            <Textarea
              id="requirements"
              placeholder="Enter job requirements (e.g., 3+ years React experience, TypeScript knowledge, etc.)"
              className="min-h-32"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            />
          </div>

          {/* Resume Upload Section */}
          <div className="mb-6">
            <Label htmlFor="resume-upload" className="text-lg font-medium mb-2 block">
              Upload Resumes
            </Label>
            <div className="border-2 border-dashed rounded-lg p-8 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500 mb-4">Drag and drop resume files here, or click to browse</p>
              <Input id="resume-upload" type="file" multiple className="hidden" accept=".pdf,.doc,.docx" />
              <Button variant="outline" onClick={() => document.getElementById("resume-upload").click()}>
                Select Files
              </Button>
            </div>
          </div>

          <Button className="w-full" onClick={handleScreenResumes} disabled={!requirements.trim()}>
            Screen Resumes
          </Button>
        </CardContent>
      </Card>

      {/* Results Section */}
      {hasScreened && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Screening Results</h2>
          <div className="space-y-4">
            {candidates.map((candidate) => (
              <Card key={candidate.id} className="overflow-hidden">
                <div className={`h-2 ${getMatchColor(candidate.match)}`} />
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{candidate.name}</h3>
                      <p className="text-gray-500">
                        {candidate.education} • {candidate.experience}
                      </p>
                    </div>
                    <div className="flex items-center">
                      {candidate.match >= 75 ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <span className="font-bold">{candidate.match}% Match</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-1">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {candidate.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Helper function to get color based on match percentage
function getMatchColor(matchPercentage) {
  if (matchPercentage >= 90) return "bg-green-500"
  if (matchPercentage >= 75) return "bg-green-400"
  if (matchPercentage >= 60) return "bg-yellow-400"
  return "bg-red-400"
}

